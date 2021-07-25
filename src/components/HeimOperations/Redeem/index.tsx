import React from 'react'
import { useSelector, RootStateOrAny } from 'react-redux'
import InputHeim from '../../InputHeim'
import InputMintRedeem from '../../InputMintRedeem'

import { Form, Button } from '../styles'

const Redeem = () => {
  const { corePool } = useSelector((state: RootStateOrAny) => state)

  return (
    <Form>
      <InputHeim action="Send" redeem />
      {corePool.map((token) => (
      <InputMintRedeem token={token} />
      ))}
      <Button type="submit">Connect Wallet</Button>
    </Form>
  )
}

export default Redeem
