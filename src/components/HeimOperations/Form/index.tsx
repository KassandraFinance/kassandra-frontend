import React from 'react'
import BigNumber from 'bn.js'
import { TransactionReceipt } from 'web3-core'
import { EventData } from 'web3-eth-contract'
import Button from '../../Button'

import { HeimCRPPOOL, HeimCorePool } from '../../../constants/tokenAddresses'

import useConnect from '../../../hooks/useConnect'
import useCRPContract from '../../../hooks/useCRPContract'
import useERC20Contract, { ERC20 } from '../../../hooks/useERC20Contract'
import usePoolContract from '../../../hooks/usePoolContract'

import InputTokens from './InputTokens'
import InputDefault from './InputDefault'

import { ToastSuccess, ToastError } from '../../Toastify/toast'

import { FormContainer, SpanLight, ExchangeRate } from './styles'
import { BNtoDecimal, wei } from '../../../utils/numerals'

interface IFormProps {
  typeAction: string;
  title: string;
  isLogged: boolean;
}

interface Address2Index {
  [key: string]: number;
}

export interface TokenDetails {
  address: string;
  name: string;
  symbol: string;
  decimals: BigNumber;
}

const Form = ({ typeAction, title, isLogged }: IFormProps) => {
  const corePoolToken = useERC20Contract(HeimCorePool)
  const crpPoolToken = useERC20Contract(HeimCRPPOOL)
  const corePool = usePoolContract(HeimCorePool)
  const crpPool = useCRPContract(HeimCRPPOOL)
  const { connect, userWalletAddress } = useConnect()

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
    corePool.currentTokens().then(newPoolTokens => {
      setPoolTokens(newPoolTokens)
      setTokenAddress2Index(
        newPoolTokens.reduce((acc, cur, i) => ({ [cur]: i, ...acc }), {
          [HeimCRPPOOL]: newPoolTokens.length
        })
      )
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
        newApprovals.push(
          (title === 'Invest' ? crpPoolToken : corePoolToken).allowance(
            poolTokens[i],
            userWalletAddress
          )
        )
      }

      setIsApproved(await Promise.all(newApprovals))
    }

    setIsApproved([])
    calc()
  }, [title, poolTokens, approvalCheck, userWalletAddress])

  // get details of tokens
  React.useEffect(() => {
    const calc = async () => {
      const newAddresses: string[] = []
      const newNames: Promise<string>[] = []
      const newSymbols: Promise<string>[] = []
      const newDecimals: Promise<BigNumber>[] = []

      for (let i = 0; i < poolTokens.length; i += 1) {
        const token = ERC20(poolTokens[i])
        newAddresses.push(poolTokens[i])
        newNames.push(token.name())
        newSymbols.push(token.symbol())
        newDecimals.push(token.decimals())
      }

      newAddresses.push(HeimCRPPOOL)
      newNames.push(crpPoolToken.name())
      newSymbols.push(crpPoolToken.symbol())
      newDecimals.push(crpPoolToken.decimals())

      setPoolTokensDetails(
        await Promise.all(
          Array(poolTokens.length + 1)
            .fill(0)
            .map(async (_, i) => ({
              address: newAddresses[i],
              name: await newNames[i],
              symbol: await newSymbols[i],
              decimals: await newDecimals[i]
            }))
        )
      )
    }

    setPoolTokensDetails([])
    calc()
  }, [poolTokens])

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

    const balanceSub = token.events.Transfer(
      (error: Error, event: EventData) => {
        const spender = event.returnValues[0]
        const receiver = event.returnValues[1]
        const value = new BigNumber(event.returnValues[2])

        if (spender === userWalletAddress) {
          setSwapInBalance(cur => cur.sub(value))
        } else if (receiver === userWalletAddress) {
          setSwapInBalance(cur => cur.add(value))
        }
      }
    )

    return () => {
      balanceSub.unsubscribe()
    }
  }, [swapInAddress, userWalletAddress])

  // get balance of swap out token
  React.useEffect(() => {
    if (userWalletAddress.length === 0) {
      return
    }

    setSwapOutBalance([new BigNumber(-1)])

    if (title === 'Withdraw') {
      const calc = async () => {
        const newSwapOutBalance = await Promise.all(
          poolTokens.map(async tokenAddress => {
            const token = ERC20(tokenAddress)
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

    const balanceSub = token.events.Transfer(
      (error: Error, event: EventData) => {
        const spender = event.returnValues[0]
        const receiver = event.returnValues[1]
        const value = new BigNumber(event.returnValues[2])

        if (spender === userWalletAddress) {
          setSwapOutBalance(cur => [cur[0].sub(value)])
        } else if (receiver === userWalletAddress) {
          setSwapOutBalance(cur => [cur[0].add(value)])
        }
      }
    )

    return () => {
      balanceSub.unsubscribe()
    }
  }, [title, swapOutAddress, userWalletAddress, poolTokens])

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
        poolSwapFee
      ] = await Promise.all([
        corePool.balance(swapInAddress),
        corePool.denormalizedWeight(swapInAddress),
        crpPoolToken.totalSupply(),
        corePool.totalDenormalizedWeight(),
        corePool.swapFee()
      ])

      const [newSwapOutAmount, newSwapOutPrice] = await Promise.all([
        corePool.calcPoolOutGivenSingleIn(
          swapInTotalPoolBalance,
          swapInDenormalizedWeight,
          poolSupply,
          poolTotalDenormalizedWeight,
          swapInAmount,
          poolSwapFee
        ),
        corePool.calcPoolOutGivenSingleIn(
          swapInTotalPoolBalance,
          swapInDenormalizedWeight,
          poolSupply,
          poolTotalDenormalizedWeight,
          wei,
          poolSwapFee
        )
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
    if (
      title !== 'Swap' ||
      swapInAddress.length === 0 ||
      swapOutAddress.length === 0 ||
      swapInAddress === HeimCRPPOOL ||
      swapOutAddress === HeimCRPPOOL
    ) {
      return
    }

    const calc = async () => {
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

    setSwapOutAmount([new BigNumber(0)])
    setSwapOutPrice(new BigNumber(-1))
    calc()
  }, [title, swapOutAddress, swapInAddress, swapInAmount])

  // calculate withdraw
  React.useEffect(() => {
    if (title !== 'Withdraw' || swapOutAddress === HeimCRPPOOL) {
      return
    }

    const getWithdrawAmount = (
      supplyPoolToken: BigNumber,
      amountPoolToken: BigNumber,
      balanceOut: BigNumber
    ): BigNumber => {
      if (supplyPoolToken.toString(10) === '0') {
        return new BigNumber(0)
      }

      return amountPoolToken
        .mul(new BigNumber(97))
        .mul(balanceOut)
        .div(supplyPoolToken)
        .div(new BigNumber(100))
    }

    const calc = async () => {
      const poolSupply = await crpPoolToken.totalSupply()

      if (swapOutAddress === '') {
        const newSwapOutAmount = await Promise.all(
          poolTokens.map(async tokenAddress => {
            const swapOutTotalPoolBalance = await corePool.balance(tokenAddress)
            return getWithdrawAmount(
              poolSupply,
              swapInAmount,
              swapOutTotalPoolBalance
            )
          })
        )
        setSwapOutAmount(newSwapOutAmount)
        return
      }

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

      const SingleSwapOutAmount = await corePool.calcSingleOutGivenPoolIn(
        swapOutTotalPoolBalance,
        swapOutDenormalizedWeight,
        poolSupply,
        poolTotalDenormalizedWeight,
        swapInAmount,
        poolSwapFee
      )

      const newSwapOutAmount = Array(poolTokens.length).fill(new BigNumber(0))
      newSwapOutAmount[tokenAddress2Index[swapOutAddress]] = SingleSwapOutAmount
      setSwapOutAmount(newSwapOutAmount)
    }

    calc()
    setSwapOutAmount(Array(poolTokens.length).fill(new BigNumber(0)))
  }, [title, swapInAmount, swapOutAddress, tokenAddress2Index, poolTokens])

  const tokenInIndex = tokenAddress2Index[swapInAddress]
  const tokenOutIndex = tokenAddress2Index[swapOutAddress]

  const asyncExecute = React.useCallback(
    (msg: string, set: () => void) =>
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
      },
    []
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
        walletAddress
      } = e.target as HTMLFormElement & {
        approved: HTMLInputElement
        category: HTMLInputElement
        swapInAmountInput: HTMLInputElement
        swapInAddressInput: HTMLInputElement
        swapOutAddressInput: HTMLInputElement
        walletAddress: HTMLInputElement
      }

      const swapInAmountVal = new BigNumber(swapInAmountInput.value)
      const swapInAddressVal = swapInAddressInput.value
      const swapOutAddressVal = swapOutAddressInput.value

      try {
        switch (category.value) {
          case 'Invest':
            if (approved.value === '0') {
              crpPoolToken.approve(
                swapInAddressVal,
                walletAddress.value,
                asyncExecute('Contract approval complete!', () =>
                  setApprovalCheck(cur => cur + 1)
                )
              )
              return
            }

            crpPool.joinswapExternAmountIn(swapInAddressVal, swapInAmountVal)
            return

          case 'Withdraw':
            if (swapOutAddressVal !== '') {
              crpPool.exitswapPoolAmountIn(swapOutAddressVal, swapInAmountVal)
              return
            }

            crpPool.exitPool(
              swapInAmountVal,
              Array(poolTokens.length).fill(new BigNumber(0))
            )
            return

          case 'Swap':
            if (approved.value === '0') {
              corePoolToken.approve(
                swapInAddressVal,
                walletAddress.value,
                asyncExecute('Contract approval complete!', () =>
                  setApprovalCheck(cur => cur + 1)
                )
              )
              return
            }

            corePool.swapExactAmountIn(
              swapInAddressVal,
              swapInAmountVal,
              swapOutAddressVal
            )
            return

          default:
        }
      } catch (error) {
        ToastError('Could not connect with the Blockchain!')
      }
    },
    []
  )

  return (
    <FormContainer onSubmit={submitAction}>
      <input type="hidden" name="approved" value={Number(isApproved[tokenInIndex] || 0)} />
      <input type="hidden" name="category" value={title} />
      <input type="hidden" name="swapInAmountInput" value={swapInAmount.toString()} />
      <input type="hidden" name="swapInAddressInput" value={swapInAddress} />
      <input type="hidden" name="swapOutAddressInput" value={swapOutAddress} />
      <input type="hidden" name="walletAddress" value={userWalletAddress} />
      <InputTokens
        actionString={typeAction}
        poolTokens={
          title === 'Withdraw'
            ? poolTokenDetails.filter(token => token.address === swapInAddress)
            : poolTokenDetails
              .slice(0, -1)
              .filter(token => token.address !== swapOutAddress)
        }
        swapInBalance={swapInBalance}
        setSwapInAmount={setSwapInAmount}
        setSwapInAddress={setSwapInAddress}
      />
      {title === 'Withdraw' ? (
        poolTokens.map((tokenOutAddress, i) => (
          <InputDefault
            key={`output_${tokenOutAddress}`}
            poolTokens={poolTokenDetails.filter(
              token => token.address === tokenOutAddress
            )}
            isMax={swapOutAddress === tokenOutAddress}
            swapOutAmount={swapOutAmount[i] || new BigNumber(0)}
            swapOutBalance={swapOutBalance[i] || new BigNumber(-1)}
            setSwapOutAddress={setSwapOutAddress}
          />
        ))
      ) : (
        <>
          <InputDefault
            poolTokens={
              title === 'Invest'
                ? poolTokenDetails.filter(
                  token => token.address === swapOutAddress
                )
                : poolTokenDetails
                  .slice(0, -1)
                  .filter(token => token.address !== swapInAddress)
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
                : `1 ${poolTokenDetails[tokenInIndex].symbol} = ${BNtoDecimal(
                  swapOutPrice,
                  poolTokenDetails[tokenOutIndex].decimals
                )} ${poolTokenDetails[tokenOutIndex].symbol}`}
            </SpanLight>
          </ExchangeRate>
        </>
      )}
      {isLogged ? (
        <Button
          backgroundSecondary
          fullWidth
          type="submit">
          {isApproved[tokenInIndex] ? title : 'Approve'}
        </Button>
      ) : (
        <Button
          backgroundSecondary
          fullWidth type="button" onClick={connect}>
          Connect Wallet
        </Button>
      )}
    </FormContainer>
  )
}

export default Form
