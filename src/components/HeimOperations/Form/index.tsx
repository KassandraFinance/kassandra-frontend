import React from 'react'
import { useSelector, RootStateOrAny } from 'react-redux'

import InputEth from '../../InputEth'
import InputDefault from '../../InputDefault'
import InputHeim from '../../InputHeim'
import InputMintRedeem from '../../InputMintRedeem'


import { FormContainer, Button } from '../styles'

interface IFormProps {
  action: string
  title: string
  isLogged: boolean
}

const Form = ({ action, title, isLogged }: IFormProps) => {
  const { poolTokens } = useSelector((state: RootStateOrAny) => state)

  return (
    <FormContainer>
      {title === "Mint" || title === "Redeem" ?
        <>
          {poolTokens.map((token: any) => (
          <InputHeim action={action} redeem={title === "Redeem" ? true : false} />
          {corePool.map((token) => (
            <InputMintRedeem token={token} />
          ))}
        </>
      : 
        <>
          <InputEth action={action} />
          <InputDefault />
        </>
      }
      <Button type="submit">{isLogged ? title : "Connect Wallet"}</Button>
    </FormContainer>
  )
}

export default Form