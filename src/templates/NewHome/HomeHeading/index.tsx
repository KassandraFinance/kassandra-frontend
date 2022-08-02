import React from 'react'

import * as S from './styles'

interface IHomeHeadingProps {
  title: string;
  color: string;
}

const HomeHeading = ({ title, color }: IHomeHeadingProps) => {
  return (
    <S.Container>
      <S.Title color={color}>{title}</S.Title>

      <S.Line color={color} />
    </S.Container>
  )
}

export default HomeHeading
