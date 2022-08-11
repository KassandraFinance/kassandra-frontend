import React from 'react'

import Header from '../../components/Header/newHeader'
import GitHubStats from './GitHubStats'
import Hero from './Hero'

import * as S from './styles'

const Foundation = () => {
  return (
    <S.Foundation>
      <S.HeaderWrapper>
        <Header />
      </S.HeaderWrapper>

      <Hero />
      <GitHubStats />
    </S.Foundation>
  )
}

export default Foundation
