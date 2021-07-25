import React from 'react'
import InputEth from '../../InputEth'
import InputDefault from '../../InputDefault'

import { Form, Button } from '../styles'

const Buy = () => (
  <Form>
    <InputEth action="Pay with" />
    <InputDefault />
    <Button type="submit">Connect Wallet</Button>
  </Form>
  )

export default Buy