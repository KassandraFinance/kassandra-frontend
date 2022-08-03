import React from 'react'
import Image from 'next/image'

import KacyData from './KacyData'

import kacyCircle from '../../../../public/assets/images/kacy-circle.png'

import * as S from './styles'

const KacySection = () => {
  return (
    <S.KacySectionContainer>
      <Image src={kacyCircle} />

      <KacyData />
    </S.KacySectionContainer>
  )
}

export default KacySection
