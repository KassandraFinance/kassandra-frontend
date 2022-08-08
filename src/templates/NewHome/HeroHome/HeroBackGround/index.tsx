import React from 'react'
import Image from 'next/image'

import lightTable3 from '../../../../../public/assets/images/backgroundHome/light-tablet3.png'

import * as S from './styles'

const HeroBackGround = () => {
  return (
    <>
      <S.ImgWrapper>
        <Image src={lightTable3} />
      </S.ImgWrapper>

      <S.Sun />

      <S.Grid />

      <S.LightHero />
    </>
  )
}

export default HeroBackGround
