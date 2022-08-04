import React from 'react'

import LatestNewsHeader from './LatestNewsHeader'
import NewsCard from './NewsCard'

import * as S from './styles'

const LatestNews = () => {
  return (
    <S.LatestNewsContainer>
      <LatestNewsHeader />

      <S.NewsCardContainer>
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </S.NewsCardContainer>
    </S.LatestNewsContainer>
  )
}

export default LatestNews
