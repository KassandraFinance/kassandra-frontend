import Head from 'next/head'

import DAO from '../templates/DAO'

export default function Index() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Kassandra DAO - Shape Kassandra into what you believe in</title>
        <meta
          name="description"
          content="Become a member of the Kassandra Community and lead our future with your own hands by staking $KACY in three different pools for voting."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:url" content="https://kassandra.finance/dao" />
        <meta
          property="og:description"
          content="Become a member of the Kassandra Community and lead our future with your own hands by staking $KACY in three different pools for voting."
        />

        {/* Twitter */}
        <meta property="twitter:url" content="https://kassandra.finance/dao" />
        <meta
          property="twitter:description"
          content="Become a member of the Kassandra Community and lead our future with your own hands by staking $KACY in three different pools for voting."
        />
      </Head>

      <DAO />
    </>
  )
}
