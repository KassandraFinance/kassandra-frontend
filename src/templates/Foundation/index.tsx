import React from 'react'

import Header from '../../components/Header/newHeader'
import Hero from './Hero'
import About from './About'
import GitHubStats from './GitHubStats'
import WavyLine from '../../components/WavyLine'

import * as S from './styles'

const Foundation = () => {
  return (
    <>
      <S.HeaderWrapper>
        <Header />
      </S.HeaderWrapper>

      <Hero />

      <S.Foundation>
        <About />
      </S.Foundation>

      <WavyLine color="color1" />

      <GitHubStats />

      <WavyLine color="color2" />
    </>
  )
}

export default Foundation
