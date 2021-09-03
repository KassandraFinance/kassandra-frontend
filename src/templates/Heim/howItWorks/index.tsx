import React from 'react'

// eslint-disable-next-line import/extensions
import * as S from './styles'
import Button from '../../../components/Button'
import MediaMatch from '../../../components/MediaMatch'
import SingUp from '../sign-up'

export const HowItWorks = ({ setModalSignupOpen }) => (

    <>
      <S.Text>
        Delegate the token discovery to a decentralized organization with skin in the game, and <strong>automate your money </strong>managment to a data-driven backtested model.
      </S.Text>
      <S.Image>
        <img src='./assets/crypto-funnel.svg' alt=''/>
      </S.Image>
      <S.Container>
        <MediaMatch greaterThan='large'>
          {/* <S.Text>
          Delegate the token discovery to a decentralized organization with skin in the game, and <strong>automate your money </strong>managment to a data-driven backtested model.
          </S.Text>
          <S.Image>
            <img src='./assets/crypto-funnel.svg' alt=''/>
          </S.Image> */}
          <SingUp/>
        </MediaMatch>
        <MediaMatch lessThan='large'>
          <S.ButtonWrapper>
            <img src='./assets/HeimIcon.svg' alt=''/>
            <Button backgroundPrimary size="huge" onClick={() => setModalSignupOpen(true)}>
            Get early access
          </Button>
          </S.ButtonWrapper>
        </MediaMatch>
      </S.Container>
    </>

)


export default HowItWorks
