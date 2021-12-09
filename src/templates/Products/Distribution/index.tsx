import React from 'react'
import Image from 'next/image'
import Big from 'big.js'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'

import { TokenDetails } from '../../../store/modules/poolTokens/types'
import { TokenImages } from '../../../store/modules/poolImages/types'
import { actionSetPoolImages } from '../../../store/modules/poolImages/actions'

import { BNtoDecimal } from '../../../utils/numerals'

import iconBar from '../../../../public/assets/iconbar.svg'
import none from '../../../../public/assets/coming-soon.svg'

import * as S from './styles'

interface Networks {
  Ropsten: string;
  Avalanche: string;
}

const network2coingeckoID: Networks = {
  Ropsten: 'ethereum',
  Avalanche: 'avalanche'
}

// for development testing
const addressChanger: { [key: string]: string | undefined } = {
  '0x81367474e9924123bd0058a1ae8c208a977d9e74':
    '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599', // wBTC
  '0xa42b880e7114a515409f68416988c7d8c37dbebd':
    '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', // wETH
  '0xbc6af724650dd257a1823f0eaaf9b88aaf29843a':
    '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0', // MATIC
  '0x26f8ed53c80214562755e40cb370cc8437324b7e':
    '0x26f8ed53c80214562755e40cb370cc8437324b7e', // KACY
  '0xd4a783f76b0672afc286a64b9b12e9eb026db4ec':
    '0x514910771af9ca656af840dff83e8264ecf986ca', // LINK
  '0xd905453d622da190e936ac670f08df5a334c541a':
    '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984', // UNI
  '0x6cbbaf8731d261258fb74014a4305dc025493dab':
    '0x3506424f91fd33084466f402d5d97f05f8e3b4af', // CHZ
  '0xac11a73ed1e4777f8b5baf17e1feaed961c93109':
    '0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c', // ENJ
  '0x1590f53cb5de88943c984a70a3f9f6a213a6196d':
    '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2', // SUSHI
  '0x001fbd9b4ad03b8788e1af8bd93c19fd3354f843':
    '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9', // AAVE
  '0xc58b1716f66e3b6aeacdc6f228636ef84bfa280f':
    '0xc944e90c64b2c07662a292be6244bdf05cda44a7', // GRT
  '0x3d84473fb300e661e182ce9b19ff721af0d878c9':
    '0x967da4048cd07ab37855c090aaf366e4ce1b9f48', // OCEAN
  '0x7b05462d91eb45f211745b2c8b8e95edf631ecea':
    '0x8762db106b2c2a0bccb3a80d1ed41273552616e8', // RSR
  '0x52db3ec6637e6c5da9f1694f2f40caae891bcfcf':
    '0x52db3ec6637e6c5da9f1694f2f40caae891bcfcf' // THETA
}

// eslint-disable-next-line prettier/prettier
const Distribution = ({ poolPlatform }: { poolPlatform: keyof Networks }) => {
  const dispatch = useDispatch()
  const { poolTokensArray }: { poolTokensArray: TokenDetails[] } = useSelector(
    (state: RootStateOrAny) => state
  )
  const { poolImages }: { poolImages: TokenImages } = useSelector(
    (state: RootStateOrAny) => state
  )
  const [changes, setChanges] = React.useState<number[]>([])

  React.useEffect(() => {
    const getCoingecko = async (
      platform: string,
      token: TokenDetails,
      index: number,
      tokenImages: TokenImages,
      tokenChanges: number[]
    ) => {
      try {
        const URL = `https://api.coingecko.com/api/v3/coins/${platform}/contract/${
          poolPlatform !== 'Ropsten' ? token.address : addressChanger[token.address]
        }?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false`
        const res = await fetch(URL)
        const data = await res.json()
        tokenImages[token.address] = data.image?.small
        tokenChanges[index] = Number(
          data.market_data?.price_change_percentage_24h || 0
        )
        return
      } catch (e) {
        return
      }
    }

    const getExtraInfo = async () => {
      const images: TokenImages = {}
      const change: number[] = []

      await Promise.all(
        poolTokensArray.slice(0, -1).map(async (token, index) => {
          await getCoingecko(
            network2coingeckoID[poolPlatform],
            token,
            index,
            images,
            change
          )
        })
      )

      setChanges(change)
      dispatch(actionSetPoolImages(images))
    }

    getExtraInfo()
  }, [poolTokensArray])

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
            <S.Th>Price 24h</S.Th>
          </S.Tr>
        </thead>
        <tbody>
          {poolTokensArray.slice(0, -1).map((coin, index) => (
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
                {`${BNtoDecimal(
                  Big(coin.balance_in_pool || 0).times(Big(coin.price || 0)),
                  Big(0),
                  0,
                  0
                )} USD`}
              </S.Td>
              <S.Td negative={(changes[index] || 0) < 0} change24h={true}>
                <S.Coin width={50}>
                  {changes[index] ? `${changes[index].toFixed(2)}%` : '-'}
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
