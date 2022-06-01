import React from 'react'
import Image from 'next/image'
import { useMatomo } from '@datapunt/matomo-tracker-react'

import imageCalc from '../../../../public/assets/images/image-calc.png'

import * as S from './styles'

const TricryptoDescription = () => {
  const { trackEvent } = useMatomo()

  function matomoEvent(action: string, name: string) {
    trackEvent({
      category: 'summary-invest',
      action,
      name
    })
  }

  return (
    <>
      <p>
        The Kassandra 3Crypto Index (#K3C) tracks the performance of a portfolio
        composed of the most consolidated cryptocurrencies in the market,
        namely, BTC, ETH and USDC. Its weights will remain equal, with a 5%
        stake in $KACY. The portfolio is a SIP (Smart Index Pool) and is
        rebalanced by arbitrageurs just like any liquidity pool. The index is by
        its own token, #K3C, allowing investors to buy the index by purchasing
        the token, just like an ETF.
      </p>

      <h2>Goal</h2>
      <p>
        Kassandra 3Crypto Index unites the most prominent crypto projects up and
        running in the market: Bitcoin and Ethereum. In addition, it also holds
        a fair amount of stablecoins allocated in farming pools which, when
        compared to the risks and gains of TradFi or even HODL, yield far better
        results.
      </p>
      <p>
        While Bitcoin and Ethereum do not have the most exciting yield farming
        opportunities, stables usually do. You&apos;ll constantly be using part
        of your stable yields to purchase more ETH and BTC. If you want to
        maximize compounding gains without having to do it every few days, stick
        it in YieldYak and let them do their autocompounding magic!
      </p>

      <h2>Index Value</h2>
      <p>The value of the index is given by:</p>
      <Image
        src={imageCalc}
        alt="The sum, for each token, of the token balance times its price divided by the index divisor"
      />
    </>
  )
}

export default TricryptoDescription
