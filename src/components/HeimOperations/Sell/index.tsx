import InputEth from '../../InputEth'
import InputDefault from '../../InputDefault'

import { Form, Button } from '../styles'

const Sell = () => {
  return (
    <Form>
      <InputEth action="Sell" />
      <InputDefault />
      <Button type="submit">Connect Wallet</Button>
    </Form>
  )
}

export default Sell