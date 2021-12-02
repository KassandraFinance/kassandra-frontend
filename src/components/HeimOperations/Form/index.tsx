/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import useSWR from 'swr'
import BigNumber from 'bn.js'
import Big from 'big.js'

import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'
import { EventData } from 'web3-eth-contract'

import { TokenDetails } from '../../../store/modules/poolTokens/types'
import { actionGetPoolTokens } from '../../../store/modules/poolTokens/actions'

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
  productCategories: string | string[]
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

  const dispatch = useDispatch()

  const { data } = useSWR(GET_INFO_AHYPE)

  React.useEffect(() => {
    if (data) {
      const aHYPE = {
        balance_in_pool: '',
        address: data.pool.id,
        decimals: new BigNumber(data.pool.decimals), 
        price: Number(data.pool.price_usd),
        name: data.pool.name,
        symbol: data.pool.symbol,
        allocation: 0
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
        weight_goal_normalized: any 
      }) => {
        return {
          balance_in_pool: item.balance,
          address: item.token.id,
          allocation: Number((Number(item.weight_goal_normalized) * 100).toFixed(2)),
          decimals: new BigNumber(item.token.decimals),
          price: Number(item.token.price_usd),
          name: item.token.name,
          symbol: item.token.symbol
        }
      })



      res.sort((a: { allocation: number | string }, b: { allocation: number | string }) => {
        return Number(b.allocation) - Number(a.allocation)
      })

      res.push(aHYPE)

      setTokenAddress2Index(
        res.reduce((acc, cur, i) => ({ [cur.address]: i, ...acc }), {})
      )

      setInfoAHYPE(res)
    }
  }, [data])

  React.useEffect(() => {
    dispatch(actionGetPoolTokens(infoAHYPE))
  }, [infoAHYPE])


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

    setSwapInAddress(newSwapInAddress.toLocaleLowerCase())
    setSwapOutAddress(newSwapOutAddress.toLocaleLowerCase())
  }, [title, infoAHYPE, typeWithdrawChecked])

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
  }, [title, infoAHYPE, approvalCheck, userWalletAddress])

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
      swapInAddress === crpPoolAddress.toLocaleLowerCase()
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
      } catch (error) {
        ToastWarning("This amount is too large for the pool!")
      }
    }

    calc()
  }, [title, swapInAmount, swapInAddress])

  // calculate swap
  React.useEffect(() => {
    if (
      title !== 'Swap' ||
      swapInAddress.length === 0 ||
      swapOutAddress.length === 0 ||
      swapInAddress === crpPoolAddress.toLocaleLowerCase() ||
      swapOutAddress === crpPoolAddress.toLocaleLowerCase()
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

    calc()
  }, [title, swapInAmount, swapInAddress, swapOutAddress])

  // calculate withdraw
  React.useEffect(() => {
    if (title !== 'Withdraw' || swapOutAddress === crpPoolAddress.toLocaleLowerCase()) {
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
          infoAHYPE.slice(0, -1).map(async item => {
            const swapOutTotalPoolBalance = await corePool.balance(item.address)
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

      const [SingleSwapOutAmount, newSwapOutPrice] = await Promise.all([
        corePool.calcSingleOutGivenPoolIn(
          swapOutTotalPoolBalance,
          swapOutDenormalizedWeight,
          poolSupply,
          poolTotalDenormalizedWeight,
          swapInAmount,
          poolSwapFee
        ), 
        corePool.calcSingleOutGivenPoolIn(
          swapOutTotalPoolBalance,
          swapOutDenormalizedWeight,
          poolSupply,
          poolTotalDenormalizedWeight,
          wei,
          poolSwapFee
        )
      ])
      setSwapOutAmount([SingleSwapOutAmount])
      setSwapOutPrice(newSwapOutPrice)
    }

    calc()
  }, [title, swapInAmount, swapOutAddress, tokenAddress2Index, infoAHYPE])

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
      <input type="hidden" name="tokensLength" value={infoAHYPE.length} />
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
        actionString={typeAction}
        poolTokens={
          title === 'Withdraw'
            ? [infoAHYPE[infoAHYPE.length - 1]]
            : infoAHYPE
              .slice(0, -1)
              .filter((token: { address: string }) => token.address !== swapOutAddress)
        }
        infoAHYPE={infoAHYPE
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
        <div>
          <img src="/assets/arrowDown.svg" alt="" style={{ margin: '12px 0' }} />
          <img src="/assets/arrowDown.svg" alt="" style={{ transform: 'rotate(180deg)', margin: '12px 0 12px 8px' }} />
        </div>
        :
        <img src="/assets/arrowDown.svg" alt="" style={{ margin: '12px 0' }} />
      }
      
      {title === 'Withdraw' ? (
        typeWithdrawChecked === 'Best_value' ?
          <InputBestValue
            poolTokenDetails={infoAHYPE
              .slice(0, -1)
              .filter((token: { address: string }) => token.address !== swapInAddress)}
            infoAHYPE={infoAHYPE}
            swapOutAmount={swapOutAmount}
            swapOutBalance={swapOutBalance}
            setPriceInDollarOnWithdraw={setPriceInDollarOnWithdraw}
          />
          :
          <>
            <InputDefault
              decimals={infoAHYPE[tokenAddress2Index[swapOutAddress]]?.decimals}
              poolTokens={infoAHYPE
                .slice(0, -1)
                .filter((token: { address: string }) => token.address !== swapInAddress)}
              infoAHYPE={infoAHYPE}
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
                    infoAHYPE[tokenOutIndex]?.decimals
                  )} ${infoAHYPE[tokenOutIndex]?.symbol}`}
              </S.SpanLight>
            </S.ExchangeRate>
          </>
        ) : (
        <>
          <InputDefault
            decimals={infoAHYPE[tokenAddress2Index[swapOutAddress]]?.decimals}
            poolTokens={title === 'Invest'
              ? [infoAHYPE[infoAHYPE.length - 1]]
              : infoAHYPE
                .slice(0, -1)
                .filter((token: { address: string }) => token.address !== swapInAddress)}
            infoAHYPE={infoAHYPE
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
                  infoAHYPE[tokenOutIndex]?.decimals
                )} ${infoAHYPE[tokenOutIndex]?.symbol}`}
            </S.SpanLight>
          </S.ExchangeRate>
        </>
      )}
      {userWalletAddress ? (
        <Button
          backgroundPrimary
          disabledNoEvent={swapInAmount.toString() === "0"}
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
                        .mul(Big(priceDollar(swapOutAddress, infoAHYPE))),
                      Big(infoAHYPE[tokenOutIndex]?.decimals.toString(10)),
                      2, 2
                    )}`
                :
                  `${title} ${'$' + BNtoDecimal(
                    Big((swapInAmount || 0).toString())
                      .mul(Big(priceDollar(swapInAddress, infoAHYPE))),
                    Big(infoAHYPE[tokenInIndex]?.decimals.toString(10)),
                    2, 2
                  )}`
              :
                `${title}`
            : 
              'Approve'
          }
        />
        ) : (
        <Button
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
