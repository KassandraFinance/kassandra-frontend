import React from 'react'

import { useMatomo } from '@datapunt/matomo-tracker-react'

import Hero from './Hero'
import Products from './Products'
import HowItWorks from './HowItWorks'
import TokenPriceComponent from '../../components/TokenPrice/indes'
import Team from './Team'
import Partners from './Partners'

import * as S from './styles'
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
