import React from 'react'
import Image from 'next/image'
import Big from 'big.js'
import { useSelector, RootStateOrAny } from 'react-redux'

import { TokenDetails } from '../../../store/modules/poolTokens/types'
import { TokenImages } from '../../../store/modules/poolImages/types'

import { BNtoDecimal } from '../../../utils/numerals'

import iconBar from '../../../../public/assets/section-title/product-bar.svg'
import none from '../../../../public/assets/icons/coming-soon.svg'

import * as S from './styles'

const Distribution = ({ changes }: { changes: number[] }) => {
  const { poolTokensArray }: { poolTokensArray: TokenDetails[] } = useSelector(
    (state: RootStateOrAny) => state
  )
  const { poolImages }: { poolImages: TokenImages } = useSelector(
    (state: RootStateOrAny) => state
  )

  return (
    <S.Distribution>
      <S.Title>
        <Image src={iconBar} alt="" width={18} height={18} />
        <h2>Distribution</h2>
      </S.Title>
      <S.Line />
      <S.Table>
        <thead>
          <S.Tr>
            <S.Th>Coin</S.Th>
            <S.Th>Allocation</S.Th>
            <S.Th>Holding</S.Th>
            <S.Th>Price 24h</S.Th>
          </S.Tr>
        </thead>
        <tbody>
          {poolTokensArray.slice(0, -1).map((coin, index) => {
            return (
              <S.Tr key={`key_${coin.name}`}>
                <S.Td change24h={false}>
                  <S.Coin width={110}>
                    <img src={poolImages[coin.address] || none.src} alt="" />
                    <span>{coin.symbol}</span>
                  </S.Coin>
                </S.Td>
                <S.Td change24h={false}>
                  <S.Coin width={60}>{`${coin.allocation || 0}%`}</S.Coin>
                </S.Td>
                <S.Td change24h={false}>
                  {/* {`$ ${BNtoDecimal(
                    Big(coin.balance_in_pool || 0).times(Big(coin.price || 0)),
                    2,
                    2,
                    2
                  )}`} */}
                  {/* <S.BalanceCoin>{`${BNtoDecimal(Big(coin.balance_in_pool || 0), coin.decimals.toNumber(), 3)} ${coin.symbol}`}</S.BalanceCoin> */}
                  <S.BalanceCoin>{`${coin.balance_in_pool} ${coin.symbol}`}</S.BalanceCoin>
                </S.Td>
                <S.Td>
                  <span>${BNtoDecimal(Big(coin.price || 0), 18, 2, 2)}</span>
                  <S.Coin negative={(changes[index] || 0) < 0} change24h={true}>
                    {changes[index]
                      ? `${changes[index] < 0 ? '' : '+'}${changes[
                          index
                        ].toFixed(2)}%`
                      : '-'}
                  </S.Coin>
                </S.Td>
              </S.Tr>
            )
          })}
        </tbody>
      </S.Table>
    </S.Distribution>
  )
}

export default Distribution
