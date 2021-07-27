import React from 'react'
import BigNumber from 'bn.js'
import { useSelector, RootStateOrAny } from 'react-redux'

import { HeimCRPPOOL } from '../../../constants/tokenAddresses'

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
  const [supplyHeim, setSupplyHeim] = React.useState(0)

  const { poolTokens } = useSelector((state: RootStateOrAny) => state)
  const { connect } = useConnect()

  const { getTotalSupply } = useERC20Contract()
  const { exitPool } = useCRPContract()


  React.useEffect(() => {
    (async () => {
      const supplyHeim = await getTotalSupply(HeimCRPPOOL)
      setSupplyHeim(Number(supplyHeim))
    })()
  }, [])


  const getBalanceToken = () => {
    const arrayRedeemBalance = poolTokens.map((tokenPool: { address: string, balance: BigNumber}) => {
      return { balance: handleInputHeim(tokenPool.balance), address: tokenPool.address }
    })

    return arrayRedeemBalance
  }

  function handleInputHeim(balance) {
    let y = (Number(amountHeim) * 0.97) / supplyHeim
    let balanceTokenToRedeem = y * balance

    return balanceTokenToRedeem
  }

  function handleAction(e: { preventDefault: () => void }) {
    console.log('handleAction')
    e.preventDefault()
    exitPool(HeimCRPPOOL, amountHeim, Array(poolTokens.length).fill(new BigNumber(0)))
  }

  return (
    <FormContainer onSubmit={handleAction}>
      {title === "Mint" || title === "Redeem" ?
        <>
          <InputHeim 
            action={action} 
            redeem={title === "Redeem" ? true : false} 
            amountHeim={amountHeim}
            setAmountHeim={setAmountHeim}
            getBalanceToken={getBalanceToken}
          />
          {poolTokens.map((token: any) => (
            <InputMintRedeem token={token} getBalanceToken={getBalanceToken} />
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
        <Button type="button" onClick={() => connect()}>Connect Wallet</Button>
      }
    </FormContainer>
  )
}

export default Form