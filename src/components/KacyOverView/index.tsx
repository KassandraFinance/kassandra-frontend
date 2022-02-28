import React from 'react'
import { useSelector, RootStateOrAny } from 'react-redux'
import { useMatomo } from '@datapunt/matomo-tracker-react'

import Big from 'big.js'
import { BNtoDecimal } from '../../utils/numerals'

import ExternalLink from '../../components/ExternalLink'

import * as S from './styles'

const KacyOverview = () => {
  const [kacyPrice, setKacyPrice] = React.useState<Big>(Big(0))
  const [circulatingSupply, setCirculatingSupply] = React.useState<Big>(Big(0))

  const { chainId } = useSelector((state: RootStateOrAny) => state)
  const { trackEvent } = useMatomo()

  function clickMatomoEvent(action: string, name: string) {
    trackEvent({
      category: 'kacy-overview',
      action: action,
      name: name
    })
  }

  async function getKacyInUsd() {
    const url =
      process.env.NEXT_PUBLIC_URL_API || 'http://localhost:3000/api/overview'

    const response = await fetch(url)
    const data = await response.json()

    if (!data.kacyPrice) return

    const kacyInDollar = data.kacyPrice
    const circulatingSupply = data.supply

    setKacyPrice(Big(kacyInDollar))
    setCirculatingSupply(Big(circulatingSupply))
  }

  React.useEffect(() => {
    getKacyInUsd()

    const interval = setInterval(() => {
      getKacyInUsd()
    }, 10000)

    return () => clearInterval(interval)
  }, [chainId])

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
