import Head from 'next/head'

import DAO from '../templates/DAO'

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
        <meta property="og:url" content="https://kassandra.finance/dao" />

        <meta
          name="description"
          content="Invest in KACY, earn protocol fees and participate in our governance. Earn rewards and voting power to build, invest and contribute to Kassandra. Help maintain the DAO while gaining a stake in all of our protocol fees."
        />

        <title>Kassandra DAO</title>
      </Head>

      <DAO />
    </>
  )
}
