/* eslint-disable react/jsx-no-bind */
import React from 'react'
import Button from '../../../../components/Button'
import MediaMatch from '../../../../components/MediaMatch'
import TextField from '../../../../components/TextField'

import {
  Backdrop,
  BorderGradient,
  BackgroundBlack,
  Content,
  InterBackground,
  // Main,
  // Amount,
  // Line,
  // ButtonContainer,
  // ConfirmButton,
  // GetKacyButton,
  ModalText,
  WrapperButton,
  WrapperIcons
 } from './styles'

 interface IModalSocialProps {
  modalSignupOpen: boolean
  setModalSignupOpen: React.Dispatch<React.SetStateAction<boolean>>

}
interface IFormSignUpParams {
  name?: string
  email?: string
}

// eslint-disable-next-line no-shadow
enum FORM_PARAM_KEYS_ENUM {
  'name',
  'email',
}

interface IOnChangeFormParam {
  key: FORM_PARAM_KEYS_ENUM
  value: string
}

export const ModalSignUp = ({
  modalSignupOpen,
  setModalSignupOpen,
   }: IModalSignUp) => {

  function handleCloseModal() {
    setModalSignupOpen(false)
  }
  const [formState, setFormState] = React.useState<IFormSignUpParams>({})
  const onChangeFormParam = ({ key, value }: IOnChangeFormParam) => {
  setFormState({ ...formState, [key]: value })
  }
  return (
    <>
      <Backdrop onClick={handleCloseModal} style={{display: modalSignupOpen ? 'block' : 'none'}} />
      <BorderGradient
        modalOpen={modalSignupOpen}
      >
        <BackgroundBlack>
          <WrapperButton>
            <button type="button" onClick={() => setModalSignupOpen(false)}><img src="assets/close.svg" alt=""/> </button>
          </WrapperButton>
          <InterBackground >
            <img src='./assets/logo-header.svg' alt=''/>
          </InterBackground>
          <Content>
            <ModalText>
              <span>
                Subscribe to HEIM Social Index updates and launch
              </span>
            </ModalText>
            <>
              <iframe title="a" name="hiddenFrame" width="0" height="0" style={{display: 'none'}} />
              <form action="https://beta.heimdall.land/subscribe/heim" method="POST" target="hiddenFrame">
                <TextField
                  name="user"
                  placeholder="Ex: John Doe"
                  type="name"
                  label='Your username'
                  value={formState[FORM_PARAM_KEYS_ENUM.name]}
                  onChange={(e) =>
                    onChangeFormParam({
                      key: FORM_PARAM_KEYS_ENUM.name,
                      value: e.target.value
                    })
                  }
                />

                <TextField
                  name="email"
                  placeholder="Ex: username@email.com"
                  type="email"
                  label='Your email address'
                  value={formState[FORM_PARAM_KEYS_ENUM.email]}
                  onChange={(e) =>
                    onChangeFormParam({
                      key: FORM_PARAM_KEYS_ENUM.email,
                      value: e.target.value
                    })
                  }
                />

              {/* <S.ButtonWrapper> */}
              <MediaMatch greaterThan='small'>
                <Button size="huge" type='submit'>
                  Sign me up!
                </Button>
              </MediaMatch>
              <MediaMatch lessThan='small'>
                <Button size="medium"  type='submit'>
                  Sign me up!
                </Button>
              </MediaMatch>
              </form>
            </>
          </Content>
          </BackgroundBlack>
      </BorderGradient>
    </>
  )
}

export default ModalSignUp
