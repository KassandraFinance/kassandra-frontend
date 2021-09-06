import React, { useState } from 'react'
// eslint-disable-next-line import/extensions
import * as S from './styles'
import Button from '../../../components/Button'
import MediaMatch from '../../../components/MediaMatch'
import TextField from '../../../components/TextField'


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

export const SingUp = ({  setModalSuccessOpen}) => {
  const [formState, setFormState] = useState<IFormSignUpParams>({})
  const onChangeFormParam = ({ key, value }: IOnChangeFormParam) => {
    setFormState({ ...formState, [key]: value })
  }
  const validForm = (formState) => {
    if (!formState[FORM_PARAM_KEYS_ENUM.email] || !formState[FORM_PARAM_KEYS_ENUM.name]) {
      return false;
    }
    return true;
  }
  return(

      <S.Container>
        <S.WrapperText>
          <S.Title>Time to beat the market</S.Title>
          <S.SubTitle>Join the $KACY community</S.SubTitle>
        </S.WrapperText>
        <iframe title="a" name="hiddenFrame" width="0" height="0" style={{display: 'none'}} />
        <form id='sign-up' action="https://beta.heimdall.land/subscribe/heim" method="POST" target="hiddenFrame" onSubmit={
          (e) => {
            setFormState({});
            setModalSuccessOpen(true);
          }}>
          <TextField
            style={{color: '#FCFCFC'}}
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
            style={{color: '#FCFCFC'}}
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
          <Button size="huge" type='submit' fullWidth disabled={!validForm(formState)}>
            Sign me up!
          </Button>
        </MediaMatch>
        <MediaMatch lessThan='small'>
          <Button size="medium"  type='submit' fullWidth disabled={!validForm(formState)}>
            Sign me up!
          </Button>
        </MediaMatch>
        </form>
        {/* </S.ButtonWrapper> */}
        {/* </S.WrapperContainer> */}
      </S.Container>

  )
}

export default SingUp
