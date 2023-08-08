import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import useMatomo from '@/hooks/useMatomo'

import TextField from '../TextField'
import { ToastError, ToastSuccess } from '../Toastify/toast'

import emailIcon from '../../../public/assets/icons/email.svg'
import arrowIcon from '../../../public/assets/utilities/foward-arrow.svg'

import * as S from './styles'

interface IFormSignUpParams {
  name?: string
  email?: string
}

interface IOnChangeFormParam {
  key: string
  value: string
}

const SubscribeInput = () => {
  const { trackEvent } = useMatomo({ trackPageView: true })
  const router = useRouter()
  const [formState, setFormState] = React.useState<IFormSignUpParams>({})

  const onChangeFormParam = ({ key, value }: IOnChangeFormParam) => {
    setFormState({ ...formState, [key]: value })
  }

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    const response = await fetch('/api/subscribe', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(formState)
    })

    if (response.status !== 201) {
      const message =
        response.status === 400
          ? 'Email already subscribed'
          : 'Subscription failed, please try again later'
      ToastError(message)
      return
    }

    ToastSuccess('Successfully subscribed')
    trackEvent({
      category: router.pathname,
      action: `click-on-submit | hero | ${router.pathname}`,
      name: 'Email'
    })
    setTimeout(() => {
      setFormState({ email: '' })
    }, 1000)
  }

  return (
    <S.SubscribeInput>
      <iframe
        title="a"
        name="hiddenFrame"
        width="0"
        height="0"
        style={{ display: 'none' }}
      />

      <S.Form target="hiddenFrame" onSubmit={handleSubmit}>
        <TextField hidden name="user" value="Gem Hunter" />

        <S.InputWrapper>
          <S.Input
            name="email"
            type="email"
            required
            minLength={1}
            value={formState.email ? formState.email : ''}
            onChange={e =>
              onChangeFormParam({
                key: 'email',
                value: e.target.value
              })
            }
          />

          <S.InputTextWrapper>
            <Image src={emailIcon} width={17.5} height={12.5} />

            <span>Email</span>
          </S.InputTextWrapper>

          <S.InputBtn type="submit">
            <Image src={arrowIcon} />
          </S.InputBtn>
        </S.InputWrapper>
      </S.Form>
    </S.SubscribeInput>
  )
}

export default SubscribeInput
