import React from 'react'
import Image from 'next/image'

import useMatomoEcommerce from '../../../hooks/useMatomoEcommerce'

import { ToastSuccess } from '../../../components/Toastify/toast'

import TextField from '../../../components/TextField'
import FadeInLeft from '../../../components/Animations/FadeInLeft'

import emailIcon from '../../../../public/assets/icons/email.svg'
import logoSkew from '../../../../public/assets/images/logo-big-skew.png'
import arrowIcon from '../../../../public/assets/utilities/foward-arrow.svg'

import * as S from './styles'

interface IFormSignUpParams {
  name?: string;
  email?: string;
}

interface IOnChangeFormParam {
  key: string;
  value: string;
}

const Subscribe = () => {
  const { trackEventFunction } = useMatomoEcommerce()
  const [formState, setFormState] = React.useState<IFormSignUpParams>({})

  const onChangeFormParam = ({ key, value }: IOnChangeFormParam) => {
    setFormState({ ...formState, [key]: value })
  }

  const handleSubmit = () => {
    ToastSuccess('Successfully subscribed')
    trackEventFunction('click-on-button', 'send-email', 'subscribe-email')
    setTimeout(() => {
      setFormState({ email: '' })
    }, 1000)
  }

  return (
    <S.SubscribeContainer>
      <S.SubscribeBacground />

      <FadeInLeft threshold={0.5}>
        <S.Subscribe>
          <S.TextWrapper>
            <S.Title>Be on the frontlines of our development</S.Title>

            <S.Text>
              Subscribe to our newsletter to get early information and special
              calls.
            </S.Text>

            <iframe
              title="a"
              name="hiddenFrame"
              width="0"
              height="0"
              style={{ display: 'none' }}
            />

            <S.Form
              action="https://heimdall.land/subscribe/heim"
              method="POST"
              target="hiddenFrame"
              onSubmit={handleSubmit}
            >
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
      </FadeInLeft>
    </S.SubscribeContainer>
  )
}

export default Subscribe
