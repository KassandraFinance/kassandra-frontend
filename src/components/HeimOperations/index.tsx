import React from 'react'

import Form from './Form'

import { HeimOperationsContainer, SelectOperator, Input, Label } from './styles'

const HeimOperations = () => {
  const messages = {
    Invest: 'Pay with',
    Withdraw: 'Send',
    Swap: 'Swap from'
  }

  const [inputChecked, setInputChecked] = React.useState<keyof typeof messages>('Invest')

  return (
    <HeimOperationsContainer>
      <SelectOperator>
        <Input
          type="radio"
          name="operator"
          id="Invest"
          onChange={() => setInputChecked('Invest')}
          checked={inputChecked === 'Invest'}
        />
        <Label htmlFor="Invest">Invest</Label>
        <Input
          type="radio"
          name="operator"
          id="Withdraw"
          onChange={() => setInputChecked('Withdraw')}
          checked={inputChecked === 'Withdraw'}
        />
        <Label htmlFor="Withdraw">Withdraw</Label>
        <Input
          type="radio"
          name="operator"
          id="Swap"
          onChange={() => setInputChecked('Swap')}
          checked={inputChecked === 'Swap'}
        />
        <Label htmlFor="Swap">Swap</Label>
      </SelectOperator>
      <Form
        title={inputChecked}
        typeAction={messages[inputChecked]}
      />
    </HeimOperationsContainer>
  )
}

export default HeimOperations
