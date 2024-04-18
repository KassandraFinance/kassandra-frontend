import React from 'react'

import Hero from './Hero'
import About from './About'
import GitHubStats from './GitHubStats'
import LatestNews from '../Home/LatestNews'
import Partners from '../../components/Partners'
import CallToActionEndPage from '@/components/CallToActionEndPage'
import FadeInVertical from '@/components/Animations/FadeInVertical'
import SectionTransparentCard from '@/components/SectionTransparentCard'

import * as S from './styles'

const Foundation = () => {
  return (
    <S.FoundationConatiner>
      <Hero />

      <S.Foundation>
        <About />
      </S.Foundation>

      <Partners />

      <GitHubStats />

      <S.SectionTransparentCardContainer>
        <FadeInVertical threshold={0.5}>
          <SectionTransparentCard
            title="Track our Development"
            paragraph="Know what has been going on behind the scenes, have early access to sneak peeks and beta-test new features before everyone by signing to our newsletter."
            firstButton={{
              href: '/',
              text: 'Read More  At Our Medium',
              type: 'primary'
            }}
            secondButton={{
              href: '/',
              text: 'Sign Up To Our Newsletter',
              type: 'white'
            }}
          />
        </FadeInVertical>
      </S.SectionTransparentCardContainer>

      <LatestNews />

      <CallToActionEndPage text="Join Our Community" socialsButtons />
    </S.FoundationConatiner>
  )
}

export default Foundation
