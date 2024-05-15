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
          text="Kassandra provides a decentralized system with priority to protect the investors, whitelisted tokens, audited vaults, slowly rebalancing, and maintaining proportionality when adding or removing tokens. Together with ParaSwap, we have built a low slippage system providing seamless portfolio investment without the necessity to start or stop strategies by a manager. Additionally, with a decentralized marketplace for portfolios, you can choose the best portfolio that matches your vision."
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
          text='With an easy-to-use interface, you can manage portfolios by simply choosing the composition and percentage allocation without complications. With Kassandra, you can create incentives to build a community around your portfolio. Splitting your deposit fee with brokers through the "Share & Earn" feature can create this incentive for anyone to earn by sharing your portfolio.'
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
