import React from 'react'
import { useMatomo } from '@datapunt/matomo-tracker-react'

import Hero from './Hero'
import Products from './Products'
import ClassProducts from './ClassProducts'
import Token from './Token'
import KassandraToken from './KassandraToken'
import KassandraArchitecture from './KassandraArchitecture'
import TokenDistribution from './TokenDistribution'
import SubscribeBanner from '../../components/SubscribeBanner'

const Home = () => {
  const { trackPageView } = useMatomo()

  // Track page view
  React.useEffect(() => {
    trackPageView({})
  }, [trackPageView])

  return (
    <>
      <Hero />
      <Products />
      <ClassProducts />
      <Token />
      <KassandraToken />
      <KassandraArchitecture />
      <TokenDistribution />
      <SubscribeBanner />
    </>
  )
}

export default Home
