import React from 'react'

import SectionCard from '../SectionCard'

import investorImg from '../../../../public/assets/images/investor.png'
import kassandraHeadImg from '../../../../public/assets/images/kassandra-head.png'
import FadeInHorizontal from '@/components/Animations/FadeInHorizontal'

import * as S from './styles'

const InvestorsAndManagerSection = () => {
  return (
    <S.Container>
      <FadeInHorizontal threshold={0.5}>
        <SectionCard
          number="01"
          title="investors"
          color="#FFBF00"
          subtitle="For Investors"
          text="Kassandra prioritizes investor protection through decentralized systems, featuring whitelisted tokens, audited vaults, and gradual rebalancing. Teamed with ParaSwap, we offer a low slippage system for seamless portfolio investment, eliminating the need for manual strategy adjustments. Our decentralized portfolio marketplace enables you to select the ideal portfolio aligning with your vision."
          img={investorImg}
          alt="A person from the back"
          links={{
            getStarted: 'https://app.kassandra.finance/',
            learnMore: '/investors'
          }}
        />
      </FadeInHorizontal>

      <FadeInHorizontal threshold={0.5} invert>
        <SectionCard
          number="02"
          title="Managers"
          color="#FFBF00"
          subtitle="For Managers"
          text='With an easy-to-use interface, you can manage portfolios by simply choosing the composition and percentage allocation without complications. With Kassandra, you can create incentives to build a community around your portfolio, by splitting your deposit fee with brokers through our "Share & Earn" feature'
          img={kassandraHeadImg}
          alt="A person from the back"
          links={{
            getStarted: 'https://app.kassandra.finance/manage',
            learnMore: '/managers'
          }}
          reverseLayout
        />
      </FadeInHorizontal>
    </S.Container>
  )
}

export default InvestorsAndManagerSection
