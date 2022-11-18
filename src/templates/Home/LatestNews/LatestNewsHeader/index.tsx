import Image from 'next/image'
import React from 'react'

import roadMapIcon from '../../../../../public/assets/iconGradient/road-map.svg'
import SectionSubtitle from '../../../../components/SectionSubtitle'

import * as S from './styles'

const LatestNewsHeader = () => {
  return (
    <S.LatestNewsHeader>
      <S.LatestNewsHeadingWrapper>
        <Image src={roadMapIcon} />

        <SectionSubtitle text="Latest News" as="h5" />

        <S.Line />
      </S.LatestNewsHeadingWrapper>
    </S.LatestNewsHeader>
  )
}

export default LatestNewsHeader
