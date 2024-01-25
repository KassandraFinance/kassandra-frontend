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
          text="Take advantage of social trading to increase your diversification. By buying a single token, you gain exposure to up to 50 tokens and strategies that can improve your gains and reduce your risks."
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
          text="Kassandra is a DAO asset management platform that allows simplified access to tokenized portfolios, providing the apparatus needed to create and manage tokenized crypto portfolios while connecting these managers to investors eager to diversify their investment."
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
