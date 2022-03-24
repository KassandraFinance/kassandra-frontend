/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import useSWR from 'swr'
import { request } from 'graphql-request'
import BigNumber from 'bn.js'
import Big from 'big.js'
import { useMatomo } from '@datapunt/matomo-tracker-react'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'

import { TokenDetails } from '../../../store/modules/poolTokens/types'
import { actionGetPoolTokens } from '../../../store/modules/poolTokens/actions'

import { SUBGRAPH_URL, HeimCRPPOOL } from '../../../constants/tokenAddresses'
import { GET_INFO_AHYPE } from '../graphql'

import useCRPContract from '../../../hooks/useCRPContract'
import useERC20Contract, { ERC20 } from '../../../hooks/useERC20Contract'
import usePoolContract from '../../../hooks/usePoolContract'
import useMatomoEcommerce from '../../../hooks/useMatomoEcommerce'

import { priceDollar } from '../../../utils/priceDollar'
import changeChain, { ChainDetails } from '../../../utils/changeChain'
import { BNtoDecimal, wei } from '../../../utils/numerals'
import waitTransaction, { MetamaskError, TransactionCallback } from '../../../utils/txWait'

import Button from '../../Button'
import ModalWalletConnect from '../../ModalWalletConnect'

import InputTokens from './InputTokens'
import InputBestValue from './InputBestValue'
import TransactionSettings from './TransactionSettings'

import { ToastSuccess, ToastError, ToastWarning } from '../../Toastify/toast'

import * as S from './styles'
import { Titles } from '..'

interface IFormProps {
  typeAction: string;
  title: Titles;
  typeWithdrawChecked: string;
  poolChain: ChainDetails;
  crpPoolAddress: string;
  corePoolAddress: string;
  productCategories: string[];
}

interface Address2Index {
  [key: string]: number;
}

enum Approval {
  Denied,
  Approved,
  WaitingTransaction,
  Syncing,
}

// eslint-disable-next-line prettier/prettier
type Approvals = {[key in Titles]: Approval[]}

