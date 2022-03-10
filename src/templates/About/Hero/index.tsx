import React from 'react'

import Header from '../../../components/Header'
import Breadcrumb from '../../../components/Breadcrumb'
import BreadcrumbItem from '../../../components/Breadcrumb/BreadcrumbItem'

import * as S from './styles'

const Hero = () => {
  return (
    <>
      <Header />
      <Breadcrumb>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/about" isLastPage>
          About
        </BreadcrumbItem>
      </Breadcrumb>
      <S.Hero>
        <S.IntroHero>
          <span>ABOUT US</span>
          <h1>
            An audacious project to delegate money management in a
            decentralized, efficient, and customizable way{' '}
          </h1>
        </S.IntroHero>
        <S.HeroImage>
          <img src="assets/kassandra-about.png" alt="" className="kassandra" />
        </S.HeroImage>
        <S.Divider />
        <S.IntroTextWrapper>
          <p>
            Kassandra is a decentralized autonomous organization that governs a
            set of tokenized data-driven investment funds, bringing a new class
            of investment products to the DeFi ecosystem: actively managed
            investment baskets without compromising the pillars of
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
          <span>For managers</span>
          <p>
            Kassandra is a plug-and-earn solution to port complex money
            management strategies to decentralized ecosystems, saving time and
            costs when compared to the traditional market, helping managers to
            raise funds without the need for complex infrastructure.
          </p>
        </S.CardRectangle>
        <S.CardRectangle>
          <span>For investors</span>
          <p>
            Kassandra democratizes access to robust data models and quantitative
            analysts leveraging portfolio optimization and potential gains.
          </p>
        </S.CardRectangle>
      </S.CardRectangleWrapper>
    </>
  )
}
export default Hero
