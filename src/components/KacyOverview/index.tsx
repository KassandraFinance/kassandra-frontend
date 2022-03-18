/* eslint-disable prettier/prettier */
import React from 'react'
import Big from 'big.js'
import useSWR from 'swr'
import { useSelector, RootStateOrAny } from 'react-redux'
import { useMatomo } from '@datapunt/matomo-tracker-react'

import { BNtoDecimal } from '../../utils/numerals'

import ExternalLink from '../ExternalLink'

import * as S from './styles'

const URL_API: { [key: number | string]: string } = {
  1: 'https://kassandra.finance/api/overview',
  2: 'https://alpha.kassandra.finance/api/overview',
  3: 'https://demo.kassandra.finance/api/overview',
  4: 'http://localhost:3000/api/overview'
}

interface IKacyMarketDataProps {
  price: number;
  marketCap: Big;
  supply: Big;
}

const KacyOverview = () => {
  const [kacyMarketData, setKacyMarketData] = React.useState<IKacyMarketDataProps>({
      price: 0,
      marketCap: Big(0),
      supply: Big(0)
    })

  const { chainId } = useSelector((state: RootStateOrAny) => state)
  const { data } = useSWR(URL_API[process.env.NEXT_PUBLIC_URL_API || 4])
  const { trackEvent } = useMatomo()

  function clickMatomoEvent(action: string, name: string) {
    trackEvent({
      category: 'kacy-overview',
      action: action,
      name: name
    })
  }

  React.useEffect(() => {
    if (data) {
      setKacyMarketData({
        price: data.kacyPrice,
        marketCap: Big(data.marketCap),
        supply: Big(data.supply)
      })
    }
  }, [chainId, data])

  return (
    <>
      <S.TokenInfoWrapper>
        <S.TitleandIcon>
          <S.Icon src={'/assets/token-distribution-icon.svg'} />
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
