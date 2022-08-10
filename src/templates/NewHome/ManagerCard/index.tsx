import React from 'react'
import Image, { StaticImageData } from 'next/image'

import * as S from './styles'

interface IManagerCardProps {
  icon: StaticImageData;
  title: string;
  text: string;
}

const ManagerCard = ({ icon, title, text }: IManagerCardProps) => {
  return (
    <S.ManagerCardWapper>
      <S.IconWapper>
        <Image src={icon} />
      </S.IconWapper>

      <S.TextWrapper>
        <S.Title>{title}</S.Title>

        <S.Text>{text}</S.Text>
      </S.TextWrapper>
    </S.ManagerCardWapper>
  )
}

export default ManagerCard
