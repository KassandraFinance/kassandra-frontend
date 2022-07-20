/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import BigNumber from 'bn.js'
import Big from 'big.js'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import { ProxyContract } from '../../../constants/tokenAddresses'

import useProxy from '../../../hooks/useProxy'
import useERC20Contract, { ERC20 } from '../../../hooks/useERC20Contract'
import usePoolContract from '../../../hooks/usePoolContract'
import useMatomoEcommerce from '../../../hooks/useMatomoEcommerce'
import useYieldYak from '../../../hooks/useYieldYak'

import { usePoolTokens } from '../../../context/PoolTokensContext'
import { useAppSelector } from '../../../store/hooks'

import web3 from '../../../utils/web3'
import { priceDollar } from '../../../utils/priceDollar'
import { BNtoDecimal, wei } from '../../../utils/numerals'
import changeChain, { ChainDetails } from '../../../utils/changeChain'
import waitTransaction, { MetamaskError, TransactionCallback } from '../../../utils/txWait'

import Button from '../../Button'

import InputTokens from './InputTokens'
import InputBestValue from './InputBestValue'
import TransactionSettings from './TransactionSettings'

import { ToastSuccess, ToastError, ToastWarning } from '../../Toastify/toast'

import { Titles } from '..'

import * as S from './styles'

const WAVAX = '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7'

const invertToken: { [key: string]: string } = {
  '0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab':
    '0xe28Ad9Fa07fDA82abab2E0C86c64A19D452b160E', //WETH
  '0xd586e7f844cea2f87f50152665bcbc2c279d8d70':
    '0xFA17fb53da4c837594127b73fFd09fdb15f42C49', //DAI
  '0x50b7545627a5162f82a992c33b87adc75187b218':
    '0xbbcED92AC9B958F88A501725f080c0360007e858',  //WBTC


  '0xe28Ad9Fa07fDA82abab2E0C86c64A19D452b160E': //WETH
    '0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab',
  '0xFA17fb53da4c837594127b73fFd09fdb15f42C49': //DAI
    '0xd586e7f844cea2f87f50152665bcbc2c279d8d70',
  '0xbbcED92AC9B958F88A501725f080c0360007e858':
    '0x50b7545627a5162f82a992c33b87adc75187b218'
}

interface IFormProps {
  typeAction: string;
  title: Titles;
  typeWithdrawChecked: string;
  poolChain: ChainDetails;
  poolSymbol: string;
  crpPoolAddress: string;
  corePoolAddress: string;
  productCategories: string[];
  setIsModaWallet: React.Dispatch<React.SetStateAction<boolean>>
}

enum Approval {
  Denied,
  Approved,
  WaitingTransaction,
  Syncing,
}

// eslint-disable-next-line prettier/prettier
type Approvals = { [key in Titles]: Approval[] }

