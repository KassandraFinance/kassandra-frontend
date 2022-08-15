import React from 'react'

import Social from './Social'
import Scroll from '../../../components/Scroll'

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

        <S.ScroolContainer>
          <Scroll />
        </S.ScroolContainer>
      </S.Hero>
    </S.HeroContainer>
  )
}

export default Hero
