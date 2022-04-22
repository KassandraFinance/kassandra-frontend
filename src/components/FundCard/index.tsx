import React from 'react'
import Image from 'next/image'

import arrowAscend from '../../../public/assets/arrowAscend.svg'
import arrowDescend from '../../../public/assets/arrowDescend.svg'

import FundAreaChart from './FundAreaChart'
import FundBarChart from './FundBarChart'
import FundTokenIcons from './FundTokenIcons'

import * as S from './styles'

interface IFundCardProps {
  image: any;
  price: number;
  fundName: string;
  fundBy: string;
  tvl: number;
  monthly: number;
  monthlyUp: boolean;
  last24h: number;
  last24hUp: boolean;
  data: any[];
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

const FundCard = ({
  image,
  price,
  fundName,
  fundBy,
  tvl,
  monthly,
  monthlyUp,
  last24h,
  last24hUp,
  data
}: IFundCardProps) => {
  const poolPlatform =
    process.env.NEXT_PUBLIC_MASTER === '1' ? 'Avalanche' : 'Fuji'
  const [tokenImages, setTokenImages] = React.useState<string[][]>([])

  console.log(tokenImages)

  const poolObject = {
    '0x1d7C6846F033e593b4f3f21C39573bb1b41D43Cb': 5,
    '0x83080D4b5fC60e22dFFA8d14AD3BB41Dde48F199': 2.33,
    '0xBA1C32241Ac77b97C8573c3dbFDe4e1e2A8fc0DF': 0.73,
    '0xd00ae08403B9bbb9124bB305C09058E32C39A48c': 77.98,
    '0xe401e9Ce0E354Ad9092a63eE1dFA3168bB83F3DA': 5.3,
    '0xf22f05168508749fa42eDBddE10CB323D87c201d': 8.66
  }

  const poolInfo = [
    {
      balance: '1446.624011950834945884',
      token: {
        decimals: 18,
        id: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c',
        name: 'Wrapped AVAX',
        price_usd: '123.66',
        symbol: 'WAVAX'
      },
      weight_goal_normalized: '0',
      weight_normalized: '0.7798'
    },
    {
      balance: '2879.093466055797481145',
      token: {
        decimals: 18,
        id: '0xf22f05168508749fa42eDBddE10CB323D87c201d',
        name: 'JoeToken Kassandra',
        price_usd: '2.475573957027582703305583164868781',
        symbol: 'JOE.k'
      },
      weight_goal_normalized: '0',
      weight_normalized: '0.0866'
    },
    {
      balance: '71469.488208940928823665',
      token: {
        decimals: 18,
        id: '0xe401e9Ce0E354Ad9092a63eE1dFA3168bB83F3DA',
        name: 'BENQI',
        price_usd: '0.03948685773446185157198455169820007',
        symbol: 'QI'
      },
      weight_goal_normalized: '0',
      weight_normalized: '0.053'
    },
    {
      balance: '6620.864329732853239397',
      token: {
        decimals: 18,
        id: '0x1d7C6846F033e593b4f3f21C39573bb1b41D43Cb',
        name: 'Kassandra',
        price_usd: '0.6298612335988697897303168760491438',
        symbol: 'KACY'
      },
      weight_goal_normalized: '0',
      weight_normalized: '0.05'
    },
    {
      balance: '0.397494329754643124',
      token: {
        decimals: 18,
        id: '0x83080D4b5fC60e22dFFA8d14AD3BB41Dde48F199',
        name: 'Pangolin',
        price_usd: '505.20629661840081036875058228995',
        symbol: 'PNG'
      },
      weight_goal_normalized: '0',
      weight_normalized: '0.0233'
    },
    {
      balance: '0.039627878050791018',
      token: {
        decimals: 18,
        id: '0xBA1C32241Ac77b97C8573c3dbFDe4e1e2A8fc0DF',
        name: 'Yak Token Kassandra',
        price_usd: '3580.684789982275693276269889487879',
        symbol: 'YAK.k'
      },
      weight_goal_normalized: '0',
      weight_normalized: '0.0073'
    }
  ]

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
  }, [])

  return (
    <S.CardContainer>
      <S.CardHeader>
        <S.ImageContainer>
          <Image src={image} width={36} height={36} />
        </S.ImageContainer>
        <S.FundPrice>
          <h3>Price</h3>
          <span>${price}</span>
        </S.FundPrice>
      </S.CardHeader>
      <S.CardBody>
        <S.FundName>
          <h3>{fundName}</h3>
          <span>by {fundBy}</span>
        </S.FundName>
        <S.FundStatusContainer>
          <S.FundStatus>
            <span>${tvl}K</span>
            <h4>Tvl</h4>
          </S.FundStatus>
          <S.FundStatus>
            <div>
              <span style={{ color: monthlyUp ? '#5EE56B' : '#E8372C' }}>
                {monthly}%
              </span>
              <Image
                src={monthlyUp ? arrowAscend : arrowDescend}
                width={16}
                height={16}
              />
            </div>
            <h4>monthly</h4>
          </S.FundStatus>
          <S.FundStatus>
            <div>
              <span style={{ color: last24hUp ? '#5EE56B' : '#E8372C' }}>
                {last24h}%
              </span>
              <Image
                src={last24hUp ? arrowAscend : arrowDescend}
                width={16}
                height={16}
              />
            </div>
            <h4>24h</h4>
          </S.FundStatus>
        </S.FundStatusContainer>

        <FundAreaChart areaChartData={data} color="#E843C4" />

        <S.TokenIconsContainer>
          <FundTokenIcons tokens={tokenImages} />
          {poolInfo.length > 3 && (
            <p>
              +{poolInfo.length - 3}
              <span> more</span>
            </p>
          )}
        </S.TokenIconsContainer>

        <FundBarChart poolObject={poolObject} poolInfo={poolInfo} />
      </S.CardBody>
    </S.CardContainer>
  )
}

export default FundCard
