import React from 'react'
import BigNumber from 'bn.js'
import { useSelector, RootStateOrAny } from 'react-redux'

import { HeimCRPPOOL } from '../../../constants/tokenAddresses'
import { IPoolTokensProps } from '../../../store/modules/poolTokens/types'

import useConnect from '../../../hooks/useConnect'
import useCRPContract from '../../../hooks/useCRPContract'
import useERC20Contract from '../../../hooks/useERC20Contract'

import InputEth from '../../InputEth'
import InputHeim from '../../InputHeim'
import InputDefault from '../../InputDefault'
import InputMintRedeem from '../../InputMintRedeem'


import { FormContainer, Button } from '../styles'

interface IFormProps {
  action: string
  title: string
  isLogged: boolean
}

const Form = ({ action, title, isLogged }: IFormProps) => {
  const [amountHeim, setAmountHeim] = React.useState<BigNumber>(new BigNumber(0))
  const [supplyHeim, setSupplyHeim] = React.useState<BigNumber>(new BigNumber(0))

  const { poolTokens } = useSelector((state: RootStateOrAny) => state)
  const { connect } = useConnect()

  const { getTotalSupply } = useERC20Contract()
  const { joinswapExternAmountIn, exitPool } = useCRPContract()


  React.useEffect(() => {
    (async () => {
      const newSupplyHeim = await getTotalSupply(HeimCRPPOOL)
      setSupplyHeim(newSupplyHeim)
    })()
  }, [])


  function getRedeemBalance(balance: BigNumber): BigNumber {
    if (supplyHeim.toString(10) === "0") {
      return 0;
    }
    return amountHeim
      .mul(new BigNumber(97))
      .mul(balance)
      .div(supplyHeim)
      .div(new BigNumber(100))
  }

  const getBalanceToken = () => {
    const arrayRedeemBalance = poolTokens.map((tokenPool: IPoolTokensProps) => (
      {
        ...tokenPool,
        balance: getRedeemBalance(tokenPool.balance)
      }
    ))

    return arrayRedeemBalance
  }

  function handleAction(e: { preventDefault: () => void }) {
    e.preventDefault()
    console.log(e)
    try {
      switch (title) {
        case 'Invest':
          joinswapExternAmountIn(HeimCRPPOOL, amountHeim)
          break;
        case 'Withdraw':
          exitPool(HeimCRPPOOL, amountHeim, Array(poolTokens.length).fill(new BigNumber(0)))
          break;
        default:
          break;
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <FormContainer onSubmit={handleAction}>
      {title === "Withdraw" ?
        <>
          <InputHeim 
            action={action} 
            redeem={title === "Withdraw"} 
            amountHeim={amountHeim}
            setAmountHeim={setAmountHeim}
            getBalanceToken={getBalanceToken}
          />
          {poolTokens.map((token: IPoolTokensProps) => (
            <InputMintRedeem key={token.address} token={token} getBalanceToken={getBalanceToken} />
          ))}
        </>
      :
        <>
          <InputEth action={action} />
          <InputDefault />
        </>
      }
      {isLogged ? 
        <Button type="submit">{title}</Button>
      :
        <Button type="button" onClick={connect}>Connect Wallet</Button>
      }
    </FormContainer>
  )
}

export default Form