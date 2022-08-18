import React from 'react'
import Image from 'next/image'

import KacyData from './KacyData'

import kacyCircle from '../../../../public/assets/images/kacy-circle.png'
import light7 from '../../../../public/assets/images/backgroundHome/light-mobile7.png'

import * as S from './styles'

const KacySection = () => {
  return (
    <S.KacySectionContainer>
      <S.ImgWrapper>
        <Image src={light7} />
      </S.ImgWrapper>

      <Image src={kacyCircle} />

      <KacyData />
    </S.KacySectionContainer>
  )
}

export default KacySection
