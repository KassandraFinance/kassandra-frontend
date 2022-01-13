import React from 'react'

import { useMatomo } from '@datapunt/matomo-tracker-react'

import KacyOverView from '../../components/KacyOverView'
import KassandraTokenCard from '../../components/KassandraTokenCard'

import Hero from './Hero'
import Products from './Products'
import HowItWorks from './HowItWorks'
import Team from './Team'
import Partners from './Partners'
import FAQ from './FAQ'
import Community from './Community'
import SubscribeBanner from '../../components/SubscribeBanner'

import * as S from './styles'

const About = () => {
  const { trackPageView } = useMatomo()

  React.useEffect(() => {
    trackPageView({})
  }, [trackPageView])

  return (
    <>
      <S.Background>
        <Hero />
        <Products />
        <KassandraTokenCard />
        <HowItWorks />
        <KacyOverView />
      </S.Background>
      <Team />
      <FAQ />
      <Partners />
      <Community />
      <SubscribeBanner />
    </>
  )
}

export default About
