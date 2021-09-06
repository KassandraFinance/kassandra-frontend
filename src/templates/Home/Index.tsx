import React from 'react'
import Link from 'next/link'
import { useMatomo } from '@datapunt/matomo-tracker-react'

import * as S from './styles'

const Home = () => {
  const { trackPageView } = useMatomo()

  // Track page view
  React.useEffect(() => {
    trackPageView({})
  }, [trackPageView])

  return (
    <S.Background>
      <S.Hero>
        <div>
          <h1>Kassandra DAO</h1>
          <div className='h3-desktop'>
            <h3>The decentralized autonomous organization that governs tokenized data-driven investment funds.</h3>
            <S.ButtonContainer>
              <Link href="/heim" >View the $HEIM Index</Link>
              <a
                className="withepaper"
                href="https://drive.google.com/file/d/12jxIMtBVqaY7bMbLmt52Lo0xDFUURZsb/view?usp=sharing"  
                target="_blank" 
                rel="noopener noreferrer"
                >Whitepaper</a>
            </S.ButtonContainer>
          </div>
        </div>
        <img src="assets/kassandra-600.svg" alt="" className="kassandra" />
        <div className="h3-mobile">
          <h3>The decentralized autonomous organization that governs tokenized data-driven investment funds.</h3>
          <S.ButtonContainer>
            <Link href="/heim" >View the $HEIM Index</Link>
            <a
              className="withepaper"
              href="https://drive.google.com/file/d/12jxIMtBVqaY7bMbLmt52Lo0xDFUURZsb/view?usp=sharing"  
              target="_blank" 
              rel="noopener noreferrer"
              >Whitepaper</a>
          </S.ButtonContainer>
        </div>
      </S.Hero>
      <S.Products>
        <h1>Products</h1>
        <p>Tokens backed by a basket of assets, managed by autonomous strategies with data from external data providers</p>
        <div className="heim-container">
          <img src="assets/logo-heim.svg" alt="" width="250" height="250" />
          <div className="heim-grid-left">
            <div className="top-social-index">
              <h3>Top Social Index</h3>
              <a 
                className="arrow-right"
                href="https://medium.com/heimdall-research-crypto/the-heimdall-social-index-9595fdfb9ddc" 
                target="_blank" 
                rel="noopener noreferrer" 
                >
                Check out Heim Index
                <img src="assets/arrow-right.svg" alt="" width="17" height="10" /> 
              </a>
            </div>
            <p className="first-paragraph">The Social Index $HEIM reflects the performance of a portfolio selected from the most socially active cryptocurrencies in the past 30 days, using Heimdall Social Score data.</p>
            <p className="second-paragraph">$HEIM offers an easy exposure to the hottest cryptocurrencies in the market.</p>
          </div>
        </div>
        <img className="more-icon" src="assets/more-icon.svg" alt="" width="24" height="48" />
        <p className="more-text">More coming soon</p>
      </S.Products>
      <S.ClassProducts>
        <h1>A new class of investment products in DeFi</h1>
        <p>Monetary efficient and actively managed decentralized investment baskets</p>
        <ul>
          <li>
            <img src="assets/Icon/permissionless.svg" alt="" width="106" height="148" />
            <h3>Permissionless</h3>
            <p>Invest, transfer and redeem investment products without relying on third-parties</p>
          </li>
          <li>
            <img src="assets/Icon/non-custodial.svg" alt="" width="148" height="148" />
            <h3>Non-custodial</h3>
            <p>Your funds managed by public, secure, and predictable smart-contracts</p>
          </li>
          <li>
            <img src="assets/Icon/actively-managed.svg" alt="" width="122" height="150" />
            <h3>Actively managed</h3>
            <p>Outsource the management of your money to data-driven quantitative models</p>
          </li>
        </ul>
      </S.ClassProducts>
      <S.Token>
        <h1>Be part of the Kassandra ecosystem with $KACY </h1>
        <p>Take the lead and join the first decentralized fund manager through our decentralized governance protocol</p>
        <div className="grid-details">
          <img className="img-token" src="assets/token.svg" alt="" width="116" height="105" />
          <img className="img-token-96" src="assets/token-96.svg" alt="" width="556" height="501" />
          <div>
            <h3>The $KACY Token</h3>
            <p>The protocol governance token responsible for:</p>
            {/* <p>It is the protocol governance token, and is responsible for:</p> */}
            <ul>
              <li>Approving code changes and updates </li>
              <li>Deploying new investment products</li>
              <li>Curating whitelists for investable assets</li>
              <li>Adjusting parameters and fees</li>
            </ul>
            <a href="https://twitter.com/dao_kassandra" target="_blank" rel="noopener noreferrer">Coming soon...</a>
          </div>
        </div>
      </S.Token>
      <S.KassandraSuccess>
        <h1>Earn with the success of the Kassandra products</h1>
        <p>Like traditional fund managers, the $KACY token holders
          benefit directly and indirectly from the investment products
          deployed on Kassandra Protocol</p>
        <div className="successgrid">
          <div className="successitem">
            <img src="assets/group-success-5percent.svg" alt="5%" width={150} height={150} />
            <h2>$KACY Holding Rule</h2>
            <p>To flow value to $KACY token holders, every Kassandra investment product must hold at least 5% of $KACY tokens as part of the portfolio. This ensures that the success of the products will result in the growth of the $KACY token value.</p>
          </div>
          <div className="successitem">
            <img src="assets/group-success-3percent.svg" alt="3%" width={150} height={150} />
            <h2>Redeem Fee</h2>
            <p>A 3% fee is charged whenever investment tokens are redeemed. The fees collected this way are under total governance control and can be used for purchasing and subsequently burn $KACY tokens.</p>
          </div>
          <div className="successitem">
            <img src="assets/group-success-vote.svg" alt="" width={150} height={150} />
            <h2>Vote Lock</h2>
            <p>When voting in governance proposals $KACY holders may choose to lock their tokens for different time periods and earn more voting power, thus making $KACY more scarce and the governance more secure.</p>
          </div>
        </div>
      </S.KassandraSuccess>
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
    </S.Background>
  )
}


export default Home
