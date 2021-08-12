import React from 'react'
import useConnect from '../../hooks/useConnect'

import Form from './Form'

import { 
  HeimOperationsContainer, 
  SelectOperator, 
  Input,
  Label
} from './styles'

const HeimOperations = () => {
  const [inputChecked, setInputChecked] = React.useState<string>('invest')
  const { isLogged } = useConnect()

  return (
    <HeimOperationsContainer>
      <SelectOperator>
        <Input 
          type="radio" 
          name="operator" 
          id="invest" 
          onChange={() => setInputChecked('invest')}
          checked={inputChecked === 'invest'}
        />
        <Label htmlFor="invest">invest</Label>
        <Input 
          type="radio" 
          name="operator" 
          id="withdraw"
          onChange={() => setInputChecked('withdraw')}
          checked={inputChecked === 'withdraw'}
        />
        <Label htmlFor="withdraw">withdraw</Label>
        <Input 
          type="radio" 
          name="operator" 
          id="swap"
          onChange={() => setInputChecked('swap')}
          checked={inputChecked === 'swap'}
        />
        <Label htmlFor="swap">swap</Label>
      </SelectOperator>
      {inputChecked === 'invest' && <Form title="Invest" typeAction="Pay with" isLogged={isLogged} />}
      {inputChecked === 'withdraw' && <Form title="Withdraw" typeAction="Send" isLogged={isLogged} />}
      {inputChecked === 'swap' && <Form title="Swap" typeAction="Swap from" isLogged={isLogged} />}
    </HeimOperationsContainer>
  )
}

export default HeimOperations