import React from 'react'

import { abbreviateNumber } from '../../../../utils/abbreviateNumber'

import * as S from './styles'

interface IDaoCardProps {
  value: string
  title: string
}

const DaoCard = ({ value, title }: IDaoCardProps) => {
  return (
    <S.DaoCardContainer>
      <S.Value>${abbreviateNumber(value)}</S.Value>

      <S.Title>{title}</S.Title>
    </S.DaoCardContainer>
  )
}

export default DaoCard
