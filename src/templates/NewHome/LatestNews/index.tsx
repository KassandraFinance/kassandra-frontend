import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import useSWR from 'swr'

import LatestNewsHeader from './LatestNewsHeader'
import NewsCard from './NewsCard'

import * as S from './styles'

const LatestNews = () => {
  const [mediumPosts, setMediumPosts] = React.useState<IMediumPost[]>([])

  const responsive = {
    0: { items: 1 },
    730: { items: 2 },
    1250: { items: 3 }
  }
  const items = mediumPosts.map(post => {
    return (
      <NewsCard
      />
    )
  })
  return (
    <S.LatestNewsContainer>
      <LatestNewsHeader />

      <S.NewsCardContainer>
          <AliceCarousel
            mouseTracking
            infinite
            disableButtonsControls
            items={items}
            responsive={responsive}
          />
      </S.NewsCardContainer>
    </S.LatestNewsContainer>
  )
}

export default LatestNews
