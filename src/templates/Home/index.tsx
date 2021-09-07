import React from 'react'
import { useMatomo } from '@datapunt/matomo-tracker-react'

import Hero from './Hero'
import Products from './Products'
import ClassProducts from './ClassProducts'
import Token from './Token'
import KassandraSuccess from './KassandraSuccess'

import * as S from './styles'

const Home = () => {
  const { trackPageView } = useMatomo()

  // Track page view
  React.useEffect(() => {
    trackPageView({})
  }, [trackPageView])

  return (
    <>
      <Hero />
      <Products />
      <ClassProducts />
      <Token />
      <KassandraSuccess />
      <S.KassandraArchitecture>
        <h1>How it works?</h1>
        <p>Our tokenized investment baskets are Automated Market Maker pools for multiple assets, with dynamically adjustable weights</p>
        <img className="img-kassandra-architecture" src="assets/kassandra-architecture.svg" width="1262" height="494"
          alt="A smart pool contains the assets the $HEIM token represents, users can mint and redeeem this token to invest in the strategy. Meanwhile arbitrageurs swap tokens in the pool forcing it to move towards the strategy that uses social data from Heimdall. This pool and all future pools will be governed by the Kassandra Decentralized Autonomous Organization."
        />
        <div className="grid-paragraph">
          <div>
            <p>A Smart Indexed Pool works essentially as an Automated Market Maker (AMM) for multiple assets, but with dynamically adjustable weights, that can be changed using external data.</p>
            <p>This approach removes the need for rebalancing operations by creating small arbitrage opportunities that external users can profit from and ensure that the desired proportions of each asset in the investment basket are maintained.</p>
          </div>
          <div>
            <p>By making a monetary deposit in a SIP, users receives a deposit representative token, namely Index Token, that represents a fractional ownership of assets in the pool. </p>
            <p>The assets managed by the pool will have adjusted participations changed by the data provider, and at any time, the user can return his Index Token to the protocol to redeem his investment, which will be evaluated by the total value of the assets managed by the pool at the time of the redemption - working similar to a traditional market ETF.</p>
          </div>
        </div>
      </S.KassandraArchitecture>
      <S.Supporters>
        <h1>Meet our partners and supporters</h1>
        <p>Kassandra is built from a collaborative effort</p>
        <div className="grid-supporters">
          <a href="http://heimdall.land" target="_blank" rel="noopener noreferrer">
            <img src="assets/heimdall.svg" alt="Heimdall" width="165" height="33" />
          </a>
          <a href="https://api3.org/" target="_blank" rel="noopener noreferrer">
            <img src="assets/api3.svg" alt="API3" width="116" height="36" />
          </a>
          <a href="https://lemonadefi.com/" target="_blank" rel="noopener noreferrer">
            <img src="assets/lemonade.svg" alt="Lemonade" width="174" height="48" />
          </a>
          <a href="https://jigstack.org/" target="_blank" rel="noopener noreferrer">
            <img src="assets/jigstack.svg" alt="Jigstack" width="286" height="74" />
          </a>
        </div>
      </S.Supporters>
    </>
  )
}


export default Home
