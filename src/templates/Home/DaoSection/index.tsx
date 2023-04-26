import React from 'react'
import Image from 'next/image'

import SectionCard from '../SectionCard'
import HomeHeading from '../HomeHeading'
import DaoCardInfo from '../DaoCardInfo'
import FadeIn from '../../../components/Animations/FadeIn'

import daoImg from '../../../../public/assets/images/dao.png'
import assetsDistributionIcon from '../../../../public/assets/iconGradient/assets-distribution.svg'
import feeCoinIcon from '../../../../public/assets/iconGradient/fee-coin.svg'
import voteIcon from '../../../../public/assets/iconGradient/vote.svg'
import light5 from '../../../../public/assets/images/backgroundHome/light-mobile5.png'
import lightTable8 from '../../../../public/assets/images/backgroundHome/light-tablet8.png'
import lightTable9 from '../../../../public/assets/images/backgroundHome/light-tablet9.png'

import * as S from './styles'

const DaoSection = () => {
  return (
    <S.Container>
      <S.ImgWrapper1>
        <Image src={light5} />
      </S.ImgWrapper1>

      <S.ImgWrapper2>
        <Image src={light5} />
      </S.ImgWrapper2>

      <S.ImgTabletWrapper1>
        <Image src={lightTable8} />
      </S.ImgTabletWrapper1>

      <S.ImgTabletWrapper2>
        <Image src={lightTable9} />
      </S.ImgTabletWrapper2>

      <SectionCard
        number="03"
        title="DAO"
        color="#E843C4"
        subtitle="Get KACY and participate in our governance to build the future"
        text="Acquire voting power to build, invest and contribute to Kassandra. Help maintain the DAO and join us in the future of decentralized asset management."
        btnText="Governance 101"
        link="/dao"
        img={daoImg}
      />

      {/*
        <FadeIn threshold={0.5}>
          <HomeHeading
            title="kassandra ecosystem"
            color="#E843C4"
            subTitle="Connecting investors and managers to build decentralized ETFs"
            text="Help Kassandra grow: Stake your tokens to get voting rights, help with new investment products and keep the protocol healthy."
          />
        </FadeIn>

        <FadeIn threshold={0.5}>
          <S.DaoCardContainer>
            <DaoCardInfo
              icon={assetsDistributionIcon}
              title="5% Holding Rule"
              color="#FFBF00"
              subtilte="Growing KACY’s value"
              text="Every new investment product on Kassandra must hold at least 5% of KACY tokens as part of its portfolio."
            />

            <S.Line />

            <DaoCardInfo
              icon={feeCoinIcon}
              title="3% redeem fee"
              color="#E843C4"
              subtilte="DAO Flowing revenue"
              text="A 3% fee is charged when investment tokens are redeemed to aid the DAO's innovation and development fund."
            />

            <S.Line />

            <DaoCardInfo
              icon={voteIcon}
              title="vote lock"
              color="#26DBDB"
              subtilte="Making KACY scarce"
              text="To vote on proposals, holders choose to lock tokens for distinct time periods to earn more voting power."
            />
          </S.DaoCardContainer>
        </FadeIn>
      */}
    </S.Container>
  )
}

export default DaoSection
