import Head from 'next/head'

import Managers from '../templates/Managers'

export default function Index() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>
          Kassandra for Managers - Create your own tokenized crypto portfolio
        </title>
        <meta
          name="description"
          content="Start your own investment pool with tokenized crypto portfolios in an intuitive interface made by traders for traders."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:url" content="https://kassandra.finance/managers" />
        <meta
          property="og:description"
          content="Start your own investment pool with tokenized crypto portfolios in an intuitive interface made by traders for traders."
        />

        {/* Twitter */}
        <meta
          property="twitter:url"
          content="https://kassandra.finance/managers"
        />
        <meta
          property="twitter:description"
          content="Start your own investment pool with tokenized crypto portfolios in an intuitive interface made by traders for traders."
        />
      </Head>
      <Managers />
    </>
  )
}
