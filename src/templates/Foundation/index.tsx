import React from 'react'

import Header from '../../components/Header/newHeader'
import WavyLine from '../../components/WavyLine'

import Hero from './Hero'
import About from './About'
import GitHubStats from './GitHubStats'
import ProjectRoadmap from './ProjectRoadmap'
import Contribute from '../TokenHolder/Contribute'

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

      <ProjectRoadmap />

      <Contribute />
    </>
  )
}

export default Foundation
