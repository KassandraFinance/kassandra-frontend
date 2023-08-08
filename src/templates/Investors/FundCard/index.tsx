import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import useMatomo from '@/hooks/useMatomo'

import { usePoolInfo } from '@/hooks/query/usePoolInfo'

import { ProductDetails } from '../../../constants/tokenAddresses'

import arrowAscend from '../../../../public/assets/notificationStatus/arrow-ascend.svg'
import arrowDescend from '../../../../public/assets/notificationStatus/arrow-descend.svg'

import { Bar, BarChart, XAxis, YAxis } from 'recharts'
import TokenIcons from '../../Home/TokenIcons'
import Button from '../../../components/Button'

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

type IFundProps = {
  fund: ProductDetails
}

const FundCard = ({ fund }: IFundProps) => {
  function calcChange(newPrice: number, oldPrice: number) {
    const calc = ((newPrice - oldPrice) / oldPrice) * 100
    return calc ? calc.toFixed(2) : '0'
  }

  const [change, setChange] = React.useState<string[]>([])
  const [poolObject, setPoolObject] = React.useState<{ [key: string]: number }>(
    {}
  )
  const { trackEvent } = useMatomo()
  const router = useRouter()
  const day = Math.trunc(Date.now() / 1000 - 60 * 60 * 24)

  const { data } = usePoolInfo({ id: fund.sipAddress, day: day })

  const getPercentage = (weight: number) => {
    return Number((weight * 100).toFixed(2))
  }

  React.useEffect(() => {
    if (!data) {
      return
    }

    const changeDay = calcChange(data.now[0]?.close, data.day[0]?.close)
    const arrChangePrice = []
    arrChangePrice[0] = changeDay

    setChange(arrChangePrice)

    if (data.underlying_assets.length > 0) {
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
    <S.Card>
      <S.CardHeader isTricrypto={fund.symbol === 'K3C'}>
        <S.ImageWrapper>
          <Image
            src={fund.fundIcon}
            alt={`${fund.symbol} token logo`}
            width={70}
            height={70}
          />
        </S.ImageWrapper>
      </S.CardHeader>
      <S.TextWrapper>
        <S.NameAndSymbol
          isTricrypto={fund.name === 'Kassandra Tricrypto Index'}
        >
          <h1>{fund.name}</h1>
          <p>
            by {fund.fundBy} <br />
            <span> on avalanche network </span>
          </p>
        </S.NameAndSymbol>
      </S.TextWrapper>
      <S.TokenInfo>
        <S.Price change={Number(change)}>
          <span>USD {Number(data?.price_usd || 0).toFixed(2)}</span>
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
          <TokenIcons day={day} id={fund.sipAddress} />
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
          data={[{ name: 'pool', ...poolObject }]}
          layout="vertical"
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          width={400}
          height={10}
        >
          <XAxis type="number" domain={[0, 100]} hide />
          <YAxis type="category" hide dataKey="pool" />

          {data &&
            data.underlying_assets.map((item, index) => {
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
              name: `Buy $${fund.symbol}`
            })
          }
          backgroundPrimary
          size="claim"
          text={`Buy $${fund.symbol}`}
          as="a"
          href={`https://app.kassandra.finance/pool/${fund.sipAddress}`}
        />
      </S.CardFooter>
    </S.Card>
  )
}

export default FundCard
