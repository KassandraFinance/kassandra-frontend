import React from 'react'
import Link from 'next/link'

import HeroHome from './HeroHome'
import NewButton from '@/components/NewButton'
import WavyLine from '../../components/WavyLine'
import DaoAssetManagement from './DaoAssetManagement'
import PartnersMarquee from '@/components/PartnersMarquee'
import CallToActionEndPage from '@/components/CallToActionEndPage'
import FadeInVertical from '@/components/Animations/FadeInVertical'
import InvestorsAndManagerSection from './InvestorsAndManagerSection'

import { ArrowRightCircle } from '@/Icons/Arrow-right-circle'

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
            firstButton={{
              href: '/community',
              text: 'Join The Community',
              type: 'primary',
              icon: <ArrowRightCircle />
            }}
          />
        </S.CallToActionEndPageContainer>
      </FadeInVertical>

      <WavyLine color="color1" />
    </S.HomeBackgroundContainer>
  )
}

export default NewHome
