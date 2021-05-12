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
    </main>
  </div>
  )


export default Home
