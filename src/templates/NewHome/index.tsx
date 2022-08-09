import React from 'react'
import Image from 'next/image'

import Header from '../../components/Header/newHeader'
import HeroHome from './HeroHome'
import InvestorsSection from './InvestorsSection'
import WavyLine from '../../components/WavyLine'
import ManagerSection from './ManagerSection'
import DaoSection from './DaoSection'
import KacySection from './KacySection'
import LatestNews from './LatestNews'
import Contribute from '../TokenHolder/Contribute'

import light3 from '../../../public/assets/images/backgroundHome/light-mobile3.png'
import lightTable5 from '../../../public/assets/images/backgroundHome/light-tablet5.png'
import lightTable6 from '../../../public/assets/images/backgroundHome/light-tablet6.png'
import lightTable7 from '../../../public/assets/images/backgroundHome/light-tablet7.png'

import * as S from './styles'

const NewHome = () => {
  return (
    <S.HomeBackgroundContainer>
      <S.HeaderWrapper>
        <Header />
      </S.HeaderWrapper>

      <HeroHome />

      <S.Container>
        <InvestorsSection />
      </S.Container>

      <S.WavyOneWrapper>
        <S.ImgWrapper>
          <Image src={light3} />
        </S.ImgWrapper>

        <S.ImgTabletWrapper1>
          <Image src={lightTable5} />
        </S.ImgTabletWrapper1>

        <WavyLine color="color1" />
      </S.WavyOneWrapper>

      <S.Container>
        <ManagerSection />
      </S.Container>

      <S.WavyOneWrapper>
        <S.ImgTabletWrapper2>
          <Image src={lightTable6} />
        </S.ImgTabletWrapper2>

        <S.ImgTabletWrapper3>
          <Image src={lightTable7} />
        </S.ImgTabletWrapper3>

        <WavyLine color="color2" />
      </S.WavyOneWrapper>

      <S.Container>
        <DaoSection />

        <KacySection />
      </S.Container>

      <LatestNews />

      <Contribute />
    </S.HomeBackgroundContainer>
  )
}

export default NewHome
