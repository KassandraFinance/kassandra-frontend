import React from 'react'
import Big from 'big.js'
import useSWR from 'swr'
import { useSelector, RootStateOrAny } from 'react-redux'
import { useMatomo } from '@datapunt/matomo-tracker-react'

import { BNtoDecimal } from '../../utils/numerals'

import ExternalLink from '../ExternalLink'

import * as S from './styles'

const URL_API =
  process.env.NEXT_PUBLIC_MASTER === '1'
    ? 'https://alpha.kassandra.finance/api/overview'
    : 'http://localhost:3000/api/overview'

const KacyOverview = () => {
  const [kacyPrice, setKacyPrice] = React.useState<Big>(Big(0))
  const [circulatingSupply, setCirculatingSupply] = React.useState<Big>(Big(0))

  const { chainId } = useSelector((state: RootStateOrAny) => state)
  const { data } = useSWR(URL_API)
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
      setKacyPrice(Big(data.kacyPrice))
      setCirculatingSupply(Big(data.supply))
    }
  }, [chainId, data])

  const marketCap = new Big(circulatingSupply).mul(kacyPrice)

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
            <span>${kacyPrice.toFixed(2)}</span>
          </S.Values>
          <S.Values>
            <p>MARKET CAP</p>
            <span>${BNtoDecimal(marketCap, 2, 100, 2)}</span>
          </S.Values>
          <S.Values>
            <p>CIRCULATING SUPPLY</p>
            <span>{BNtoDecimal(circulatingSupply, 2, 100, 2)} KACY</span>
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
