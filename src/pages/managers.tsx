import Head from 'next/head'

import Managers from '../templates/Managers'

export default function Index() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Kassandra for Managers</title>
        <meta
          name="description"
          content="Tokenize your portfolio in an one-stop-shop and earn money with it. Become a pillar of decentralized asset management and earn additional income whenever someone invests in your portfolios. Manage, track, and evaluate in one place with no extra fees."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:url" content="https://kassandra.finance/managers" />
        <meta
          property="og:description"
          content="Tokenize your portfolio in an one-stop-shop and earn money with it. Become a pillar of decentralized asset management and earn additional income whenever someone invests in your portfolios. Manage, track, and evaluate in one place with no extra fees."
        />

        {/* Twitter */}
        <meta
          property="twitter:url"
          content="https://kassandra.finance/managers"
        />
        <meta
          property="twitter:description"
          content="Tokenize your portfolio in an one-stop-shop and earn money with it. Become a pillar of decentralized asset management and earn additional income whenever someone invests in your portfolios. Manage, track, and evaluate in one place with no extra fees."
        />
      </Head>
      <Managers />
    </>
  )
}
