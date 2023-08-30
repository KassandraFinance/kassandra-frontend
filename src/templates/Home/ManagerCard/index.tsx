import React from 'react'
import Image, { StaticImageData } from 'next/image'

import Paragraph from '../../../components/Paragraph'

import * as S from './styles'

interface IManagerCardProps {
  icon: StaticImageData
  title: string
  text: string
  alt: string
}

const ManagerCard = ({ icon, title, text, alt }: IManagerCardProps) => {
  return (
    <S.ManagerCardWapper>
      <S.IconWapper>
        <Image src={icon} alt={alt} />
      </S.IconWapper>

      <S.TextWrapper>
        <S.Title>{title}</S.Title>

        <Paragraph text={text} />
      </S.TextWrapper>
    </S.ManagerCardWapper>
  )
}

export default ManagerCard
