import React from 'react'

import SectionCard from '../SectionCard'
import HomeHeading from '../HomeHeading'
import DaoCardInfo from '../DaoCardInfo'

import daoImg from '../../../../public/assets/images/dao.png'
import assetsDistributionIcon from '../../../../public/assets/iconGradient/assets-distribution.svg'
import feeCoinIcon from '../../../../public/assets/iconGradient/fee-coin.svg'
import voteIcon from '../../../../public/assets/iconGradient/vote.svg'

import * as S from './styles'

const DaoSection = () => {
  return (
    <S.Container>
      <SectionCard
        number="03"
        title="DAO"
        color="#E843C4"
        subtitle="Invest in KACY, earn protocol fees and participate in our governance"
        text="Earn rewards and voting power to build, invest and contribute to Kassandra. Help maintain the DAO while gaining a stake in all of our protocol fees."
        btnText="Governance 101"
        img={daoImg}
      />

      <HomeHeading
        title="kassandra ecosystem"
        color="#E843C4"
        subTitle="Connecting investors and managers to build smart descentralized ETFs"
        text="Help grow Kassandra with new investment products, keep our protocol healthy with flowing revenue and commit your tokens to the DAO to get voting rights."
      />

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
    </S.Container>
  )
}

export default DaoSection
