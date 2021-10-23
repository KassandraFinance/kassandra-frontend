import React from 'react'
import BigNumber from 'bn.js'
import Big from 'big.js'

import { TokenDetails } from '../../../store/modules/poolTokens/types'

import { BNtoDecimal } from '../../../utils/numerals'
import { priceDollar } from '../../../utils/priceDollar'

import * as S from './styles'

interface IInputBestValueProps {
  poolTokenDetails: TokenDetails[]
  poolTokensArray: TokenDetails[]
  swapOutAmount: BigNumber[]
  swapOutBalance: BigNumber[]
}

const InputBestValue = ({ poolTokenDetails, poolTokensArray, swapOutAmount, swapOutBalance }: IInputBestValueProps) => {
  return (
    <S.InputBestValue>
      <S.IntroBestValue>
        <S.Span>Token</S.Span>
        <S.Span total>Receive(est.) </S.Span>
      </S.IntroBestValue>
      <S.AllInput>
        {poolTokenDetails.map((token, index) => 
          <S.InputBestValueGrid>
            <S.BestValueItem>
              <S.Symbol bestValue>
                {BNtoDecimal(swapOutAmount[index] || new BigNumber(0), token.decimals, )}{" "}
                {poolTokenDetails.length > 0 ? token.symbol : '...'}
              </S.Symbol>
              <S.SpanLight>Balance: {swapOutBalance[index] > new BigNumber(-1) ? BNtoDecimal(swapOutBalance[index], token.decimals) : '...'}</S.SpanLight>
            </S.BestValueItem>
            <S.BestValueItem style={{ paddingRight: '10px' }}>
              <S.Input
                readOnly
                type="text"
                placeholder="0"
                value={'$' + Big((swapOutAmount[index] || 0).toString()).mul(Big(priceDollar(token.address, poolTokensArray))).div(Big(10).pow(18)).toFixed(6)}
                />
              <S.SpanLight style={{ textAlign: 'right', float: 'right' }}>{token.allocation}%</S.SpanLight>
            </S.BestValueItem>
          </S.InputBestValueGrid>
        )}
      </S.AllInput>
    </S.InputBestValue>
  )
}

export default InputBestValue