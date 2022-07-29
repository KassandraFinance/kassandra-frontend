import React from 'react'

import * as S from './styles'

interface IDaoCardProps {
  value: number;
  title: string;
  index: number;
}

const DaoCard = ({ value, title, index }: IDaoCardProps) => {
  return (
    <S.DaoCardContainer index={index}>
      <S.Value>${value}</S.Value>

      <S.Title>{title}</S.Title>
    </S.DaoCardContainer>
  )
}

export default DaoCard
