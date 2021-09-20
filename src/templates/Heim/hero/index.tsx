import React from 'react'
import { useMatomo } from '@datapunt/matomo-tracker-react'

import * as S from './styles'
import Button from '../../../components/Button'
import MediaMatch from '../../../components/MediaMatch'

interface IHeroProps {
  setModalSignupOpen: React.Dispatch<React.SetStateAction<boolean>>
  // eslint-disable-next-line prettier/prettier
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Hero = ({ setModalOpen, setModalSignupOpen }: IHeroProps) => {
  const { trackEvent } = useMatomo();

  function clickMatomoEvent(action: string, name: string) {
    trackEvent({
      category: "heim-page",
      action: action,
      name: name,
    });
  }

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
                  text='Get early access'
                  onClick={() => {
                    setModalSignupOpen(true)
                    clickMatomoEvent("click-to-subscribe", "hero")
                  }
                  }
                />
                <Button
                  size="large"
                  backgroundBlack
                  text="Join the community"
                  onClick={() => {
                    setModalOpen(true)
                    clickMatomoEvent("click-open-modal", "modal-social")
                  }
                  }
                />
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
            <S.ImageMobile>
              <img src="assets/HeimCurrency.svg" alt="" />
            </S.ImageMobile>
            <S.SubTitle>
              Introducing a single asset that tracks the performance of the
              cryptocurrencies with the most solid and engaged communities
            </S.SubTitle>
            <S.ButtonWrapper>
              <Button
                backgroundPrimary
                size="huge"
                text='Get early access'
                onClick={() => setModalSignupOpen(true)}
              />
              <Button
                size="medium"
                backgroundBlack
                text='Join the community'

                onClick={() => setModalOpen(true)}
              />
            </S.ButtonWrapper>
          </S.MobileHero>
        </MediaMatch>
        <S.FloatImage>
          <img src="assets/Certik.svg" alt="" />
        </S.FloatImage>
        <S.Spot>
          <div />
        </S.Spot>
      </S.Container>
    </>
  )
}

export default Hero
