import React from 'react'
import BigNumber from 'bn.js'
import { useSelector, RootStateOrAny } from 'react-redux'

import { HeimCRPPOOL, HeimCorePool } from '../../../constants/tokenAddresses'
import { IPoolTokensProps } from '../../../store/modules/poolTokens/types'

import useConnect from '../../../hooks/useConnect'
import useCRPContract from '../../../hooks/useCRPContract'
import useERC20Contract from '../../../hooks/useERC20Contract'
import usePoolContract from '../../../hooks/usePoolContract'

import InputHeim from './InputHeim'
import InputTokens from './InputTokens'
import InputDefault from './InputDefault'
import InputWithdraw from './InputWithdraw'


import { FormContainer, Button, SpanLight, ExchangeRate } from './styles'
import { BNtoDecimal } from '../../../utils/numerals'

interface IFormProps {
  typeAction: string
  title: string
  isLogged: boolean
}

const Form = ({ typeAction, title, isLogged }: IFormProps) => {
  const [amountHeim, setAmountHeim] = React.useState<BigNumber>(new BigNumber(0))
  const [amountTokenPool, setAmountTokenPool] = React.useState<BigNumber>(new BigNumber(0))
  const [supplyHeim, setSupplyHeim] = React.useState<BigNumber>(new BigNumber(0))

  const [swapInSelected, setSwapInSelected] = React.useState<string>("")
  const [swapOutSelected, setSwapOutSelected] = React.useState("")
  const [investHeim, setInvestHeim] = React.useState<BigNumber>(new BigNumber(0))
  const [isApproveCore, setIsApproveCore] = React.useState(false)
  const [isApproveCRP, setIsApproveCRP] = React.useState(false)

  const [exchangeRate, setExchangeRate] = React.useState<BigNumber>(new BigNumber(0))
  const [investRate, setInvestRate] = React.useState<BigNumber>(new BigNumber(0))

  const [tokenSingleWithdraw, setTokenSingleWithdraw] = React.useState<string>('')
  const [amountSingleOut, setAmountSingleOut] = React.useState<BigNumber>(new BigNumber(0))
  
  const [amountSwapOut, setAmountSwapOut] = React.useState<BigNumber>(new BigNumber(0))


  const [swapInToken, setSwapInToken] = React.useState<IPoolTokensProps>({
    name: '',
    symbol: '',
    balance: new BigNumber(0),
    decimals: new BigNumber(0),
    address: '',
    normalizedWeight: 0,
    isMax: false
  })
  const [swapOutToken, setSwapOutToken] = React.useState<IPoolTokensProps>({
    name: '',
    symbol: '',
    balance: new BigNumber(0),
    decimals: new BigNumber(0),
    address: '',
    normalizedWeight: 0,
    isMax: false
  })

  const { poolTokens } = useSelector((state: RootStateOrAny) => state)
  const { connect } = useConnect()

  const { getTotalSupply, getAllowance, approve } = useERC20Contract()
  const { joinswapExternAmountIn, exitPool, exitswapPoolAmountIn } = useCRPContract()
  const {
    calcSingleOutGivenPoolIn, 
    denormalizedWeight, 
    totalDenormalizedWeight, 
    swapFee,
    swapExactAmountIn,
    getSpotPrice,
    calcOutGivenIn
  } = usePoolContract()

  const getArrayTokens = React.useCallback(() => {
    const arrayWithdraw = poolTokens.map((tokenPool: IPoolTokensProps) => (
      {
        ...tokenPool,
        balance: getWithdrawBalance(tokenPool.balance)
      }
    ))

    return arrayWithdraw
  }, [amountHeim, amountSingleOut, tokenSingleWithdraw])

  const getWithdrawBalance = (balance: BigNumber): BigNumber => {
    if (supplyHeim.toString(10) === "0") {
      return new BigNumber(0);
    }
    return amountHeim
      .mul(new BigNumber(97))
      .mul(balance)
      .div(supplyHeim)
      .div(new BigNumber(100))
  }


  const calcMaxSingleOut = React.useCallback(async (tokenSelected) => {
    const denormalized = await denormalizedWeight(HeimCorePool, tokenSelected.address)
    const totalDenormalized = await totalDenormalizedWeight(HeimCorePool)
    const swap = await swapFee(HeimCorePool)

    const response = await calcSingleOutGivenPoolIn(
      HeimCorePool, 
      tokenSelected.balance, 
      denormalized, 
      supplyHeim, 
      totalDenormalized, 
      amountHeim, 
      swap
    )

    setAmountSingleOut(response)
  }, [amountHeim])

  const handleAction = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    try {
      switch (title) {
        case 'Invest':
          if (!isApproveCRP) {
            return approve(HeimCRPPOOL, swapInSelected)
          }
          joinswapExternAmountIn(HeimCRPPOOL, swapInSelected, amountTokenPool)
          break;
        case 'Withdraw':
          tokenSingleWithdraw !== '' ?
            exitswapPoolAmountIn(HeimCRPPOOL, tokenSingleWithdraw, amountHeim)
            :
            exitPool(HeimCRPPOOL, amountHeim, Array(poolTokens.length).fill(new BigNumber(0)))
          break;
        case 'Swap':
          if (!isApproveCore) {
            return approve(HeimCorePool, swapInSelected)
          }
          swapExactAmountIn(HeimCorePool, swapInSelected, amountTokenPool, swapOutSelected)
        default:
          break;
      }
      setAmountHeim(new BigNumber(0))
      setAmountTokenPool(new BigNumber(0))
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    (async () => {
      if (swapInSelected !== "" && swapOutSelected !== "") {
        const denormalizedWeightIn = await denormalizedWeight(HeimCorePool, swapInSelected)
        const denormalizedWeightOut = await denormalizedWeight(HeimCorePool, swapOutSelected)
        const swap = await swapFee(HeimCorePool)
  
        const tokenBalanceIn = poolTokens.find((token: { address: string }) => token.address === swapInSelected)
        const tokenBalanceOut = poolTokens.find((token: { address: string }) => token.address === swapOutSelected)
  
        const price = await calcOutGivenIn(
          HeimCorePool, 
          tokenBalanceIn.balance, 
          denormalizedWeightIn, 
          tokenBalanceOut.balance,
          denormalizedWeightOut,
          amountTokenPool,
          swap
        )

        const priceExchangeRate = await getSpotPrice(HeimCorePool, swapOutSelected, swapInSelected)

        setExchangeRate(priceExchangeRate)
        setAmountSwapOut(price)
      }
    })()

  }, [swapInSelected, swapOutSelected, amountTokenPool])

  React.useEffect(() => {
    (async () => {
      const newSupplyHeim = await getTotalSupply(HeimCRPPOOL)
      setSupplyHeim(newSupplyHeim)
    })()
  }, [])


  React.useEffect(() => {
    const tokenFound = poolTokens.find((token: { address: string }) => 
      token.address === tokenSingleWithdraw)
    
    if (tokenSingleWithdraw !== '') {
      calcMaxSingleOut(tokenFound)
    }

  }, [tokenSingleWithdraw])


  React.useEffect(() => {
    getAllowance(HeimCRPPOOL, swapInSelected)
      .then((response: boolean) => setIsApproveCRP(response))

    getAllowance(HeimCorePool, swapInSelected)
    .then((response: boolean) => setIsApproveCore(response))

    if (swapInSelected) {
      const tokenSelected = poolTokens
        .find((token: { address: string }) => token.address === swapInSelected)
      
      setSwapInToken(tokenSelected)
    }
    if (swapOutSelected) {
      const tokenSelected = poolTokens
        .find((token: { address: string }) => token.address === swapOutSelected)
      
      setSwapOutToken(tokenSelected)
    }
  
  }, [swapInSelected, swapOutSelected])

  return (
    <FormContainer onSubmit={handleAction}>
      {title === "Withdraw" ?
        <>
          <InputHeim 
            typeAction={typeAction} 
            redeem={title === "Withdraw"} 
            amountHeim={amountHeim}
            setAmountHeim={setAmountHeim}
            getArrayTokens={getArrayTokens}
          />
          {getArrayTokens().map((token: IPoolTokensProps) => (
            <InputWithdraw 
              key={token.address} 
              token={token}
              amountHeim={amountHeim}
              amountSingleOut={amountSingleOut}
              setTokenSingleWithdraw={setTokenSingleWithdraw}
              tokenSingleWithdraw={tokenSingleWithdraw}
            />
          ))}
        </>
      :
        <>
          <InputTokens
              typeAction={typeAction} 
              supplyHeim={supplyHeim}
              getArrayTokens={getArrayTokens}
              amountTokenPool={amountTokenPool}
              setAmountTokenPool={setAmountTokenPool}
              swapInSelected={swapInSelected}
              setSwapInSelected={setSwapInSelected}
              setInvestHeim={setInvestHeim}
              setInvestRate={setInvestRate}
          />
          <InputDefault
            title={title}
            investHeim={investHeim}
            amountSwapOut={amountSwapOut}
            swapOutSelected={swapOutSelected}
            setSwapOutSelected={setSwapOutSelected}
          />
        </>
      }
      {title === 'Invest' && swapInToken.symbol &&
        <ExchangeRate>
          <SpanLight>Exchange rate:</SpanLight>
          <SpanLight>{`1 ${swapInToken.symbol} = ${BNtoDecimal(investRate, new BigNumber(18), 6)} HEIM`}</SpanLight>
        </ExchangeRate>
      }
      {title === 'Swap' && swapInToken.symbol && swapOutToken.symbol &&
        <ExchangeRate>
          <SpanLight>Exchange rate:</SpanLight>
          <SpanLight>{`1 ${swapInToken.symbol} = ${BNtoDecimal(exchangeRate, new BigNumber(18), 6)} ${swapOutToken.symbol}`}</SpanLight>
        </ExchangeRate>
      }
      {isLogged ? 
        title === 'Withdraw' ?
          <Button type="submit">Withdraw</Button>
          :
          <Button type="submit">{
            (isApproveCore && title === 'Swap') || (isApproveCRP && title === 'Invest') ? 
            title : "Approve"}
          </Button>

      :
        <Button type="button" onClick={connect}>Connect Wallet</Button>
      }
    </FormContainer>
  )
}

export default Form
