import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import useMatomo from '@/hooks/useMatomo'

import { usePoolInfo } from '@/hooks/query/usePoolInfo'

import { IFeaturedProductDetailsProps } from '../../../constants/tokenAddresses'

import arrowAscend from '../../../../public/assets/notificationStatus/arrow-ascend.svg'
import arrowDescend from '../../../../public/assets/notificationStatus/arrow-descend.svg'

import { Bar, BarChart, XAxis, YAxis } from 'recharts'
import TokenIcons from '../../Home/TokenIcons'
import Button from '../../../components/Button'

import * as S from './styles'

const dictionary: Record<string, string> = {
  0: '#E8983D',
  1: '#63698C',
  2: '#B7372D',
  3: '#AB40E1',
  4: '#E9BC50',
  5: '#AB40E1',
  6: '#CF498D',
  7: '#D54F49',
  8: '#4517AB',
  9: '#72EEE4',
  10: '#4B81EF',
  11: '#e8983d65',
  12: '#18db11',
  13: '#cc24bef7',
  14: '#68d410d6',
  15: '#e9bb5067',
  16: '#ab40e149',
  17: '#cf498c42',
  18: '#d5504949',
  19: '#10e72299',
  20: '#d4e442b0'
}

type IFundProps = {
  product: IFeaturedProductDetailsProps
}

interface IProductInfoProps {
  logo?: string | null
  symbol: string
  name: string
  founded_by?: string
  price_usd: string
  changeDay: string
  underlying_assets: {
    token: {
      id: string
    }
  }[]
  poolTokenList: Record<string, number>
}

const FundCard = ({ product }: IFundProps) => {
  const [productInfo, setProductInfo] = React.useState<IProductInfoProps>({
    symbol: '',
    name: '',
    founded_by: '',
    price_usd: '',
    changeDay: '',
    underlying_assets: [],
    poolTokenList: {}
  })

  const router = useRouter()
  const { trackEvent } = useMatomo()

  const day = Math.trunc(Date.now() / 1000 - 60 * 60 * 24)
  const { data } = usePoolInfo({ id: product.id, day: day })

  function calcChange(newPrice: number, oldPrice: number) {
    const calc = ((newPrice - oldPrice) / oldPrice) * 100
    return calc ? calc.toFixed(2) : '0'
  }
  function getPercentage(weight: number) {
    return Number((weight * 100).toFixed(2))
  }

  React.useEffect(() => {
    if (!data || data?.underlying_assets.length === 0) return

    const pool = data.underlying_assets.map(item => {
      return {
        [item.token.id]: getPercentage(Number(item.weight_normalized))
      }
    })
    const poolTokenList = Object.assign({}, ...pool)

    const changeDay = calcChange(
      parseFloat(data.now[0]?.close),
      parseFloat(data.day[0]?.close)
    )

    setProductInfo({
      founded_by: data?.founded_by ?? '',
      logo: data.logo,
      name: data.name,
      price_usd: parseFloat(data.price_usd).toFixed(2),
      symbol: data.symbol,
      underlying_assets: data.underlying_assets,
      poolTokenList,
      changeDay
    })
  }, [data])

  return (
    <S.Card>
      <S.CardHeader>
        <S.ImageWrapper>
          <Image
            src={productInfo.logo ?? '/assets/icons/coming-soon.svg'}
            alt={`${productInfo.symbol} token logo`}
            width={70}
            height={70}
          />
        </S.ImageWrapper>
      </S.CardHeader>
      <S.TextWrapper>
        <S.NameAndSymbol>
          <h1>{productInfo.name}</h1>
          <p>
            by {productInfo.founded_by} <br />
            <span>{product?.foundedBy}</span>
          </p>
        </S.NameAndSymbol>
      </S.TextWrapper>
      <S.TokenInfo>
        <S.Price change={Number(productInfo.changeDay)}>
          <span>USD {Number(data?.price_usd || 0).toFixed(2)}</span>
          <div>
            <Image
              src={
                Number(productInfo.changeDay) >= 0 ? arrowAscend : arrowDescend
              }
              alt="token Price Arrow"
              width={13}
              height={13}
            />
            <p>{productInfo.changeDay}%</p>
          </div>
        </S.Price>
        <S.TokensSymbols>
          <TokenIcons day={day} id={product.id} />
          {data && data.underlying_assets.length > 5 && (
            <span>+{data.underlying_assets.length - 5}</span>
          )}
        </S.TokensSymbols>
      </S.TokenInfo>
      <S.BarChartWrapper>
        <BarChart
          id="token-1"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 auto',
            maxWidth: '100%',
            borderRadius: '10px'
          }}
          data={[{ name: 'pool', ...productInfo.poolTokenList }]}
          layout="vertical"
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          width={400}
          height={10}
        >
          <XAxis type="number" domain={[0, 100]} hide />
          <YAxis type="category" hide dataKey="pool" />

          {productInfo &&
            productInfo.underlying_assets.map((item, index) => {
              return (
                <Bar
                  key={item.token.id}
                  stackId="pool"
                  dataKey={item.token.id}
                  fill={`${dictionary[index]}`}
                />
              )
            })}
        </BarChart>
      </S.BarChartWrapper>
      <S.CardFooter>
        <Button
          onClick={() =>
            trackEvent({
              category: router.pathname,
              action: `click-on-button | Start exploring KassandraDAO | ${router.pathname}`,
              name: `Buy $${productInfo.symbol}`
            })
          }
          backgroundPrimary
          size="claim"
          text={`Buy $${productInfo.symbol}`}
          as="a"
          href={`https://app.kassandra.finance/pool/${product.id}`}
        />
      </S.CardFooter>
    </S.Card>
  )
}

export default FundCard
