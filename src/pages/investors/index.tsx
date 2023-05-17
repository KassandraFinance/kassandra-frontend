import React from 'react'
import Head from 'next/head'

import Investors from '../../templates/Investors/indext'

export default function Index() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Kassandra for Investors</title>
        <meta
          name="description"
          content="Buy one token to follow strategies that fit you. Take advantage of social trading to increase your diversification. By buying a single token, you delegate funds to trusted managers that will work to improve your gains and reduce your risks."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:url" content="https://kassandra.finance/investors" />
        <meta
          property="og:description"
          content="Buy one token to follow strategies that fit you. Take advantage of social trading to increase your diversification. By buying a single token, you delegate funds to trusted managers that will work to improve your gains and reduce your risks."
        />

        {/* Twitter */}
        <meta
          property="twitter:url"
          content="https://kassandra.finance/investors"
        />
        <meta
          property="twitter:description"
          content="Buy one token to follow strategies that fit you. Take advantage of social trading to increase your diversification. By buying a single token, you delegate funds to trusted managers that will work to improve your gains and reduce your risks."
        />
      </Head>

      <Investors />
    </>
  )
}
