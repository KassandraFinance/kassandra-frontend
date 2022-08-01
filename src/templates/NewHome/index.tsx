import React from 'react'

import HeroHome from './HeroHome'
import InvestorsSection from './InvestorsSection'

import * as S from './styles'

const NewHome = () => {
  return (
    <>
      <HeroHome />

      <S.Container>
        <InvestorsSection />
      </S.Container>
    </>
  )
}

export default NewHome
