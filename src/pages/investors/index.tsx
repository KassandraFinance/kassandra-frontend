import React from 'react'
import Head from 'next/head'

import Investors from '../../templates/Investors/indext'

export default function Index() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>
          Kassandra for Investors - Diversify your crypto portfolio through
          managed pools
        </title>
        <meta
          name="description"
          content="Investing with Kassandra grants you exposure to up to 50 different tokens curated in multiple tokenized crypto portfolios."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:url" content="https://kassandra.finance/investors" />
        <meta
          property="og:description"
          content="Investing with Kassandra grants you exposure to up to 50 different tokens curated in multiple tokenized crypto portfolios."
        />

        {/* Twitter */}
        <meta
          property="twitter:url"
          content="https://kassandra.finance/investors"
        />
        <meta
          property="twitter:description"
          content="Investing with Kassandra grants you exposure to up to 50 different tokens curated in multiple tokenized crypto portfolios."
        />
      </Head>

      <Investors />
    </>
  )
}
