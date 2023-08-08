import Head from 'next/head'

import Foundation from '../../templates/Foundation'

export default function Index() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>
          Kassandra Foundation - Building the future of decentralized asset
          management
        </title>
        <meta
          name="description"
          content="Kassandra is a DeFi DAO that governs a protocol enabling the creation and management of tokenized crypto portfolios, bringing a new class of products to managers and investors."
        />

        {/* Open Graph / Facebook */}
        <meta
          property="og:url"
          content="https://kassandra.finance/foundation"
        />
        <meta property="og:title" content="Kassandra DAO" />
        <meta
          property="og:description"
          content="Kassandra is a DeFi DAO that governs a protocol enabling the creation and management of tokenized crypto portfolios, bringing a new class of products to managers and investors."
        />

        {/* Twitter */}
        <meta
          property="twitter:url"
          content="https://kassandra.finance/foundation"
        />
        <meta
          property="twitter:description"
          content="Kassandra is a DeFi DAO that governs a protocol enabling the creation and management of tokenized crypto portfolios, bringing a new class of products to managers and investors."
        />
      </Head>

      <Foundation />
    </>
  )
}
