import React from 'react'
import Image from 'next/image'

import * as S from './styles'
interface ITitleSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
  title: string;
  text?: string;
  marginTop?: number;
}

export const TitleSection = ({
  image,
  title,
  text,
  marginTop
}: ITitleSectionProps) => {
  return (
    <S.Title marginTop={marginTop}>
      <S.TitleContent>
        <Image src={image} alt="" />
        <h1>{title}</h1>
      </S.TitleContent>
      <h2>{text}</h2>
    </S.Title>
  )
}

export default TitleSection
