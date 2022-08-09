import React from 'react'

import * as S from './styles'

interface IDaoCardProps {
  value: string;
  title: string;
}

const DaoCard = ({ value, title }: IDaoCardProps) => {
  return (
    <S.DaoCardContainer>
      <S.Value>
        {parseFloat(value).toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 2
        })}
      </S.Value>

      <S.Title>{title}</S.Title>
    </S.DaoCardContainer>
  )
}

export default DaoCard
