/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import useSubscribe from '@/hooks/useSubscribe'

import Input from '@/components/Blog/Input'
import { RightArrowIcon } from '@/Icons/RightArrow'

import { ToastError, ToastSuccess } from '@/components/Toastify/toast'

import * as S from './styles'

const SignUp = () => {
  const [inputText, setInputText] = React.useState('')
  const { handleSubmitWithToast } = useSubscribe()

  function handleSuccess() {
    ToastSuccess('Successfully subscribed')

    setTimeout(() => {
      setInputText('')
    }, 1000)
  }

  function handleFail(error: Error) {
    ToastError(error?.message ?? 'Unknown error')

    setTimeout(() => {
      setInputText('')
    }, 1000)
  }

  return (
    <S.SignUp>
      <S.SignUpContent
        onSubmit={event =>
          handleSubmitWithToast({
            event,
            onError: handleFail,
            onSuccess: handleSuccess
          })
        }
      >
        <S.SignUpHeader>
          <h4>Keep up with Kassandra's news</h4>
          <p>
            Subscribe to receive information about Kassandra's resources and
            cutting-edge DeFi insights for managers and investors.
          </p>
        </S.SignUpHeader>
        <S.SignUpInput>
          <S.Input>
            <Input
              value={inputText}
              onChange={e => setInputText(e.target.value)}
              placeholder={'Enter your Email to Subscribe'}
              type="email"
              name="email"
            />

            <button type="submit" className="input-btn">
              <RightArrowIcon />
            </button>
          </S.Input>
        </S.SignUpInput>
      </S.SignUpContent>
    </S.SignUp>
  )
}

export default SignUp
