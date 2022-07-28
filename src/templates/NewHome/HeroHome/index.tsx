import React from 'react'
import router from 'next/router'

import HeroText from './HeroText'
import Button from '../../../components/Button'

import * as S from './styles'

const HeroHome = () => {
  return (
    <S.Container>
      <HeroText />

      <Button
        text="Start Investing"
        backgroundPrimary
        onClick={() => router.push('/explore')}
      />
    </S.Container>
  )
}

export default HeroHome
