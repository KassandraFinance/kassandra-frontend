import React from 'react'
import { useMatomo } from '@datapunt/matomo-tracker-react'

import Hero from './Hero'
import Products from './Products'
import ClassProducts from './ClassProducts'
import CountdownBanner from '../../components/CountdownBanner'
import Token from './Token'
import KassandraTokenCard from '../../components/KassandraTokenCard'
import KassandraArchitecture from './KassandraArchitecture'
import SubscribeBanner from '../../components/SubscribeBanner'

import * as S from './styles'
import RoadMapSlider from '../../components/RoadMapSlider'
import ScrollUpButton from '../../components/ScrollUpButton'

const poolPlatform = 'Fuji'

const Home = () => {
  const { trackPageView } = useMatomo()

  // Track page view
  React.useEffect(() => {
    trackPageView({})
  }, [trackPageView])

  return (
    <>
      <Hero />
      <S.Background>
        <ScrollUpButton />
        <Products />
        <ClassProducts />
        <Token poolPlatform={poolPlatform} />
        <KassandraTokenCard />
        <KassandraArchitecture />
        <RoadMapSlider />
        <CountdownBanner />
        <SubscribeBanner />
      </S.Background>
    </>
  )
}

export default Home
