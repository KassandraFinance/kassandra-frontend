import React from 'react'
import Image from 'next/image'

import FadeInHorizontal from '../../../components/Animations/FadeInHorizontal'
import Paragraph from '../../../components/Paragraph'
import Subtitle from '../../../components/Subtitle'
import SubscribeInput from '@/components/SubscribeInput'

import logoSkew from '../../../../public/assets/images/logo-big-skew.png'

import * as S from './styles'

const Subscribe = () => {
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

            <SubscribeInput />
          </S.TextWrapper>

          <Image src={logoSkew} alt="Kacy logo skewed with light" />
        </S.Subscribe>
      </FadeInHorizontal>
    </S.SubscribeContainer>
  )
}

export default Subscribe
