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
        <p>
          <S.Divider />
          Kassandra is a decentralized autonomous organization that governs a
          set of tokenized data-driven investment funds, bringing a new class of
          investment products to the DeFi ecosystem: actively managed investment
          baskets without compromising the pillars of decentralization.
        </p>
        <S.CardContainer>
          <S.Card>
            <S.IconWrapper>
              <S.BackgroundIcon>
                <img src="assets/transparency_icon.svg" alt="" />
              </S.BackgroundIcon>
            </S.IconWrapper>
            <p>Transparency</p>
            <S.GradienteDivider />
          </S.Card>
          <S.Card>
            <S.IconWrapper>
              <S.BackgroundIcon>
                <img src="assets/decentralization_icon.svg" alt="" />
              </S.BackgroundIcon>
            </S.IconWrapper>
            <p>Decentralization</p>
            <S.GradienteDivider />
          </S.Card>
          <S.Card>
            <S.IconWrapper>
              <S.BackgroundIcon>
                <img src="assets/activeReturns_icon.svg" alt="" />
              </S.BackgroundIcon>
            </S.IconWrapper>
            <p>Active Returns</p>
            <S.GradienteDivider />
          </S.Card>
        </S.CardContainer>
      </S.Hero>
    </>
  )
}
export default Hero
