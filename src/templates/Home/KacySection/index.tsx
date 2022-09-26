import React from 'react'
import Image from 'next/image'

import KacyData from './KacyData'
import FadeInHorizontal from '../../../components/Animations/FadeInHorizontal'

import kacyCircle from '../../../../public/assets/images/kacy-circle.png'
import light7 from '../../../../public/assets/images/backgroundHome/light-mobile7.png'

import * as S from './styles'

const KacySection = () => {
  return (
    <S.KacySectionContainer>
      <S.ImgWrapper>
        <Image src={light7} />
      </S.ImgWrapper>

      <FadeInHorizontal threshold={0.5} invert>
        <Image src={kacyCircle} />
      </FadeInHorizontal>

      <FadeInHorizontal threshold={0.5} invert>
        <KacyData />
      </FadeInHorizontal>
    </S.KacySectionContainer>
  )
}

export default KacySection
