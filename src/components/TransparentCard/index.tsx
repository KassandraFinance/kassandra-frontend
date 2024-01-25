import * as S from './styles'

import { ReactNode } from 'react'

interface ITransparentCardProps {
  title: string
  logo: ReactNode
  description: string
}

const TransparentCard = ({
  logo,
  title,
  description
}: ITransparentCardProps) => {
  return (
    <S.TransparentCard>
      {logo}
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.TransparentCard>
  )
}

export default TransparentCard
