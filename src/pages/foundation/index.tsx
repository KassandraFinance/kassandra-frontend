import React from 'react'
import Head from 'next/head'

import Foundation from '../../templates/Foundation'

export default function Index() {
  return (
    <>
      <Head>
        <meta
          property="og:image"
          content="https://kassandra.finance/kacy-og.png"
        />
        <meta property="og:image:width" content="1012" />
        <meta property="og:image:height" content="506" />
        <meta
          property="og:url"
          content="https://kassandra.finance/foundation"
        />

        <meta
          name="description"
          content="DeFi enthusiasts building the future of asset management. Kassandra is a decentralized autonomous organization that governs a structure that allows the creation and managing of tokenized index funds, bringing a new class of investment products to the DeFi investors."
        />

        <title>Kassandra Foundation</title>
      </Head>

      <Foundation />
    </>
  )
}
