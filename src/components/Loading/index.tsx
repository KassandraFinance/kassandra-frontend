import React from 'react'
import Image from 'next/image'

import token96 from '../../../public/assets/token-96.svg'

import * as S from './styles'

interface ILoadingProps {
  marginTop: number;
}

const Loading = ({ marginTop }: ILoadingProps) => (
  <S.ImgLoading marginTop={marginTop}>
    <S.AnimatedImg>
      <Image src={token96} alt="Loading" />
    </S.AnimatedImg>
  </S.ImgLoading>
)

export default Loading
