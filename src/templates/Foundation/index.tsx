import React from 'react'

import WavyLine from '../../components/WavyLine'

import Hero from './Hero'
import About from './About'
import GitHubStats from './GitHubStats'
import Contribute from '../../components/Contribute'

import * as S from './styles'

const Foundation = () => {
  return (
    <S.FoundationConatiner>
      <Hero />

      <S.Foundation>
        <About />
      </S.Foundation>

      <WavyLine color="color1" />

      <GitHubStats />

      <WavyLine color="color2" />

      <Contribute
        title="Connect with our team to learn and build together"
        text="Accumulate $KACY by investing and contributing to Kassandra and earn a stake in all of our protocol fees."
      />
    </S.FoundationConatiner>
  )
}

export default Foundation
