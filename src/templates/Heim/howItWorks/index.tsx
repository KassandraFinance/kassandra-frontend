import React from 'react'

// eslint-disable-next-line import/extensions
import * as S from './styles'
import Button from '../../../components/Button'
import MediaMatch from '../../../components/MediaMatch'
import SingUp from '../sign-up'

export const HowItWorks = () => (

    <>
      <S.Container>
        <MediaMatch greaterThan='large'>
          <SingUp/>
          <S.Text>
          Delegate the token discovery to a decentralized organization with skin in the game, and <strong>automate your money </strong>managment to a data-driven backtested model.
          </S.Text>
          <S.Image>
            <img src='./assets/crypto-funnel.svg' alt=''/>
          </S.Image>
          </MediaMatch>
          <MediaMatch lessThan='large'>
          <S.Text>
          Delegate the token discovery to a decentralized organization with skin in the game, and <strong>automate your money </strong>managment to a data-driven backtested model.
          </S.Text>
          <S.Image>
            <img src='./assets/crypto-funnel.svg' alt=''/>
          </S.Image>
          <SingUp/>
        </MediaMatch>
      </S.Container>
    </>

)


export default HowItWorks
