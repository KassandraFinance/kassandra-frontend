import React from 'react'
import { AppProps } from 'next/app'
import { MatomoProvider, createInstance } from '@datapunt/matomo-tracker-react'

import '../styles/globals.scss'
import styles from '../styles/app.module.scss'

import { storeWrapper } from "../store"

import Header from '../components/Header'
import Footer from '../components/Footer'

const matomoUrl = 'https://stats.kassandra.finance';

const instance = createInstance({
  disabled: process.env.NODE_ENV === 'development',
  urlBase: matomoUrl,
  siteId: 4,
  trackerUrl: `${matomoUrl}/api.php`,
  srcUrl: `${matomoUrl}/api.js`,
  configurations: {
    disableCookies: true,
    setRequestMethod: 'POST'
  },
})

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <MatomoProvider value={instance}>
    <div className={styles['background-page']}>
      <Header />
      <main className={styles.container}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  </MatomoProvider>
)

export default storeWrapper.withRedux(MyApp)
