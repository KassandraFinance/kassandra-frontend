/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import useSWR from 'swr'
import { request } from 'graphql-request'
import BigNumber from 'bn.js'
import Big from 'big.js'
import { useMatomo } from '@datapunt/matomo-tracker-react'

import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'

import { TokenDetails } from '../../../store/modules/poolTokens/types'
import { actionGetPoolTokens } from '../../../store/modules/poolTokens/actions'

import { SUBGRAPH_URL, HeimCRPPOOL } from '../../../constants/tokenAddresses'

import useConnect from '../../../hooks/useConnect'
import useCRPContract from '../../../hooks/useCRPContract'
import useERC20Contract, { ERC20 } from '../../../hooks/useERC20Contract'
import usePoolContract from '../../../hooks/usePoolContract'
import useMatomoEcommerce from '../../../hooks/useMatomoEcommerce'

import Button from '../../Button'
import ModalWalletConnect from '../../ModalWalletConnect'

import InputTokens from './InputTokens'
import InputDefault from './InputDefault'
import InputBestValue from './InputBestValue'

import { ToastSuccess, ToastError, ToastWarning } from '../../Toastify/toast'

import web3 from '../../../utils/web3'
import { priceDollar } from '../../../utils/priceDollar'
import { BNtoDecimal, wei } from '../../../utils/numerals'
import waitTransaction, { MetamaskError, TransactionCallback } from '../../../utils/txWait'

import * as S from './styles'
import { GET_INFO_AHYPE } from '../graphql'

interface IFormProps {
  typeAction: string;
  title: string;
  typeWithdrawChecked: string;
  crpPoolAddress: string
  corePoolAddress: string
  productCategories: string[]
}

interface Address2Index {
  [key: string]: number;
}

