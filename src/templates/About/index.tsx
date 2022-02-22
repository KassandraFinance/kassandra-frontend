import React from 'react'

import { useMatomo } from '@datapunt/matomo-tracker-react'

import KacyOverView from '../../components/KacyOverView'
import KassandraTokenCard from '../../components/KassandraTokenCard'

import Community from './Community'
import FAQ from './FAQ'
import Hero from './Hero'
import HowItWorks from './HowItWorks'
import Partners from './Partners'
import Products from './Products'
import Team from './Team'
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
      </S.Background>
      <S.TeamBackground>
        <KacyOverView />
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
