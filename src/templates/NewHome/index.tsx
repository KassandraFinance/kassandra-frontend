import React from 'react'
import Image from 'next/image'

import HeroHome from './HeroHome'
import InvestorsSection from './InvestorsSection'
import WavyLine from '../../components/WavyLine'
import ManagerSection from './ManagerSection'
import DaoSection from './DaoSection'
import KacySection from './KacySection'
import LatestNews from './LatestNews'

import light3 from '../../../public/assets/images/backgroundHome/light-mobile3.png'

import * as S from './styles'

const NewHome = () => {
  return (
    <>
      <HeroHome />

      <S.Container>
        <InvestorsSection />
      </S.Container>

      <S.WavyOneWrapper>
        <S.ImgWrapper>
          <Image src={light3} />
        </S.ImgWrapper>

        <WavyLine color="color1" />
      </S.WavyOneWrapper>

      <S.Container>
        <ManagerSection />
      </S.Container>

      <WavyLine color="color2" />

      <S.Container>
        <DaoSection />

        <KacySection />
      </S.Container>

      <LatestNews />
    </>
  )
}

export default NewHome
