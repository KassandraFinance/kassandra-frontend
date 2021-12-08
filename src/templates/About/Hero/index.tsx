import React from 'react'

import Header from '../../../components/Header'

import * as S from './styles'

const Hero = () => {
  return (
    <>
      <Header />
      <S.Hero>
        <S.IntroHero>
          <span>ABOUT US</span>
          <h1>Curated tokenized data-driven investiment strategies </h1>
        </S.IntroHero>
        <img src="assets/kassandra-about.svg" alt="" className="kassandra" />
        <S.IntroTextWrapper>
          <S.Divider />
          <p>
            Kassandra is a decentralized autonomous organization that governs a
            set of tokenized data-driven investment funds, bringing a new class
            of investment products to the DeFi ecosystem: actively managed
            investment investment baskets without compromising the pillars of
            decentralization.
          </p>
        </S.IntroTextWrapper>

        <S.CardContainer>
          <S.Card>
            <S.IconWrapper>
              <S.BackgroundIcon>
                <img src="assets/transparency_icon.svg" alt="" />
              </S.BackgroundIcon>
            </S.IconWrapper>
            <p>
              Transparency
              <S.GradienteDivider />
            </p>
          </S.Card>
          <S.Card>
            <S.IconWrapper>
              <S.BackgroundIcon>
                <img src="assets/decentralization_icon.svg" alt="" />
              </S.BackgroundIcon>
            </S.IconWrapper>
            <p>
              Decentralization
              <S.GradienteDivider />
            </p>
          </S.Card>
          <S.Card>
            <S.IconWrapper>
              <S.BackgroundIcon>
                <img src="assets/activeReturns_icon.svg" alt="" />
              </S.BackgroundIcon>
            </S.IconWrapper>
            <p>
              Active Returns
              <S.GradienteDivider />
            </p>
          </S.Card>
        </S.CardContainer>
      </S.Hero>
      <S.CardRectangleWrapper>
        <S.CardRectangle>
          <span>VISION</span>
          <p>
            Donec pulvinar congue fusce massa arcu est enim sed. Morbi odio
            viverra maecenas eget mattis. Velit erat cras vulputate diam nunc
            consequat lorem ullamcorper.
          </p>
        </S.CardRectangle>
        <S.CardRectangle>
          <span>MISSION</span>
          <p>
            Donec pulvinar congue fusce massa arcu est enim sed. Morbi odio
            viverra maecenas eget mattis. Velit erat cras vulputate diam nunc
            consequat lorem ullamcorper.
          </p>
        </S.CardRectangle>
      </S.CardRectangleWrapper>
    </>
  )
}
export default Hero
