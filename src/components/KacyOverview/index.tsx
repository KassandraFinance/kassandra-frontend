/* eslint-disable prettier/prettier */
import React from 'react'
import Big from 'big.js'
import { useMatomo } from '@datapunt/matomo-tracker-react'

import { BNtoDecimal } from '../../utils/numerals'

import ExternalLink from '../ExternalLink'

import * as S from './styles'

interface IKacyMarketDataProps {
  price: number;
  marketCap: Big;
  supply: Big;
  kacyPercentage: number;
}

interface IKacyOverviewProps {
  kacyMarketData: IKacyMarketDataProps
}

const KacyOverview = ({ kacyMarketData }: IKacyOverviewProps) => {

  const { trackEvent } = useMatomo()

  function clickMatomoEvent(action: string, name: string) {
    trackEvent({
      category: 'kacy-overview',
      action: action,
      name: name
    })
  }

  return (
    <>
      <S.TokenInfoWrapper>
        <S.TitleandIcon>
          <S.Icon src={'/assets/extra/token-distribution-icon.svg'} />
          <h3>$KACY Overview</h3>
        </S.TitleandIcon>
        <S.TokenInfo>
          <S.Values>
            <p>PRICE</p>
            <span>${kacyMarketData.price.toFixed(2)}</span>
          </S.Values>
          <S.Values>
            <p>MARKET CAP</p>
            <span>${BNtoDecimal(kacyMarketData.marketCap, 2, 100, 2)}</span>
          </S.Values>
          <S.Values>
            <p>CIRCULATING SUPPLY</p>
            <span>{BNtoDecimal(kacyMarketData.supply, 2, 100, 2)} KACY</span>
          </S.Values>
          <S.Values>
            <p>TOTAL SUPPLY</p>
            <span>10 000 000</span>
          </S.Values>
        </S.TokenInfo>
      </S.TokenInfoWrapper>
      <S.Link>
        <ExternalLink
          onClick={() => clickMatomoEvent('click-on-link', 'learn-more')}
          hrefLink="https://kassandrafoundation.medium.com/kassandra-dao-token-8bc046d55a00"
          text="Check more info about the $KACY token"
        />
      </S.Link>
    </>
  )
}

export default KacyOverview
