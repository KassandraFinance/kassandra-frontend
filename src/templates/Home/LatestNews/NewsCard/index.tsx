import React from 'react'
import { useRouter } from 'next/router'
import useMatomo from '@/hooks/useMatomo'

import Button from '../../../../components/Button'

import * as S from './styles'

interface INewsCardProps {
  thumbnail: string
  title: string
  pubDate: string
  description: string
  link: string
}

const NewsCard = ({
  thumbnail,
  title,
  pubDate,
  description,
  link
}: INewsCardProps) => {
  const { trackEvent } = useMatomo()
  const router = useRouter()

  const subText =
    description.replace(/<\/?[^>]+(>|$)/g, '').substring(0, 100) + ' ...'

  const date = new Date(pubDate)

  return (
    <S.NewsCard>
      <S.NewsCardHeader>
        <img src={thumbnail} alt="News cover" />
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
              trackEvent({
                category: router.pathname,
                action: `click-on-link | Latest News | ${router.pathname}`,
                name: `Read more - medium-posts-${date.toLocaleDateString(
                  'en-US'
                )}`
              })
            }
          />
        </S.BtnWrapper>
      </S.NewsCardBody>
    </S.NewsCard>
  )
}

export default NewsCard
