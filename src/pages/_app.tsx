import React from 'react'
import { AppProps } from 'next/app'
import { MatomoProvider, createInstance } from '@datapunt/matomo-tracker-react'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../styles/global'
import theme from '../styles/theme'

import { storeWrapper } from '../store'

import Footer from '../components/Footer'
import Toastify from '../components/Toastify'

const matomoUrl = 'https://stats.kassandra.finance'

const instance = createInstance({
  disabled: process.env.NODE_ENV === 'development',
  urlBase: matomoUrl,
  siteId: 4,
  trackerUrl: `${matomoUrl}/api.php`,
  srcUrl: `${matomoUrl}/api.js`,
  configurations: {
    disableCookies: true,
    setRequestMethod: 'POST'
  }
})

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <MatomoProvider value={instance}>
    <ThemeProvider theme={theme}>
      <Head>
        <title>Kassandra</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Toastify />
        <GlobalStyles />
        <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  </MatomoProvider>
)

export default storeWrapper.withRedux(MyApp)

