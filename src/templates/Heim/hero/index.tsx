import React from 'react'

// eslint-disable-next-line import/extensions

import * as S from './styles'
import Button from '../../../components/Button'
import MediaMatch from '../../../components/MediaMatch'
import ModalSocial from '../../../components/ModalSocial'
import ModalSignUp from '../../../components/ModalSignUp'

export function Hero({ setModalOpen, setModalSignupOpen }) {
  return (
    <>
      <S.Container>
        <MediaMatch greaterThan="large">
          <S.DesktopHero>
            <div>
              <S.Title>
                Get exposure to the hottest communities in the market.
              </S.Title>
              <S.SubTitle>
                Introducing a single asset that tracks the performance of the
                cryptocurrencies with the most solid and engaged communities
              </S.SubTitle>
              <S.ButtonWrapper>
                <Button
                  backgroundPrimary
                  size="large"
                  onClick={() => setModalSignupOpen(true)}
                >
                  Get early access
                </Button>
                <Button
                  size="large"
                  backgroundBlack
                  onClick={() => setModalOpen(true)}
                >
                  Join the community
                </Button>
              </S.ButtonWrapper>
            </div>
            <S.ImageDesktop>
              <img src="assets/HeimCurrency.svg" alt="" />
            </S.ImageDesktop>
          </S.DesktopHero>
        </MediaMatch>

        <MediaMatch lessThan="large">
          <S.MobileHero>
            <S.Title>
              Get exposure to the hottest communities in the market.
            </S.Title>
            <S.Image>
              <img src="assets/HeimCurrency.svg" alt="" />
            </S.Image>
            <S.SubTitle>
              Introducing a single asset that tracks the performance of the
              cryptocurrencies with the most solid and engaged communities
            </S.SubTitle>
            <S.ButtonWrapper>
              <Button
                backgroundPrimary
                size="huge"
                onClick={() => setModalSignupOpen(true)}
              >
                Get early access
              </Button>
              <Button
                size="huge"
                backgroundBlack
                onClick={() => setModalOpen(true)}
              >
                Join the community
              </Button>
            </S.ButtonWrapper>
          </S.MobileHero>
        </MediaMatch>
        <S.FloatImage>
          <img src="assets/Certik.svg" alt="" />
        </S.FloatImage>
      </S.Container>
    </>
  )
}

export default Hero
