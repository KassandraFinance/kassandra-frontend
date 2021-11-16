import React from 'react'
import TextField from '../TextField'
import { ToastSuccess, ToastError, ToastWarning } from '../Toastify/toast'

import * as S from './styles'

interface IFormSignUpParams {
  name?: string;
  email?: string;
}

interface IOnChangeFormParam {
  key: string;
  value: string;
}
const SubscribeBanner = () => {
  const [formState, setFormState] = React.useState<IFormSignUpParams>({})
  const onChangeFormParam = ({ key, value }: IOnChangeFormParam) => {
    setFormState({ ...formState, [key]: value })
  }

  const handleSubmitForm = async () => {
    const response = await fetch('https://heimdall.land/subscribe/heim', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: formState.email,
        user: formState.name
      })
    })
    const data = await response.json()
    if (response.status === 200) {
      ToastSuccess('Subscribe succesful')
    } else if (response.status === 409) {
      ToastError('Email already registred')
    } else {
      ToastError('Something went wrong')
    }
  }

  const handleSubmit = () => {
    handleSubmitForm()
    setTimeout(() => {
      setFormState({ email: '' })
    }, 1000)
  }

  return (
    <S.Container>
      <S.TextWrapper>
        <h1>Be the first to know.</h1>
        <span>
          Subscribe to our newsletter to get early information and special
          calls.
        </span>
      </S.TextWrapper>
      <S.Input>
        <TextField hidden name="user" value="Gem Hunter" />

        <TextField
          icon={<img src="/assets/fowardArrow.svg" alt="" />}
          iconPosition="right"
          name="email"
          placeholder="Email"
          type="email"
          value={formState.email}
          onChange={e =>
            onChangeFormParam({
              key: 'email',
              value: e.target.value
            })
          }
          onClick={handleSubmit}
        />
      </S.Input>
    </S.Container>
  )
}
export default SubscribeBanner
