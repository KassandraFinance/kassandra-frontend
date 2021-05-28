import React from 'react'
import { AppProps } from 'next/app'

import '../styles/globals.scss'
import styles from '../styles/app.module.scss'

import Header from '../components/Header'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className={styles['background-page']}>
      <Header />
      <main className={styles.container}>
        <Component {...pageProps} />
      </main>
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => <Component {...pageProps} />
    </div>
  )
} 

export default MyApp
