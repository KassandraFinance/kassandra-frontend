import React from 'react'
import Image from 'next/image'
import Big from 'big.js'
import { useSelector, RootStateOrAny } from 'react-redux'

import { BNtoDecimal } from '../../../utils/numerals'

import iconBar from '../../../../public/assets/iconbar.svg'
import none from '../../../../public/assets/coming-soon.svg'

import * as S from './styles'

import { IInfoTokenProps } from '../index'

interface IDistributionProps {
  priceAndChange: IInfoTokenProps[];
}

const Distribution = ({ priceAndChange }: IDistributionProps) => {
  const { poolImages, poolTokensArray } = useSelector(
    (state: RootStateOrAny) => state
  )

  return (
    <>
      {poolTokensArray.length > 1 &&
        priceAndChange.length > 1 &&
        poolTokensArray.length - 1 === priceAndChange.length && (
          <S.Distribution>
            <S.Title>
              <Image src={iconBar} alt="" />
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
                {poolTokensArray.slice(0, -1).map(
                  (
                    coin: {
                      name: any,
                      address: string | number,
                      symbol:
                        | boolean
                        | React.ReactChild
                        | React.ReactFragment
                        | React.ReactPortal
                        | null
                        | undefined,
                      allocation: any,
                      balance_in_pool: any,
                      price: string | number
                    },
                    index: number
                  ) => {
                    return (
                      <S.Tr key={`key_${coin.name}`}>
                        <S.Td change24h={false}>
                          <S.Coin width={110}>
                            <img
                              src={poolImages[coin.address] || none.src}
                              alt=""
                            />
                            <span>{coin.symbol}</span>
                          </S.Coin>
                        </S.Td>
                        <S.Td change24h={false}>
                          <S.Coin width={60}>{`${
                            coin.allocation || 0
                          }%`}</S.Coin>
                        </S.Td>
                        <S.Td change24h={false}>
                          {`$ ${BNtoDecimal(
                            Big(coin.balance_in_pool || 0).times(
                              Big(priceAndChange[index]?.price || 0)
                            ),
                            18,
                            5,
                            2
                          )}`}
                          <S.BalanceCoin>{`${BNtoDecimal(
                            Big(coin.balance_in_pool || '0'),
                            18,
                            5
                          )} ${coin.symbol}`}</S.BalanceCoin>
                        </S.Td>
                        <S.Td>
                          <span>
                            $
                            {BNtoDecimal(
                              Big(priceAndChange[index]?.price || 0),
                              18,
                              5,
                              2
                            )}
                          </span>
                          <S.Coin
                            negative={(priceAndChange[index].change || 0) < 0}
                            change24h={true}
                          >
                            {priceAndChange[index]
                              ? `${
                                  priceAndChange[index].change < 0 ? '' : '+'
                                }${priceAndChange[index].change.toFixed(2)}%`
                              : '-'}
                          </S.Coin>
                        </S.Td>
                      </S.Tr>
                    )
                  }
                )}
              </tbody>
            </S.Table>
          </S.Distribution>
        )}
    </>
  )
}

export default Distribution