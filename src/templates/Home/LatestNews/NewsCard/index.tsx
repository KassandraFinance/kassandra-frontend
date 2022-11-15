import React from 'react'

import useMatomoEcommerce from '../../../../hooks/useMatomoEcommerce'

import Button from '../../../../components/Button'

import * as S from './styles'

interface INewsCardProps {
  thumbnail: string;
  title: string;
  pubDate: string;
  description: string;
  link: string;
}

const NewsCard = ({
  thumbnail,
  title,
  pubDate,
  description,
  link
}: INewsCardProps) => {
  const { trackEventFunction } = useMatomoEcommerce()

  const subText =
    description.replace(/<\/?[^>]+(>|$)/g, '').substring(0, 100) + ' ...'

  const date = new Date(pubDate)

  return (
    <S.NewsCard>
      <S.NewsCardHeader>
        <img src={thumbnail} />
      </S.NewsCardHeader>

      <S.NewsCardBody>
        <S.TextWrapper>
          <S.TitleWrapper>
            <S.Title>{title}</S.Title>

            <S.PubDate>{date.toLocaleDateString('en-US')}</S.PubDate>
          </S.TitleWrapper>

          <S.Text>{subText}</S.Text>
        </S.TextWrapper>

        <S.BtnWrapper href={link} target="_blank" rel="noopener noreferrer">
          <Button
            size="huge"
            text="Read more"
            backgroundBlack
            onClick={() =>
              trackEventFunction('click-on-link', 'medium-posts', 'latest-news')
            }
          />
        </S.BtnWrapper>
      </S.NewsCardBody>
    </S.NewsCard>
  )
}

export default NewsCard
