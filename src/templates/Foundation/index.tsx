import React from 'react'

import WavyLine from '../../components/WavyLine'

import Hero from './Hero'
import About from './About'
import GitHubStats from './GitHubStats'
import ProjectRoadmap from './ProjectRoadmap'
import Contribute from '../DAO/Contribute'
import Institutional from './Institutional'
import Team from './Team'

import * as S from './styles'

const Foundation = () => {
  return (
    <>
      <Hero />

      <S.Foundation>
        <About />
      </S.Foundation>

      <WavyLine color="color1" />

      <Institutional />
      <Team />

      <GitHubStats />

      <WavyLine color="color2" />

      <ProjectRoadmap />

      <Contribute />
    </>
  )
}

export default Foundation
