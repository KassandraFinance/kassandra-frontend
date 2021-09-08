import React from 'react'

import * as S from './styles'
import Button from '../../../components/Button'
import MediaMatch from '../../../components/MediaMatch'
import SingUp from '../sign-up'

export const HowItWorks = ({ setModalSignupOpen, setModalSuccessOpen }) => (
  <>
    <S.SpotLeft>
      <div />
    </S.SpotLeft>
    <S.SpotRight>
      <div />
    </S.SpotRight>
    <S.Container>
      <MediaMatch greaterThan="medium">
        <S.ImageDesktop>
          <img src="./assets/crypto-funnel.svg" alt="" />
        </S.ImageDesktop>
        <S.SignupWrapper>
          <img src="./assets/HeimIcon.svg" alt="" />
          <SingUp setModalSuccessOpen={setModalSuccessOpen} />
        </S.SignupWrapper>
      </MediaMatch>
      <S.Text>
        Delegate the token discovery to a decentralized organization with skin
        in the game, and <strong>automate your money</strong> managment to a
        data-driven backtested model
      </S.Text>
      <MediaMatch lessThan="medium">
        <S.ImageMobile>
          <img src="./assets/crypto-funnelNoText.svg" alt="" />
        </S.ImageMobile>
        <S.MobileSignUp>
          <img src="./assets/HeimIcon.svg" alt="" />
          <Button
            backgroundPrimary
            size="medium"
            onClick={() => setModalSignupOpen(true)}
            fullWidth
          >
            Get early access
          </Button>
        </S.MobileSignUp>
      </MediaMatch>
    </S.Container>
  </>
)

export default HowItWorks
