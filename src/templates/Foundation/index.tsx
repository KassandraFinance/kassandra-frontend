import React from 'react'

import Header from '../../components/Header/newHeader'
import About from './About'
import Hero from './Hero'

import * as S from './styles'

const Foundation = () => {
  return (
    <S.Foundation>
      <S.HeaderWrapper>
        <Header />
      </S.HeaderWrapper>

      <Hero />

      <S.Foundation>
        <About />
      </S.Foundation>
    </>
  )
}

export default Foundation
