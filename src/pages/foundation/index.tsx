import Head from 'next/head'

import Foundation from '../../templates/Foundation'

export default function Index() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Kassandra Foundation</title>
        <meta
          name="description"
          content="DeFi enthusiasts building the future of asset management. Kassandra is a decentralized autonomous organization that governs a structure that allows the creation and managing of tokenized crypto portfolios, bringing a new class of investment products to the DeFi investors."
        />

        {/* Open Graph / Facebook */}
        <meta
          property="og:url"
          content="https://kassandra.finance/foundation"
        />
        <meta property="og:title" content="Kassandra DAO" />
        <meta
          property="og:description"
          content="DeFi enthusiasts building the future of asset management. Kassandra is a decentralized autonomous organization that governs a structure that allows the creation and managing of tokenized crypto portfolios, bringing a new class of investment products to the DeFi investors."
        />

        {/* Twitter */}
        <meta
          property="twitter:url"
          content="https://kassandra.finance/foundation"
        />
        <meta
          property="twitter:description"
          content="DeFi enthusiasts building the future of asset management. Kassandra is a decentralized autonomous organization that governs a structure that allows the creation and managing of tokenized crypto portfolios, bringing a new class of investment products to the DeFi investors."
        />
      </Head>

      <Foundation />
    </>
  )
}
