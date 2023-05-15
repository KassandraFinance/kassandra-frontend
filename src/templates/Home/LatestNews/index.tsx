import React from 'react'
import Image from 'next/image'
import useSWR from 'swr'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import { MEDIUM_FEED_URL } from '../../../constants/tokenAddresses'

import LatestNewsHeader from './LatestNewsHeader'
import NewsCard from './NewsCard'
import FadeIn from '../../../components/Animations/FadeIn'

import lightTable10 from '../../../../public/assets/images/backgroundHome/light-tablet10.png'

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
  const [mediumPosts, setMediumPosts] = React.useState<IMediumPost[]>([])

  const fetcher = async (url: string) => {
    const res = await fetch(url)
    return res.json()
  }

  const { data } = useSWR(MEDIUM_FEED_URL, fetcher)

  const responsive = {
    0: { items: 1 },
    730: { items: 2 },
    1250: { items: 3 }
  }

  const cards = mediumPosts.map(post => {
    return (
      <NewsCard
        key={post.title}
        thumbnail={post.thumbnail}
        title={post.title}
        pubDate={post.pubDate}
        description={post.content}
        link={post.link}
      />
    )
  })

  React.useEffect(() => {
    if (data) {
      setMediumPosts(data.items)
    }
  }, [data])

  return (
    <S.LatestNewsContainer>
      <S.ImgTabletWrapper>
        <Image src={lightTable10} />
      </S.ImgTabletWrapper>

      <FadeIn threshold={0.5}>
        <LatestNewsHeader />
      </FadeIn>

      <FadeIn threshold={0.5}>
        <S.NewsCardContainer>
          {data && (
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
    </S.LatestNewsContainer>
  )
}

export default LatestNews
