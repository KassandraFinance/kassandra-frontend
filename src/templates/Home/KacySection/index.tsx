import React from 'react'
import Image from 'next/image'

import KacyData from './KacyData'
import FadeInLeft from '../../../components/Animations/FadeInLeft'

import kacyCircle from '../../../../public/assets/images/kacy-circle.png'
import light7 from '../../../../public/assets/images/backgroundHome/light-mobile7.png'

import * as S from './styles'

const KacySection = () => {
  return (
    <S.KacySectionContainer>
      <S.ImgWrapper>
        <Image src={light7} />
      </S.ImgWrapper>

      <FadeInLeft threshold={0.5} invert>
        <Image src={kacyCircle} />
      </FadeInLeft>

      <FadeInLeft threshold={0.5} invert>
        <KacyData />
      </FadeInLeft>
    </S.KacySectionContainer>
  )
}

export default KacySection
