import React from 'react'

import * as S from './styles'

const HowItWorks = () => {
  return (
    <S.Container>
      <S.Divider />
      <S.Title>$KACY Tokenomics</S.Title>
      <S.ScheduleGraphWrapper>
        <S.ScheduleTitle>
          <S.TitleandIcon>
            <S.Icon src="/assets/iconbar.svg" />
            <h3>Release schedule</h3>
          </S.TitleandIcon>
        </S.ScheduleTitle>
        <S.ScheduleGraph>
          <img
            src="assets/tokenomics-chart.svg"
            alt="We'll reach the maximum supply in 3 years. Private and seed sale investor will have their funds locked for 3 months and then will gradually receive their share in the next 9 months. The team share is also locked for 3 months but will gradually receive their share in the next 18 months."
          />
        </S.ScheduleGraph>
        <S.ScheduleGraphMobile>
          <img
            src="assets/tokenomics-chart-mobile.svg"
            alt="We'll reach the maximum supply in 3 years. Private and seed sale investor will have their funds locked for 3 months and then will gradually receive their share in the next 9 months. The team share is also locked for 3 months but will gradually receive their share in the next 18 months."
          />
        </S.ScheduleGraphMobile>
      </S.ScheduleGraphWrapper>
      <S.DistributionGraphWrapper>
        <S.DistributionTitle>
          <S.TitleandIcon>
            <S.Icon src="/assets/about-distribution-icon.svg" />
            <h3>Distribuition</h3>
          </S.TitleandIcon>
        </S.DistributionTitle>
      </S.DistributionGraphWrapper>
      <S.DistributionChart>
        <img
          src="assets/distribution-chart.svg"
          alt="46.5% through rewards, 20% as reserves to the Kassandra Foundation, 12.5% to the development team, 10% through private sales, 5% through seed sales, 5% through public sales and 1% through an Initial Liquidity Offering (ILO)."
        />
        <S.DistributionText>
          <h1>Fair and community driven token distribution</h1>
          <p>
            To create a fully decentralized organization, with a
            well-distributed token, we chose to have a big part of the total
            supply (46.5%) slowly available through rewards to people that
            engage and help Kassandra in the early stages.
          </p>
        </S.DistributionText>
      </S.DistributionChart>
    </S.Container>
  )
}

export default HowItWorks
