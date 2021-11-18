/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import BigNumber from 'bn.js'
import Big from 'big.js'

import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'
import { EventData } from 'web3-eth-contract'
import { useQuery } from '@apollo/client'

import { TOKENS_QUERY } from './graphql'
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

interface IFormProps {
  typeAction: string;
  title: string;
  typeWithdrawChecked: string;
  crpPoolAddress: string
  corePoolAddress: string
  poolName: string
  productCategories: string | string[]
}

interface Address2Index {
  [key: string]: number;
}

const Form = ({ 
  crpPoolAddress,
  corePoolAddress,
  poolName,
  productCategories,
  typeAction, 
  title, 
  typeWithdrawChecked,
}: IFormProps) => {
  const crpPoolToken = useERC20Contract(crpPoolAddress)
  const corePool = usePoolContract(corePoolAddress)
  const crpPool = useCRPContract(crpPoolAddress)
  const { poolTokensArray, userWalletAddress } = useSelector((state: RootStateOrAny) => state)
  const { connect } = useConnect()
  const dispatch = useDispatch()
  const { trackBuying, trackBought, trackCancelBuying } = useMatomoEcommerce();

  const [poolTokenDetails, setPoolTokensDetails] = React.useState<TokenDetails[]>([])
  const [poolTokens, setPoolTokens] = React.useState<string[]>([])
  const [tokensArray, setTokensArray] = React.useState<TokenDetails[]>([])
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

  const res = localStorage.getItem("listCoinPool")
  const listCoinPool = res && JSON.parse(res)

  const [coinInfoList, setCoinInfoList] = React.useState<TokenDetails[]>(listCoinPool || [])

  const { data, loading, error } = useQuery(TOKENS_QUERY);
  console.log(data)
  console.log(loading)
  console.log(error)

  // get data coinGecko
  async function getCoinList() {
    const URL = 'https://api.coingecko.com/api/v3/coins/list'
    await fetch(URL, {
      method: 'get'
    })
      .then(res => res.json())
      .then(res => res.forEach((item: any) => isTokenPool(item)))
      .catch(err => err)
  }

  function isTokenPool(value: any) {
    for (let i = 0; i < poolTokenDetails.length; i++) {
      const element = poolTokenDetails[i];
      // let newName = element.name.replace("Kassandra Test ", "")

      if (value.symbol === element.symbol.toLowerCase()) {
        if (value.symbol === "uni" && value.name !== "Uniswap") {
          continue
        }
        if (value.symbol === "grt" && value.name !== "The Graph") {
          continue
        }
        getCoin(value.id, element)
      }
    }
  }

  async function getCoin(id: string, element: any) {
    const URL = `https://api.coingecko.com/api/v3/coins/${id}`
    await fetch(URL, {
      method: 'get'
    })
      .then(res => res.json())
      .then(res => {
        setCoinInfoList(prevState => [...prevState, {
          image: res.image.small,
          market_data: res.market_data,
          ...element
        }])
      })
      .catch(err => err)
  }

  React.useEffect(() => {
    localStorage.setItem('listCoinPool', JSON.stringify(coinInfoList))
    dispatch(actionGetPoolTokens(coinInfoList))

  }, [coinInfoList])


  React.useEffect(() => {
    if (poolTokenDetails.length < 1) {
      return
    }

    getCoinList()
    setCoinInfoList([])
  }, [poolTokenDetails])

  // get tokens
  React.useEffect(() => {
    const calc = async (newPoolTokens: string[]) => {
      const newAddresses: string[] = []
      const newNames: Promise<string>[] = []
      const newSymbols: Promise<string>[] = []
      const newDecimals: Promise<BigNumber>[] = []
      const newAllocation: Promise<number>[] = []


      for (let i = 0; i < newPoolTokens.length; i += 1) {
        const token = ERC20(newPoolTokens[i])
        newAddresses.push(newPoolTokens[i])
        newNames.push(token.name())
        newSymbols.push(token.symbol())
        newDecimals.push(token.decimals())
        newAllocation.push(corePool.normalizedWeight(newPoolTokens[i]))
      }

      newAddresses.push(crpPoolAddress)
      newNames.push(crpPoolToken.name())
      newSymbols.push(crpPoolToken.symbol())
      newDecimals.push(crpPoolToken.decimals())

      setPoolTokensDetails(
        await Promise.all(
          Array(newPoolTokens.length + 1)
            .fill(0)
            .map(async (_, i) => ({
              address: newAddresses[i],
              name: await newNames[i],
              symbol: await newSymbols[i],
              decimals: await newDecimals[i],
              allocation: await newAllocation[i]
            }))
        )
      )
    }

    corePool.currentTokens().then(newPoolTokens => {
      setPoolTokens(newPoolTokens)
      calc(newPoolTokens)
      setTokenAddress2Index(
        newPoolTokens.reduce((acc, cur, i) => ({ [cur]: i, ...acc }), {
          [crpPoolAddress]: newPoolTokens.length
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
        newSwapOutAddress = crpPoolAddress
        break
      case 'Withdraw':
        newSwapInAddress = crpPoolAddress
        newSwapOutAddress = typeWithdrawChecked === "Single_asset" ? poolTokens[0] : ''
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
  }, [title, poolTokens, typeWithdrawChecked])

  // get contract approval of tokens
  React.useEffect(() => {
    if (title === 'Withdraw') {
      setIsApproved(Array(poolTokens.length + 1).fill(true))
      return
    }

    const calc = async () => {
      const newApprovals = []

      for (let i = 0; i < poolTokens.length; i += 1) {
        newApprovals.push(
          ERC20(poolTokens[i]).allowance(
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
  }, [title, poolTokens, approvalCheck, userWalletAddress])

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
  }, [swapInAddress, userWalletAddress, title, poolTokens, swapOutAddress])

  // get balance of swap out token
  React.useEffect(() => {
    if (userWalletAddress.length === 0) {
      return
    }

    setSwapOutBalance([new BigNumber(-1)])

    if (swapOutAddress === '') {
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
  }, [userWalletAddress, poolTokens, swapInAddress, swapOutAddress])

  React.useEffect(() => {
    const tokens = title === "Withdraw" ? poolTokens.length : 1
    setSwapOutPrice(new BigNumber(-1))
    setSwapOutAmount(Array(tokens).fill(new BigNumber(0)))
  }, [title, swapInAddress, swapOutAddress, poolTokens.length])

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
      swapInAddress === crpPoolAddress ||
      swapOutAddress === crpPoolAddress
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
    if (title !== 'Withdraw' || swapOutAddress === crpPoolAddress) {
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
  }, [title, swapInAmount, swapOutAddress, tokenAddress2Index, poolTokens])

  const tokenInIndex = tokenAddress2Index[swapInAddress]
  const tokenOutIndex = tokenAddress2Index[swapOutAddress]

  const approvalCallback = React.useCallback(
    (): TransactionCallback => {
      const tokenSymbol = poolTokenDetails[tokenInIndex].symbol

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
    [tokenInIndex]
  )

  const investCallback = React.useCallback(
    (amountInUSD: number): TransactionCallback => {
      const tokenSymbol = poolTokenDetails[poolTokenDetails.length - 1].symbol

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
    [poolTokenDetails]
  )

  const withdrawCallback = React.useCallback(
    (amountInUSD: number): TransactionCallback => {
      const tokenSymbol = poolTokenDetails[poolTokenDetails.length - 1].symbol

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
    (): TransactionCallback => {
      const tokenInSymbol = poolTokenDetails[tokenInIndex].symbol
      const tokenOutSymbol = poolTokenDetails[tokenOutIndex].symbol

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
        walletAddress,
        tokensLength,
        amountUSD
      } = e.target as HTMLFormElement & {
        approved: HTMLInputElement
        category: HTMLInputElement
        swapInAmountInput: HTMLInputElement
        swapInAddressInput: HTMLInputElement
        swapOutAddressInput: HTMLInputElement
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
                approvalCallback()
              )
              return
            }

            trackBuying(crpPoolAddress, poolName, amountInUSD, productCategories)
            crpPool.joinswapExternAmountIn(
              swapInAddressVal,
              swapInAmountVal,
              walletAddress.value,
              investCallback(amountInUSD)
            )
            return

          case 'Withdraw':
            trackBuying(crpPoolAddress, poolName, -1 * amountInUSD, productCategories)

            if (swapOutAddressVal !== '') {
              crpPool.exitswapPoolAmountIn(
                swapOutAddressVal,
                swapInAmountVal,
                walletAddress.value,
                withdrawCallback(-1 * amountInUSD)
              )
              return
            }

            crpPool.exitPool(
              swapInAmountVal,
              Array(parseInt(tokensLength.value)).fill(new BigNumber(0)),
              walletAddress.value,
              withdrawCallback(-1 * amountInUSD)
            )
            return

          case 'Swap':
            if (approved.value === '0') {
              ERC20(swapInAddressVal).approve(
                corePoolAddress,
                walletAddress.value,
                approvalCallback()
              )
              return
            }

            corePool.swapExactAmountIn(
              swapInAddressVal,
              swapInAmountVal,
              swapOutAddressVal,
              walletAddress.value,
              swapCallback()
            )
            return

          default:
        }
      } catch (error) {
        ToastError('Could not connect with the Blockchain!')
      }
    }, [])

    React.useEffect(() => {
      const res = poolTokensArray.map((token: { address: string }) => {
        for (let i = 0; i < poolTokensArray.length; i++) {
          if (poolTokenDetails[i]?.address !== token.address) {
            return token
          }
        }
      })

      setTokensArray(res)
    }, [poolTokensArray, poolTokenDetails])

  return (
    <S.FormContainer onSubmit={submitAction}>
      <input type="hidden" name="approved" value={Number(isApproved[tokenInIndex] || 0)} />
      <input type="hidden" name="category" value={title} />
      <input type="hidden" name="swapInAmountInput" value={swapInAmount.toString()} />
      <input type="hidden" name="swapInAddressInput" value={swapInAddress} />
      <input type="hidden" name="swapOutAddressInput" value={swapOutAddress} />
      <input type="hidden" name="walletAddress" value={userWalletAddress} />
      <input type="hidden" name="tokensLength" value={poolTokens.length} />
      <input type="hidden" name="amountUSD" value={
        title === "Invest"
          ? Big((swapOutAmount[0] || 0).toString())
            .div(
               Big(10).pow(poolTokenDetails[tokenOutIndex]?.decimals.toNumber() || 0)
             )
            .mul(
              Big(priceDollar(swapOutAddress, poolTokensArray))
            )
            .toString()
          : Big((swapInAmount || 0).toString())
            .div(
               Big(10).pow(poolTokenDetails[tokenInIndex]?.decimals.toNumber() || 0)
             )
            .mul(
              Big(priceDollar(swapInAddress, poolTokensArray))
            )
            .toString()
      } />
      <InputTokens
        actionString={typeAction}
        poolTokens={
          title === 'Withdraw'
            ? [poolTokenDetails[poolTokenDetails.length - 1]]
            : poolTokenDetails
              .slice(0, -1)
              .filter((token: { address: string }) => token.address !== swapOutAddress)
        }
        poolTokensArray={poolTokensArray
          .filter((token: { address: string }) => token.address !== swapOutAddress)
        }
        title={title}
        decimals={poolTokenDetails[tokenInIndex] ? poolTokenDetails[tokenInIndex].decimals : new BigNumber(18)}
        swapInBalance={swapInBalance}
        swapInAmount={swapInAmount}
        swapInAddress={swapInAddress}
        tokenDetails={poolTokensArray[tokenInIndex]}
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
            poolTokenDetails={poolTokenDetails
              .slice(0, -1)
              .filter((token: { address: string }) => token.address !== swapInAddress)}
            poolTokensArray={poolTokensArray}
            tokensArray={tokensArray}
            swapOutAmount={swapOutAmount}
            swapOutBalance={swapOutBalance}
            setPriceInDollarOnWithdraw={setPriceInDollarOnWithdraw}
          />
          :
          <>
            <InputDefault
              decimals={poolTokenDetails[tokenAddress2Index[swapOutAddress]]?.decimals}
              poolTokens={poolTokenDetails
                .slice(0, -1)
                .filter((token: { address: string }) => token.address !== swapInAddress)}
              poolTokensArray={poolTokensArray}
              tokenDetails={poolTokensArray[tokenOutIndex]}
              isMax={null}
              swapOutAmount={swapOutAmount[0]}
              swapOutBalance={swapOutBalance[0]}
              setSwapOutAddress={setSwapOutAddress}
            />
            <S.ExchangeRate>
              <S.SpanLight>Exchange rate:</S.SpanLight>
              <S.SpanLight>
                {swapOutPrice < new BigNumber(0)
                  ? '...'
                  : `1 ${poolTokenDetails[tokenInIndex]?.symbol} = ${BNtoDecimal(
                    swapOutPrice,
                    poolTokenDetails[tokenOutIndex]?.decimals
                  )} ${poolTokenDetails[tokenOutIndex]?.symbol}`}
              </S.SpanLight>
            </S.ExchangeRate>
          </>
        ) : (
        <>
          <InputDefault
            decimals={poolTokenDetails[tokenAddress2Index[swapOutAddress]]?.decimals}
            poolTokens={title === 'Invest'
              ? [poolTokenDetails[poolTokenDetails.length - 1]]
              : poolTokenDetails
                .slice(0, -1)
                .filter((token: { address: string }) => token.address !== swapInAddress)}
            poolTokensArray={poolTokensArray
              .filter((token: { address: string }) => token.address !== swapInAddress)}
            tokenDetails={poolTokensArray[tokenOutIndex]}
            isMax={null}
            swapOutAmount={swapOutAmount[0]}
            swapOutBalance={swapOutBalance[0]}
            setSwapOutAddress={setSwapOutAddress}
          />
          <S.ExchangeRate>
            <S.SpanLight>Exchange rate:</S.SpanLight>
            <S.SpanLight>
              {swapOutPrice < new BigNumber(0)
                ? '...'
                : `1 ${poolTokenDetails[tokenInIndex]?.symbol} = ${BNtoDecimal(
                  swapOutPrice,
                  poolTokenDetails[tokenOutIndex]?.decimals
                )} ${poolTokenDetails[tokenOutIndex]?.symbol}`}
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
                        .mul(Big(priceDollar(swapOutAddress, poolTokensArray))),
                      Big(poolTokenDetails[tokenOutIndex]?.decimals.toString(10)),
                      2, 2
                    )}`
                :
                  `${title} ${'$' + BNtoDecimal(
                    Big((swapInAmount || 0).toString())
                      .mul(Big(priceDollar(swapInAddress, poolTokensArray))),
                    Big(poolTokenDetails[tokenInIndex]?.decimals.toString(10)),
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
