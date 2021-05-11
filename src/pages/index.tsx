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
    </main>
  </div>
  )


export default Home
