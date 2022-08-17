import React from 'react'

import Button from '../../../../components/Button'

import * as S from './styles'

interface INewsCardProps {
  thumbnail: string;
  title: string;
  description: string;
  link: string;
}

const NewsCard = ({ thumbnail, title, description, link }: INewsCardProps) => {
  const subText =
    description.replace(/<\/?[^>]+(>|$)/g, '').substring(0, 100) + ' ...'

  return (
    <S.NewsCard>
      <S.NewsCardHeader>
        <img src={thumbnail} />
      </S.NewsCardHeader>

      <S.NewsCardBody>
        <S.TextWrapper>
          <S.Title>{title}</S.Title>

          <S.Text>{subText}</S.Text>
        </S.TextWrapper>

        <S.BtnWrapper href={link} target="_blank" rel="noopener noreferrer">
          <Button text="Read more" backgroundBlack />
        </S.BtnWrapper>
      </S.NewsCardBody>
    </S.NewsCard>
  )
}

export default NewsCard
