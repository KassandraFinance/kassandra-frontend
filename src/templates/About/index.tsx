import React from 'react'
import Big from 'big.js'
import useSWR from 'swr'

import { useMatomo } from '@datapunt/matomo-tracker-react'

import KacyOverview from '../../components/KacyOverview'
import KacyCard from '../../components/KacyCard'

import Community from './Community'
import FAQ from './FAQ'
import Hero from './Hero'
import HowItWorks from './HowItWorks'
import Partners from './Partners'
import Products from './Products'
import Team from './Team'
import SubscribeBanner from '../../components/SubscribeBanner'

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

const About = () => {
  const { trackPageView } = useMatomo()

  // eslint-disable-next-line prettier/prettier
  const [kacyMarketData, setKacyMarketData] = React.useState<IKacyMarketDataProps>({
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

  React.useEffect(() => {
    trackPageView({})
  }, [trackPageView])

  return (
    <>
      <S.Background>
        <Hero />
        <Products />
        <KacyCard kacyMarketData={kacyMarketData} />
        <HowItWorks />
      </S.Background>
      <S.TeamBackground>
        <KacyOverview kacyMarketData={kacyMarketData} />
        <Team />
      </S.TeamBackground>
      <FAQ />
      <Partners />
      <Community />
      <SubscribeBanner />
    </>
  )
}

export default About
