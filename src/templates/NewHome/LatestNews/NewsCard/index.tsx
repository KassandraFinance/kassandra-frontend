import Image from 'next/image'
import React from 'react'

import Button from '../../../../components/Button'

import img from '../../../../../public/assets/images/twitter-post.png'

import * as S from './styles'

const NewsCard = () => {
  return (
    <S.NewsCard>
      <S.NewsCardHeader>
        <Image src={img} />
      </S.NewsCardHeader>
      <S.NewsCardBody>
        <S.Title>TryCrypto has launched</S.Title>

        <S.Text>
          Praesent quam amet interdum etiam. Facilisis iaculis at arcu id in.
          Fringilla vitae sit est aliquam sit. Odio at est sagittis ipsum.
          Mattis vivamus ipsum elit vitae.
        </S.Text>

        <S.BtnWrapper>
          <Button text="Read more" backgroundBlack />
        </S.BtnWrapper>
      </S.NewsCardBody>
    </S.NewsCard>
  )
}

export default NewsCard