const Form = ({ 
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
  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)
  const { connect } = useConnect()
  const { trackBuying, trackBought, trackCancelBuying } = useMatomoEcommerce();

  const [tokenAddress2Index, setTokenAddress2Index] = React.useState<Address2Index>({})
  const [isApproved, setIsApproved] = React.useState<boolean[]>([])
  const [approvalCheck, setApprovalCheck] = React.useState(0)

  const [fees, setFees] = React.useState({
    exit: '...',
    swap: '...'
  })
  const [isReload, setIsReload] = React.useState<boolean>(false)

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
          symbol: string 
        }; 
        weight_goal_normalized: string
        weight_normalized: string
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
        exit: (data.pool.fee_exit * 100).toFixed(2),
        swap: (data.pool.fee_swap * 100).toFixed(2)
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
        newSwapOutAddress = typeWithdrawChecked === "Single_asset" ? infoAHYPE[0].address : ''
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
    if (title === 'Withdraw') {
      setIsApproved(Array(infoAHYPE.length + 1).fill(true))
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

      setIsApproved(await Promise.all(newApprovals))
    }
    
    setIsReload(!isReload)
    setIsApproved([])
    calc()
  }, [title, infoAHYPE.length, approvalCheck, userWalletAddress])

  // get balance of swap in token
  React.useEffect(() => {
    if (swapInAddress.length === 0 || userWalletAddress.length === 0) {
      return
    }

    setSwapInBalance(new BigNumber(-1))

    const token = ERC20(swapInAddress)
    token
      .balance(userWalletAddress)
      .then(newBalance => setSwapInBalance(newBalance))

  }, [swapInAddress, userWalletAddress, title, infoAHYPE, swapOutAddress])

  // get balance of swap out token
  React.useEffect(() => {
    if (userWalletAddress.length === 0) {
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

  }, [userWalletAddress, infoAHYPE, swapInAddress, swapOutAddress])

  React.useEffect(() => {
    const tokens = title === "Withdraw" ? infoAHYPE.length : 1
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
          const newSwapOutAmount = await corePool.calcPoolOutGivenSingleIn(
            swapInTotalPoolBalance,
            swapInDenormalizedWeight,
            poolSupply,
            poolTotalDenormalizedWeight,
            swapInAmount,
            poolSwapFee
          )
          setSwapOutAmount([newSwapOutAmount])
        } catch (error) {
          ToastWarning("The amount can't be more than half of what's already in the pool! The transaction will revert!")
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
        ToastWarning("Could not connect with the blockchain to calculate prices.")
      }

    }

    calc()
  }, [swapInAmount, swapInAddress])

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
      }
      catch(e) {
        ToastWarning("Could not connect with the blockchain to calculate prices.")
      }
    }

    calc()
  }, [swapInAmount, swapInAddress, swapOutAddress])

  // calculate withdraw
  React.useEffect(() => {
    if (title !== 'Withdraw' || swapOutAddress === crpPoolAddress) {
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

      return amountPoolToken
        .mul(wei.sub(exitFee).mul(new BigNumber(100)).div(wei))
        .mul(balanceOut)
        .div(supplyPoolToken)
        .div(new BigNumber(100))
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
        ToastWarning("Could not connect with the blockchain to calculate prices.")
      }
    }

    calc()
  }, [swapInAmount, swapOutAddress, infoAHYPE])

  const tokenInIndex = tokenAddress2Index[swapInAddress]
  const tokenOutIndex = tokenAddress2Index[swapOutAddress]
  
  const approvalCallback = React.useCallback(
    (tokenSymbol: string): TransactionCallback => {
      return async (error: MetamaskError, txHash: string) => {
        if (error) {
          if (error.code === 4001) {
            ToastError(`Approval of ${tokenSymbol} cancelled`)
            return
          }

          ToastError(`Failed to approve ${tokenSymbol}. Please try again later.`)
          return
        }

        ToastWarning(`Waiting approval of ${tokenSymbol}...`)
        const txReceipt = await waitTransaction(txHash)

        if (txReceipt.status) {
          ToastSuccess(`Approval of ${tokenSymbol} confirmed`)
          setApprovalCheck(cur => cur + 1)
          return
        }
      }
    },
    []
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
        swapInAddressInput,
        swapOutAddressInput,
        swapInSymbol,
        swapOutSymbol,
        walletAddress,
        tokensLength,
        amountUSD
      } = e.target as HTMLFormElement & {
        approved: HTMLInputElement
        category: HTMLInputElement
        swapInAmountInput: HTMLInputElement
        swapInAddressInput: HTMLInputElement
        swapOutAddressInput: HTMLInputElement
        swapInSymbol: HTMLInputElement
        swapOutSymbol: HTMLInputElement
        walletAddress: HTMLInputElement
        tokensLength: HTMLInputElement
        amountUSD: HTMLInputElement
      }

      const amountInUSD = parseFloat(amountUSD.value)
      const swapInAmountVal = new BigNumber(swapInAmountInput.value)
      const swapInAddressVal = swapInAddressInput.value
      const swapOutAddressVal = swapOutAddressInput.value

      try {
        switch (category.value) {
          case 'Invest':
            if (approved.value === '0') {
              ERC20(swapInAddressVal).approve(
                crpPoolAddress,
                walletAddress.value,
                approvalCallback(swapInSymbol.value)
              )
              return
            }

            trackBuying(crpPoolAddress, 'aHYPE', amountInUSD, productCategories)
            crpPool.joinswapExternAmountIn(
              swapInAddressVal,
              swapInAmountVal,
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
                walletAddress.value,
                withdrawCallback(swapInSymbol.value, -1 * amountInUSD)
              )
              return
            }

            crpPool.exitPool(
              swapInAmountVal,
              Array(parseInt(tokensLength.value)).fill(new BigNumber(0)),
              walletAddress.value,
              withdrawCallback(swapInSymbol.value, -1 * amountInUSD)
            )
            return

          case 'Swap':
            if (approved.value === '0') {
              ERC20(swapInAddressVal).approve(
                corePoolAddress,
                walletAddress.value,
                approvalCallback(swapInSymbol.value)
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
              walletAddress.value,
              swapCallback(swapInSymbol.value, swapOutSymbol.value)
            )
            return

          default:
        }
      } catch (error) {
        ToastError('Could not connect with the Blockchain!')
      }
    }, [])

  return (
    <S.FormContainer onSubmit={submitAction}>
      <input type="hidden" name="approved" value={Number(isApproved[tokenInIndex] || 0)} />
      <input type="hidden" name="category" value={title} />
      <input type="hidden" name="swapInAmountInput" value={swapInAmount.toString()} />
      <input type="hidden" name="swapInAddressInput" value={swapInAddress} />
      <input type="hidden" name="swapOutAddressInput" value={swapOutAddress} />
      <input type="hidden" name="swapInSymbol" value={infoAHYPE[tokenInIndex]?.symbol || ''} />
      <input type="hidden" name="swapOutSymbol" value={infoAHYPE[tokenOutIndex]?.symbol || ''} />
      <input type="hidden" name="walletAddress" value={userWalletAddress} />
      <input type="hidden" name="tokensLength" value={infoAHYPE.length - 1} />
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
      <InputTokens
        clearInput={clearInput}
        inputRef={inputTokenRef}
        actionString={typeAction}
        poolTokens={
          title === 'Withdraw'
            ? [infoAHYPE[infoAHYPE.length - 1]]
            : infoAHYPE
              .slice(0, -1)
              .filter((token: { address: string }) => token.address !== swapOutAddress)
        }
        title={title}
        decimals={infoAHYPE[tokenInIndex] ? infoAHYPE[tokenInIndex].decimals : new BigNumber(18)}
        swapInBalance={swapInBalance}
        swapInAmount={swapInAmount}
        swapInAddress={swapInAddress}
        tokenDetails={infoAHYPE[tokenInIndex]}
        setSwapInAmount={setSwapInAmount}
        setSwapOutAmount={setSwapOutAmount}
        setSwapInAddress={setSwapInAddress}
      />

      {title === 'Swap' ?
        <S.SwapButton type="button" title="Trade places for swap-in and swap-out token" onClick={() => {
          matomoEvent('click-on-button', 'swap-token')
          setSwapInAddress(swapOutAddress)
          setSwapOutAddress(swapInAddress)
        }} >
          <img src="/assets/arrowDown.svg" alt="Trade places for swap-in and swap-out token" />
          <img src="/assets/arrowDown.svg" alt="" />
        </S.SwapButton>
        :
        <img src="/assets/arrowDown.svg" alt="" style={{ margin: '12px 0' }} />
      }
      
      {title === 'Withdraw' ? (
        typeWithdrawChecked === 'Best_value' ?
        <>
          <InputBestValue
            poolTokenDetails={infoAHYPE
              .slice(0, -1)
              .filter((token: { address: string }) => token.address !== swapInAddress)}
            infoAHYPE={infoAHYPE}
            swapOutAmount={swapOutAmount}
            swapOutBalance={swapOutBalance}
            setPriceInDollarOnWithdraw={setPriceInDollarOnWithdraw}
          />
          <S.ExchangeRate>
            <S.SpanLight>Withdrawal fee:</S.SpanLight>
            <S.SpanLight>{fees.exit}%</S.SpanLight>
          </S.ExchangeRate>
        </>
          :
          <>
            <InputDefault
              decimals={infoAHYPE[tokenAddress2Index[swapOutAddress]]?.decimals || new BigNumber(0)}
              poolTokens={infoAHYPE
                .slice(0, -1)
                .filter((token: { address: string }) => token.address !== swapInAddress)}
              tokenDetails={infoAHYPE[tokenOutIndex]}
              isMax={null}
              swapOutAmount={swapOutAmount[0]}
              swapOutBalance={swapOutBalance[0]}
              swapInAddress={swapInAddress}
              setSwapOutAddress={setSwapOutAddress}
            />
            <S.ExchangeRate>
              <S.SpanLight>Exchange rate:</S.SpanLight>
              <S.SpanLight>
                {swapOutPrice < new BigNumber(0)
                  ? '...'
                  : `1 ${infoAHYPE[tokenInIndex]?.symbol} = ${BNtoDecimal(
                    swapOutPrice,
                    infoAHYPE[tokenOutIndex]?.decimals.toNumber()
                  )} ${infoAHYPE[tokenOutIndex]?.symbol}`}
              </S.SpanLight>
            </S.ExchangeRate>
            <S.ExchangeRate>
              <S.SpanLight>Withdrawal fee:</S.SpanLight>
              <S.SpanLight>{fees.exit}%</S.SpanLight>
            </S.ExchangeRate>
          </>
        ) : (
        <>
          <InputDefault
            decimals={infoAHYPE[tokenAddress2Index[swapOutAddress]]?.decimals || new BigNumber(0)}
            poolTokens={title === 'Invest'
              ? [infoAHYPE[infoAHYPE.length - 1]]
              : infoAHYPE
                .slice(0, -1)
                .filter((token: { address: string }) => token.address !== swapInAddress)}
            tokenDetails={infoAHYPE[tokenOutIndex]}
            isMax={null}
            swapOutAmount={swapOutAmount[0]}
            swapOutBalance={swapOutBalance[0]}
            swapInAddress={swapInAddress}
            setSwapOutAddress={setSwapOutAddress}
          />
          <S.ExchangeRate>
            <S.SpanLight>Exchange rate:</S.SpanLight>
            <S.SpanLight>
              {swapOutPrice.lt(new BigNumber(0))
                ? '...'
                : `1 ${infoAHYPE[tokenInIndex]?.symbol} = ${BNtoDecimal(
                  swapOutPrice,
                  infoAHYPE[tokenOutIndex]?.decimals.toNumber()
                )} ${infoAHYPE[tokenOutIndex]?.symbol}`}
            </S.SpanLight>
          </S.ExchangeRate>
          <S.ExchangeRate>
            <S.SpanLight>{title} fee:</S.SpanLight>
            <S.SpanLight>{title === 'Invest' ? 0 : fees.swap}%</S.SpanLight>
          </S.ExchangeRate>
        </>
      )}
      {userWalletAddress ? (
        <Button
          className="btn-submit"
          onClick={() => setTimeout(() => clearInput(), 3000)}
          backgroundPrimary
          disabledNoEvent={swapInAmount.toString() === "0" && isApproved[tokenInIndex]}
          fullWidth
          type="submit"
          text={
            isApproved[tokenInIndex] ?
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
              'Approve'
          }
        />
        ) : (
        web3.currentProvider === null ?
          <Button
            className="btn-submit"
            as='a'
            backgroundPrimary
            fullWidth
            href="https://metamask.io/download.html"
            target="_blank"
            text='Install MetaMask'
          />
          :
          <Button
            className="btn-submit"
            backgroundPrimary
            fullWidth
            type="button"
            onClick={() => setIsModaWallet(true)}
            text='Connect Wallet'
          />
        )
      }
      <ModalWalletConnect
        modalOpen={isModalWallet}
        setModalOpen={setIsModaWallet}
        connect={connect}
      />
    </S.FormContainer >
  )
}

export default Form
