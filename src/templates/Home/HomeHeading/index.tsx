import React from 'react'

import * as S from './styles'

interface IHomeHeadingProps {
  title: string;
  color: string;
  subTitle?: string;
  text?: string;
}

const HomeHeading = ({
  title,
  color,
  subTitle = '',
  text = ''
}: IHomeHeadingProps) => {
  return (
    <S.Container>
      <S.Title color={color}>{title}</S.Title>

      <S.Line color={color} />

      {subTitle.length > 0 && <S.Subtitle>{subTitle}</S.Subtitle>}

      <S.Text>{text}</S.Text>
    </S.Container>
  )
}

export default HomeHeading
