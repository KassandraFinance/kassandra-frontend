import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useSWR from 'swr'
import { request } from 'graphql-request'
import { BarChart, XAxis, YAxis, Bar } from 'recharts'
import { useMatomo } from '@datapunt/matomo-tracker-react'

import { SUBGRAPH_URL, HeimCRPPOOL } from '../../../constants/tokenAddresses'
import { GET_INFO_AHYPE } from '../graphql'

import Button from '../../../components/Button'
import ExternalLink from '../../../components/ExternalLink'

import arrowRight from '../../../../public/assets/icons/arrow-right.svg'

import TokenIcons from './TokenIcons'

import * as S from './styles'

interface TokenInfo {
  id: string;
  balance_in_pool: string;
  address: string;
  name: string;
  symbol: string;
  allocation: number;
  price: number;
}


const dictionary: any = {
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
    '0x1d7C6846F033e593b4f3f21C39573bb1b41D43Cb', // KACY
}

// eslint-disable-next-line prettier/prettier
const Token = ({ poolPlatform }: { poolPlatform: keyof Networks }) => {
  const [poolInfo, setPoolInfo] = React.useState<any[]>([])
  const [poolPrice, setPoolPrice] = React.useState<string>('')
  const [poolObject, setPoolObject] = React.useState<any>({})
  const [poolName, setPoolName] = React.useState<string>('')
  const [tokenImages, setTokenImages] = React.useState<string[][]>([])

  const [change, setChange] = React.useState<string[]>([])
  const day = Math.trunc(Date.now() / 1000 - 60 * 60 * 24)

  const { data } = useSWR([GET_INFO_AHYPE, HeimCRPPOOL], (query, id) =>
    request(SUBGRAPH_URL, query, { id, day }),
    {
      refreshInterval: 10000
    }
  )

  const { trackEvent } = useMatomo()

  function clickMatomoEvent(action: string, name: string) {
    trackEvent({
      category: 'home-token',
      action: action,
      name: name
    })
  }

  function calcChange(newPrice: number, oldPrice: number) {
    const calc = ((newPrice - oldPrice) / oldPrice) * 100
    return calc ? calc.toFixed(2) : '0'
  }

  React.useEffect(() => {
    const arrChangePrice = []
    if (data?.now[0].close) {
      const changeDay = calcChange(data.now[0].close, data.day[0]?.close)

      arrChangePrice[0] = changeDay

      setChange(arrChangePrice)
    }
  }, [data])

  React.useEffect(() => {
    const getCoingecko = async (
      platform: string,
      token: TokenInfo,
      index: number,
      images: string[][],
    ) => {
      try {
        const URL = `https://api.coingecko.com/api/v3/coins/${platform}/contract/${poolPlatform !== 'Fuji' ? token.id : addressChanger[token.id]
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
        poolInfo.slice(0, poolInfo.length >= 5 ? 5 : poolInfo.length).map(async (asset, index) => {
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
  }, [poolInfo])

  React.useEffect(() => {
    if (data) {
      setPoolInfo(data.pool.underlying_assets)
      setPoolPrice(Number(data.pool.price_usd).toFixed(2))
      setPoolName(data.pool.name)
    }
  }, [data])

  React.useEffect(() => {
    if (poolInfo.length > 0) {
      const pool = poolInfo.map((item: any) => {
        return {
          [item.token.id]: getPercentage(item.weight_normalized)
        }
      })
      const poolData = Object.assign({}, ...pool)
      setPoolObject(poolData)
    }
  }, [poolInfo])

  const getPercentage = (weight: number) => {
    return Number((weight * 100).toFixed(2))
  }

  return (
    <S.Token id="Token">
      <p>OUR PROJECTS</p>
      <S.Divider />
      <h1>the world of data-driven investment funds</h1>
      <span>
        Tokens backed by a basket of assets, managed by autonomous strategies
        with data from external data providers
      </span>
      <S.CardWrapper>
        <S.Card>
          <S.CardHeader isTricrypto={true}>
            <S.ImageWrapper>
              <img src="/assets/tricrypto.svg" alt="" />
            </S.ImageWrapper>
          </S.CardHeader>
          <S.TextWrapper>
            <S.NameAndSymbol>
              <h1>{poolName}</h1>
            </S.NameAndSymbol>
            <p>
              by kassandra with yield yak <b> on avalanche network </b>{' '}
            </p>
          </S.TextWrapper>
          <S.TokenInfo>
            <S.Price change={Number(change)}>
              <span>USD {poolPrice}</span>
              <div>
                {/* <img src="assets/tokenPriceArrow.png" alt="" /> */}
                <p>{change}%</p>
              </div>
            </S.Price>
            <S.TokensSymbols>
              <TokenIcons tokens={tokenImages} />
              {poolInfo.length > 5 && <span>+{poolInfo.length - 5} MORE</span>}
            </S.TokensSymbols>
          </S.TokenInfo>
          <S.BarChartWrapper>
            <BarChart
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0 55px',
                maxWidth: '365px',
                borderRadius: '10px'
              }}
              width={400}
              height={10}
              data={[{ name: 'pool', ...poolObject }]}
              layout="vertical"
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
              <XAxis type="number" hide />
              <YAxis type="category" hide dataKey="pool" />

              {poolInfo.map((item: any, index: number) => (
                <Bar
                  key={item.token.id}
                  stackId="pool"
                  dataKey={item.token.id}
                  fill={`${dictionary[index]}`}
                />
              ))}
            </BarChart>
          </S.BarChartWrapper>
          <S.CardFooter>
            <Link href="/products/ahype">
              <Button onClick={() => clickMatomoEvent('click-button', 'buy-ahype')} backgroundSecondary size="medium" text="Buy $aHYPE" />
            </Link>
            <ExternalLink
              onClick={() => clickMatomoEvent('click-on-link', 'learn-more')}
              hrefLink="https://kassandrafoundation.medium.com/avalanche-social-index-4042a823c972"
              text="Learn more"
            />
          </S.CardFooter>
        </S.Card>
        <S.Info>
          <h4>New Product</h4>
          <h2>The safest assets yield farming for you</h2>
          <span>
            The $K3C represents a yield-earning portfolio composed of BTC, ETH, USDC and KACY built in partnership with Yield Yak
          </span>
          <S.InfoList>
            <li>
              <Image src={arrowRight} width={20} height={20} />
              Consistent gains with blue chips;
            </li>
            <li>
              <Image src={arrowRight} width={20} height={20} />
              Hedge your exposure;
            </li>
            <li>
              <Image src={arrowRight} width={20} height={20} />
              Improve your hodl.
            </li>
          </S.InfoList>
        </S.Info>
      </S.CardWrapper>

      <S.CardWrapper>
        <S.Info>
          <h2>Automagically invest on strong communities</h2>
          <span>
            The $aHYPE reflects the performance of a portfolio selected from the most socially active cryptocurrencies in the past 30 days, using Heimdall Social Score data.
          </span>
          <S.InfoList>
            <li>
              <Image src={arrowRight} width={20} height={20} />
              Easy exposure to the hottest assets;
            </li>
            <li>
              <Image src={arrowRight} width={20} height={20} />
              Surfing the tides of hype on Avalanche;
            </li>
            <li>
              <Image src={arrowRight} width={20} height={20} />
              EHigh volatility.
            </li>
          </S.InfoList>
        </S.Info>
        <S.Card>
          <S.CardHeader>
            <S.ImageWrapper>
              <img src="/assets/ahype.svg" alt="" />
            </S.ImageWrapper>
          </S.CardHeader>
          <S.TextWrapper>
            <S.NameAndSymbol>
              <h1>{poolName}</h1>
            </S.NameAndSymbol>
            <p>
              BY HEIMDALL.LAND <b> ON AVALANCHE NETWORK </b>{' '}
            </p>
          </S.TextWrapper>
          <S.TokenInfo>
            <S.Price change={Number(change)}>
              <span>USD {poolPrice}</span>
              <div>
                {/* <img src="assets/tokenPriceArrow.png" alt="" /> */}
                <p>{change}%</p>
              </div>
            </S.Price>
            <S.TokensSymbols>
              <TokenIcons tokens={tokenImages} />
              {poolInfo.length > 5 && <span>+{poolInfo.length - 5} MORE</span>}
            </S.TokensSymbols>
          </S.TokenInfo>
          <S.BarChartWrapper>
            <BarChart
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0 auto',
                maxWidth: '100%',
                borderRadius: '10px'
              }}
              width={400}
              height={10}
              data={[{ name: 'pool', ...poolObject }]}
              layout="vertical"
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
              <XAxis type="number" hide />
              <YAxis type="category" hide dataKey="pool" />

              {poolInfo.map((item: any, index: number) => (
                <Bar
                  key={item.token.id}
                  stackId="pool"
                  dataKey={item.token.id}
                  fill={`${dictionary[index]}`}
                />
              ))}
            </BarChart>
          </S.BarChartWrapper>
          <S.CardFooter>
            <Link href="/products/ahype">
              <Button onClick={() => clickMatomoEvent('click-button', 'buy-ahype')} backgroundSecondary size="medium" text="Buy $aHYPE" />
            </Link>
            <ExternalLink
              onClick={() => clickMatomoEvent('click-on-link', 'learn-more')}
              hrefLink="https://kassandrafoundation.medium.com/avalanche-social-index-4042a823c972"
              text="Learn more"
            />
          </S.CardFooter>
        </S.Card>
      </S.CardWrapper>
    </S.Token>
  )
}

export default Token
