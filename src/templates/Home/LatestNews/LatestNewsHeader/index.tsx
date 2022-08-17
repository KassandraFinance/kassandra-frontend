import Image from 'next/image'
import React from 'react'

import roadMapIcon from '../../../../../public/assets/iconGradient/road-map.svg'

import * as S from './styles'

const LatestNewsHeader = () => {
  return (
    <S.LatestNewsHeader>
      <S.LatestNewsHeadingWrapper>
        <Image src={roadMapIcon} />

        <S.LatestNewsHeading>Latest News</S.LatestNewsHeading>

        <S.Line />
      </S.LatestNewsHeadingWrapper>
    </S.LatestNewsHeader>
  )
}

export default LatestNewsHeader
