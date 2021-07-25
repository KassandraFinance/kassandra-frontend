import InputEth from '../../InputEth'
import InputDefault from '../../InputDefault'

import { Form, Button } from '../styles'

const Swap = () => {
  return (
    <Form>
      <InputEth action="You give" />
      <InputDefault />
      <Button type="submit">Connect Wallet</Button>
    </Form>
  )
}

export default Swap