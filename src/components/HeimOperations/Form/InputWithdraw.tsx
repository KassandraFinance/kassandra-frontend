import React from 'react'
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


interface IInputMintRedeemProps {
  token: IPoolTokensProps
  getBalanceToken: any
}

const InputWithdraw = ({ token, getBalanceToken }: IInputMintRedeemProps) => {
  const arrayBalanceToken = getBalanceToken()

  const balance = arrayBalanceToken.filter((balanceToken: IPoolTokensProps) => 
    balanceToken.address === token.address
  )

  return (
    <InputWithdrawContainer>
      <Info>
        <Span>Receive (estimative)</Span>
        <Symbol>{token.symbol}</Symbol>
        <SpanLight>25%</SpanLight>
      </Info>
      <AmountDefault>
        <Span>Amount</Span>
        <Input type="number" placeholder="0" readOnly value={BNtoDecimal(balance[0].balance, balance[0].decimals, 6)} />
        <ButtonMax type="button">Max</ButtonMax>
      </AmountDefault>
      <LineDefault />  
    </InputWithdrawContainer>
  )
}


export default InputWithdraw