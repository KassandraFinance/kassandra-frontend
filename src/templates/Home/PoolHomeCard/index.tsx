import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import useMatomo from '@/hooks/useMatomo'
import { usePoolInfo } from '@/hooks/query/usePoolInfo'

import Button from '../../../components/Button'
import { BarChart, XAxis, YAxis, Bar } from 'recharts'
import ExternalLink from '../../../components/ExternalLink'
import TokenIcons from '../TokenIcons'
import Paragraph from '../../../components/Paragraph'
import SectionSubtitle from '../../../components/SectionSubtitle'

import arrowRight from '../../../../public/assets/icons/arrow-yellow-right.svg'
import arrowAscend from '../../../../public/assets/notificationStatus/arrow-ascend.svg'
import arrowDescend from '../../../../public/assets/notificationStatus/arrow-descend.svg'

import * as S from './styles'
import { IFeaturedProductDetailsProps } from '@/constants/tokenAddresses'

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

interface IPoolHomeCardProps {
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

const PoolHomeCard = ({ product }: IPoolHomeCardProps) => {
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
    <S.CardWrapper>
      <S.Card>
        <S.CardHeader>
          <S.ImageWrapper>
            <Image
              src={productInfo?.logo ?? '/assets/icons/coming-soon.svg'}
              alt={`${productInfo?.symbol} token logo`}
              width={96}
              height={96}
            />
          </S.ImageWrapper>
        </S.CardHeader>
        <S.TextWrapper>
          <S.NameAndSymbol>
            <h1>{productInfo.name}</h1>
          </S.NameAndSymbol>
          <p>
            by {productInfo.founded_by} <span>{product?.foundedBy}</span>
          </p>
        </S.TextWrapper>
        <S.TokenInfo>
          <S.Price change={Number(productInfo?.changeDay ?? 0)}>
            <span>USD {productInfo.price_usd}</span>
            <div>
              <Image
                src={
                  Number(productInfo.changeDay) >= 0
                    ? arrowAscend
                    : arrowDescend
                }
                alt="token Price Arrow pool Tricryoto"
                width={13}
                height={13}
              />
              <p>{productInfo.changeDay}%</p>
            </div>
          </S.Price>
          <S.TokensSymbols>
            <TokenIcons id={product.id} day={day} />
            {productInfo.underlying_assets &&
              productInfo.underlying_assets.length > 5 && (
                <span>+{productInfo.underlying_assets.length - 5} MORE</span>
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

            {data?.underlying_assets.map((item, index) => {
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
          <Link href={`/pool/${product.id}`}>
            <Button
              onClick={() =>
                trackEvent({
                  category: router.pathname,
                  action: `click-on-button | FEATURED PORTFOLIOS | ${router.pathname}`,
                  name: 'Buy $${pool.symbol}'
                })
              }
              backgroundPrimary
              size="huge"
              text={`Buy $${productInfo.symbol}`}
            />
          </Link>
          <ExternalLink
            onClick={() =>
              trackEvent({
                category: router.pathname,
                action: `click-on-link | FEATURED PORTFOLIOS | ${router.pathname}`,
                name: `Learn more - ${productInfo.symbol}`
              })
            }
            hrefLink={product?.externalLink}
            text="Learn more"
          />
        </S.CardFooter>
      </S.Card>
      <S.Info>
        <SectionSubtitle text={product.title} as="h2" />
        <Paragraph text={product.description} />
        <S.InfoList>
          {product.infoList.map(info => {
            return (
              <li key={info}>
                <div className="image">
                  <Image
                    src={arrowRight}
                    width={20}
                    height={20}
                    alt="Arrow right"
                  />
                </div>
                {info}
              </li>
            )
          })}
        </S.InfoList>
      </S.Info>
    </S.CardWrapper>
  )
}

export default PoolHomeCard
