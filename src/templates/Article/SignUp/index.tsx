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
          <h4>Sign up to keep up with the latest articles</h4>
          <p>
            Want to get some emails every time we drop something new? Sign right
            on up.
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