const Form = ({
  poolChain,
  poolSymbol,
  crpPoolAddress,
  corePoolAddress,
  productCategories,
  typeAction,
  title,
  typeWithdrawChecked,
  setIsModaWallet
}: IFormProps) => {
  const [walletConnect, setWalletConnect] = React.useState<string | null>(null)
  const [approvals, setApprovals] = React.useState<Approvals>({
    Withdraw: [],
    Invest: [],
    Swap: []
  })
  const [newTitle, setNewTitle] = React.useState(title)

  const [isReload, setIsReload] = React.useState<boolean>(false)

  const [errorMsg, setErrorMsg] = React.useState('')
  const [slippage, setSlippage] = React.useState({
    value: '0.5',
    custom: '2.0',
    isCustom: false
  })

  const [swapInAddress, setSwapInAddress] = React.useState('')
  const [swapInAmount, setSwapInAmount] = React.useState(new BigNumber(0))
  const [swapInBalance, setSwapInBalance] = React.useState(new BigNumber(-1))

  const [swapOutAddress, setSwapOutAddress] = React.useState('')
  const [swapOutAmount, setSwapOutAmount] = React.useState([new BigNumber(0)])
  const [swapOutBalance, setSwapOutBalance] = React.useState([new BigNumber(-1)])

  const [priceInDollarOnWithdraw, setPriceInDollarOnWithdraw] = React.useState<string>('')

  const [priceImpact, setPriceImpact] = React.useState<Big>(Big(0))

  const [maxActive, setMaxActive] = React.useState<boolean>(false)

  const { trackEventFunction } = useMatomoEcommerce()

  const inputTokenRef = React.useRef<HTMLInputElement>(null)

  const { chainId, fees, tokenAddress2Index, userWalletAddress } = useAppSelector(state => state)
  const { poolTokens: poolTokensArray } = usePoolTokens()

  const { trackBuying, trackBought, trackCancelBuying } = useMatomoEcommerce();

  const proxy = useProxy(ProxyContract, crpPoolAddress, corePoolAddress)
  const crpPoolToken = useERC20Contract(crpPoolAddress)
  const corePool = usePoolContract(corePoolAddress)
  const yiedlYak = useYieldYak()

  function clearInput() {
    setSwapInAmount(new BigNumber(0))
    setSwapOutAmount([new BigNumber(0)])

    if (inputTokenRef.current !== null) {
      inputTokenRef.current.value = '0'
    }
  }

  async function convertBalanceYRTtoWrap(balanceYRT: BigNumber, addressYRT:string): Promise<BigNumber> {
    const balanceInWrap =  await yiedlYak.getDepositTokensForShares(balanceYRT, addressYRT)
    return balanceInWrap
  }

  async function convertBalanceWrappedYRT(balanceWrap: BigNumber, addressYRT:string): Promise<BigNumber> {
    const balanceInYRT = await yiedlYak.getSharesForDepositTokens(balanceWrap,addressYRT)
    return balanceInYRT
  }

  // calculate invest with output
  async function calculateInvestAmountIn(investAmoutOut: BigNumber): Promise<void> {
    try {
      const [
        swapInTotalPoolBalance,
        swapInDenormalizedWeight,
        poolSupply,
        poolTotalDenormalizedWeight,
        poolSwapFee
      ] = await Promise.all([
        corePool.balance(invertToken[swapInAddress] ?? swapInAddress),
        corePool.denormalizedWeight(invertToken[swapInAddress] ?? swapInAddress),
        crpPoolToken.totalSupply(),
        corePool.totalDenormalizedWeight(),
        corePool.swapFee()
      ])

      try {
        const newAmountInvestIn = await proxy.tryJoinswapPoolAmountOut(
          swapInAddress,
          investAmoutOut,
          new BigNumber('10').pow(new BigNumber(36)),
          userWalletAddress
        )
        if (inputTokenRef.current && newAmountInvestIn) {
          inputTokenRef.current.value = BNtoDecimal(
            newAmountInvestIn,
            poolTokensArray[tokenInIndex]
              ? poolTokensArray[tokenInIndex]?.decimals.toNumber()
              : 18
          ).replace(/\s/g, '')
          setPriceImpact(Big(0))
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        let investAmoutOutCalc: BigNumber = investAmoutOut
        if(invertToken[swapOutAddress]) {
          investAmoutOutCalc = await convertBalanceWrappedYRT(investAmoutOut, invertToken[swapOutAddress])
        }
        const newAmountInvestIn = await corePool.calcSingleInGivenPoolOut(
          swapInTotalPoolBalance,
          swapInDenormalizedWeight,
          poolSupply,
          poolTotalDenormalizedWeight,
          investAmoutOutCalc,
          poolSwapFee
        )
        let investAmoutInNormalized: BigNumber = newAmountInvestIn
        if(invertToken[swapInAddress]) {
          investAmoutInNormalized = await convertBalanceYRTtoWrap(newAmountInvestIn, invertToken[swapInAddress])
        }
        if (inputTokenRef.current && newAmountInvestIn) {
          inputTokenRef.current.value = BNtoDecimal(
            investAmoutInNormalized,
            poolTokensArray[tokenInIndex]
              ? poolTokensArray[tokenInIndex]?.decimals.toNumber()
              : 18
          ).replace(/\s/g, '')
          setPriceImpact(Big(0))
        }

        if (userWalletAddress.length > 0) {
          const errorStr = error.toString()
          if (errorStr.search(/ERR_(BPOW_BASE_TOO_|MATH_APPROX)/) > -1) {
            setErrorMsg('This amount is too low for the pool!')
            return
          }

          if (errorStr.search('ERR_MAX_IN_RATIO') > -1) {
            setErrorMsg("The amount can't be more than half of what's in the pool!")
            return
          }

          if (swapInAmount.gt(swapInBalance) && Number(swapInAmount.toString()) > 0) {
            setErrorMsg('This amount exceeds your balance!')
            return;
          }
        }
      }

      let newSwapOutPrice;
      let pow = new BigNumber(0);
      while (!newSwapOutPrice) {
        try {
          const multiplier = new BigNumber(10).pow(pow)
          newSwapOutPrice = await corePool.calcSingleInGivenPoolOut(
            swapInTotalPoolBalance,
            swapInDenormalizedWeight,
            poolSupply,
            poolTotalDenormalizedWeight,
            wei.div(multiplier),
            poolSwapFee
          )
          newSwapOutPrice = newSwapOutPrice.mul(multiplier)
        } catch (e) {
          pow = pow.add(new BigNumber(1));
        }
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const errorStr = error.toString()
      if (userWalletAddress.length > 0) {
        if (errorStr.search('ERR_BPOW_BASE_TOO_HIGH') > -1) {
          ToastWarning("The amount can't be more than half of what's in the pool!")
          return
        }
        ToastWarning('Could not connect with the blockchain to calculate prices.')
      }
    }
  }

  // calculate swap with output
  async function calculateSwapAmountIn(swapAmountOut: BigNumber): Promise<void> {
    try {
      const [
        swapInTotalPoolBalance,
        swapOutTotalPoolBalance,
        swapInDenormalizedWeight,
        swapOutDenormalizedWeight,
        poolSwapFee
      ] = await Promise.all([
        corePool.balance(invertToken[swapInAddress] ?? swapInAddress),
        corePool.balance(invertToken[swapOutAddress] ?? swapOutAddress),
        corePool.denormalizedWeight(invertToken[swapInAddress] ?? swapInAddress),
        corePool.denormalizedWeight(invertToken[swapOutAddress] ?? swapOutAddress),
        corePool.swapFee()
      ])
      let swapAmoutOutCalc: BigNumber = swapAmountOut
      if (invertToken[swapOutAddress]) {
        swapAmoutOutCalc = await convertBalanceWrappedYRT(swapAmountOut, invertToken[swapOutAddress])
      }
      const [newSwapInAmount] = await Promise.all([
        corePool.calcInGivenOut(
          swapInTotalPoolBalance,
          swapInDenormalizedWeight,
          swapOutTotalPoolBalance,
          swapOutDenormalizedWeight,
          swapAmoutOutCalc,
          poolSwapFee
        )
      ])
      const exchangeRateIn = await proxy.exchangeRate(corePoolAddress, invertToken[swapInAddress] ?? swapInAddress)
      const exchangeRateOut = await proxy.exchangeRate(corePoolAddress, invertToken[swapOutAddress] ?? swapOutAddress)

      const swapIn = newSwapInAmount.mul(exchangeRateOut).div(exchangeRateIn)
      let swapAmoutInNormalized: BigNumber = swapIn
      if (invertToken[swapInAddress]) {
        swapAmoutInNormalized = await convertBalanceYRTtoWrap(swapIn, invertToken[swapInAddress])
      }
      if (inputTokenRef.current && swapIn) {
        inputTokenRef.current.value = BNtoDecimal(
          swapAmoutInNormalized,
          poolTokensArray[tokenInIndex]
            ? poolTokensArray[tokenInIndex]?.decimals.toNumber()
            : 18
        ).replace(/\s/g, '')
        setPriceImpact(Big(0))
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const errorStr = error.toString()

      if (errorStr.search(/ERR_(BPOW_BASE_TOO_|MATH_APPROX)/) > -1) {
        setErrorMsg('This amount is too low for the pool!')
        return
      }

      if (errorStr.search('ERR_MAX_IN_RATIO') > -1) {
        setErrorMsg("The amount can't be more than half of what's in the pool!")
        return
      }

      if (errorStr.search('below minimum') > -1) {
        setErrorMsg("This amount is below minimum withdraw!")
        return
      }

      if (swapInAmount.gt(swapInBalance)) {
        setErrorMsg('This amount exceeds your balance!')
        return;
      }

      ToastWarning('Could not connect with the blockchain to calculate prices.')
    }
  }

  // set "swap" tokens
  React.useEffect(() => {
    let newSwapInAddress = ''
    let newSwapOutAddress = ''

    /* eslint-disable prefer-destructuring */
    switch (title) {
      case 'Invest':
        newSwapInAddress = poolTokensArray[0]?.address || ''
        newSwapOutAddress = crpPoolAddress
        break
      case 'Withdraw':
        newSwapInAddress = crpPoolAddress
        newSwapOutAddress = typeWithdrawChecked === 'Single_asset' ? poolTokensArray[0].address : ''
        break
      case 'Swap':
        newSwapInAddress = poolTokensArray[0].address || ''
        newSwapOutAddress = poolTokensArray[1].address || ''
        break
      default:
    }
    /* eslint-disable prefer-destructuring */

    setSwapInAddress(newSwapInAddress)
    setSwapOutAddress(newSwapOutAddress)
  }, [title, poolTokensArray.length, typeWithdrawChecked])

  // get contract approval of tokens
  React.useEffect(() => {
    if (chainId !== poolChain.chainId) {
      return
    }

    const calc = async () => {
      const newApprovals = []

      for (let i = 0; i < poolTokensArray.length; i += 1) {
        if (poolTokensArray[i].address === WAVAX) {
          newApprovals.push(true)
          continue
        }

        newApprovals.push(
          ERC20(poolTokensArray[i].address).allowance(
            ProxyContract,
            userWalletAddress
          )
        )
      }

      const results = await Promise.all(newApprovals)

      setApprovals((old) => ({
        ...old,
        [title]: results.map((item) => item ? Approval.Approved : Approval.Denied)
      }))
    }

    setIsReload(!isReload)
    calc()
  }, [chainId, title, poolTokensArray.length, userWalletAddress])

  React.useEffect(() => {
    setNewTitle(title)
  }, [title])

  // get balance of swap in token
  React.useEffect(() => {
    if (swapInAddress.length === 0 || userWalletAddress.length === 0 || chainId.toString().length === 0 || chainId !== poolChain.chainId) {
      return
    }

    // setSwapInBalance(new BigNumber(-1))
    if (swapInAddress === poolChain.wrapped) {
      web3.eth.getBalance(userWalletAddress)
        .then(newBalance => setSwapInBalance(new BigNumber(newBalance)))

      return
    }

    const token = ERC20(swapInAddress)
    token
      .balance(userWalletAddress)
      .then(newBalance => setSwapInBalance(newBalance))
  }, [chainId, newTitle, swapInAddress, userWalletAddress, poolTokensArray, swapOutAddress])

  // get balance of swap out token
  React.useEffect(() => {
    if (userWalletAddress.length === 0 || chainId.toString().length === 0 || chainId !== poolChain.chainId) {
      return
    }

    setSwapOutBalance([new BigNumber(-1)])

    if (swapOutAddress === '') {
      const calc = async () => {
        const newSwapOutBalance = await Promise.all(
          poolTokensArray.map(async (item: { address: string }) => {
            if (item.address === poolChain.wrapped) {
              const balance = await web3.eth.getBalance(userWalletAddress)
              return new BigNumber(balance)
            }
            const token = ERC20(item.address)
            return token.balance(userWalletAddress)
          })
        )

        setSwapOutBalance(newSwapOutBalance)
      }

      calc()
      return
    }

    if (swapOutAddress.length === 0) {
      return
    }

    const token = ERC20(swapOutAddress)

    if (swapOutAddress === poolChain.wrapped) {
      web3.eth.getBalance(userWalletAddress)
        .then(newBalance => setSwapOutBalance([new BigNumber(newBalance)]))
      return
    }

    token
      .balance(userWalletAddress)
      .then(newBalance => setSwapOutBalance([newBalance]))
  }, [chainId, userWalletAddress, poolTokensArray, swapInAddress, swapOutAddress])

  React.useEffect(() => {
    const tokens = title === 'Withdraw' ? poolTokensArray.length : 1
    setSwapOutAmount(Array(tokens).fill(new BigNumber(0)))
  }, [title, swapInAddress, swapOutAddress, poolTokensArray.length])

  // calculate investment
  React.useEffect(() => {
    if (
      title !== 'Invest' ||
      swapInAddress.length === 0 ||
      swapOutAddress.length === 0 ||
      swapInAddress === crpPoolAddress
    ) {
      return
    }

    if (chainId !== poolChain.chainId) {
      setSwapOutAmount([new BigNumber(0)])
      return
    }

    const calc = async () => {
      try {
        const [
          swapInTotalPoolBalance,
          swapInDenormalizedWeight,
          poolSupply,
          poolTotalDenormalizedWeight,
          poolSwapFee
        ] = await Promise.all([
          corePool.balance(invertToken[swapInAddress] ?? swapInAddress),
          corePool.denormalizedWeight(invertToken[swapInAddress] ?? swapInAddress),
          crpPoolToken.totalSupply(),
          corePool.totalDenormalizedWeight(),
          corePool.swapFee()
        ])

        try {
          const newSwapOutAmount = await proxy.tryJoinswapExternAmountIn(
            swapInAddress,
            swapInAmount,
            new BigNumber('0'),
            userWalletAddress
          )

          setSwapOutAmount([newSwapOutAmount])
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
          let investAmoutInCalc: BigNumber = swapInAmount
          if(invertToken[swapInAddress]) {
            investAmoutInCalc = await convertBalanceWrappedYRT(swapInAmount, invertToken[swapInAddress])
          }
          const newSwapOutPrice = await corePool.calcPoolOutGivenSingleIn(
            swapInTotalPoolBalance,
            swapInDenormalizedWeight,
            poolSupply,
            poolTotalDenormalizedWeight,
            investAmoutInCalc,
            poolSwapFee
          )
          let investAmoutOutNormalized: BigNumber = newSwapOutPrice
          if(invertToken[swapOutAddress]) {
            investAmoutOutNormalized = await convertBalanceYRTtoWrap(newSwapOutPrice, invertToken[swapOutAddress])
          }
          setSwapOutAmount([investAmoutOutNormalized])

          if (userWalletAddress.length > 0) {
            const errorStr = error.toString()

            if (errorStr.search(/ERR_(BPOW_BASE_TOO_|MATH_APPROX)/) > -1) {
              setErrorMsg('This amount is too low for the pool!')
              return
            }

            if (errorStr.search('ERR_MAX_IN_RATIO') > -1) {
              setErrorMsg("The amount can't be more than half of what's in the pool!")
              return
            }

            if (swapInAmount.gt(swapInBalance) && Number(swapInAmount.toString()) > 0) {
              setErrorMsg('This amount exceeds your balance!')
              return;
            }
          }
        }

        let newSwapOutPrice;
        let pow = new BigNumber(0);

        while (!newSwapOutPrice) {
          try {
            const multiplier = new BigNumber(10).pow(pow)
            newSwapOutPrice = await corePool.calcPoolOutGivenSingleIn(
              swapInTotalPoolBalance,
              swapInDenormalizedWeight,
              poolSupply,
              poolTotalDenormalizedWeight,
              wei.div(multiplier),
              poolSwapFee
            )
            newSwapOutPrice = newSwapOutPrice.mul(multiplier)
          } catch (e) {
            pow = pow.add(new BigNumber(1));
          }
        }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        const errorStr = error.toString()
        if (userWalletAddress.length > 0) {
          if (errorStr.search('ERR_BPOW_BASE_TOO_HIGH') > -1) {
            ToastWarning("The amount can't be more than half of what's in the pool!")
            return
          }
          ToastWarning('Could not connect with the blockchain to calculate prices.')
        }
      }
    }

    calc()
    setErrorMsg('')
    setSwapOutAmount(Array(poolTokensArray.length - 1).fill(new BigNumber(0)))
  }, [chainId, swapInAmount, swapInAddress])

  // calculate swap
  React.useEffect(() => {
    if (
      title !== 'Swap' ||
      swapInAddress.length === 0 ||
      swapOutAddress.length === 0 ||
      swapInAddress === crpPoolAddress ||
      swapOutAddress === crpPoolAddress
    ) {
      return
    }

    if (chainId !== poolChain.chainId) {
      setSwapOutAmount([new BigNumber(0)])
      return
    }

    const calc = async () => {
      try {
        const [
          swapInTotalPoolBalance,
          swapOutTotalPoolBalance,
          swapInDenormalizedWeight,
          swapOutDenormalizedWeight,
          poolSwapFee
        ] = await Promise.all([
          corePool.balance(invertToken[swapInAddress] ?? swapInAddress),
          corePool.balance(invertToken[swapOutAddress] ?? swapOutAddress),
          corePool.denormalizedWeight(invertToken[swapInAddress] ?? swapInAddress),
          corePool.denormalizedWeight(invertToken[swapOutAddress] ?? swapOutAddress),
          corePool.swapFee()
        ])
        let swapAmoutInCalc: BigNumber = swapInAmount
        if(invertToken[swapInAddress]) {
          swapAmoutInCalc = await convertBalanceWrappedYRT(swapInAmount, invertToken[swapInAddress])
        }
        const [newSwapOutAmount] = await Promise.all([
          corePool.calcOutGivenIn(
            swapInTotalPoolBalance,
            swapInDenormalizedWeight,
            swapOutTotalPoolBalance,
            swapOutDenormalizedWeight,
            swapAmoutInCalc,
            poolSwapFee
          )
        ])

        const exchangeRateIn = await proxy.exchangeRate(corePoolAddress, invertToken[swapInAddress] ?? swapInAddress)
        const exchangeRateOut = await proxy.exchangeRate(corePoolAddress, invertToken[swapOutAddress] ?? swapOutAddress)

        const swapOut = newSwapOutAmount.mul(exchangeRateIn).div(exchangeRateOut)
        let swapAmoutOutNormalized: BigNumber = swapOut
        if(invertToken[swapOutAddress]) {
          swapAmoutOutNormalized = await convertBalanceYRTtoWrap(swapOut, invertToken[swapOutAddress])
        }
        setSwapOutAmount([swapAmoutOutNormalized])
        try {
          if (userWalletAddress.length > 0 && swapInAmount.gt(new BigNumber(0))) {
            await proxy.trySwapExactAmountIn(swapInAddress, swapInAmount, swapOutAddress, userWalletAddress)
          }
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
          const errorStr = error.toString()

          if (errorStr.search(/ERR_(BPOW_BASE_TOO_|MATH_APPROX)/) > -1) {
            setErrorMsg('This amount is too low for the pool!')
            return
          }

          if (errorStr.search('ERR_MAX_IN_RATIO') > -1) {
            setErrorMsg("The amount can't be more than half of what's in the pool!")
            return
          }

          if (errorStr.search('below minimum') > -1) {
            setErrorMsg("This amount is below minimum withdraw!")
            return
          }

          if (swapInAmount.gt(swapInBalance)) {
            setErrorMsg('This amount exceeds your balance!')
            return;
          }
        }
      }
      catch (e) {
        ToastWarning('Could not connect with the blockchain to calculate prices.')
      }
    }

    calc()
    setErrorMsg('')
    setSwapOutAmount(Array(poolTokensArray.length - 1).fill(new BigNumber(0)))
  }, [chainId, swapInAmount, swapInAddress, swapOutAddress])

  // calculate withdraw
  React.useEffect(() => {
    if (title !== 'Withdraw' || swapOutAddress === crpPoolAddress) {
      return
    }

    if (chainId !== poolChain.chainId) {
      if (swapOutAddress === '') {
        setSwapOutAmount(
          Array(poolTokensArray.length - 1).fill(new BigNumber(0))
        )
        return
      }

      setSwapOutAmount([new BigNumber(0)])
      return
    }

    const getWithdrawAmount = (
      supplyPoolToken: BigNumber,
      amountPoolToken: BigNumber,
      balanceOut: BigNumber,
      exitFee: BigNumber
    ): BigNumber => {
      if (supplyPoolToken.toString(10) === '0') {
        return new BigNumber(0)
      }

      // 10^18
      const one = new BigNumber('1')
      const two = new BigNumber('2')
      const bigOne = new BigNumber('10').pow(new BigNumber('18'))
      const halfBigOne = bigOne.div(two)
      // calculated fee (bmul)
      const fee = amountPoolToken
        .mul(exitFee)
        .add(halfBigOne)
        .div(bigOne);
      const pAiAfterExitFee = amountPoolToken.sub(fee);
      const supply = supplyPoolToken.add(one)
      // ratio of the token (bdiv)
      const ratio = pAiAfterExitFee
        .mul(bigOne)
        .add(supply.div(two))
        .div(supply);
      // amount of tokens (bmul)
      const tokenAmountOut = ratio
        .mul(balanceOut.sub(one))
        .add(halfBigOne)
        .div(bigOne);

      return tokenAmountOut
    }

    const calc = async () => {
      const [poolSupply, poolExitFee] = await Promise.all([
        crpPoolToken.totalSupply(),
        corePool.exitFee()
      ])

      if (swapOutAddress === '') {
        const newSwapOutAmount = await Promise.all(
          poolTokensArray.slice(0, -1).map(async (item: { address: string }) => {
            const mapTokenAddress = invertToken[item.address]
            const swapOutTotalPoolBalance = await corePool.balance(mapTokenAddress ?? item.address)
            const withdrawAmout = getWithdrawAmount(
              poolSupply,
              swapInAmount,
              swapOutTotalPoolBalance,
              poolExitFee
            )
            if(mapTokenAddress) {
              return await convertBalanceYRTtoWrap(withdrawAmout, mapTokenAddress)
            }
            return withdrawAmout
          })
        )

        setSwapOutAmount(newSwapOutAmount)

        try {
          if (userWalletAddress.length > 0 && swapInAmount.gt(new BigNumber('0'))) {
            const tokensInPool = await corePool.currentTokens()
            const tokensWithdraw = tokensInPool.map(token => invertToken[token] ?? token)

            await proxy.tryExitPool(
              swapInAmount,
              tokensWithdraw,
              Array(newSwapOutAmount.length).fill(new BigNumber('0')),
              userWalletAddress
            )
          }
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
          const errorStr = error.toString()

          if (errorStr.search(/ERR_(BPOW_BASE_TOO_|MATH_APPROX)/) > -1) {
            setErrorMsg('This amount is too low for the pool!')
            return
          }

          if (errorStr.search('below minimum') > -1) {
            setErrorMsg("This amount is below minimum withdraw!")
            return
          }

          if (swapInAmount.gt(swapInBalance)) {
            setErrorMsg('This amount exceeds your balance!')
            return;
          }
        }

        return
      }

      try {
        const [
          swapOutTotalPoolBalance,
          swapOutDenormalizedWeight,
          poolTotalDenormalizedWeight,
          poolSwapFee
        ] = await Promise.all([
          corePool.balance(invertToken[swapOutAddress] ?? swapOutAddress),
          corePool.denormalizedWeight(invertToken[swapOutAddress] ?? swapOutAddress),
          corePool.totalDenormalizedWeight(),
          corePool.swapFee()
        ])

        const [SingleSwapOutAmount] = await Promise.all([
          corePool.calcSingleOutGivenPoolIn(
            swapOutTotalPoolBalance,
            swapOutDenormalizedWeight,
            poolSupply,
            poolTotalDenormalizedWeight,
            swapInAmount,
            poolSwapFee,
            poolExitFee
          ),
        ])
        let withdrawAmoutOut: BigNumber = SingleSwapOutAmount
        if(invertToken[swapOutAddress]) {
          withdrawAmoutOut = await convertBalanceYRTtoWrap(withdrawAmoutOut, invertToken[swapOutAddress])
        }
        setSwapOutAmount([withdrawAmoutOut])
      }
      catch (e) {
        if (userWalletAddress.length > 0) {
          ToastWarning('Could not connect with the blockchain to calculate prices.')
        }
      }

      try {
        if (userWalletAddress.length > 0 && swapInAmount.gt(new BigNumber('0'))) {
          await proxy.tryExitswapPoolAmountIn(
            swapOutAddress,
            swapInAmount,
            new BigNumber('0'),
            userWalletAddress
          )
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        const errorStr = error.toString()

        if (errorStr.search(/ERR_(BPOW_BASE_TOO_|MATH_APPROX)/) > -1) {
          setErrorMsg('This amount is too low for the pool!')
          return
        }

        if (errorStr.search('ERR_MAX_OUT_RATIO') > -1) {
          setErrorMsg("The amount you are trying to obtain can't be more than a third of what's in the pool!")
          return
        }

        if (errorStr.search('below minimum') > -1) {
          setErrorMsg("This amount is below minimum withdraw!")
          return
        }

        if (swapInAmount.gt(swapInBalance)) {
          setErrorMsg('This amount exceeds your balance!')
          return;
        }
      }
    }

    calc()
    setErrorMsg('')
    setSwapOutAmount(Array(poolTokensArray.length - 1).fill(new BigNumber(0)))
  }, [chainId, swapInAmount, swapOutAddress, poolTokensArray])

  const tokenInIndex = tokenAddress2Index[swapInAddress]
  const tokenOutIndex = tokenAddress2Index[swapOutAddress]

  const approvalCallback = React.useCallback(
    (tokenSymbol: string, tokenAddress: string, tabTitle: Titles): TransactionCallback => {
      return async (error: MetamaskError, txHash: string) => {
        if (error) {
          if (error.code === 4001) {
            ToastError(`Approval of ${tokenSymbol} cancelled`)
            return
          }

          ToastError(`Failed to approve ${tokenSymbol}. Please try again later.`)
          return
        }

        setApprovals((old) => {
          const approvals = Array.from(old[tabTitle])
          approvals[tokenAddress2Index[tokenAddress]] = Approval.WaitingTransaction

          return {
            ...old,
            [tabTitle]: approvals
          }
        })
        ToastWarning(`Waiting approval of ${tokenSymbol}...`)
        const txReceipt = await waitTransaction(txHash)
        setApprovals((old) => {
          const approvals = Array.from(old[tabTitle])
          approvals[tokenAddress2Index[tokenAddress]] = Approval.Syncing

          return {
            ...old,
            [tabTitle]: approvals
          }
        })

        if (txReceipt.status) {
          ToastSuccess(`Approval of ${tokenSymbol} confirmed, wait while we sync with the latest block of the blockchain.`)
          let approved = false;

          while (!approved) {
            approved = await ERC20(tokenAddress).allowance(ProxyContract, userWalletAddress);
            await new Promise(r => setTimeout(r, 200)); // sleep
          }

          setApprovals((old) => {
            const approvals = Array.from(old[tabTitle])
            approvals[tokenAddress2Index[tokenAddress]] = Approval.Approved

            return {
              ...old,
              [tabTitle]: approvals
            }
          })

          return
        }

        setApprovals((old) => {
          const approvals = Array.from(old[tabTitle])
          approvals[tokenAddress2Index[tokenAddress]] = Approval.Denied

          return {
            ...old,
            [tabTitle]: approvals
          }
        })
      }
    },
    [approvals, setApprovals, tokenAddress2Index]
  )

  const investCallback = React.useCallback(
    (tokenSymbol: string, amountInUSD: number): TransactionCallback => {
      return async (error: MetamaskError, txHash: string) => {
        if (error) {
          trackCancelBuying()

          if (error.code === 4001) {
            ToastError(`Investment in ${tokenSymbol} cancelled`)
            return
          }

          ToastError(`Failed to invest in ${tokenSymbol}. Please try again later.`)
          return
        }

        trackBought(txHash, amountInUSD, 0)
        ToastWarning(`Confirming investment in ${tokenSymbol}...`)
        const txReceipt = await waitTransaction(txHash)

        if (txReceipt.status) {
          ToastSuccess(`Investment in ${tokenSymbol} confirmed`)
          return
        }
      }
    },
    [poolTokensArray]
  )

  const withdrawCallback = React.useCallback(
    (tokenSymbol: string, amountInUSD: number): TransactionCallback => {
      return async (error: MetamaskError, txHash: string) => {
        if (error) {
          trackCancelBuying()

          if (error.code === 4001) {
            ToastError(`Withdrawal of ${tokenSymbol} cancelled`)
            return
          }

          ToastError(`Failed to withdraw ${tokenSymbol}. Please try again later.`)
          return
        }

        trackBought(txHash, amountInUSD, 0)
        ToastWarning(`Confirming withdrawal of ${tokenSymbol}...`)
        const txReceipt = await waitTransaction(txHash)

        if (txReceipt.status) {
          ToastSuccess(`Withdrawal of ${tokenSymbol} confirmed`)
          return
        }
      }
    },
    [crpPoolAddress, ProxyContract]
  )

  const swapCallback = React.useCallback(
    (tokenInSymbol: string, tokenOutSymbol: string): TransactionCallback => {
      return async (error: MetamaskError, txHash: string) => {
        if (error) {
          if (error.code === 4001) {
            ToastError(`Swap of ${tokenInSymbol} to ${tokenOutSymbol} cancelled`)
            return
          }

          ToastError(`Failed to swap ${tokenInSymbol} to ${tokenOutSymbol}. Please try again later.`)
          return
        }

        ToastWarning(`Confirming swap of ${tokenInSymbol} to ${tokenOutSymbol}...`)
        const txReceipt = await waitTransaction(txHash)

        if (txReceipt.status) {
          ToastSuccess(`Swap of ${tokenInSymbol} to ${tokenOutSymbol} confirmed`)
          return
        }
      }
    },
    [tokenInIndex, tokenOutIndex]
  )

  const submitAction = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      const {
        approved,
        category,
        swapInAmountInput,
        swapOutAmountInput,
        swapInAddressInput,
        swapOutAddressInput,
        swapInSymbol,
        swapOutSymbol,
        walletAddress,
        amountUSD,
        slippageInput,
        tabTitleInput
        // eslint-disable-next-line prettier/prettier
      } = e.target as HTMLFormElement & {
        approved: HTMLInputElement;
        category: HTMLInputElement;
        swapInAmountInput: HTMLInputElement;
        swapOutAmountInput: HTMLInputElement;
        swapInAddressInput: HTMLInputElement;
        swapOutAddressInput: HTMLInputElement;
        swapInSymbol: HTMLInputElement;
        swapOutSymbol: HTMLInputElement;
        walletAddress: HTMLInputElement;
        amountUSD: HTMLInputElement;
        slippageInput: HTMLInputElement;
        tabTitleInput: HTMLInputElement;
      }
      const tabTitle = tabTitleInput.value as Titles
      const amountInUSD = parseFloat(amountUSD.value)
      const swapInAmountVal = new BigNumber(swapInAmountInput.value)
      const swapOutAmountVal = swapOutAmountInput.value.split(',').map(
        item => new BigNumber(item)
      )
      const swapInAddressVal = swapInAddressInput.value
      const swapOutAddressVal = swapOutAddressInput.value
      const slippageVal = slippageInput.value

      const slippageExp = new BigNumber(10).pow(new BigNumber(2 + (slippageVal.split('.')[1]?.length || 0)))
      const slippageBase = slippageExp.sub(new BigNumber(slippageVal.replace('.', '')))

      try {
        switch (category.value) {
          case 'Invest':
            if (approved.value === '0' && swapInAddressVal !== WAVAX) {
              ERC20(swapInAddressVal).approve(
                ProxyContract,
                walletAddress.value,
                approvalCallback(swapInSymbol.value, swapInAddressVal, tabTitle)
              )
              return
            }
            trackBuying(crpPoolAddress, poolSymbol, amountInUSD, productCategories)
            proxy.joinswapExternAmountIn(
              swapInAddressVal,
              swapInAmountVal,
              swapOutAmountVal[0].mul(slippageBase).div(slippageExp),
              walletAddress.value,
              investCallback(swapOutSymbol.value, amountInUSD)
            )
            return

          case 'Withdraw':
            trackBuying(crpPoolAddress, poolSymbol, -1 * amountInUSD, productCategories)
            if (approved.value === '0') {
              ERC20(crpPoolAddress).approve(
                ProxyContract,
                walletAddress.value,
                approvalCallback(swapInSymbol.value, swapInAddressVal, tabTitle)
              )
              return
            }
            if (swapOutAddressVal !== '') {
              proxy.exitswapPoolAmountIn(
                swapOutAddressVal,
                swapInAmountVal,
                swapOutAmountVal[0].mul(slippageBase).div(slippageExp),
                walletAddress.value,
                withdrawCallback(swapInSymbol.value, -1 * amountInUSD)
              )
              return
            }

            corePool.currentTokens()
              .then(async tokens => {
                const swapOutAmounts = []

                for (let i = 0; i < tokens.length; i++) {
                  swapOutAmounts.push(
                    swapOutAmountVal[tokenAddress2Index[invertToken[tokens[i]] ?? tokens[i]]]
                      .mul(slippageBase)
                      .div(slippageExp)
                  )
                }

                const tokensInPool = await corePool.currentTokens()
                const tokensWithdraw = tokensInPool.map(token => invertToken[token] ?? token)
                proxy.exitPool(
                  swapInAmountVal,
                  tokensWithdraw,
                  swapOutAmounts,
                  walletAddress.value,
                  withdrawCallback(swapInSymbol.value, -1 * amountInUSD)
                )
              })
            return

          case 'Swap':
            if (approved.value === '0' && swapInAddressVal !== WAVAX) {
              ERC20(swapInAddressVal).approve(
                ProxyContract,
                walletAddress.value,
                approvalCallback(swapInSymbol.value, swapInAddressVal, tabTitle)
              )
              return
            }

            trackBuying(
              `${crpPoolAddress}-${swapInSymbol.value}-${swapOutSymbol.value}`,
              `${swapInSymbol.value}-${swapOutSymbol.value}`,
              amountInUSD,
              [...productCategories, 'Swap']
            )
            proxy.swapExactAmountIn(
              swapInAddressVal,
              swapInAmountVal,
              swapOutAddressVal,
              swapOutAmountVal[0].mul(slippageBase).div(slippageExp),
              walletAddress.value,
              swapCallback(swapInSymbol.value, swapOutSymbol.value)
            )
            return

          default:
        }
      } catch (error) {
        ToastError('Could not connect with the Blockchain!')
      }
    }, [tokenAddress2Index])

  React.useEffect(() => {
    const handleWallectConnect = () => {
      const connect = localStorage.getItem('walletconnect')

      if (connect) {
        setWalletConnect(connect)
      } else {
        setWalletConnect(null)
      }
    }

    handleWallectConnect()
  }, [])

  // Calc Price Impact
  React.useEffect(() => {
    if (!inputTokenRef?.current?.value) {
      setPriceImpact(Big(0))
      return
    }
    const amountInput = Big(Number(inputTokenRef.current.value)).mul(Big(10).pow(poolTokensArray[tokenInIndex]
      ? poolTokensArray[tokenInIndex]?.decimals.toNumber()
      : 18))
    if (amountInput.gt(0) && parseFloat(swapOutAmount[0].toString()) > 0) {
      const usdAmountIn = amountInput
        .mul(Big(priceDollar(swapInAddress, poolTokensArray)))
        .div(Big(10).pow(Number(poolTokensArray[tokenInIndex]?.decimals || 18)))
      const usdAmountOut = Big(swapOutAmount[0].toString())
        .mul(Big(priceDollar(swapOutAddress, poolTokensArray)))
        .div(Big(10).pow(Number(poolTokensArray[tokenAddress2Index[swapOutAddress]]?.decimals || 18)))

      const subValue = usdAmountIn.sub(usdAmountOut)
      if (usdAmountIn.gt(0)) {
        const valuePriceImpact = subValue.div(usdAmountIn).mul(100)

        valuePriceImpact.gt(0) ? setPriceImpact(valuePriceImpact) : setPriceImpact(Big(0))
      }
    } else {
      setPriceImpact(Big(0))
    }
  }, [inputTokenRef.current?.value, swapInAmount, swapOutAmount])

  return (
    <S.FormContainer onSubmit={submitAction}>
      <input type="hidden" name="approved" value={Number(approvals[title][tokenInIndex] === Approval.Approved || 0)} />
      <input type="hidden" name="category" value={title} />
      <input type="hidden" name="swapInAmountInput" value={swapInAmount.toString()} />
      <input type="hidden" name="swapOutAmountInput" value={swapOutAmount.toString()} />
      <input type="hidden" name="swapInAddressInput" value={swapInAddress} />
      <input type="hidden" name="swapOutAddressInput" value={swapOutAddress} />
      <input type="hidden" name="swapInSymbol" value={poolTokensArray[tokenInIndex]?.symbol || ''} />
      <input type="hidden" name="swapOutSymbol" value={poolTokensArray[tokenOutIndex]?.symbol || ''} />
      <input type="hidden" name="walletAddress" value={userWalletAddress} />
      <input type="hidden" name="slippageInput" value={slippage.value} />
      <input type="hidden" name="tabTitleInput" value={title} />
      <input type="hidden" name="amountUSD" value={
        title === "Invest"
          ? Big((swapOutAmount[0] || 0).toString())
            .div(
              Big(10).pow(poolTokensArray[tokenOutIndex]?.decimals.toNumber() || 0)
            )
            .mul(
              Big(priceDollar(swapOutAddress, poolTokensArray))
            )
            .toString()
          : Big((swapInAmount || 0).toString())
            .div(
              Big(10).pow(poolTokensArray[tokenInIndex]?.decimals.toNumber() || 0)
            )
            .mul(
              Big(priceDollar(swapInAddress, poolTokensArray))
            )
            .toString()
      } />

      <S.ErrorTippy content={errorMsg} visible={errorMsg.length > 0}>
        <InputTokens
          clearInput={clearInput}
          inputRef={inputTokenRef}
          actionString={typeAction}
          title={title}
          decimals={poolTokensArray[tokenInIndex] ? poolTokensArray[tokenInIndex].decimals : new BigNumber(18)}
          swapBalance={swapInBalance}
          swapAmount={swapInAmount}
          setSwapAmount={setSwapInAmount}
          // Text Input
          disabled={
            userWalletAddress.length === 0
              ? "Please connect your wallet by clicking the button below"
              : chainId !== poolChain.chainId
                ? `Please change to the ${poolChain.chainName} by clicking the button below`
                : ""
          }
          // Select Input
          poolTokens={
            title === 'Withdraw'
              ? [poolTokensArray[poolTokensArray.length - 1]]
              : poolTokensArray
                .slice(0, -1)
                .filter((token: { address: string }) => token.address !== swapOutAddress)
          }
          tokenDetails={poolTokensArray[tokenInIndex]}
          setSwapAddress={setSwapInAddress}
          setMaxActive={setMaxActive}
          maxActive={maxActive}
        />
      </S.ErrorTippy>

      {title === 'Swap' ?
        <Tippy content="Trade places for swap-in and swap-out token">
          <S.SwapButton type="button" onClick={() => {
            trackEventFunction('click-on-button', 'swap-token', 'operations-invest')
            setSwapInAddress(swapOutAddress)
            setSwapOutAddress(swapInAddress)
            if (inputTokenRef && inputTokenRef?.current && swapOutAmount.length > 0) {
              inputTokenRef.current.value = BNtoDecimal(
                swapOutAmount[0],
                Number(poolTokensArray[tokenAddress2Index[swapOutAddress]]?.decimals) || 18
              ).replace(/\s/g, '')
            }
            setSwapInAmount(swapOutAmount[0])
            setSwapOutAmount([swapInAmount])
          }} >
            <img src="/assets/icons/arrow-down.svg" alt="" />
            <img src="/assets/icons/arrow-down.svg" alt="" />
          </S.SwapButton>
        </Tippy>
        :
        <img src="/assets/icons/arrow-down.svg" alt="" style={{ margin: '12px 0' }} />
      }

      {title === 'Withdraw' && typeWithdrawChecked === 'Best_value' ? (
        <InputBestValue
          poolTokenDetails={poolTokensArray
            .slice(0, -1)
            .filter((token: { address: string }) => token.address !== swapInAddress)}
          poolTokensArray={poolTokensArray}
          swapOutAmount={swapOutAmount}
          swapOutBalance={swapOutBalance}
          setPriceInDollarOnWithdraw={setPriceInDollarOnWithdraw}
        />
      ) : (
        <>
          <InputTokens
            title="Output"
            isWithdraw={title}
            actionString="Swap to"
            swapBalance={swapOutBalance[0]}
            decimals={poolTokensArray[tokenAddress2Index[swapOutAddress]]?.decimals || new BigNumber(18)}
            swapAmount={swapOutAmount[0]}
            swapOutAddress={swapOutAddress}
            poolTokensArray={poolTokensArray}
            disabled={userWalletAddress.length === 0
              ? "Please connect your wallet by clicking the button below"
              : chainId !== poolChain.chainId
                ? `Please change to the ${poolChain.chainName} by clicking the button below`
                : ""}
            // Select Input
            poolTokens={
              title === 'Invest'
                ? [poolTokensArray[poolTokensArray.length - 1]]
                : poolTokensArray
                  .slice(0, -1)
                  .filter((token: { address: string }) => token.address !== swapInAddress)
            }
            tokenDetails={poolTokensArray[tokenOutIndex]}
            // swapInAmount={swapInAmount}
            swapInAddress={swapInAddress}
            setSwapAddress={setSwapOutAddress}
            setSwapOutAmount={setSwapOutAmount}
            calculateAmountIn={title === 'Swap' ? calculateSwapAmountIn : calculateInvestAmountIn}
            setMaxActive={setMaxActive}
            maxActive={maxActive}
          />
          <S.ExchangeRate>
            <S.SpanLight>Price Impact:</S.SpanLight>
            <S.PriceImpactWrapper price={BNtoDecimal(
              priceImpact,
              18,
              2,
              2
            )}>
              {BNtoDecimal(
                priceImpact,
                18,
                2,
                2
              )}%
            </S.PriceImpactWrapper>
          </S.ExchangeRate>
        </>
      )}

      <S.ExchangeRate>
        <S.SpanLight>{title} fee:</S.SpanLight>
        <S.SpanLight>{fees[title]}%</S.SpanLight>
      </S.ExchangeRate>

      <S.TransactionSettingsOptions>
        <TransactionSettings
          slippage={slippage}
          setSlippage={setSlippage}
        />
      </S.TransactionSettingsOptions>
      {userWalletAddress.length === 0 && walletConnect === null ? (
        <Button
          className="btn-submit"
          backgroundPrimary
          fullWidth
          type="button"
          onClick={() => setIsModaWallet(true)}
          text='Connect Wallet'
        />
      ) : (
        chainId === poolChain.chainId ? (
          <Button
            className="btn-submit"
            backgroundPrimary
            disabledNoEvent={
              (
                approvals[title].length === 0
              ) || (
                approvals[title][tokenInIndex] > Approval.Approved
              ) || (
                approvals[title][tokenInIndex] === Approval.Approved && (
                  swapInAmount.toString() === "0" ||
                  swapOutAmount[0].toString() === "0" ||
                  errorMsg.length > 0
                )
              )
            }
            fullWidth
            type="submit"
            text={
              approvals[title][tokenInIndex] === Approval.Approved ?
                swapInAmount.toString() !== '0' || inputTokenRef?.current?.value !== null ?
                  title === "Withdraw" ?
                    typeWithdrawChecked === "Best_value" ?
                      `${title} ${'$' + priceInDollarOnWithdraw}`
                      :
                      `${title} ${'$' +
                      BNtoDecimal(
                        Big((swapOutAmount[0]).toString())
                          .mul(Big(priceDollar(swapOutAddress, poolTokensArray)))
                          .div(Big(10).pow(Number(poolTokensArray[tokenAddress2Index[swapOutAddress]]?.decimals || 18))),
                        18,
                        2,
                        2
                      )
                      }`
                    :
                    `${title} ${'$' + BNtoDecimal(
                      Big((swapOutAmount[0] || 0).toString())
                        .mul(Big(priceDollar(swapOutAddress, poolTokensArray)))
                        .div(Big(10).pow(Number(poolTokensArray[tokenAddress2Index[swapOutAddress]]?.decimals || 18))),
                      18,
                      2,
                      2
                    )
                    }`
                  :
                  `${title}`
                :
                approvals[title][tokenInIndex] === Approval.WaitingTransaction
                  ? 'Approving...'
                  : approvals[title][tokenInIndex] === undefined || approvals[title][tokenInIndex] === Approval.Syncing
                    ? 'Syncing with Blockchain...'
                    : 'Approve'
            }
          />
        ) : (
          <Button
            className="btn-submit"
            backgroundPrimary
            fullWidth
            type="button"
            onClick={() => changeChain(poolChain)}
            disabled={walletConnect ? true : false}
            text={walletConnect ? `Change manually to ${poolChain.chainName}` : `Change to ${poolChain.chainName}`}
          />
        )
      )}
    </S.FormContainer >
  )
}

export default Form
