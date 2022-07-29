import React from 'react'

import * as S from './styles'

interface IDaoCardProps {
  value: number;
  title: string;
}

const DaoCard = ({ value, title }: IDaoCardProps) => {
  return (
    <S.DaoCardContainer>
      <S.Value>${value}</S.Value>

      <S.Title>{title}</S.Title>
    </S.DaoCardContainer>
  )
}

export default DaoCard
