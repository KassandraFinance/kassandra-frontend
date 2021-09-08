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

} from './styles';

interface IModalSignUp {
  modalSignupOpen: boolean
  setModalSignupOpen: React.Dispatch<React.SetStateAction<boolean>>
  setModalSuccessOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

interface IFormSignUpParamsProps {
  name?: string
  email?: string
};

interface IOnChangeFormParam {
  key: string
  value: string
}

export const ModalSignUp = ({
  modalSignupOpen,
  setModalSignupOpen,
  setModalSuccessOpen,
  }: IModalSignUp) => {

  function handleCloseModal() {
    setModalSignupOpen(false)
  }

  const [formState, setFormState] = React.useState<IFormSignUpParamsProps>({})
  const onChangeFormParam = ({ key, value }: IOnChangeFormParam) => {
    setFormState({ ...formState, [key]: value })
  }


  const validForm = (formState: any) => {
    if (!formState.email || !formState.name) {
      return false;
    }
    return true;
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
                  if (setModalSuccessOpen) setModalSuccessOpen(true);
                }}
              >
                <TextField
                  name="user"
                  placeholder="Ex: John Doe"
                  type="name"
                  label='Your username'
                  value={formState.name}
                  onChange={(e: { target: { value: any; }; }) =>
                    onChangeFormParam({
                      key: 'name',
                      value: e.target.value
                    })
                  }
                />

                <TextField
                  name="email"
                  placeholder="Ex: username@email.com"
                  type="email"
                  label='Your email address'
                  value={formState.email}
                  onChange={(e: { target: { value: any; }; }) =>
                    onChangeFormParam({
                      key: 'email',
                      value: e.target.value
                    })
                  }
                />

              <MediaMatch greaterThan='small' >
                <WrapperButton>
                  <Button   backgroundPrimary size="huge" type='submit' disabledNoEvent={!validForm(formState)} >
                    Sign me up!
                  </Button>
                </WrapperButton>
              </MediaMatch>
              <MediaMatch lessThan='small' >
                <WrapperButton>
                  <Button backgroundPrimary size="medium" type='submit' disabledNoEvent={!validForm(formState)}>
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