const Form = ({
  poolChain,
  crpPoolAddress,
  corePoolAddress,
  productCategories,
  typeAction,
  title,
  typeWithdrawChecked,
}: IFormProps) => {
  const crpPoolToken = useERC20Contract(crpPoolAddress)
  const corePool = usePoolContract(corePoolAddress)
  const crpPool = useCRPContract(crpPoolAddress)
  const { userWalletAddress, chainId } = useSelector((state: RootStateOrAny) => state)
  const { trackBuying, trackBought, trackCancelBuying } = useMatomoEcommerce();

  const [tokenAddress2Index, setTokenAddress2Index] = React.useState<Address2Index>({})
  const [walletConnect, setWalletConnect] = React.useState<any>(null)
  const [approvals, setApprovals] = React.useState<Approvals>({
    Withdraw: [],
    Invest: [],
    Swap: []
  })

  const [fees, setFees] = React.useState({
    Invest: '...',
    Withdraw: '...',
    Swap: '...'
  })
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
  const [swapOutPrice, setSwapOutPrice] = React.useState(new BigNumber(-1))
  const [swapOutAmount, setSwapOutAmount] = React.useState([new BigNumber(0)])
  const [swapOutBalance, setSwapOutBalance] = React.useState([new BigNumber(-1)])

  const [isModalWallet, setIsModaWallet] = React.useState<boolean>(false)
  const [priceInDollarOnWithdraw, setPriceInDollarOnWithdraw] = React.useState<string>('')

  const [infoAHYPE, setInfoAHYPE] = React.useState<TokenDetails[]>([])

  const { trackEvent } = useMatomo()
  const dispatch = useDispatch()

  const inputTokenRef = React.useRef<HTMLInputElement>(null)

  const { data } = useSWR([GET_INFO_AHYPE, HeimCRPPOOL],
    (query, id) => request(SUBGRAPH_URL, query, { id }))

  function matomoEvent(action: string, name: string) {
    trackEvent({
      category: 'operations-invest',
      action,
      name
    })
  }

  function clearInput() {
    setSwapInAmount(new BigNumber(0))
    setSwapOutAmount([new BigNumber(0)])

    if (inputTokenRef.current !== null) {
      inputTokenRef.current.value = '0'
    }
  }

  React.useEffect(() => {
    if (data) {
      const aHYPE: TokenDetails = {
        balance_in_pool: '',
        address: data.pool.id,
        allocation: 0,
        allocation_goal: 0,
        decimals: new BigNumber(data.pool.decimals),
        price: Number(data.pool.price_usd),
        name: data.pool.name,
        symbol: data.pool.symbol
      }
      const res: TokenDetails[] = data.pool.underlying_assets.map((item: {
        balance: string;
        token: {
          id: string;
          decimals: string | number | BigNumber;
          price_usd: string;
          name: string;
          symbol: string;
        };
        weight_goal_normalized: string;
        weight_normalized: string;
      }) => {
        return {
          balance_in_pool: item.balance,
          address: item.token.id,
          allocation: ((Number(item.weight_normalized) * 100).toFixed(2)),
          allocation_goal: ((Number(item.weight_goal_normalized) * 100).toFixed(2)),
          decimals: new BigNumber(item.token.decimals),
          price: Number(item.token.price_usd),
          name: item.token.name,
          symbol: item.token.symbol
        }
      })

      res.push(aHYPE)

      setTokenAddress2Index(
        res.reduce((acc, cur, i) => ({ [cur.address]: i, ...acc }), {})
      )

      setInfoAHYPE(res)
      setFees({
        Invest: '0',
        Withdraw: (data.pool.fee_exit * 100).toFixed(2),
        Swap: (data.pool.fee_swap * 100).toFixed(2)
      })
      dispatch(actionGetPoolTokens(res))
    }
  }, [data])

  // set "swap" tokens
  React.useEffect(() => {
    let newSwapInAddress = ''
    let newSwapOutAddress = ''

    /* eslint-disable prefer-destructuring */
    switch (title) {
      case 'Invest':
        newSwapInAddress = infoAHYPE[0]?.address || ''
        newSwapOutAddress = crpPoolAddress
        break
      case 'Withdraw':
        newSwapInAddress = crpPoolAddress
        newSwapOutAddress = typeWithdrawChecked === 'Single_asset' ? infoAHYPE[0].address : ''
        break
      case 'Swap':
        newSwapInAddress = infoAHYPE[0].address || ''
        newSwapOutAddress = infoAHYPE[1].address || ''
        break
      default:
    }
    /* eslint-disable prefer-destructuring */

    setSwapInAddress(newSwapInAddress)
    setSwapOutAddress(newSwapOutAddress)
  }, [title, infoAHYPE.length, typeWithdrawChecked])

  // get contract approval of tokens
  React.useEffect(() => {
    if (chainId !== poolChain.chainId) {
      return
    }

    if (title === 'Withdraw') {
      setApprovals((old) => ({
        ...old,
        Withdraw: Array(infoAHYPE.length + 1).fill(Approval.Approved)
      }))
      return
    }

    const calc = async () => {
      const newApprovals = []

      for (let i = 0; i < infoAHYPE.length; i += 1) {
        newApprovals.push(
          ERC20(infoAHYPE[i].address).allowance(
            title === 'Invest' ? crpPoolAddress : corePoolAddress,
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
  }, [chainId, title, infoAHYPE.length, userWalletAddress])

  // get balance of swap in token
  React.useEffect(() => {
    if (swapInAddress.length === 0 || userWalletAddress.length === 0 || chainId.length === 0 || chainId !== poolChain.chainId) {
      return
    }

    setSwapInBalance(new BigNumber(-1))

    const token = ERC20(swapInAddress)
    token
      .balance(userWalletAddress)
      .then(newBalance => setSwapInBalance(newBalance))
  }, [chainId, swapInAddress, userWalletAddress, title, infoAHYPE, swapOutAddress])

  // get balance of swap out token
  React.useEffect(() => {
    if (userWalletAddress.length === 0 || chainId.length === 0 || chainId !== poolChain.chainId) {
      return
    }

    setSwapOutBalance([new BigNumber(-1)])

    if (swapOutAddress === '') {
      const calc = async () => {
        const newSwapOutBalance = await Promise.all(
          infoAHYPE.map(async item => {
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

    token
      .balance(userWalletAddress)
      .then(newBalance => setSwapOutBalance([newBalance]))
  }, [chainId, userWalletAddress, infoAHYPE, swapInAddress, swapOutAddress])

  React.useEffect(() => {
    const tokens = title === 'Withdraw' ? infoAHYPE.length : 1
    setSwapOutPrice(new BigNumber(-1))
    setSwapOutAmount(Array(tokens).fill(new BigNumber(0)))
  }, [title, swapInAddress, swapOutAddress, infoAHYPE.length])

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
      setSwapOutPrice(new BigNumber(-1))
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
          corePool.balance(swapInAddress),
          corePool.denormalizedWeight(swapInAddress),
          crpPoolToken.totalSupply(),
          corePool.totalDenormalizedWeight(),
          corePool.swapFee()
        ])

        try {
          const newSwapOutAmount = await crpPool.tryJoinswapExternAmountIn(
            swapInAddress,
            swapInAmount,
            new BigNumber('0'),
            userWalletAddress
          )
          setSwapOutAmount([newSwapOutAmount])
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
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

            if (swapInAmount.gt(swapInBalance)) {
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
          } catch(e) {
            pow = pow.add(new BigNumber(1));
          }
        }

        setSwapOutPrice(newSwapOutPrice)
      } catch (error) {
        if (userWalletAddress.length > 0) {
          ToastWarning('Could not connect with the blockchain to calculate prices.')
        }
      }

    }

    calc()
    setErrorMsg('')
    setSwapOutAmount(Array(infoAHYPE.length - 1).fill(new BigNumber(0)))
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
      setSwapOutPrice(new BigNumber(-1))
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
          corePool.balance(swapInAddress),
          corePool.balance(swapOutAddress),
          corePool.denormalizedWeight(swapInAddress),
          corePool.denormalizedWeight(swapOutAddress),
          corePool.swapFee()
        ])

        const [newSwapOutPrice, newSwapOutAmount] = await Promise.all([
          corePool.spotPrice(swapOutAddress, swapInAddress),
          corePool.calcOutGivenIn(
            swapInTotalPoolBalance,
            swapInDenormalizedWeight,
            swapOutTotalPoolBalance,
            swapOutDenormalizedWeight,
            swapInAmount,
            poolSwapFee
          )
        ])

        setSwapOutAmount([newSwapOutAmount])
        setSwapOutPrice(newSwapOutPrice)

        try {
          if (userWalletAddress.length > 0 && swapInAmount.gt(new BigNumber(0))) {
            await corePool.trySwapExactAmountIn(swapInAddress, swapInAmount, swapOutAddress, userWalletAddress)
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

          if (swapInAmount.gt(swapInBalance)) {
            setErrorMsg('This amount exceeds your balance!')
            return;
          }
        }
      }
      catch(e) {
        ToastWarning('Could not connect with the blockchain to calculate prices.')
      }
    }

    calc()
    setErrorMsg('')
    setSwapOutAmount(Array(infoAHYPE.length - 1).fill(new BigNumber(0)))
  }, [chainId, swapInAmount, swapInAddress, swapOutAddress])

  // calculate withdraw
  React.useEffect(() => {
    if (title !== 'Withdraw' || swapOutAddress === crpPoolAddress) {
      return
    }

    if (chainId !== poolChain.chainId) {
      setSwapOutPrice(new BigNumber(-1))

      if (swapOutAddress === '') {
        setSwapOutAmount(
          Array(infoAHYPE.length - 1).fill(new BigNumber(0))
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
          infoAHYPE.slice(0, -1).map(async item => {
            const swapOutTotalPoolBalance = await corePool.balance(item.address)
            return getWithdrawAmount(
              poolSupply,
              swapInAmount,
              swapOutTotalPoolBalance,
              poolExitFee
            )
          })
        )
        setSwapOutAmount(newSwapOutAmount)

        try {
          if (userWalletAddress.length > 0 && swapInAmount.gt(new BigNumber('0'))) {
            await crpPool.tryExitPool(
              swapInAmount,
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
          corePool.balance(swapOutAddress),
          corePool.denormalizedWeight(swapOutAddress),
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
        const [newSwapOutPrice] = await Promise.all([
          corePool.calcSingleOutGivenPoolIn(
            swapOutTotalPoolBalance,
            swapOutDenormalizedWeight,
            poolSupply,
            poolTotalDenormalizedWeight,
            wei,
            poolSwapFee,
            poolExitFee
          )
        ])
        setSwapOutAmount([SingleSwapOutAmount])
        setSwapOutPrice(newSwapOutPrice)
      }
      catch(e) {
        if (userWalletAddress.length > 0) {
          ToastWarning('Could not connect with the blockchain to calculate prices.')
        }
      }

      try {
        if (userWalletAddress.length > 0 && swapInAmount.gt(new BigNumber('0'))) {
          await crpPool.tryExitswapPoolAmountIn(
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

        if (swapInAmount.gt(swapInBalance)) {
          setErrorMsg('This amount exceeds your balance!')
          return;
        }
      }
    }

    calc()
    setErrorMsg('')
    setSwapOutAmount(Array(infoAHYPE.length - 1).fill(new BigNumber(0)))
  }, [chainId, swapInAmount, swapOutAddress, infoAHYPE])

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
            approved = await ERC20(tokenAddress).allowance(crpPoolAddress, userWalletAddress);
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
    [infoAHYPE]
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
    [crpPoolAddress]
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

      console.log(tabTitleInput.value)
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
            if (approved.value === '0') {
              ERC20(swapInAddressVal).approve(
                crpPoolAddress,
                walletAddress.value,
                approvalCallback(swapInSymbol.value, swapInAddressVal, tabTitle)
              )
              return
            }

            trackBuying(crpPoolAddress, 'aHYPE', amountInUSD, productCategories)
            crpPool.joinswapExternAmountIn(
              swapInAddressVal,
              swapInAmountVal,
              swapOutAmountVal[0].mul(slippageBase).div(slippageExp),
              walletAddress.value,
              investCallback(swapOutSymbol.value, amountInUSD)
            )
            return

          case 'Withdraw':
            trackBuying(crpPoolAddress, 'aHYPE', -1 * amountInUSD, productCategories)

            if (swapOutAddressVal !== '') {
              crpPool.exitswapPoolAmountIn(
                swapOutAddressVal,
                swapInAmountVal,
                swapOutAmountVal[0].mul(slippageBase).div(slippageExp),
                walletAddress.value,
                withdrawCallback(swapInSymbol.value, -1 * amountInUSD)
              )
              return
            }

            corePool.currentTokens()
              .then(tokens => {
                const swapOutAmounts = []

                for (let i = 0; i < tokens.length; i++) {
                  swapOutAmounts.push(
                    swapOutAmountVal[tokenAddress2Index[tokens[i]]]
                      .mul(slippageBase)
                      .div(slippageExp)
                  )
                }

                crpPool.exitPool(
                  swapInAmountVal,
                  swapOutAmounts,
                  walletAddress.value,
                  withdrawCallback(swapInSymbol.value, -1 * amountInUSD)
                )
              })
            return

          case 'Swap':
            if (approved.value === '0') {
              ERC20(swapInAddressVal).approve(
                corePoolAddress,
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
            corePool.swapExactAmountIn(
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

  return (
    <S.FormContainer onSubmit={submitAction}>
      <input type="hidden" name="approved" value={Number(approvals[title][tokenInIndex] === Approval.Approved || 0)} />
      <input type="hidden" name="category" value={title} />
      <input type="hidden" name="swapInAmountInput" value={swapInAmount.toString()} />
      <input type="hidden" name="swapOutAmountInput" value={swapOutAmount.toString()} />
      <input type="hidden" name="swapInAddressInput" value={swapInAddress} />
      <input type="hidden" name="swapOutAddressInput" value={swapOutAddress} />
      <input type="hidden" name="swapInSymbol" value={infoAHYPE[tokenInIndex]?.symbol || ''} />
      <input type="hidden" name="swapOutSymbol" value={infoAHYPE[tokenOutIndex]?.symbol || ''} />
      <input type="hidden" name="walletAddress" value={userWalletAddress} />
      <input type="hidden" name="slippageInput" value={slippage.value} />
      <input type="hidden" name="tabTitleInput" value={title} />
      <input type="hidden" name="amountUSD" value={
        title === "Invest"
          ? Big((swapOutAmount[0] || 0).toString())
            .div(
               Big(10).pow(infoAHYPE[tokenOutIndex]?.decimals.toNumber() || 0)
             )
            .mul(
              Big(priceDollar(swapOutAddress, infoAHYPE))
            )
            .toString()
          : Big((swapInAmount || 0).toString())
            .div(
               Big(10).pow(infoAHYPE[tokenInIndex]?.decimals.toNumber() || 0)
             )
            .mul(
              Big(priceDollar(swapInAddress, infoAHYPE))
            )
            .toString()
      } />

      <S.ErrorTippy content={errorMsg} visible={errorMsg.length > 0}>
          <InputTokens
            clearInput={clearInput}
            inputRef={inputTokenRef}
            actionString={typeAction}
            title={title}
            decimals={infoAHYPE[tokenInIndex] ? infoAHYPE[tokenInIndex].decimals : new BigNumber(18)}
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
                ? [infoAHYPE[infoAHYPE.length - 1]]
                : infoAHYPE
                  .slice(0, -1)
                  .filter((token: { address: string }) => token.address !== swapOutAddress)
            }
            tokenDetails={infoAHYPE[tokenInIndex]}
            setSwapAddress={setSwapInAddress}
          />
      </S.ErrorTippy>

      {title === 'Swap' ?
        <Tippy content="Trade places for swap-in and swap-out token">
          <S.SwapButton type="button" onClick={() => {
            matomoEvent('click-on-button', 'swap-token')
            setSwapInAddress(swapOutAddress)
            setSwapOutAddress(swapInAddress)
          }} >
            <img src="/assets/arrowDown.svg" alt="" />
            <img src="/assets/arrowDown.svg" alt="" />
          </S.SwapButton>
        </Tippy>
        :
        <img src="/assets/arrowDown.svg" alt="" style={{ margin: '12px 0' }} />
      }

      {title === 'Withdraw' && typeWithdrawChecked === 'Best_value' ? (
        <InputBestValue
          poolTokenDetails={infoAHYPE
            .slice(0, -1)
            .filter((token: { address: string }) => token.address !== swapInAddress)}
          infoAHYPE={infoAHYPE}
          swapOutAmount={swapOutAmount}
          swapOutBalance={swapOutBalance}
          setPriceInDollarOnWithdraw={setPriceInDollarOnWithdraw}
        />
      ) : (
        <>
          <InputTokens
            title="Output"
            actionString="Swap to"
            swapBalance={swapOutBalance[0]}
            decimals={infoAHYPE[tokenAddress2Index[swapOutAddress]]?.decimals || new BigNumber(18)}
            swapAmount={swapOutAmount[0]}
            // Text Input
            disabled="This is an estimation of how much you'll receive, it'll depend on the state of the blockchain when the order executes"
            // Select Input
            poolTokens={
              title === 'Invest'
                ? [infoAHYPE[infoAHYPE.length - 1]]
                : infoAHYPE
                  .slice(0, -1)
                  .filter((token: { address: string }) => token.address !== swapInAddress)
            }
            tokenDetails={infoAHYPE[tokenOutIndex]}
            setSwapAddress={setSwapOutAddress}
          />
          <S.ExchangeRate>
            <S.SpanLight>Exchange rate:</S.SpanLight>
            <S.SpanLight>
              {swapOutPrice.lt(new BigNumber(0)) || !infoAHYPE[tokenOutIndex]?.decimals
                ? '...'
                : `1 ${infoAHYPE[tokenInIndex]?.symbol} = ${BNtoDecimal(
                  swapOutPrice,
                  infoAHYPE[tokenOutIndex]?.decimals.toNumber()
                )} ${infoAHYPE[tokenOutIndex]?.symbol}`}
            </S.SpanLight>
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
        chainId === poolChain.chainId || (walletConnect && chainId === 43114) ? (
          <Button
            className="btn-submit"
            onClick={() => setTimeout(() => clearInput(), 3000)}
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
                swapInAmount.toString() !== '0' ?
                  title === "Withdraw" ?
                    typeWithdrawChecked === "Best_value" ?
                      `${title} ${'$' + priceInDollarOnWithdraw}`
                    :
                      `${title} ${'$' + BNtoDecimal(
                        Big((swapOutAmount[0] || 0).toString())
                          .mul(Big(priceDollar(swapOutAddress, infoAHYPE)))
                          .div(Big(10).pow(18)),
                        18,
                        2,
                        2
                      )}`
                  :
                    `${title} ${'$' + BNtoDecimal(
                      Big((swapInAmount || 0).toString())
                        .mul(Big(priceDollar(swapInAddress, infoAHYPE)))
                        .div(Big(10).pow(18)),
                      18,
                      2,
                      2
                    )}`
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

      <ModalWalletConnect
        modalOpen={isModalWallet}
        setModalOpen={setIsModaWallet}
      />
    </S.FormContainer >
  )
}

export default Form
