import React from 'react'
import Image from 'next/image'

import useSubscribe from '@/hooks/useSubscribe'

import { ToastError, ToastSuccess } from '../Toastify/toast'

import emailIcon from '../../../public/assets/icons/email.svg'
import arrowIcon from '../../../public/assets/utilities/foward-arrow.svg'

import * as S from './styles'

const SubscribeInput = () => {
  const [formState, setFormState] = React.useState('')

  const { handleSubmitWithToast } = useSubscribe()

  function handleSuccess() {
    ToastSuccess('Successfully subscribed')

    setTimeout(() => {
      setFormState('')
    }, 1000)
  }

  function handleFail(error: Error) {
    ToastError(error?.message ?? 'Unknown error')

    setTimeout(() => {
      setFormState('')
    }, 1000)
  }

  return (
    <S.SubscribeInput>
      <S.Form
        onSubmit={event =>
          handleSubmitWithToast({
            event,
            onError: handleFail,
            onSuccess: handleSuccess
          })
        }
      >
        <S.InputWrapper>
          <S.Input
            name="email"
            type="email"
            required
            minLength={1}
            value={formState}
            onChange={event => setFormState(event?.target.value)}
            aria-label="Email"
            autoComplete="off"
          />

          <S.InputTextWrapper>
            <Image
              src={emailIcon}
              width={17.5}
              height={12.5}
              alt="Letter envelope"
            />

            <span>Email</span>
          </S.InputTextWrapper>

          <S.InputBtn type="submit">
            <Image src={arrowIcon} alt="Arrow right" />
          </S.InputBtn>
        </S.InputWrapper>
      </S.Form>
    </S.SubscribeInput>
  )
}

export default SubscribeInput
