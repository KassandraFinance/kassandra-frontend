import React from 'react'
import Head from 'next/head'

import Header from '../components/Header'

import styles from '../styles/landingpage.module.scss'

const Home = () => (
  <div className={styles['landing-page']}>
    <Head>
      <title>Kassandra</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap" rel="stylesheet" />
    </Head>
    <main className={styles.container}>
      <Header />
      <section className={styles.hero}>
        <div>
          <h1>Kassandra DAO</h1>
          <div className={styles['h3-desktop']}>
            <h3>The decentralized autonomous organization that governs tokenized data-driven investment funds.</h3>
            <button type="button">View The $HEIM Index</button>
          </div>
        </div>
        <img src="assets/kassandra-500.svg" alt="" />
        <div className={styles['h3-mobile']}>
          <h3>The decentralized autonomous organization that governs tokenized data-driven investment funds.</h3>
          <button type="button">View The $HEIM Index</button>
        </div>
      </section>
      <section className={styles.products}>
        <h1>Products</h1>
        <p>Tokens backed by a basket of assets, managed by autonomous strategies withdata from external data providers</p>
        <div className={styles['heim-container']}>
          <div>gráfico</div>
          <div >
            <h3>$HEIM Socal Score</h3>
            <p>The Social Index $HEIM reflects the performance of a portfolio selected from the most socially active cryptocurrencies in the past 30 days, using Heimdall Social Score data.</p>
            <p>$HEIM offers an easy exposure to the hottest cryptocurrencies in the market.</p>
          </div>
        </div>
        <img className={styles['more-icon']} src="assets/more-icon.svg" alt="" />
        <p className={styles['more-text']}>More coming soon</p>
      </section>
    </main>
  </div>
  )


export default Home
