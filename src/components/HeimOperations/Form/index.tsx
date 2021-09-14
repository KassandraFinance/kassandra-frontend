import React from 'react'
import BigNumber from 'bn.js'
import { TransactionReceipt } from 'web3-core'

import { HeimCRPPOOL, HeimCorePool } from '../../../constants/tokenAddresses'

import useConnect from '../../../hooks/useConnect'
import useCRPContract from '../../../hooks/useCRPContract'
import useERC20Contract from '../../../hooks/useERC20Contract'
import usePoolContract from '../../../hooks/usePoolContract'

import InputTokens from './InputTokens'
import InputDefault from './InputDefault'

import { ToastSuccess, ToastError } from '../../Toastify/toast'

import { FormContainer, Button, SpanLight, ExchangeRate } from './styles'
import { BNtoDecimal, wei } from '../../../utils/numerals'

interface IFormProps {
  typeAction: string
  title: string
  isLogged: boolean
}

interface Address2Index {
  [key: string]: number
}

export interface TokenDetails {
  address: string
  name: string
  symbol: string
  decimals: BigNumber
}

const Form = ({ typeAction, title, isLogged }: IFormProps) => {
  const {
    approve,
    decimals,
    getAllowance,
    getBalance,
    getTotalSupply,
    name,
    symbol,
  } = useERC20Contract()
  const {
    balanceToken,
    calcOutGivenIn,
    calcPoolOutGivenSingleIn,
    calcSingleOutGivenPoolIn,
    denormalizedWeight,
    getCurrentTokens,
    getSpotPrice,
    swapExactAmountIn,
    swapFee,
    totalDenormalizedWeight,
  } = usePoolContract()
  const {
    connect,
    userWalletAddress,
  } = useConnect()
  const {
    exitPool,
    exitswapPoolAmountIn,
    joinswapExternAmountIn,
  } = useCRPContract()

  const [poolTokens, setPoolTokens] = React.useState<string[]>([])
  const [poolTokenDetails, setPoolTokensDetails] = React.useState<TokenDetails[]>([])
  const [tokenAddress2Index, setTokenAddress2Index] = React.useState<Address2Index>({})
  const [isApproved, setIsApproved] = React.useState<boolean[]>([])
  const [approvalCheck, setApprovalCheck] = React.useState(0)

  const [swapInAddress, setSwapInAddress] = React.useState('')
  const [swapInAmount, setSwapInAmount] = React.useState(new BigNumber(0))
  const [swapInBalance, setSwapInBalance] = React.useState(new BigNumber(-1))

  const [swapOutAddress, setSwapOutAddress] = React.useState('')
  const [swapOutPrice, setSwapOutPrice] = React.useState(new BigNumber(-1))
  const [swapOutAmount, setSwapOutAmount] = React.useState([new BigNumber(0)])
  const [swapOutBalance, setSwapOutBalance] = React.useState([new BigNumber(-1)])

  // get tokens
  React.useEffect(() => {
    getCurrentTokens(HeimCorePool)
      .then((newPoolTokens) => {
        setPoolTokens(newPoolTokens)
        setTokenAddress2Index(newPoolTokens.reduce((acc, cur, i) => ({[cur]: i, ...acc}), {
          [HeimCRPPOOL]: newPoolTokens.length
        }))
      })
  }, [])

  // set "swap" tokens
  React.useEffect(() => {
    let newSwapInAddress = ''
    let newSwapOutAddress = ''

    /* eslint-disable prefer-destructuring */
    switch (title) {
      case 'Invest':
        newSwapInAddress = poolTokens[0] || ''
        newSwapOutAddress = HeimCRPPOOL
        break
      case 'Withdraw':
        newSwapInAddress = HeimCRPPOOL
        newSwapOutAddress = ''
        break
      case 'Swap':
        newSwapInAddress = poolTokens[0] || ''
        newSwapOutAddress = poolTokens[1] || ''
        break
      default:
    }
    /* eslint-disable prefer-destructuring */

    setSwapInAddress(newSwapInAddress)
    setSwapOutAddress(newSwapOutAddress)
  }, [title, poolTokens])

  // get contract approval of tokens
  React.useEffect(() => {
    if (title === 'Withdraw') {
      setIsApproved(Array(poolTokens.length).fill(true))
      return
    }

    const calc = async () => {
      const newApprovals = []

      for (let i = 0; i < poolTokens.length; i += 1) {
        newApprovals.push(getAllowance(title === 'Invest' ? HeimCRPPOOL : HeimCorePool, poolTokens[i]))
      }

      setIsApproved(await Promise.all(newApprovals))
    }

    setIsApproved([])
    calc()
  }, [title, poolTokens, approvalCheck])

  // get details of tokens
  React.useEffect(() => {
    const calc = async () => {
      const newAddresses: string[] = []
      const newNames: Promise<string>[] = []
      const newSymbols: Promise<string>[] = []
      const newDecimals: Promise<BigNumber>[] = []

      for (let i = 0; i < poolTokens.length; i += 1) {
        newAddresses.push(poolTokens[i])
        newNames.push(name(poolTokens[i]))
        newSymbols.push(symbol(poolTokens[i]))
        newDecimals.push(decimals(poolTokens[i]))
      }

      newAddresses.push(HeimCRPPOOL)
      newNames.push(name(HeimCRPPOOL))
      newSymbols.push(symbol(HeimCRPPOOL))
      newDecimals.push(decimals(HeimCRPPOOL))

      setPoolTokensDetails(
        await Promise.all(Array(poolTokens.length + 1).fill(0).map(async (_, i) => ({
          address: newAddresses[i],
          name: await newNames[i],
          symbol: await newSymbols[i],
          decimals: await newDecimals[i],
        }))
      ))
    }

    setPoolTokensDetails([])
    calc()
  }, [poolTokens])

  // get balance of swap in token
  React.useEffect(() => {
    setSwapInBalance(new BigNumber(-1))
    getBalance(swapInAddress, userWalletAddress)
      .then((newBalance) => setSwapInBalance(newBalance))
  }, [swapInAddress, userWalletAddress])

  // get balance of swap out token
  React.useEffect(() => {
    if (userWalletAddress === '') {
      return
    }

    setSwapOutBalance([new BigNumber(-1)])

    if (swapOutAddress === '' && title === 'Withdraw') {
      (async () => {
        const newSwapOutBalance = await Promise.all(
          poolTokens.map(async (tokenAddress) =>
            getBalance(tokenAddress, userWalletAddress)
          )
        )

        setSwapOutBalance(newSwapOutBalance)
      })()
      return
    }

    getBalance(swapOutAddress, userWalletAddress)
      .then((newBalance) => setSwapOutBalance([newBalance]))
  }, [title, swapOutAddress, userWalletAddress])

  // calculate investment
  React.useEffect(() => {
    if (title !== 'Invest' || swapInAddress.length === 0) {
      return
    }

    const calc = async () => {
      const [
        swapInTotalPoolBalance,
        swapInDenormalizedWeight,
        poolSupply,
        poolTotalDenormalizedWeight,
        poolSwapFee,
      ] = await Promise.all([
        balanceToken(HeimCorePool, swapInAddress),
        denormalizedWeight(HeimCorePool, swapInAddress),
        getTotalSupply(HeimCRPPOOL),
        totalDenormalizedWeight(HeimCorePool),
        swapFee(HeimCorePool),
      ])

      const [newSwapOutAmount, newSwapOutPrice] = await Promise.all([
        calcPoolOutGivenSingleIn(
          HeimCorePool,
          swapInTotalPoolBalance,
          swapInDenormalizedWeight,
          poolSupply,
          poolTotalDenormalizedWeight,
          swapInAmount,
          poolSwapFee,
        ),
        calcPoolOutGivenSingleIn(
          HeimCorePool,
          swapInTotalPoolBalance,
          swapInDenormalizedWeight,
          poolSupply,
          poolTotalDenormalizedWeight,
          wei,
          poolSwapFee,
        ),
      ])

      setSwapOutAmount([newSwapOutAmount])
      setSwapOutPrice(newSwapOutPrice)
    }

    setSwapOutAmount([new BigNumber(0)])
    setSwapOutPrice(new BigNumber(-1))
    calc()
  }, [title, swapInAmount, swapInAddress])

  // calculate swap
  React.useEffect(() => {
    if (title !== 'Swap' || swapInAddress.length === 0 || swapOutAddress.length === 0 ) {
      return
    }

    const calc = async () => {
      const [
        swapInTotalPoolBalance,
        swapOutTotalPoolBalance,
        swapInDenormalizedWeight,
        swapOutDenormalizedWeight,
        poolSwapFee,
      ] = await Promise.all([
        balanceToken(HeimCorePool, swapInAddress),
        balanceToken(HeimCorePool, swapOutAddress),
        denormalizedWeight(HeimCorePool, swapInAddress),
        denormalizedWeight(HeimCorePool, swapOutAddress),
        swapFee(HeimCorePool),
      ])

      const [newSwapOutPrice, newSwapOutAmount] = await Promise.all([
        getSpotPrice(HeimCorePool, swapOutAddress, swapInAddress),
        calcOutGivenIn(
          HeimCorePool, 
          swapInTotalPoolBalance,
          swapInDenormalizedWeight,
          swapOutTotalPoolBalance,
          swapOutDenormalizedWeight,
          swapInAmount,
          poolSwapFee
        ),
      ])

      setSwapOutAmount([newSwapOutAmount])
      setSwapOutPrice(newSwapOutPrice)
    }

    setSwapOutAmount([new BigNumber(0)])
    setSwapOutPrice(new BigNumber(-1))
    calc()
  }, [title, swapOutAddress, swapInAddress, swapInAmount])

  // calculate withdraw
  React.useEffect(() => {
    if (title !== 'Withdraw') {
      return
    }

    const getWithdrawAmount = (supplyPoolToken: BigNumber, amountPoolToken: BigNumber, balanceOut: BigNumber): BigNumber => {
      if (supplyPoolToken.toString(10) === "0") {
        return new BigNumber(0);
      }

      return amountPoolToken
        .mul(new BigNumber(97))
        .mul(balanceOut)
        .div(supplyPoolToken)
        .div(new BigNumber(100))
    }

    const calc = async () => {
      const poolSupply = await getTotalSupply(HeimCRPPOOL)

      if (swapOutAddress === '') {
        const newSwapOutAmount = await Promise.all(
          poolTokens.map(async (tokenAddress) => {
            const swapOutTotalPoolBalance = await balanceToken(HeimCorePool, tokenAddress)
            return getWithdrawAmount(poolSupply, swapInAmount, swapOutTotalPoolBalance)
          })
        )
        setSwapOutAmount(newSwapOutAmount)
        return
      }

      const [
        swapOutTotalPoolBalance,
        swapOutDenormalizedWeight,
        poolTotalDenormalizedWeight,
        poolSwapFee,
      ] = await Promise.all([
        balanceToken(HeimCorePool, swapOutAddress),
        denormalizedWeight(HeimCorePool, swapOutAddress),
        totalDenormalizedWeight(HeimCorePool),
        swapFee(HeimCorePool),
      ])

      const SingleSwapOutAmount = await calcSingleOutGivenPoolIn(
        HeimCorePool,
        swapOutTotalPoolBalance,
        swapOutDenormalizedWeight,
        poolSupply,
        poolTotalDenormalizedWeight,
        swapInAmount,
        poolSwapFee,
      )

      const newSwapOutAmount = Array(poolTokens.length).fill(new BigNumber(0))
      newSwapOutAmount[tokenAddress2Index[swapOutAddress]] = SingleSwapOutAmount
      setSwapOutAmount(newSwapOutAmount)
    }

    calc()
    setSwapOutAmount(Array(poolTokens.length).fill(new BigNumber(0)))
  }, [title, swapInAmount, swapOutAddress, tokenAddress2Index])

  const tokenInIndex = tokenAddress2Index[swapInAddress]
  const tokenOutIndex = tokenAddress2Index[swapOutAddress]

  const asyncExecute = React.useCallback((msg: string, set: () => void) => (
    (txReceipt?: TransactionReceipt, error?: Error) => {
      if (error || !txReceipt) {
        ToastError('Could not approve contract, try again.')
        return
      }
      if (!txReceipt.status) {
        ToastError('Transaction failed!')
        return
      }
      ToastSuccess(msg)
      set()
    }
  ), [])

  const submitAction = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      const {
        approved,
        category,
        swapInAmountInput,
        swapInAddressInput,
        swapOutAddressInput,
      } = e.target as HTMLFormElement & {
        approved: HTMLInputElement
        category: HTMLInputElement
        swapInAmountInput: HTMLInputElement
        swapInAddressInput: HTMLInputElement
        swapOutAddressInput: HTMLInputElement
      }

      const swapInAmountVal = new BigNumber(swapInAmountInput.value)
      const swapInAddressVal = swapInAddressInput.value
      const swapOutAddressVal = swapOutAddressInput.value

      try {
        switch (category.value) {
          case 'Invest':
            if (approved.value === '0') {
              approve(HeimCRPPOOL, swapInAddressVal, asyncExecute(
                'Contract approval complete!',
                () => setApprovalCheck((cur) => cur + 1)
              ))
              return
            }

            joinswapExternAmountIn(HeimCRPPOOL, swapInAddressVal, swapInAmountVal)
            return

          case 'Withdraw':
            if (swapOutAddressVal !== '') {
              exitswapPoolAmountIn(HeimCRPPOOL, swapOutAddressVal, swapInAmountVal)
              return
            }

            exitPool(HeimCRPPOOL, swapInAmountVal, Array(poolTokens.length).fill(new BigNumber(0)))
            return

          case 'Swap':
            if (approved.value === '0') {
              approve(HeimCorePool, swapInAddressVal, asyncExecute(
                'Contract approval complete!',
                () => setApprovalCheck((cur) => cur + 1)
              ))
              return
            }

            swapExactAmountIn(HeimCorePool, swapInAddressVal, swapInAmountVal, swapOutAddressVal)
            return

          default:
        }
      } catch (error) {
        ToastError('Could not connect with the Blockchain!')
      }
    }, []
  )

  return (
    <FormContainer onSubmit={submitAction}>
      <input type="hidden" name="approved" value={Number(isApproved[tokenInIndex])} />
      <input type="hidden" name="category" value={title} />
      <input type="hidden" name="swapInAmountInput" value={swapInAmount.toString()} />
      <input type="hidden" name="swapInAddressInput" value={swapInAddress} />
      <input type="hidden" name="swapOutAddressInput" value={swapOutAddress} />
      <InputTokens
        actionString={typeAction}
        poolTokens={
          title === 'Withdraw'
            ? poolTokenDetails.filter((token) => token.address === swapInAddress)
            : poolTokenDetails.slice(0, -1).filter((token) => token.address !== swapOutAddress)
        }
        swapInBalance={swapInBalance}
        setSwapInAmount={setSwapInAmount}
        setSwapInAddress={setSwapInAddress}
      />
      {title === 'Withdraw'
        ? poolTokens.map((tokenOutAddress, i) =>
          <InputDefault
            poolTokens={poolTokenDetails.filter((token) => token.address === tokenOutAddress)}
            isMax={swapOutAddress === tokenOutAddress}
            swapOutAmount={swapOutAmount[i] || new BigNumber(0)}
            swapOutBalance={swapOutBalance[i] || new BigNumber(-1)}
            setSwapOutAddress={setSwapOutAddress}
          />
        )
        : (<>
          <InputDefault
            poolTokens={
              title === 'Invest'
                ? poolTokenDetails.filter((token) => token.address === swapOutAddress)
                : poolTokenDetails.slice(0, -1).filter((token) => token.address !== swapInAddress)
            }
            isMax={null}
            swapOutAmount={swapOutAmount[0]}
            swapOutBalance={swapOutBalance[0]}
            setSwapOutAddress={setSwapOutAddress}
          />
          <ExchangeRate>
            <SpanLight>Exchange rate:</SpanLight>
            <SpanLight>
              {swapOutPrice < new BigNumber(0)
                ? '...'
                : `1 ${poolTokenDetails[tokenInIndex].symbol} = ${
                    BNtoDecimal(swapOutPrice, poolTokenDetails[tokenOutIndex].decimals)} ${poolTokenDetails[tokenOutIndex].symbol
                  }`}
            </SpanLight>
          </ExchangeRate>
        </>)
      }
      {isLogged ?
        <Button type="submit">{isApproved[tokenInIndex] ? title : "Approve"}</Button>
        :
        <Button type="button" onClick={connect}>Connect Wallet</Button>
      }
    </FormContainer>
  )
}

export default Form
