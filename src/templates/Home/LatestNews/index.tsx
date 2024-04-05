import React from 'react'
import Image from 'next/image'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { InView } from 'react-intersection-observer'

import { useMedium } from '@/hooks/query/useMedium'

import LatestNewsHeader from './LatestNewsHeader'
import NewsCard from './NewsCard'
import FadeIn from '@/components/Animations/FadeIn'

import lightTable10 from '@assets/images/backgroundHome/light-tablet10.png'

import * as S from './styles'

interface IMediumPost {
  author: string
  categories: string[]
  content: string
  description: string
  enclosure: object
  guid: string
  link: string
  pubDate: string
  thumbnail: string
  title: string
}

const LatestNews = () => {
  const { data: mediumData } = useMedium()

  const responsive = {
    0: { items: 1 },
    730: { items: 2 },
    1250: { items: 3 }
  }

  const cards = mediumData?.items?.map((post: IMediumPost) => {
    const regex = /<img[^>]+src="([^">]+)"/
    const match = post?.description?.match(regex)
    const thumbnail = match ? match[1] : ''

    return (
      <NewsCard
        key={post.title}
        thumbnail={thumbnail}
        title={post.title}
        pubDate={post.pubDate}
        description={post.content}
        link={post.link}
      />
    )
  })

  return (
    <InView>
      {({ inView, ref }) => {
        return (
          <S.LatestNewsContainer ref={ref}>
            <S.ImgTabletWrapper>
              <Image src={lightTable10} alt="Ball of light" />
            </S.ImgTabletWrapper>

            <FadeIn threshold={0.5}>
              <LatestNewsHeader />
            </FadeIn>

            {inView ? (
              <FadeIn threshold={0.5}>
                <S.NewsCardContainer>
                  {mediumData && (
                    <AliceCarousel
                      mouseTracking
                      infinite
                      disableButtonsControls
                      items={cards}
                      responsive={responsive}
                    />
                  )}
                </S.NewsCardContainer>
              </FadeIn>
            ) : (
              <div style={{ height: '514px' }}></div>
            )}
          </S.LatestNewsContainer>
        )
      }}
    </InView>
  )
}

export default LatestNews
