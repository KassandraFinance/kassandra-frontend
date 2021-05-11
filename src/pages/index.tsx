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
          <h3>The decentralized autonomous organization that governs tokenized data-driven investment funds.</h3>
          <button type="button">View The $HEIM Index</button>
        </div>
        <img src="assets/kassandra.png" alt="" />
      </section>
    </main>
  </div>
  )


export default Home
