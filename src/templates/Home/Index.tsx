import React from 'react'

import styles from './index.module.scss'


export const Home = () => (
  <>
    <section className={styles.hero}>
      <div>
        <h1>Kassandra DAO</h1>
        <div className={styles['h3-desktop']}>
          <h3>The decentralized autonomous organization that governs tokenized data-driven investment funds.</h3>
          <a href="https://twitter.com/dao_kassandra" target="_blank" rel="noopener noreferrer">Coming soon...</a>
        </div>
      </div>
      <img src="assets/kassandra-600.svg" alt=""/>
      <div className={styles['h3-mobile']}>
        <h3>The decentralized autonomous organization that governs tokenized data-driven investment funds.</h3>
        <a href="https://twitter.com/dao_kassandra" target="_blank" rel="noopener noreferrer">Coming soon...</a>
      </div>
    </section>
    <section className={styles.products}>
      <h1>Products</h1>
      <p>Tokens backed by a basket of assets, managed by autonomous strategies with data from external data providers</p>
      <div className={styles['heim-container']}>
        <img src="assets/logo-heim.svg" alt="" />
        <div className={styles['heim-grid-left']}>
          <div className={styles['top-social-index']}>
            <h3>Top Social Index</h3>
            <a href="https://medium.com/heimdall-research-crypto/the-heimdall-social-index-9595fdfb9ddc" target="_blank" rel="noopener noreferrer" className={styles['arrow-right']}>
              Check out Heim Index
              <img src="assets/arrow-right.svg" alt="" />
            </a>
          </div>
          <p className={styles['first-paragraph']}>The Social Index $HEIM reflects the performance of a portfolio selected from the most socially active cryptocurrencies in the past 30 days, using Heimdall Social Score data.</p>
          <p className={styles['second-paragraph']}>$HEIM offers an easy exposure to the hottest cryptocurrencies in the market.</p>
        </div>
      </div>
      <img className={styles['more-icon']} src="assets/more-icon.svg" alt="" />
      <p className={styles['more-text']}>More coming soon</p>
    </section>
    <section className={styles['class-products']}>
      <h1>A new class of investment products in DeFi</h1>
      <p>Monetary efficient and actively managed decentralized investment baskets</p>
      <ul>
        <li>
          <img src="assets/Icon/permissionless.svg" alt="Permissionless" />
          <h3>Permissionless</h3>
          <p>Invest, transfer and redeem investment products without relying on third-parties</p>
        </li>
        <li>
          <img src="assets/Icon/non-custodial.svg" alt="Non-custodial" />
          <h3>Non-custodial</h3>
          <p>Your funds managed by public, secure, and predictable smart-contracts</p>
        </li>
        <li>
          <img src="assets/Icon/actively-managed.svg" alt="Actively managed" />
          <h3>Actively managed</h3>
          <p>Outsource the management of your money to data-driven quantitative models</p>
        </li>
      </ul>
    </section>
    <section className={styles.token}>
      <h1>Be part of the Kassandra ecosystem with $KACY </h1>
      <p>Take the lead and join the first decentralized fund manager through our decentralized governance protocol</p>
      <div className={styles['grid-details']}>
        <img className={styles['img-token']} src="assets/token.svg" alt="" />
        <img className={styles['img-token-96']} src="assets/token-96.svg" alt="" />
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
    </section>
    <section className={styles['kassandra-success']}>
      <h1>Earn with the success of the Kassandra products</h1>
      <p>Like traditional fund managers, the $KACY token holders
        benefit directly and indirectly from the investment products
        deployed on Kassandra Protocol</p>
      <img className={styles['group-success-desktop']} src="assets/group-success.svg" alt="" />
      <img className={styles['group-success-mobile']} src="assets/group-success-mobile.svg" alt="" />
    </section>
    <section className={styles['kassandra-architecture']}>
      <h1>How it works?</h1>
      <p>Our tokenized investment baskets are Automated Market Maker pools for multiple assets, with dynamically adjustable weights</p>
      <img className={styles['img-kassandra-architecture']} src="assets/kassandra-architecture.svg" alt="" />
      <div className={styles['grid-paragraph']}>
        <div>
          <p>A Smart Indexed Pool works essentially as an Automated Market Maker (AMM) for multiple assets, but with dynamically adjustable weights, that can be changed using external data.</p>
          <p>This approach removes the need for rebalancing operations by creating small arbitrage opportunities that external users can profit from and ensure that the desired proportions of each asset in the investment basket are maintained.</p>
        </div>
        <div>
          <p>By making a monetary deposit in a SIP, users receives a deposit representative token, namely Index Token, that represents a fractional ownership of assets in the pool. </p>
          <p>The assets managed by the pool will have adjusted participations changed by the data provider, and at any time, the user can return his Index Token to the protocol to redeem his investment, which will be evaluated by the total value of the assets managed by the pool at the time of the redemption - working similar to a traditional market ETF.</p>
        </div>
      </div>
    </section>
    <section className={styles.supporters}>
      <h1>Meet our partners and supporters</h1>
      <p>Kassandra is built from a collaborative effort</p>
      <div className={styles['grid-supporters']}>
        <a href="http://heimdall.land" target="_blank" rel="noopener noreferrer">
          <img src="assets/heimdall.svg" alt="" />
        </a>
        <a href="https://api3.org/" target="_blank" rel="noopener noreferrer">
          <img src="assets/api3.webp" alt="" style={{maxWidth: '100px'}} />
        </a>
        <a href="https://lemonadefi.com/" target="_blank" rel="noopener noreferrer">
          <img src="assets/lemonade.svg" alt="" />
        </a>
        <a href="https://jigstack.org/" target="_blank" rel="noopener noreferrer">
          <img src="assets/jigstack.svg" alt="" />
        </a>
      </div>
    </section>
  </>
)


export default Home
