import React from 'react'

import WavyLine from '../../components/WavyLine'

import Hero from './Hero'
import About from './About'
import GitHubStats from './GitHubStats'
import ProjectRoadmap from './ProjectRoadmap'
import Institutional from './Institutional'
import Team from './Team'
import Contribute from '../../components/Contribute'

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

      <Contribute
        title="Connect with our team to learn and build together"
        text="Accumulate $KACY by investing and contributing to Kassandra and earn a stake in all of our protocol fees."
      />
    </>
  )
}

export default Foundation
