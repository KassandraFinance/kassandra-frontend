/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Image from 'next/image'
import BigNumber from 'bn.js'
import Big from 'big.js'

import { ITokenDetails } from '../../../context/PoolTokensContext'
import { ITokenImages } from '../../../store/reducers/poolImages'

import { BNtoDecimal } from '../../../utils/numerals'
import { priceDollar } from '../../../utils/priceDollar'

import { useAppSelector } from '../../../store/hooks'

import none from '../../../../public/assets/icons/coming-soon.svg'

import * as S from './styles'

interface IInputBestValueProps {
  poolTokenDetails: ITokenDetails[];
  poolTokensArray: ITokenDetails[];
  swapOutAmount: BigNumber[];
  swapOutBalance: BigNumber[];
  setPriceInDollarOnWithdraw: React.Dispatch<React.SetStateAction<string>>;
}

const InputBestValue = ({
  poolTokenDetails,
  poolTokensArray,
  swapOutAmount,
  swapOutBalance,
  setPriceInDollarOnWithdraw
}: IInputBestValueProps) => {
  const { poolImages }: { poolImages: ITokenImages } = useAppSelector(
    state => state
  )

  React.useEffect(() => {
    const res: Big = poolTokenDetails.reduce((accumulator, current, index) => {
      return Big((swapOutAmount[index] || 0).toString())
        .mul(Big(priceDollar(current.address, poolTokensArray)))
        .div(Big(10).pow(Number(current.decimals)))
        .add(accumulator)
    }, Big(0))

    setPriceInDollarOnWithdraw(BNtoDecimal(res, 18, 2, 2))
  }, [swapOutAmount])

  return (
    <S.InputBestValue>
      <S.IntroBestValue>
        <S.Span>Receive</S.Span>
        <S.Span total>Estimate</S.Span>
      </S.IntroBestValue>
      <S.AllInput>
        {poolTokenDetails.map((token, index) => (
          <S.InputBestValueGrid key={`best_value_${token.address}`}>
            <S.BestValueItem>
              <S.Symbol bestValue>
                <div className="image">
                  <Image
                    src={poolImages[token.address] || none}
                    alt=""
                    width={21}
                    height={21}
                  />
                </div>
                {BNtoDecimal(
                  swapOutAmount[index] || new BigNumber(0),
                  token.decimals.toNumber()
                )}{' '}
                {poolTokenDetails.length > 0 ? token.symbol : '...'}
              </S.Symbol>
              <S.SpanLight>
                Balance:{' '}
                {swapOutBalance[index] > new BigNumber(-1)
                  ? BNtoDecimal(
                      swapOutBalance[index],
                      token.decimals.toNumber()
                    )
                  : '...'}
              </S.SpanLight>
            </S.BestValueItem>
            <S.BestValueItem style={{ paddingRight: '10px' }}>
              <S.Input
                bestValue
                readOnly
                type="text"
                placeholder="0"
                value={
                  '$' +
                  BNtoDecimal(
                    Big((swapOutAmount[index] || 0).toString())
                      .mul(Big(priceDollar(token.address, poolTokensArray)))
                      .div(Big(10).pow(Number(token.decimals))),
                    18,
                    2,
                    2
                  )
                }
              />
              <S.SpanLight style={{ textAlign: 'right', float: 'right' }}>
                {token.allocation}%
              </S.SpanLight>
            </S.BestValueItem>
          </S.InputBestValueGrid>
        ))}
      </S.AllInput>
    </S.InputBestValue>
  )
}

export default InputBestValue
