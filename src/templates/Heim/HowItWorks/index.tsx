/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useMatomo } from '@datapunt/matomo-tracker-react'

import SingUp from '../SignUp'
import Button from '../../../components/Button'

import * as S from './styles'

interface IHowItWorksProps {
  setModalSignupOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setModalSuccessOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HowItWorks = ({
  setModalSignupOpen,
  setModalSuccessOpen
}: IHowItWorksProps) => {
  const { trackEvent } = useMatomo()

  function clickMatomoEvent(action: string, name: string) {
    trackEvent({
      category: 'heim-page',
      action: action,
      name: name
    })
  }

  return (
    <>
      <S.SpotLeft>
        <div />
      </S.SpotLeft>
      <S.SpotRight>
        <div />
      </S.SpotRight>
      <S.Container>
        <S.DesktopContainer>
          <S.ImageDesktop>
            <img src="./assets/crypto-funnel.svg" alt="" />
          </S.ImageDesktop>
          <S.SignupWrapper>
            <img src="./assets/HeimIcon.svg" alt="" />
            <SingUp setModalSuccessOpen={setModalSuccessOpen} />
          </S.SignupWrapper>
        </S.DesktopContainer>
        <S.Text>
          Delegate the token discovery to a decentralized organization with skin
          in the game, and <strong>automate your money</strong> managment to a
          data-driven backtested model
        </S.Text>
        <S.MobileContainer>
          <S.ImageMobile>
            <img src="./assets/crypto-funnelNoText.svg" alt="" />
          </S.ImageMobile>
          <S.MobileSignUp>
            <img src="./assets/HeimIcon.svg" alt="" />
            <Button
              backgroundPrimary
              size="medium"
              text="Get early access"
              onClick={() => {
                setModalSignupOpen(true)
                clickMatomoEvent('click-to-subscribe', 'how-it-works')
              }}
              fullWidth
            />
          </S.MobileSignUp>
        </S.MobileContainer>
      </S.Container>
    </>
  )
}

export default HowItWorks
