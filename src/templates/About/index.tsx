import React from 'react'

import { useMatomo } from '@datapunt/matomo-tracker-react'

import TokenPriceComponent from '../../components/TokenPrice'
import KassandraTokenCard from '../../components/KassandraTokenCard'


import Hero from './Hero'
import Products from './Products'
import HowItWorks from './HowItWorks'
import Team from './Team'
import Partners from './Partners'
import FAQ from './FAQ'
import Community from './Community'
import SubscribeBanner from '../../components/SubscribeBanner'

const About = () => {
  const { trackPageView } = useMatomo()

  React.useEffect(() => {
    trackPageView({})
  }, [trackPageView])

  return (
    <>
      <Hero />
      <Products />
      <KassandraTokenCard />
      <HowItWorks />
      <TokenPriceComponent />
      <Team />
      <Partners />
      <FAQ />
      <Community />
      <SubscribeBanner />
    </>
  )
}

export default About
