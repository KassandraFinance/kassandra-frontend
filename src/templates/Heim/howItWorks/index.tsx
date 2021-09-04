import React from 'react'

// eslint-disable-next-line import/extensions
import * as S from './styles'
import Button from '../../../components/Button'
import MediaMatch from '../../../components/MediaMatch'
import SingUp from '../sign-up'

export const HowItWorks = ({ setModalSignupOpen }) => (

    <>
      <S.Container>
        <S.Image>
          <img src='./assets/crypto-funnel.svg' alt=''/>
        </S.Image>
        <MediaMatch greaterThan='large'>
          <S.SignupWrapper>
            <img src='./assets/HeimIcon.svg' alt=''/>
            <SingUp/>
          </S.SignupWrapper>
        </MediaMatch>
        <MediaMatch lessThan='large'>
          <S.MobileSignUp>
            <img src='./assets/HeimIcon.svg' alt=''/>
            <Button backgroundPrimary size="large" onClick={() => setModalSignupOpen(true)}>
            Get early access
          </Button>
          </S.MobileSignUp>
        </MediaMatch>
      </S.Container>
    </>

)


export default HowItWorks
