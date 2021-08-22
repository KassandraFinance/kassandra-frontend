import React from 'react'
import { AppProps } from 'next/app'

// import '../styles/globals.scss'
// import styles from '../styles/app.module.scss'
import GlobalStyles from '../styles/global'
import theme from '../styles/theme'

import { storeWrapper } from "../store"

import Header from '../components/Header'
import Footer from '../components/Footer'
import { ThemeProvider } from 'styled-components'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
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
