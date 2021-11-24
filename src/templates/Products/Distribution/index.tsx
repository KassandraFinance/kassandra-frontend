import React from 'react'
import useSWR from 'swr'
import Image from 'next/image'

import { TOKENS_IN_POOL } from '../graphql'

import none from '../../../../public/assets/coming-soon.svg'

import * as S from './styles'

// interface ICoin {
//   image: string | undefined;
//   symbol: string;
//   allocation: number;
//   market_data: {
//     current_price: {
//       usd: number
//     },
//     price_change_percentage_24h: number
//   };
//   address: string;
// }

const Distribution = () => {
  const [tokensInPool, setTokensInPool] = React.useState([])
  const { data } = useSWR(TOKENS_IN_POOL)

  React.useEffect(() => {
    const filterWithwWightNormalized = data?.pool.weights[0].weights.sort(
      (a: { weight_normalized: string }, b: { weight_normalized: string }) => {
        return (
          Number(b.weight_normalized) * 100 - Number(a.weight_normalized) * 100
        )
      }
    )

    setTokensInPool(filterWithwWightNormalized)
  }, [data])

  return (
    <S.Distribution>
      <S.Title>
        <img src="/assets/iconbar.svg" alt="-" />
        <h2>Distribution</h2>
      </S.Title>
      <S.Line />
      <S.Table>
        <thead>
          <S.Tr>
            <S.Th>Coin</S.Th>
            <S.Th>Allocation</S.Th>
            <S.Th>Holding</S.Th>
            <S.Th>Change 24h</S.Th>
          </S.Tr>
        </thead>
        <tbody>
          {tokensInPool?.map((item: any, index: any) => (
            <S.Tr key={`distribution_${item.token.id}`}>
              <S.Td change24h={false}>
                <S.Coin width={110}>
                  <Image src={none} alt="none" width={28} height={28} />
                  <span>{item.token.symbol.toLocaleUpperCase()}</span>
                </S.Coin>
              </S.Td>
              <S.Td change24h={false}>
                <S.Coin width={60}>{`${Number(
                  item.weight_normalized * 100
                ).toFixed(2)}%`}</S.Coin>
              </S.Td>
              <S.Td change24h={false}>{`${Number(item.token.price_usd).toFixed(
                2
              )} USD`}</S.Td>
              <S.Td negative={index % 2 !== 0} change24h={true}>
                <S.Coin width={50}>
                  {index % 2 === 0 ? '2.76%' : '-0.53'}
                </S.Coin>
              </S.Td>
            </S.Tr>
          ))}
        </tbody>
      </S.Table>
    </S.Distribution>
  )
}

export default Distribution
