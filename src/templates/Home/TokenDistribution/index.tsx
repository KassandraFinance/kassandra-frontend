import React from 'react'
import { useMatomo } from '@datapunt/matomo-tracker-react'

import ModalSocial from '../../../components/ModalSocial'

import * as S from './styles'
import Button from '../../../components/Button'

const TokenDistribution = () => {
  const { trackEvent } = useMatomo()

  function clickMatomoEvent(action: string, name: string) {
    trackEvent({
      category: 'kassandra-page',
      action: action,
      name: name
    })
  }

  return (
    <>
      <S.Intro>
        <S.IconContainer>
          <S.IconWrapper>
            <img src="assets/tokenDistributionIcon.svg" alt="" />
          </S.IconWrapper>
        </S.IconContainer>
        <h1>Token Distribution</h1>
        <S.Divider />
      </S.Intro>
      <S.Grid>
        <img src="assets/TokenChart.svg" alt="" />
        <S.TextWrapper>
          <h1>Fair and community driven token distribuition</h1>
          <span>
            To create a fully decentralized organization, with a
            well-distributed token, we chose to have a big part of the total
            supply (50%) slowly available through rewards to people that engage
            and help Kassandra in the early stages.
          </span>
        </S.TextWrapper>
      </S.Grid>
    </>
  )
}

export default TokenDistribution
