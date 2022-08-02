import React from 'react'
import Image, { StaticImageData } from 'next/image'

import * as S from './styles'

interface IDaoCardInfoProps {
  icon: StaticImageData;
  title: string;
  color: string;
  subtilte: string;
  text: string;
}

const DaoCardInfo = ({
  icon,
  title,
  color,
  subtilte,
  text
}: IDaoCardInfoProps) => {
  return (
    <S.DaoCardWrapper>
      <S.TitleContainer>
        <S.ImgWrapper>
          <Image src={icon} layout="responsive" />
        </S.ImgWrapper>

        <S.TitleWrapper>
          <S.Title color={color}>{title}</S.Title>

          <S.SubTitle>{subtilte}</S.SubTitle>
        </S.TitleWrapper>
      </S.TitleContainer>

      <S.Text>{text}</S.Text>
    </S.DaoCardWrapper>
  )
}

export default DaoCardInfo
