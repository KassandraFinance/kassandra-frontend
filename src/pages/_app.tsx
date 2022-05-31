import React from 'react'
import { AppProps } from 'next/app'
import { MatomoProvider, createInstance } from '@datapunt/matomo-tracker-react'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { useRouter } from 'next/router'

import GlobalStyles from '../styles/global'
import theme from '../styles/theme'

import { storeWrapper } from '../store'

import Footer from '../components/Footer'
import Toastify from '../components/Toastify'

const matomoUrl = 'https://stats.kassandra.finance'

const instance = createInstance({
  disabled: process.env.NODE_ENV === 'development' || process.env.NEXT_PUBLIC_MASTER !== '1',
  urlBase: matomoUrl,
  siteId: 4,
  trackerUrl: `${matomoUrl}/api.php`,
  srcUrl: `${matomoUrl}/api.js`,
  configurations: {
    setRequestMethod: 'POST'
  }
})

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()
  const pathName = router.pathname

  return (
    <MatomoProvider value={instance}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Kassandra</title>
          <meta
            name="description"
            content="Tokenized data-driven investment funds"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&amp;display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="icon"
            href="https://kassandra.finance/favicon.svg"
            sizes="any"
          />
          <meta property="og:site_name" content="Kassandra" />
          <meta property="og:type" content="website" />
          {/* <meta property="og:url" content="https://kassandra.finance/" /> */}
          <meta property="og:title" content="Kassandra - Decentralized Funds" />
          {/* <meta
            property="og:image:alt"
            content="Welcome to Kassandra DAO - Tokenized data-driven investment funds"
          />
          <meta
            property="og:image"
            content="https://kassandra.finance/favicon.svg"
          />
          <meta property="og:image:width" content="300" />
          <meta property="og:image:height" content="300" />
          <meta property="og:image:alt" content="Kassandra" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@dao_kassandra" />
          <meta name="twitter:title" content="Kassandra" />
          <meta
            name="twitter:image"
            content="https://kassandra.finance/kacy-og.png"
          />
          <meta
            name="twitter:image:alt"
            content="Welcome to Kassandra DAO - Tokenized data-driven investment funds"
          /> */}
        </Head>
        <Toastify />
        <GlobalStyles
          selectBackground={
            pathName === '/' ? false : pathName === '/about' ? false : true
          }
        />
        <Component {...pageProps} />
        {router.pathname !== '/404' && <Footer />}
      </ThemeProvider>
    </MatomoProvider>
  )
}

export default storeWrapper.withRedux(MyApp)
