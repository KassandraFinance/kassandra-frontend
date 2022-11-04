import React from 'react'

import Social from './Social'
import ScrollAnimation from '../../../components/ScrollAnimation'

import * as S from './styles'

const Hero = () => {
  return (
    <S.HeroContainer>
      <S.HeroBackground />
      <S.Hero>
        <S.HeroText>
          <S.Title>Kassandra foundation</S.Title>

          <S.SubTitle>
            DeFi enthusiasts building the future of asset management
          </S.SubTitle>

          <Social />
        </S.HeroText>

        <ScrollAnimation />
      </S.Hero>
    </S.HeroContainer>
  )
}

export default Hero
