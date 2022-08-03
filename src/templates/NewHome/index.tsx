import React from 'react'

import HeroHome from './HeroHome'
import InvestorsSection from './InvestorsSection'
import WavyLine from '../../components/WavyLine'
import ManagerSection from './ManagerSection'
import DaoSection from './DaoSection'
import KacySection from './KacySection'

import * as S from './styles'

const NewHome = () => {
  return (
    <>
      <HeroHome />

      <S.Container>
        <InvestorsSection />
      </S.Container>

      <WavyLine color="color1" />

      <S.Container>
        <ManagerSection />
      </S.Container>

      <WavyLine color="color2" />

      <S.Container>
        <DaoSection />

        <KacySection />
      </S.Container>
    </>
  )
}

export default NewHome
