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

interface IOnChangeFormParam {
  key: string
  value: string
}
interface ISignUpProps {
  setModalSuccessOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const SingUp = ({  setModalSuccessOpen} : ISignUpProps) => {
  const [formState, setFormState] = useState<IFormSignUpParams>({})
  const onChangeFormParam = ({ key, value }: IOnChangeFormParam) => {
    setFormState({ ...formState, [key]: value })
  }
  const validForm = (formState: any) => {
    if (!formState.email || !formState.name) {
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
        <form
          action="https://beta.heimdall.land/subscribe/heim"
          method="POST"
          target="hiddenFrame"
          onSubmit={() => {
            setTimeout(() => {
              setFormState({name:'', email: ''})
            }, 1000); ;
            setModalSuccessOpen(true);
          }}>
          <TextField
            name="user"
            placeholder="Ex: John Doe"
            type="name"
            label='Your username'
            value={formState.name}
            onChange={(e) =>
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
            onChange={(e) =>
              onChangeFormParam({
                key: 'email',
                value: e.target.value
              })
            }
          />

        {/* <S.ButtonWrapper> */}
        <MediaMatch greaterThan='small'>
          <Button backgroundPrimary size="huge" type='submit'  fullWidth disabledNoEvent={!validForm(formState)}>
            Sign me up!
          </Button>
        </MediaMatch>
        <MediaMatch lessThan='small'>
          <Button backgroundPrimary size="medium"  type='submit' fullWidth disabledNoEvent={!validForm(formState)}>
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
