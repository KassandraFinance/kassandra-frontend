import React from 'react'
import BigNumber from 'bn.js'

import { IPoolTokensProps } from '../../../store/modules/poolTokens/types'
import { BNtoDecimal } from '../../../utils/numerals'

import { 
  InputWithdrawContainer,
  LineDefault,
  AmountDefault, 
  ButtonMax, 
  Span,
  SpanLight,
  Symbol,
  Input,
  Info
} from './styles'


interface IInputWithdrawProps {
  token: IPoolTokensProps
  amountSingleOut: BigNumber
  setTokenSingleWithdraw: React.Dispatch<React.SetStateAction<string>>
  tokenSingleWithdraw: string
}

const InputWithdraw = ({
  token, 
  amountSingleOut,
  setTokenSingleWithdraw,
  tokenSingleWithdraw
}: IInputWithdrawProps) => {
 
  if (tokenSingleWithdraw !== '') {
    const res = token.address === tokenSingleWithdraw
    token.balance = res ? amountSingleOut : new BigNumber(0)
  }

  return (
    <InputWithdrawContainer>
      <Info>
        <Span>Receive (estimative)</Span>
        <Symbol>{token.symbol}</Symbol>
        <SpanLight>{token.normalizedWeight}%</SpanLight>
      </Info>
      <AmountDefault>
        <Span>Amount</Span>
          <Input 
            type="number" 
            placeholder="0" 
            readOnly 
            value={BNtoDecimal(token.balance, token.decimals, 6)} 
          />
        <ButtonMax type="button" onClick={() => setTokenSingleWithdraw(token.address)}>
          Max
        </ButtonMax>
      </AmountDefault>
      <LineDefault /> 
    </InputWithdrawContainer>
  )
}


export default InputWithdraw