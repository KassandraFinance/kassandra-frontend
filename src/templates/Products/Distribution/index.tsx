import React from 'react'
import { useSelector, RootStateOrAny } from 'react-redux'

import * as S from './styles'

const Distribution = () => {
  const { poolTokensArray } = useSelector((state: RootStateOrAny) => state)

  poolTokensArray.sort((a: { allocation: number }, b: { allocation: number }) => {
    return b.allocation - a.allocation;
  });

  return (
    <S.Distribution>
      <S.Title>
        <img src="assets/iconbar.svg" alt="-" />
        <h2>Distribution</h2>
      </S.Title>
      <S.Line />
      <S.Table >
        <thead>
          <S.Tr>
            <S.Th>Coin</S.Th>
            <S.Th>Allocation</S.Th>
            <S.Th>Holding</S.Th>
            <S.Th>Change 24h</S.Th>
          </S.Tr>
        </thead>
        <tbody>
          {
            poolTokensArray.map((coin: { name: any; image: string | undefined; symbol: string; allocation: any; market_data: { current_price: { usd: number }; price_change_percentage_24h: number } }) => (
              <S.Tr key={`key_${coin.name}`}>
                <S.Td change24h={false}>
                  <S.Coin width={110}>
                    <img src={coin.image} alt="" />
                    <span>{coin.symbol.toLocaleUpperCase()}</span>
                  </S.Coin>
                </S.Td>
                <S.Td change24h={false}>
                  <S.Coin width={60}>
                    {`${coin.allocation}%`}
                  </S.Coin>
                </S.Td>
                <S.Td change24h={false}>
                  {`${coin.market_data.current_price.usd.toFixed(2)} USD`}
                </S.Td>
                <S.Td
                  negative={coin.market_data.price_change_percentage_24h < 0}
                  change24h={true}
                >
                  <S.Coin width={50}>
                    {`${coin.market_data.price_change_percentage_24h.toFixed(2)}%`}
                  </S.Coin>
                </S.Td>
              </S.Tr>
            ))
          }
        </tbody>
      </S.Table>
    </S.Distribution>
  )
}

export default Distribution