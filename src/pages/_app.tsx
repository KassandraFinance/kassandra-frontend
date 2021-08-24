import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import '../styles/globals.scss'
import styles from '../styles/app.module.scss'
import GlobalStyles from '../styles/global'
import theme from '../styles/theme'

import { storeWrapper } from "../store"

import Header from '../components/Header'
import Footer from '../components/Footer'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
      <Head>
        <title>Kassandra</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap" rel="stylesheet" />
    </Head>
  {/* <div className={styles['background-page']}> */}
    <Header />
    {/* <main className={styles.container}> */}
      <GlobalStyles/>
      <Component {...pageProps} />
    {/* </main> */}
    <Footer />
  {/* </div> */}
  </ThemeProvider>
)

export default storeWrapper.withRedux(MyApp)
