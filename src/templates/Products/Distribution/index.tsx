import React from 'react'
import Image from 'next/image'
import Big from 'big.js'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'
import { Networks } from '../../../constants/tokenAddresses'

import { TokenDetails } from '../../../store/modules/poolTokens/types'
import { TokenImages } from '../../../store/modules/poolImages/types'
import { actionSetPoolImages } from '../../../store/modules/poolImages/actions'

import { BNtoDecimal } from '../../../utils/numerals'

import iconBar from '../../../../public/assets/iconbar.svg'
import none from '../../../../public/assets/coming-soon.svg'

import * as S from './styles'

const network2coingeckoID: Networks = {
  Ropsten: 'ethereum',
  Avalanche: 'avalanche',
  Fuji: 'avalanche',
}

// for development testing
const addressChanger: { [key: string]: string | undefined } = {
  '0xd00ae08403B9bbb9124bB305C09058E32C39A48c':
    '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7', // WAVAX
  '0xe401e9Ce0E354Ad9092a63eE1dFA3168bB83F3DA':
    '0x8729438EB15e2C8B576fCc6AeCdA6A148776C0F5', // QI
  '0xf22f05168508749fa42eDBddE10CB323D87c201d':
    '0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd', // JOE
  '0x83080D4b5fC60e22dFFA8d14AD3BB41Dde48F199':
    '0x60781C2586D68229fde47564546784ab3fACA982', // PNG
  '0xBA1C32241Ac77b97C8573c3dbFDe4e1e2A8fc0DF':
    '0x59414b3089ce2AF0010e7523Dea7E2b35d776ec7', // YAK
  '0x1d7C6846F033e593b4f3f21C39573bb1b41D43Cb':
    '0x1d7C6846F033e593b4f3f21C39573bb1b41D43Cb', // KACY
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
          poolPlatform !== 'Fuji' ? token.address : addressChanger[token.address]
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
                {`$ ${BNtoDecimal(
                  Big(coin.balance_in_pool || 0).times(Big(coin.price || 0)),
                  2,
                  2,
                  2
                )}`}
                <S.BalanceCoin>{`${BNtoDecimal(Big(coin.balance_in_pool || 0), coin.decimals.toNumber(), 3)} ${coin.symbol}`}</S.BalanceCoin>
              </S.Td>
              <S.Td>
                <span>${
                  BNtoDecimal(Big(coin.price || 0), 18, 2, 2)
                }</span>
                <S.Coin negative={(changes[index] || 0) < 0} change24h={true}>
                  {changes[index] ? 
                    `${changes[index] < 0 ? '' : '+' }${changes[index].toFixed(2)}%` 
                    :
                    '-'
                  }
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
