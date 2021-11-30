import React from 'react'

import { useMatomo } from '@datapunt/matomo-tracker-react'

import TokenPriceComponent from '../../components/TokenPrice'

import Hero from './Hero'
import Products from './Products'
import HowItWorks from './HowItWorks'
import Team from './Team'
import Partners from './Partners'
import FAQ from './FAQ'

const About = () => {
  const { trackPageView } = useMatomo()

  React.useEffect(() => {
    trackPageView({})
  }, [trackPageView])

  return (
    <>
      <Hero />
      <Products />
      <HowItWorks />
      <TokenPriceComponent />
      <Team />
      <Partners />
      <FAQ />
    </>
  )
}

export default About
