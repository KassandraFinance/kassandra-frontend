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
  setPriceInDollarOnWithdraw: React.Dispatch<React.SetStateAction<string>>
}

const InputBestValue = ({ 
  poolTokenDetails, 
  poolTokensArray, 
  swapOutAmount, 
  swapOutBalance,
  setPriceInDollarOnWithdraw
}: IInputBestValueProps) => {

  React.useEffect(() => {
    const res: Big = poolTokenDetails.reduce((accumulator, current, index) => {
      return Big((swapOutAmount[index] || 0).toString())
        .mul(Big(priceDollar(current.address, poolTokensArray)))
        .div(Big(10).pow(current.decimals.toNumber())).add(accumulator)
    }, Big(0))

    setPriceInDollarOnWithdraw(BNtoDecimal(res.mul(Big(10).pow(18)), Big(18), 2, 2))
  }, [swapOutAmount])
  
  return (
    <S.InputBestValue>
      <S.IntroBestValue>
        <S.Span>Token</S.Span>
        <S.Span total>Receive(est.) </S.Span>
      </S.IntroBestValue>
      <S.AllInput>
        {poolTokenDetails.map((token, index) => 
          <S.InputBestValueGrid key={`best_value_${token.address}`}>
            <S.BestValueItem>
              <S.Symbol bestValue>
                {BNtoDecimal(swapOutAmount[index] || new BigNumber(0), token.decimals)}{" "}
                {poolTokenDetails.length > 0 ? token.symbol : '...'}
              </S.Symbol>
              <S.SpanLight>Balance: {swapOutBalance[index] > new BigNumber(-1) ? BNtoDecimal(swapOutBalance[index], token.decimals) : '...'}</S.SpanLight>
            </S.BestValueItem>
            <S.BestValueItem style={{ paddingRight: '10px' }}>
              <S.Input
                readOnly
                type="text"
                placeholder="0"
                value={'$' + BNtoDecimal(Big((swapOutAmount[index] || 0).toString()).mul(Big(priceDollar(token.address, poolTokensArray))), Big(token.decimals.toString(10)), 2)}
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