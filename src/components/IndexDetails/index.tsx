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


const IndexDetails = ({ coinInfoList }: IIndexDetailsProps) => {
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  coinInfoList.sort((a, b) => {
    return b.allocation - a.allocation;
  });

  const [showMore, setShowMore] = React.useState<boolean>(false);

  return (
    <>
      <S.IndexDetailsContainer>
        <h1>Details</h1>
        <>
          <S.Table >
            <thead>
              <S.Tr showMore={showMore}>
                <S.Th>Colour</S.Th>
                <S.Th>Name</S.Th>
                <S.Th>Price</S.Th>
                <S.Th>Allocation</S.Th>
                <S.Th>Change 24h</S.Th>
              </S.Tr>
            </thead>
            <tbody>
              {
                coinInfoList.map((coin) => (
                  <S.Tr showMore={showMore}>
                    <S.Colour style={{ background: getRandomColor() }} />
                    <S.Td change24h={false}>
                      <S.Coin width={110}>
                        <img src={coin.image.small} alt="" /> {coin.symbol.toLocaleUpperCase()}
                      </S.Coin>
                    </S.Td>
                    <S.Td change24h={false}>
                      {`${coin.market_data.current_price.usd.toFixed(2)} USD`}
                    </S.Td>
                    <S.Td change24h={false}>
                      <S.Coin width={60}>
                        {`${coin.allocation}%`}
                      </S.Coin>
                    </S.Td>
                    <S.Td
                      negative={coin.market_data.price_change_percentage_24h < 0}
                      change24h={true}
                    >
                      <S.Coin width={60}>
                        {`${coin.market_data.price_change_percentage_24h.toFixed(2)}%`}
                      </S.Coin>
                    </S.Td>
                  </S.Tr>


                ))
              }
            </tbody>
          </S.Table>
          <S.WrapperToggle>
            <S.ToggleList
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? 'Show More' : 'Show Less'}
            </S.ToggleList>
          </S.WrapperToggle>
        </>
      </S.IndexDetailsContainer>
    </>
  )
}


export default IndexDetails
