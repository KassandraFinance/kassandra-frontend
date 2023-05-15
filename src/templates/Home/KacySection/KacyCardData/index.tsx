import React from 'react'

import * as S from './styles'

interface IKacySectionProps {
  value: string
  title: string
}

const KacyCardData = ({ value, title }: IKacySectionProps) => {
  return (
    <>
      <S.KacyCardData>
        <S.KacyValue>{value}</S.KacyValue>

        <S.Title>{title}</S.Title>
      </S.KacyCardData>

      <S.Line />
    </>
  )
}

export default KacyCardData
