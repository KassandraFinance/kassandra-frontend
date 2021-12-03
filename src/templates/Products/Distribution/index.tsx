import React from 'react'
import Image from 'next/image'
import { useSelector, RootStateOrAny } from 'react-redux'

import { TokenDetails } from '../../../store/modules/poolTokens/types'

import iconBar from '../../../../public/assets/iconbar.svg'

import * as S from './styles'

const Distribution = () => {
  const { poolTokensArray } = useSelector((state: RootStateOrAny) => state)

  const res = localStorage.getItem('listCoinPool')
  const listCoinPool = res && JSON.parse(res)

  const [coinInfoList, setCoinInfoList] = React.useState<TokenDetails[]>(
    listCoinPool || []
  )

  // get data coinGecko
  async function getCoinList() {
    const URL = 'https://api.coingecko.com/api/v3/coins/list'
    const data = await fetch(URL)
    const responseJson = await data.json()

    responseJson.map((item: any) => isTokenPool(item))
  }

  function isTokenPool(value: any) {
    for (let i = 0; i < poolTokensArray.length; i++) {
      const element = poolTokensArray[i]
      // let newName = element.name.replace("Kassandra Test ", "")

      if (value.symbol === element.symbol.toLowerCase()) {
        if (value.symbol === 'uni' && value.name !== 'Uniswap') {
          continue
        }
        if (value.symbol === 'grt' && value.name !== 'The Graph') {
          continue
        }
        getCoin(value.id, element)
      }
    }
  }

  async function getCoin(id: string, element: any) {
    const URL = `https://api.coingecko.com/api/v3/coins/${id}`
    await fetch(URL)
      .then(res => res.json())
      .then(res => {
        setCoinInfoList(prevState => [
          ...prevState,
          {
            image: res.image.small,
            market_data: res.market_data,
            ...element
          }
        ])
      })
      .catch(err => err)
  }

  React.useEffect(() => {
    localStorage.setItem('listCoinPool', JSON.stringify(coinInfoList))
  }, [coinInfoList])

  React.useEffect(() => {
    if (poolTokensArray.length < 1) {
      return
    }

    getCoinList()
    setCoinInfoList([])
  }, [poolTokensArray])

  coinInfoList.sort((a: { allocation: number }, b: { allocation: number }) => {
    return b.allocation - a.allocation
  })

  return (
    <S.Distribution>
      <S.Title>
        <Image src={iconBar} alt="Icon Bar" />
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
          {coinInfoList.map(coin => (
            <S.Tr key={`key_${coin.name}`}>
              <S.Td change24h={false}>
                <S.Coin width={110}>
                  <img src={coin.image} alt="" />
                  <span>{coin.symbol.toLocaleUpperCase()}</span>
                </S.Coin>
              </S.Td>
              <S.Td change24h={false}>
                <S.Coin width={60}>{`${coin.allocation}%`}</S.Coin>
              </S.Td>
              <S.Td change24h={false}>
                {`${coin.market_data.current_price.usd.toFixed(2)} USD`}
              </S.Td>
              <S.Td
                negative={coin.market_data.price_change_percentage_24h < 0}
                change24h={true}
              >
                <S.Coin width={50}>
                  {`${coin.market_data.price_change_percentage_24h.toFixed(
                    2
                  )}%`}
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
