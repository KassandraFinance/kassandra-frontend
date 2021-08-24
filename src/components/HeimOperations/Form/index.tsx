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
  const [investSelected, setInvestSelected] = React.useState<string>("")
  const [receiveTokenSelected, setReceiveTokenSelected] = React.useState("")
  const [investHeim, setInvestHeim] = React.useState<BigNumber>(new BigNumber(0))
  const [isApproveCore, setIsApproveCore] = React.useState(false)
  const [isApproveCRP, setIsApproveCRP] = React.useState(false)

  const [tokenInvestSelected, setTokenInvestSelected] = React.useState<IPoolTokensProps>({
    name: '',
    symbol: '',
    balance: new BigNumber(0),
    decimals: new BigNumber(0),
    address: '',
    normalizedWeight: 0,
  })

  const [tokenReceiveSelected, setTokenReceiveSelected] = React.useState<IPoolTokensProps>({
    name: '',
    symbol: '',
    balance: new BigNumber(0),
    decimals: new BigNumber(0),
    address: '',
    normalizedWeight: 0,
  })

  const [exchangeRate, setExchangeRate] = React.useState<BigNumber>(new BigNumber(0))
  const [investRate, setInvestRate] = React.useState<BigNumber>(new BigNumber(0))
  const [tokenSingleWithdraw, setTokenSingleWithdraw] = React.useState<string>('')
  const [amountSingleOut, setAmountSingleOut] = React.useState<BigNumber>(new BigNumber(0))
  
  const [amountSwapOut, setAmountSwapOut] = React.useState<BigNumber>(new BigNumber(0))

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


  const getArrayTokens = () => {
    const arrayWithdraw = poolTokens.map((tokenPool: IPoolTokensProps) => (
      {
        ...tokenPool,
        balance: getWithdrawBalance(tokenPool.balance)
      }
    ))

    return arrayWithdraw
  }

  
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
            return approve(HeimCRPPOOL, investSelected)
          }
          joinswapExternAmountIn(HeimCRPPOOL, investSelected, amountTokenPool)
          break;
        case 'Withdraw':
          tokenSingleWithdraw !== '' ?
            exitswapPoolAmountIn(HeimCRPPOOL, tokenSingleWithdraw, amountHeim)
            :
            exitPool(HeimCRPPOOL, amountHeim, Array(poolTokens.length).fill(new BigNumber(0)))
          break;
        case 'Swap':
          if (!isApproveCore) {
            return approve(HeimCorePool, investSelected)
          }
          swapExactAmountIn(HeimCorePool, investSelected, amountTokenPool, receiveTokenSelected)
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
      if (investSelected !== "" && receiveTokenSelected !== "") {
        const denormalizedWeightIn = await denormalizedWeight(HeimCorePool, investSelected)
        const denormalizedWeightOut = await denormalizedWeight(HeimCorePool, receiveTokenSelected)
        const swap = await swapFee(HeimCorePool)
  
        const tokenBalanceIn = poolTokens.find((token: { address: string }) => token.address === investSelected)
        const tokenBalanceOut = poolTokens.find((token: { address: string }) => token.address === receiveTokenSelected)
  
        const price = await calcOutGivenIn(
          HeimCorePool, 
          tokenBalanceIn.balance, 
          denormalizedWeightIn, 
          tokenBalanceOut.balance,
          denormalizedWeightOut,
          amountTokenPool,
          swap
        )

        const priceExchangeRate = await getSpotPrice(HeimCorePool, receiveTokenSelected, investSelected)

        setExchangeRate(priceExchangeRate)
        setAmountSwapOut(price)
      }
    })()

  }, [investSelected, receiveTokenSelected, amountTokenPool])

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
    getAllowance(HeimCRPPOOL, investSelected)
      .then((response: boolean) => setIsApproveCRP(response))

    getAllowance(HeimCorePool, investSelected)
    .then((response: boolean) => setIsApproveCore(response))

    if (investSelected) {
      const tokenSelected = poolTokens
        .find((token: { address: string }) => token.address === investSelected)
      
      setTokenInvestSelected(tokenSelected)
    }
    if (receiveTokenSelected) {
      const tokenSelected = poolTokens
        .find((token: { address: string }) => token.address === receiveTokenSelected)
      
      setTokenReceiveSelected(tokenSelected)
    }
  
  }, [investSelected, receiveTokenSelected])

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
              investSelected={investSelected}
              setInvestSelected={setInvestSelected}
              setInvestHeim={setInvestHeim}
              setInvestRate={setInvestRate}
          />
          <InputDefault
            title={title}
            investHeim={investHeim}
            amountSwapOut={amountSwapOut}
            receiveTokenSelected={receiveTokenSelected}
            setReceiveTokenSelected={setReceiveTokenSelected}
          />
        </>
      }
      {title === 'Invest' && tokenInvestSelected.symbol &&
        <ExchangeRate>
          <SpanLight>Exchange rate:</SpanLight>
          <SpanLight>{`1 ${tokenInvestSelected.symbol} = ${BNtoDecimal(investRate, new BigNumber(18), 6)} HEIM`}</SpanLight>
        </ExchangeRate>
      }
      {title === 'Swap' && tokenInvestSelected.symbol && tokenReceiveSelected.symbol &&
        <ExchangeRate>
          <SpanLight>Exchange rate:</SpanLight>
          <SpanLight>{`1 ${tokenInvestSelected.symbol} = ${BNtoDecimal(exchangeRate, new BigNumber(18), 6)} ${tokenReceiveSelected.symbol}`}</SpanLight>
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
