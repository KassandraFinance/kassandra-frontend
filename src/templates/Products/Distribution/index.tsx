import React from 'react'

import * as S from './styles'

interface ICoinInfoList {
  symbol: string
  image: any
  market_data: any
  allocation: number
}

interface IIndexDetailsProps {
  coinInfoList: Array<ICoinInfoList>
}

const Distribution = ({ coinInfoList }: IIndexDetailsProps) => {
  const [coins, setCoins] = React.useState<any[]>([])

  coinInfoList.sort((a, b) => {
    return b.allocation - a.allocation;
  });


  const res = localStorage.getItem("listCoinPool")
  const listCoinPool = res && JSON.parse(res)


  React.useEffect(() => {
    if (!coinInfoList.length) {
      setCoins(listCoinPool)
    }
    setCoins(coinInfoList)
  }, [coinInfoList])

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
            coins.map((coin) => (
              <S.Tr>
                <S.Td change24h={false}>
                  <S.Coin width={110}>
                    <img src={coin.image.small} alt="" />
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