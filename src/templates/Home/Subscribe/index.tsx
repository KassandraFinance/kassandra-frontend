import React from 'react'
import Image from 'next/image'

import useMatomoEcommerce from '../../../hooks/useMatomoEcommerce'

import { ToastError, ToastSuccess } from '../../../components/Toastify/toast'

import TextField from '../../../components/TextField'
import FadeInHorizontal from '../../../components/Animations/FadeInHorizontal'
import Paragraph from '../../../components/Paragraph'
import Subtitle from '../../../components/Subtitle'

import emailIcon from '../../../../public/assets/icons/email.svg'
import logoSkew from '../../../../public/assets/images/logo-big-skew.png'
import arrowIcon from '../../../../public/assets/utilities/foward-arrow.svg'

import * as S from './styles'

interface IFormSignUpParams {
  name?: string
  email?: string
}

interface IOnChangeFormParam {
  key: string
  value: string
}

const Subscribe = () => {
  const { trackEventFunction } = useMatomoEcommerce()
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
    trackEventFunction('click-on-button', 'send-email', 'subscribe-email')
    setTimeout(() => {
      setFormState({ email: '' })
    }, 1000)
  }

  return (
    <S.SubscribeContainer>
      <S.SubscribeBacground />

      <FadeInHorizontal threshold={0.5}>
        <S.Subscribe>
          <S.TextWrapper>
            <Subtitle text="Be on the frontlines of our development" as="h4" />
            <Paragraph
              text="Subscribe to our newsletter to get early information and special
              calls."
            />

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
          </S.TextWrapper>

          <Image src={logoSkew} />
        </S.Subscribe>
      </FadeInHorizontal>
    </S.SubscribeContainer>
  )
}

export default Subscribe
