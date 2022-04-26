import React from 'react'
import Big from 'big.js'
import Image from 'next/image'
import useSWR from 'swr'
import { request } from 'graphql-request'
import Link from 'next/link'

import { SUBGRAPH_URL, ProductDetails } from '../../constants/tokenAddresses'

import { BNtoDecimal } from '../../utils/numerals'

import FundAreaChart from './FundAreaChart'
import FundBarChart from './FundBarChart'
import FundTokenIcons from './FundTokenIcons'

import arrowAscend from '../../../public/assets/icons/arrow-ascend.svg'
import arrowDescend from '../../../public/assets/icons/arrow-descend.svg'

import { GET_CHART } from './graphql'

import * as S from './styles'

interface InfoPool {
  tvl: string;
  price: string;
}

interface IFundCardProps {
  product: ProductDetails;
}

interface TokenInfo {
  id: string;
  balance_in_pool: string;
  address: string;
  name: string;
  symbol: string;
  allocation: number;
  price: number;
}

interface Networks {
  Ropsten: string;
  Avalanche: string;
  Fuji: string;
}

const network2coingeckoID: Networks = {
  Ropsten: 'ethereum',
  Avalanche: 'avalanche',
  Fuji: 'avalanche'
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
    '0x1d7C6846F033e593b4f3f21C39573bb1b41D43Cb' // KACY
}

const FundCard = ({ product }: IFundCardProps) => {
  const poolPlatform =
    process.env.NEXT_PUBLIC_MASTER === '1' ? 'Avalanche' : 'Fuji'

  const dateNow = new Date()

  const [infoPool, setInfoPool] = React.useState<InfoPool>({
    tvl: '...',
    price: '...'
  })
  const [poolInfo, setPoolInfo] = React.useState<any[]>([])
  const [poolObject, setPoolObject] = React.useState<any>({})
  const [tokenImages, setTokenImages] = React.useState<string[][]>([])

  const [price, setPrice] = React.useState([])

  const [changeWeek, setChangeWeek] = React.useState<string[]>(
    Array(2).fill('')
  )

  const [params] = React.useState({
    id: product.sipAddress,
    price_period: 86400,
    period_selected: Math.trunc(dateNow.getTime() / 1000 - 60 * 60 * 24 * 30),
    day: Math.trunc(Date.now() / 1000 - 60 * 60 * 24),
    month: Math.trunc(Date.now() / 1000 - 60 * 60 * 24 * 30)
  })

  const { data } = useSWR([GET_CHART, params], (query, params) =>
    request(SUBGRAPH_URL, query, params)
  )

  const getPercentage = (weight: number) => {
    return Number((weight * 100).toFixed(2))
  }

  function calcChange(newPrice: number, oldPrice: number) {
    const calc = ((newPrice - oldPrice) / oldPrice) * 100
    return calc ? calc.toFixed(2) : '0'
  }

  React.useEffect(() => {
    const arrChangePrice = []

    if (data) {
      const newPrice = data?.pool.price_candles.map(
        (item: { timestamp: number, close: string }) => {
          return {
            timestamp: item.timestamp,
            close: Number(item.close)
          }
        }
      )

      const changeDay = calcChange(data.now[0].close, data.day[0]?.close)
      const changeMonth = calcChange(data.now[0].close, data.month[0]?.close)

      arrChangePrice[0] = changeDay
      arrChangePrice[1] = changeMonth

      setChangeWeek(arrChangePrice)

      setInfoPool({
        tvl: BNtoDecimal(Big(data.pool.total_value_locked_usd), 2, 2, 2),
        price: data.pool.price_usd
      })

      setPrice(newPrice)
      setPoolInfo(data.pool.underlying_assets)
    }
  }, [data])

  React.useEffect(() => {
    if (poolInfo.length > 0) {
      const pool = poolInfo.map(item => {
        return {
          [item.token.id]: getPercentage(item.weight_normalized)
        }
      })
      const poolData = Object.assign({}, ...pool)
      setPoolObject(poolData)
    }
  }, [poolInfo])

  React.useEffect(() => {
    const getCoingecko = async (
      platform: string,
      token: TokenInfo,
      index: number,
      images: string[][]
    ) => {
      try {
        const URL = `https://api.coingecko.com/api/v3/coins/${platform}/contract/${
          poolPlatform !== 'Fuji' ? token.id : addressChanger[token.id]
        }?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false`
        const res = await fetch(URL)
        const data = await res.json()
        images[index] = [token.id, data.image?.small]
        return
      } catch (e) {
        return
      }
    }

    const getExtraInfo = async () => {
      const images: string[][] = []

      await Promise.all(
        poolInfo
          .slice(0, poolInfo.length >= 3 ? 3 : poolInfo.length)
          .map(async (asset, index) => {
            await getCoingecko(
              network2coingeckoID[poolPlatform],
              asset.token,
              index,
              images
            )
          })
      )

      setTokenImages(images)
    }

    getExtraInfo()
  }, [poolInfo, poolPlatform])

  return (
    <S.CardContainer>
      <Link href={`/explore/${product.symbol.toLowerCase()}`} passHref>
        <a>
          <>
            <S.CardHeader>
              <S.ImageContainer>
                <Image src={product.fundIcon} width={36} height={36} />
              </S.ImageContainer>

              <S.FundPrice>
                <h3>Price</h3>
                <span>${parseFloat(infoPool.price).toFixed(2)}</span>
              </S.FundPrice>
            </S.CardHeader>

            <S.CardBody>
              <S.FundName>
                <h3>{product.name}</h3>
                <span>by {product.fundBy}</span>
              </S.FundName>

              <S.FundStatusContainer>
                <S.FundStatus>
                  <span>${parseInt(infoPool.tvl)}K</span>
                  <h4>Tvl</h4>
                </S.FundStatus>

                <S.FundStatus>
                  <div>
                    <span
                      style={{
                        color:
                          parseFloat(changeWeek[1]) >= 0 ? '#5EE56B' : '#E8372C'
                      }}
                    >
                      {changeWeek[1]}%
                    </span>
                    <Image
                      src={
                        parseFloat(changeWeek[1]) >= 0
                          ? arrowAscend
                          : arrowDescend
                      }
                      width={16}
                      height={16}
                    />
                  </div>
                  <h4>monthly</h4>
                </S.FundStatus>

                <S.FundStatus>
                  <div>
                    <span
                      style={{
                        color:
                          parseFloat(changeWeek[0]) >= 0 ? '#5EE56B' : '#E8372C'
                      }}
                    >
                      {changeWeek[0]}%
                    </span>
                    <Image
                      src={
                        parseFloat(changeWeek[0]) >= 0
                          ? arrowAscend
                          : arrowDescend
                      }
                      width={16}
                      height={16}
                    />
                  </div>
                  <h4>24h</h4>
                </S.FundStatus>
              </S.FundStatusContainer>

              <FundAreaChart areaChartData={price} color="#E843C4" />

              <S.TokenIconsContainer>
                <FundTokenIcons tokens={tokenImages} poolInfo={poolInfo} />
                {poolInfo.length > 3 && (
                  <p>
                    +{poolInfo.length - 3}
                    <span> more</span>
                  </p>
                )}
              </S.TokenIconsContainer>

              {data && (
                <FundBarChart poolObject={poolObject} poolInfo={poolInfo} />
              )}
            </S.CardBody>
          </>
        </a>
      </Link>
    </S.CardContainer>
  )
}

export default FundCard
