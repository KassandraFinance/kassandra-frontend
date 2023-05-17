import Head from 'next/head'

import DAO from '../templates/DAO'

export default function Index() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Kassandra DAO</title>
        <meta
          name="description"
          content="Invest in KACY, earn protocol fees and participate in our governance. Earn rewards and voting power to propose, vote and contribute to Kassandra. Help the community flourish and maintain the DAO while gaining a share in all of our protocol fees."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:url" content="https://kassandra.finance/dao" />
        <meta
          property="og:description"
          content="Invest in KACY, earn protocol fees and participate in our governance. Earn rewards and voting power to propose, vote and contribute to Kassandra. Help the community flourish and maintain the DAO while gaining a share in all of our protocol fees."
        />

        {/* Twitter */}
        <meta property="twitter:url" content="https://kassandra.finance/dao" />
        <meta
          property="twitter:description"
          content="Invest in KACY, earn protocol fees and participate in our governance. Earn rewards and voting power to propose, vote and contribute to Kassandra. Help the community flourish and maintain the DAO while gaining a share in all of our protocol fees."
        />
      </Head>

      <DAO />
    </>
  )
}
