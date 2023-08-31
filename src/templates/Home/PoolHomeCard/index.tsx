import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import useMatomo from '@/hooks/useMatomo'
import { usePoolInfo } from '@/hooks/query/usePoolInfo'

import { ProductDetails } from '../../../constants/tokenAddresses'

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

const dictionary: { [key: string]: string } = {
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

type IPoolProps = {
  pool: ProductDetails
}

const PoolHomeCard = ({ pool }: IPoolProps) => {
  function calcChange(newPrice: number, oldPrice: number) {
    const calc = ((newPrice - oldPrice) / oldPrice) * 100
    return calc ? calc.toFixed(2) : '0'
  }

  const [change, setChange] = React.useState<string[]>([])
  const [poolPrice, setPoolPrice] = React.useState<string>('')
  const [poolObject, setPoolObject] = React.useState<{ [key: string]: number }>(
    {}
  )

  const { trackEvent } = useMatomo()
  const router = useRouter()

  const day = Math.trunc(Date.now() / 1000 - 60 * 60 * 24)

  const { data } = usePoolInfo({ id: pool.sipAddress, day: day })

  React.useEffect(() => {
    if (!data) {
      return
    }
    setPoolPrice(Number(data.price_usd).toFixed(2))

    const changeDay = calcChange(data.now[0]?.close, data.day[0]?.close)
    const arrChangePrice = []
    arrChangePrice[0] = changeDay

    setChange(arrChangePrice)
  }, [data])

  const getPercentage = (weight: number) => {
    return Number((weight * 100).toFixed(2))
  }

  React.useEffect(() => {
    if (!data) {
      return
    }

    if (data?.underlying_assets.length > 0) {
      const pool = data.underlying_assets.map(item => {
        return {
          [item.token.id]: getPercentage(Number(item.weight_normalized))
        }
      })
      const poolData = Object.assign({}, ...pool)
      setPoolObject(poolData)
    }
  }, [data])

  return (
    <S.CardWrapper>
      <S.Card>
        <S.CardHeader isTricrypto={pool.symbol === 'K3C'}>
          <S.ImageWrapper>
            <Image
              src={pool.fundIcon}
              alt={`${pool.symbol} token logo`}
              width={96}
              height={96}
            />
          </S.ImageWrapper>
        </S.CardHeader>
        <S.TextWrapper>
          <S.NameAndSymbol
            isTricrypto={pool.name === 'Kassandra Tricrypto Index'}
          >
            <h1>{pool.name}</h1>
          </S.NameAndSymbol>
          <p>
            by {pool.fundBy} <strong> on avalanche network </strong>{' '}
          </p>
        </S.TextWrapper>
        <S.TokenInfo>
          <S.Price change={Number(change)}>
            <span>USD {poolPrice}</span>
            <div>
              <Image
                src={Number(change) >= 0 ? arrowAscend : arrowDescend}
                alt="token Price Arrow pool Tricryoto"
                width={13}
                height={13}
              />
              <p>{change}%</p>
            </div>
          </S.Price>
          <S.TokensSymbols>
            <TokenIcons id={pool.sipAddress} day={day} />
            {data && data?.underlying_assets.length > 5 && (
              <span>+{data?.underlying_assets.length - 5} MORE</span>
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
            data={[{ name: 'pool', ...poolObject }]}
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
          <Link href={`/pool/${pool.sipAddress}`}>
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
              text={`Buy $${pool.symbol}`}
            />
          </Link>
          <ExternalLink
            onClick={() =>
              trackEvent({
                category: router.pathname,
                action: `click-on-link | FEATURED PORTFOLIOS | ${router.pathname}`,
                name: `Learn more - ${pool.symbol}`
              })
            }
            hrefLink={pool.fundLink}
            text="Learn more"
          />
        </S.CardFooter>
      </S.Card>
      <S.Info>
        <span>{pool.symbol !== 'aHYPE' ? 'New Product' : ''}</span>
        <SectionSubtitle
          text={
            pool.symbol !== 'aHYPE'
              ? 'The safest assets yield farming for you'
              : 'Automagically invest in strong communities'
          }
          as="h2"
        />
        <Paragraph text={pool.fundSummary ? pool.fundSummary : ''} />
        <S.InfoList>
          <li>
            <div className="image">
              <Image
                src={arrowRight}
                width={20}
                height={20}
                alt="Arrow right"
              />
            </div>
            {pool.symbol !== 'aHYPE'
              ? 'Have a consistent bluechip strategy'
              : 'EASY EXPOSURE TO THE HOTTEST ASSETS'}
          </li>
          <li>
            <div className="image">
              <Image
                src={arrowRight}
                width={20}
                height={20}
                alt="Arrow right"
              />
            </div>
            {pool.symbol !== 'aHYPE'
              ? 'Hedge your exposure'
              : 'SURFING THE TIDES OF HYPE ON AVALANCHE'}
          </li>
          <li>
            <div className="image">
              <Image
                src={arrowRight}
                width={20}
                height={20}
                alt="Arrow right"
              />
            </div>
            {pool.symbol !== 'aHYPE' ? 'Improve your hodl' : 'HIGH VOLATILITY'}
          </li>
        </S.InfoList>
      </S.Info>
    </S.CardWrapper>
  )
}

export default PoolHomeCard
