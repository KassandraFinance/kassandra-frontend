/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useMatomo } from '@datapunt/matomo-tracker-react'
import Hero from './hero'
import Feature from './feature'
import SocialProof from './socialProof'

import * as S from './styles'
import HowItWorks from './howItWorks'

const Heim = () => {
  const { trackPageView } = useMatomo()

  // Track page view
  React.useEffect(() => {
    trackPageView({})
  }, [trackPageView])

  return (
    <S.Container>
      <Hero />
      <Feature/>
      <SocialProof />
      <HowItWorks />
    </S.Container>
  )
}

export default Heim
