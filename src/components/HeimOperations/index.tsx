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
  const [inputChecked, setInputChecked] = React.useState<string>('buy')
  const { isLogged } = useConnect()

  return (
    <HeimOperationsContainer>
      <SelectOperator>
        <Input 
          type="radio" 
          name="operator" 
          id="buy" 
          onChange={() => setInputChecked('buy')}
          checked={inputChecked === 'buy'}
        />
        <Label htmlFor="buy">buy</Label>
        <Input 
          type="radio" 
          name="operator" 
          id="sell" 
          onChange={() => setInputChecked('sell')}
          checked={inputChecked === 'sell'}
        />
        <Label htmlFor="sell">sell</Label>
        <Input 
          type="radio" 
          name="operator" 
          id="swap"
          onChange={() => setInputChecked('swap')}
          checked={inputChecked === 'swap'}
        />
        <Label htmlFor="swap">swap</Label>
        <Input 
          type="radio" 
          name="operator" 
          id="mint"
          onChange={() => setInputChecked('mint')}
          checked={inputChecked === 'mint'}
        />
        <Label htmlFor="mint">mint</Label>
        <Input 
          type="radio" 
          name="operator" 
          id="redeem"
          onChange={() => setInputChecked('redeem')}
          checked={inputChecked === 'redeem'}
        />
        <Label htmlFor="redeem">redeem</Label>
      </SelectOperator>
      {inputChecked === 'buy' && <Form title="Buy" action="Pay with" isLogged={isLogged} />}
      {inputChecked === 'sell' && <Form title="Sell" action="Sell" isLogged={isLogged} />}
      {inputChecked === 'swap' && <Form title="Swap" action="You give" isLogged={isLogged} />}
      {inputChecked === 'mint' && <Form title="Mint" action="Receive (estimative)" isLogged={isLogged} />}
      {inputChecked === 'redeem' && <Form title="Redeem" action="Send" isLogged={isLogged} />}
    </HeimOperationsContainer>
  )
}

export default HeimOperations