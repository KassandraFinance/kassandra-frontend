import React from 'react'
import BigNumber from 'bn.js'
import { BNtoDecimal } from '../../../utils/numerals'

import { 
  InputDefaultContainer, 
  Info, 
  Span, 
  SpanLight,
  Symbol, 
  Input,
  AmountDefault,
  LineDefault
} from './styles'

interface IInputDefaultProps {
  investHeim: any
}

const InputDefault = ({ investHeim }: IInputDefaultProps) => {
  return (
    <InputDefaultContainer>
      <Info>
        <Span>Swap to (estimative)</Span>
        <Symbol>HEIM</Symbol>
        <span />
      </Info>
      <AmountDefault>
        <Span>Amount</Span>
        <Input type="number" placeholder="0" value={BNtoDecimal(investHeim, new BigNumber(18), 6)} readOnly />
      </AmountDefault>
      <LineDefault />  
    </InputDefaultContainer>
  )
}

export default InputDefault
