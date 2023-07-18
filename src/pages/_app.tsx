import React from 'react'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { AppProps } from 'next/app'
import { MatomoProvider, createInstance } from '@datapunt/matomo-tracker-react'
import { ThemeProvider } from 'styled-components'
import { useRouter } from 'next/router'
import { clarity } from 'react-microsoft-clarity'
import {
  Hydrate,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import GlobalStyles from '../styles/global'
import theme from '../styles/theme'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Toastify from '../components/Toastify'
import { store } from '@/store/store'
import { env } from '@/env.mjs'

const matomoUrl = 'https://stats.kassandra.finance'

const instance = createInstance({
  disabled: env.NODE_ENV === 'development' || env.NEXT_PUBLIC_MASTER !== '1',
  urlBase: matomoUrl,
  siteId: 6,
  trackerUrl: `${matomoUrl}/api.php`,
  srcUrl: `${matomoUrl}/api.js`,
  configurations: {
    setRequestMethod: 'POST'
  }
})

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [queryClient] = React.useState(() => new QueryClient())
  const router = useRouter()

  React.useEffect(() => {
    env.NEXT_PUBLIC_NODE_ENV === 'development'
      ? ''
      : clarity.init(env.NEXT_PUBLIC_CLARITY || '')
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Hydrate state={pageProps.dehydratedState}>
          <ReactQueryDevtools />
          <MatomoProvider value={instance}>
            <ThemeProvider theme={theme}>
              <Head>
                {/* Primary Meta Tags */}
                <meta
                  name="title"
                  content="Kassandra DAO - Tokenized crypto portfolios"
                />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta
                  property="og:title"
                  content="Kassandra DAO - Tokenized crypto portfolios"
                />
                <meta
                  property="og:image"
                  content="https://kassandra.finance/kacy-og.png"
                />
                <meta property="og:site_name" content="Kassandra" />
                <meta property="og:image:width" content="1012" />
                <meta property="og:image:height" content="506" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta
                  property="twitter:title"
                  content="Kassandra DAO - Tokenized crypto portfolios"
                />
                <meta
                  property="twitter:image"
                  content="https://kassandra.finance/kacy-og.png"
                />
                <meta property="twitter:site" content="@dao_kassandra" />

                <link rel="icon" href="/favicon.ico" />
                <link
                  rel="icon"
                  href="https://kassandra.finance/favicon.svg"
                  sizes="any"
                />
              </Head>
              <Toastify />
              <GlobalStyles />
              <Header />
              <Component {...pageProps} />
              {router.pathname !== '/404' && <Footer />}
            </ThemeProvider>
          </MatomoProvider>
        </Hydrate>
      </Provider>
    </QueryClientProvider>
  )
}

export default MyApp
