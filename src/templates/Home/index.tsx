import React from 'react'
import { useMatomo } from '@datapunt/matomo-tracker-react'

import Hero from './Hero'
import Products from './Products'
import ClassProducts from './ClassProducts'
import Token from './Token'
import KassandraSuccess from './KassandraSuccess'
import KassandraArchitecture from './KassandraArchitecture'
import Supporters from './Supporters'

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
      <KassandraSuccess />
      <KassandraArchitecture />
      <Supporters />
    </>
  )
}

export default Home
