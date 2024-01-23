import React from 'react'

import HeroHome from './HeroHome'
import WavyLine from '../../components/WavyLine'
import DaoAssetManagement from './DaoAssetManagement'
import PartnersMarquee from '@/components/PartnersMarquee'
import CallToActionEndPage from '@/components/CallToActionEndPage'
import FadeInVertical from '@/components/Animations/FadeInVertical'
import InvestorsAndManagerSection from './InvestorsAndManagerSection'

import * as S from './styles'

const NewHome = () => {
  return (
    <S.HomeBackgroundContainer>
      <HeroHome />

      <PartnersMarquee />

      <S.SectionContainer>
        <DaoAssetManagement />
      </S.SectionContainer>

      <WavyLine color="color1" />

      <S.SectionContainer>
        <InvestorsAndManagerSection />
      </S.SectionContainer>

      <FadeInVertical threshold={0.5}>
        <S.CallToActionEndPageContainer>
          <CallToActionEndPage
            text="Want to be Part of DeFi’s Future?"
            buttonText="Join The Community"
            href="/"
          />
        </S.CallToActionEndPageContainer>
      </FadeInVertical>

      <WavyLine color="color1" />
    </S.HomeBackgroundContainer>
  )
}

export default NewHome
