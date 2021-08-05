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


import { FormContainer, Button } from './styles'

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
  const [isApprove, setIsApprove] = React.useState(false)
  
  
  const [tokenSingleWithdraw, setTokenSingleWithdraw] = React.useState<string>('')
  const [amountSingleOut, setAmountSingleOut] = React.useState<BigNumber>(new BigNumber(0))
  
  const { poolTokens } = useSelector((state: RootStateOrAny) => state)
  const { connect } = useConnect()

  const { getTotalSupply, getAllowance, approve } = useERC20Contract()
  const { joinswapExternAmountIn, exitPool, exitswapPoolAmountIn } = useCRPContract()
  const { 
    calcSingleOutGivenPoolIn, 
    denormalizedWeight, 
    totalDenormalizedWeight, 
    swapFee 
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
      if (!isApprove) {
        return approve(HeimCRPPOOL, investSelected)
      }
      switch (title) {
        case 'Invest':
          joinswapExternAmountIn(HeimCRPPOOL, investSelected, amountTokenPool)
          break;
        case 'Withdraw':
          tokenSingleWithdraw !== '' ?
            exitswapPoolAmountIn(HeimCRPPOOL, tokenSingleWithdraw, amountHeim)
            :
            exitPool(HeimCRPPOOL, amountHeim, Array(poolTokens.length).fill(new BigNumber(0)))
          break;
        default:
          break;
      }
    } catch (error) {
      console.log(error)
    }
  }

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
      .then((response: boolean) => setIsApprove(response))
  }, [investSelected])

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
              redeem={title === "Withdraw"} 
              amountTokenPool={amountTokenPool}
              setAmountTokenPool={setAmountTokenPool}
              getArrayTokens={getArrayTokens}
              investSelected={investSelected}
              setInvestSelected={setInvestSelected}
              setInvestHeim={setInvestHeim}
              supplyHeim={supplyHeim}
          />
          <InputDefault
            investHeim={investHeim}
            title={title}
            receiveTokenSelected={receiveTokenSelected}
            setReceiveTokenSelected={setReceiveTokenSelected}
          />
        </>
      }
      {isLogged ? 
        title === 'Withdraw' ?
          <Button type="submit">Withdraw</Button>
          :
          <Button type="submit">{isApprove ? title : "Approve"}</Button>

      :
        <Button type="button" onClick={connect}>Connect Wallet</Button>
      }
    </FormContainer>
  )
}

export default Form