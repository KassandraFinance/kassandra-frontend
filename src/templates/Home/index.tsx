import React from 'react'
import { useMatomo } from '@datapunt/matomo-tracker-react'

import ClassProducts from './ClassProducts'
import Hero from './Hero'
import KassandraArchitecture from './KassandraArchitecture'
import Products from './Products'
import Token from './Token'

// import CountdownBanner from '../../components/CountdownBanner'
import KassandraTokenCard from '../../components/KassandraTokenCard'
import SubscribeBanner from '../../components/SubscribeBanner'
import RoadMapSlider from '../../components/RoadMapSlider'
import ScrollUpButton from '../../components/ScrollUpButton'
import KacyOverview from '../../components/KacyOverview'

import * as S from './styles'

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
        <Token />
        <Products />
        <ClassProducts />
        <KassandraTokenCard />
        <KassandraArchitecture />
        <RoadMapSlider />
        <KacyOverview />
        {/* <CountdownBanner /> */}
        <SubscribeBanner />
      </S.Background>
    </>
  )
}

export default Home
