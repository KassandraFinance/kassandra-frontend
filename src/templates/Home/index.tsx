import React from 'react'
import { useMatomo } from '@datapunt/matomo-tracker-react'
import useSWR from 'swr'
import Big from 'big.js'

import ClassProducts from './ClassProducts'
import Hero from './Hero'
import KassandraArchitecture from './KassandraArchitecture'
import Products from './Products'
import Token from './Token'

// import CountdownBanner from '../../components/CountdownBanner'
import KacyCard from '../../components/KacyCard'
import SubscribeBanner from '../../components/SubscribeBanner'
import RoadMapSlider from '../../components/RoadMapSlider'
import ScrollUpButton from '../../components/ScrollUpButton'
import KacyOverview from '../../components/KacyOverview'

import * as S from './styles'

const poolPlatform =
  process.env.NEXT_PUBLIC_MASTER === '1' ? 'Avalanche' : 'Fuji'

const URL_API: { [key: number | string]: string } = {
  1: 'https://kassandra.finance/api/overview',
  2: 'https://alpha.kassandra.finance/api/overview',
  3: 'https://demo.kassandra.finance/api/overview',
  4: 'http://localhost:3000/api/overview'
}

interface IKacyMarketDataProps {
  price: number;
  marketCap: Big;
  supply: Big;
  kacyPercentage: number;
}

const Home = () => {
  const { trackPageView } = useMatomo()
  // eslint-disable-next-line prettier/prettier
  const [kacyMarketData, setKacyMarketData] =
    React.useState<IKacyMarketDataProps>({
      price: 0,
      marketCap: Big(0),
      supply: Big(0),
      kacyPercentage: 0
    })

  const { data } = useSWR(URL_API[process.env.NEXT_PUBLIC_URL_API || 4])

  React.useEffect(() => {
    if (data) {
      setKacyMarketData({
        price: data.kacyPrice,
        marketCap: Big(data.marketCap),
        supply: Big(data.supply),
        kacyPercentage: data.kacyPercentage
      })
    }
  }, [poolPlatform, data])

  // Track page view
  React.useEffect(() => {
    trackPageView({})
  }, [trackPageView])

  return (
    <>
      <Hero />
      <S.Background>
        <ScrollUpButton />
        <Token />
        <Products />
        <ClassProducts />
        <KacyCard kacyMarketData={kacyMarketData} />
        <KassandraArchitecture />
        <RoadMapSlider />
        <KacyOverview kacyMarketData={kacyMarketData} />
        {/* <CountdownBanner /> */}
        <SubscribeBanner />
      </S.Background>
    </>
  )
}

export default Home
