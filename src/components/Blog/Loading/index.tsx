import React from 'react'
import Image from 'next/image'

import token96 from '@assets/logos/kacy-96.svg'

import * as S from './styles'

interface ILoadingProps {
  marginTop?: number
}

export const Loading = ({ marginTop }: ILoadingProps) => (
  <S.ImgLoading marginTop={marginTop ?? 0}>
    <S.AnimatedImg>
      <Image src={token96} alt="Loading" width={32} height={32} />
    </S.AnimatedImg>
  </S.ImgLoading>
)
