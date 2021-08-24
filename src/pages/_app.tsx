import React from 'react'
import { AppProps } from 'next/app'

import '../styles/globals.scss'
import styles from '../styles/app.module.scss'

import { storeWrapper } from "../store"

import Header from '../components/Header'
import Footer from '../components/Footer'
import Toastify from '../components/Toastify'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <div className={styles['background-page']}>
    <Toastify />
    <Header />
    <main className={styles.container}>
      <Component {...pageProps} />
    </main>
    <Footer />
  </div>
)

export default storeWrapper.withRedux(MyApp)
