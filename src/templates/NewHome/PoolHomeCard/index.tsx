import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import useSWR from 'swr'
import useMatomoEcommerce from '../../../hooks/useMatomoEcommerce'

import { GET_INFO_POOL } from './graphql'
import { ProductDetails, SUBGRAPH_URL } from '../../../constants/tokenAddresses'

import Button from '../../../components/Button'
import { BarChart, XAxis, YAxis, Bar } from 'recharts'
import ExternalLink from '../../../components/ExternalLink'
import TokenIcons from '../TokenIcons'

import arrowRight from '../../../../public/assets/icons/arrow-yellow-right.svg'
import arrowAscend from '../../../../public/assets/notificationStatus/arrow-ascend.svg'
import arrowDescend from '../../../../public/assets/notificationStatus/arrow-descend.svg'

import request from 'graphql-request'
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

const addressChanger: { [key: string]: string } = {
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
  '0xe28Ad9Fa07fDA82abab2E0C86c64A19D452b160E':
    '0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab', // WETH
  '0xFA17fb53da4c837594127b73fFd09fdb15f42C49':
    '0xd586e7f844cea2f87f50152665bcbc2c279d8d70', //DAI
  '0xbbcED92AC9B958F88A501725f080c0360007e858':
    '0x50b7545627a5162f82a992c33b87adc75187b218' //WBTC
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

type ITokenInfoProps = {
  id: string,
  balance_in_pool: string,
  address: string,
  name: string,
  symbol: string,
  allocation: number,
  price: number
}

interface IPoolInfoProps {
  balance: string;
  token: ITokenInfoProps;
  weight_goal_normalized: string;
  weight_normalized: string;
}

type IPoolProps = {
  pool: ProductDetails
}

const PoolHomeCard = ({ pool }: IPoolProps) => {
  function calcChange(newPrice: number, oldPrice: number) {
    const calc = ((newPrice - oldPrice) / oldPrice) * 100
    return calc ? calc.toFixed(2) : '0'
  }

  const poolPlatform =
    process.env.NEXT_PUBLIC_MASTER === '1' ? 'Avalanche' : 'Fuji'

  const [change, setChange] = React.useState<string[]>([])
  const [poolPrice, setPoolPrice] = React.useState<string>('')
  const [poolObject, setPoolObject] = React.useState<{ [key: string]: number }>(
    {}
  )
  const [poolInfo, setPoolInfo] = React.useState<IPoolInfoProps[]>([])
  const [tokenImages, setTokenImages] = React.useState<{
    [key: string]: string
  }>({})

  const day = Math.trunc(Date.now() / 1000 - 60 * 60 * 24)
  const { data } = useSWR(
    [GET_INFO_POOL, pool.sipAddress],
    (query, id) => request(SUBGRAPH_URL, query, { id, day }),
    {
      refreshInterval: 10000
    }
  )

  React.useEffect(() => {
    const arrChangePrice = []
    if (data?.now[0].close) {
      const changeDay = calcChange(data.now[0].close, data.day[0]?.close)

      arrChangePrice[0] = changeDay

      setChange(arrChangePrice)
    }
  }, [data])

  React.useEffect(() => {
    if (data) {
      setPoolInfo(data.pool.underlying_assets)
      setPoolPrice(Number(data.pool.price_usd).toFixed(2))
    }
  }, [data])

  React.useEffect(() => {
    const arrayAddressPool = poolInfo
      .slice(0, poolInfo.length >= 5 ? 5 : poolInfo.length)
      .map(asset => addressChanger[asset.token.id] || asset.token.id)

    const getCoingecko = async () => {
      const URL = `/api/image-coingecko?poolinfo=${
        network2coingeckoID[pool.platform]
      }&tokenAddress=${arrayAddressPool}`
      const res = await fetch(URL)
      const data = await res.json()
      setTokenImages(data.images)
    }
    getCoingecko()
  }, [poolInfo, poolPlatform])

  const getPercentage = (weight: number) => {
    return Number((weight * 100).toFixed(2))
  }

  React.useEffect(() => {
    if (poolInfo.length > 0) {
      const pool = poolInfo.map(item => {
        return {
          [item.token.id]: getPercentage(Number(item.weight_normalized))
        }
      })
      const poolData = Object.assign({}, ...pool)
      setPoolObject(poolData)
    }
  }, [poolInfo])

  const { trackEventFunction } = useMatomoEcommerce()

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
            <TokenIcons poolInfo={poolInfo} images={tokenImages} />
            {poolInfo.length > 5 && <span>+{poolInfo.length - 5} MORE</span>}
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

            {poolInfo.map((item, index) => {
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
          <Link href={`/explore/${pool.symbol.toLowerCase()}`}>
            <Button
              onClick={() =>
                trackEventFunction(
                  'click-button',
                  `buy-${pool.symbol.toLowerCase()}`,
                  `${pool.symbol.toLowerCase()}-card`
                )
              }
              backgroundPrimary
              size="claim"
              text={`Buy $${pool.symbol}`}
            />
          </Link>
          <ExternalLink
            onClick={() =>
              trackEventFunction(
                'click-on-link',
                'learn-more',
                `${pool.symbol.toLowerCase()}-card`
              )
            }
            hrefLink={pool.fundLink}
            text="Learn more"
          />
        </S.CardFooter>
      </S.Card>
      <S.Info>
        <h4>{pool.symbol !== 'aHYPE' ? 'New Product' : ''}</h4>
        <h2>
          {pool.symbol !== 'aHYPE'
            ? 'The safest assets yield farming for you'
            : 'Automagically invest in strong communities'}
        </h2>
        <p>{pool.fundSummary}</p>
        <S.InfoList>
          <li>
            <div className="image">
              <Image src={arrowRight} width={20} height={20} />
            </div>
            {pool.symbol !== 'aHYPE'
              ? 'Have a consistent bluechip strategy'
              : 'EASY EXPOSURE TO THE HOTTEST ASSETS'}
          </li>
          <li>
            <div className="image">
              <Image src={arrowRight} width={20} height={20} />
            </div>
            {pool.symbol !== 'aHYPE'
              ? 'Hedge your exposure'
              : 'SURFING THE TIDES OF HYPE ON AVALANCHE'}
          </li>
          <li>
            <div className="image">
              <Image src={arrowRight} width={20} height={20} />
            </div>
            {pool.symbol !== 'aHYPE' ? 'Improve your hodl' : 'HIGH VOLATILITY'}
          </li>
        </S.InfoList>
      </S.Info>
    </S.CardWrapper>
  )
}

export default PoolHomeCard
