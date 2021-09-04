/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react'
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
  const onSubmit = async (email, name) => {
    console.warn(formState.email)
    if (formState[FORM_PARAM_KEYS_ENUM.name] && formState[FORM_PARAM_KEYS_ENUM.email]) {
      await fetch('https://beta.heimdall.land/subscribe/heim', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: formState[FORM_PARAM_KEYS_ENUM.email], user: formState[FORM_PARAM_KEYS_ENUM.name] })
      });
      // handleCloseModal();
    }
  }
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
          <InterBackground >
            <img src='./assets/logo-header.svg' alt=''/>
            <button type="button" onClick={() => setModalSignupOpen(false)}><img src="assets/close.svg" alt=""/> </button>
          </InterBackground>
          <Content>
            <ModalText>
              <span>
                Subscribe to HEIM Social Index updates and launch
              </span>
            </ModalText>
            <>
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
                <Button size="huge" onClick={() => onSubmit(formState.email, formState.name)}>
                  Sign me up!
                </Button>
              </MediaMatch>
              <MediaMatch lessThan='small'>
                <Button size="medium"  onClick={() => onSubmit(formState.email, formState.name)}>
                  Sign me up!
                </Button>
              </MediaMatch>
            </>
          </Content>
          </BackgroundBlack>
      </BorderGradient>
    </>
  )
}

export default ModalSignUp
