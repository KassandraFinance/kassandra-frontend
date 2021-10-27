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
          <span>To create a fully decentralized organization, with a well-distributed token, we chose to have a big part of the total supply (50%) slowly available through rewards to people that engage and help Kassandra in the early stages.</span>
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
      <S.Link href='https://medium.com/heimdall-research-crypto/the-heimdall-social-index-9595fdfb9ddc' target='_blank' rel="noopener noreferrer">
        <a>Check more info about the $KACY token
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M8.5 16C12.6421 16 16 12.6421 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8.5 11.5L11.5 8.5L8.5 5.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M5.5 8.5H11.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
      </S.Link>
    </>
  )
}

export default TokenDistribution
