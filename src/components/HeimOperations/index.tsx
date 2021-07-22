import React from 'react'

import Buy from './Buy'
import Swap from './Swap'
import Sell from './Sell'
import Mint from './Mint'
import Redeem from './Redeem'

import { 
  HeimOperationsContainer, 
  SelectOperator, 
  Input,
  Label
} from './styles'

const HeimOperations = () => {
  const [inputChecked, setInputChecked] = React.useState<string>('buy')
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
      {inputChecked === 'buy' && <Buy />}
      {inputChecked === 'sell' && <Sell />}
      {inputChecked === 'swap' && <Swap />}
      {inputChecked === 'mint' && <Mint />}
      {inputChecked === 'redeem' && <Redeem />}
    </HeimOperationsContainer>
  )
}

export default HeimOperations