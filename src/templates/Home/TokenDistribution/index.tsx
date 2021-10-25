import React from 'react'
import { useMatomo } from '@datapunt/matomo-tracker-react'

import ModalSocial from '../../../components/ModalSocial'

import * as S from './styles'
import Button from '../../../components/Button'

const TokenDistribution = () => {

  const { trackEvent } = useMatomo();

  function clickMatomoEvent(action: string, name: string) {
    trackEvent({
      category: "kassandra-page",
      action: action,
      name: name,
    });
  }

  return (
    <S.Container>
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
          <h1>Lorem ipsum dolor sit amet</h1>
          <span>The distribution will occur in a fragmented way, subject to various locks and vesting periods, to assert the decentralization of the organization and community growth.</span>
        </S.TextWrapper>
      </S.Grid>
      <S.TokenInfoWrapper>
        <S.TokenInfo>
          <S.Values>
            <p>PRICE</p>
            <span>$12,95923</span>
          </S.Values>
          <S.Values>
            <p>MARKET CAP</p>
            <span>$12,95923</span>
          </S.Values>
          <S.Values>
            <p>CIRCULATING SUPPLY</p>
            <span>$12,95923</span>
          </S.Values>
          <S.Values>
            <p>TOTAL SUPPLY</p>
            <span>$12,95923</span>
          </S.Values>
        </S.TokenInfo>
      </S.TokenInfoWrapper>
      <S.Link>
        <p>Check more info about the $KACY token</p>
        <img src="assets/arrow-circle.png" alt="" />
      </S.Link>
    </S.Container>
  )
}

export default TokenDistribution
