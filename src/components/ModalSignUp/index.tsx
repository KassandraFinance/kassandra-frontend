/* eslint-disable react/jsx-no-bind */
import React from 'react'
import Button from '../Button'
import MediaMatch from '../MediaMatch'
import TextField from '../TextField'

import {
  Backdrop,
  BorderGradient,
  BackgroundBlack,
  Content,
  InterBackground,
  ModalText,
  WrapperButton,
  WrapperClose,
  WrapperInput,

 } from './styles'

 interface IModalSocialProps {
  modalSignupOpen: React.Dispatch<React.SetStateAction<boolean>>
  setModalSignupOpen: React.Dispatch<React.SetStateAction<boolean>>
  setModalSuccessOpen: React.Dispatch<React.SetStateAction<boolean>>

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
  setModalSuccessOpen,
   }: IModalSocialProps) => {

  function handleCloseModal() {
    setModalSignupOpen(false)
  }

  const [formState, setFormState] = React.useState<IFormSignUpParams>({})


  const validForm = (formState) => {
    if (!formState[FORM_PARAM_KEYS_ENUM.email] || !formState[FORM_PARAM_KEYS_ENUM.name]) {
      return false;
    }
    return true;
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
          <WrapperClose>
            <button type="button" onClick={() => setModalSignupOpen(false)}><img src="assets/close.svg" alt=""/> </button>
          </WrapperClose>
          <InterBackground >
            <img src='./assets/logo-header.svg' alt=''/>
          </InterBackground>
          <Content>
            <ModalText>
                Subscribe to HEIM Social Index updates and launch
            </ModalText>
            <WrapperInput>
            <iframe title="a" name="hiddenFrame" width="0" height="0" style={{display: 'none'}} />
              <form
                action="https://beta.heimdall.land/subscribe/heim"
                method="POST"
                target="hiddenFrame"
                onSubmit={() => {
                  setFormState({});
                  handleCloseModal();
                  setModalSuccessOpen(true);
                }}
              >
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

              <MediaMatch greaterThan='small' >
                <WrapperButton>
                  <Button size="huge" type='submit' disabled={!validForm(formState)}>
                    Sign me up!
                  </Button>
                </WrapperButton>
              </MediaMatch>
              <MediaMatch lessThan='small' >
                <WrapperButton>
                  <Button size="medium" type='submit' disabled={!validForm(formState)}>
                    Sign me up!
                  </Button>
                </WrapperButton>
              </MediaMatch>
              </form>
            </WrapperInput>
          </Content>
          </BackgroundBlack>
      </BorderGradient>
    </>
  )
}

export default ModalSignUp
