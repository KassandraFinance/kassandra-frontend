import React from 'react'
import Head from 'next/head'

import Investors from '../../templates/Investors/indext'

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
        <meta property="og:url" content="https://kassandra.finance/investors" />

        <meta
          name="description"
          content="Buy one token to follow strategies that fit you. Take advantage of social trading to increase your diversification. By buying a single token, you delegate funds to trusted managers that will work to improve your gains and reduce your risks."
        />

        <title>Kassandra for Investors</title>
      </Head>
      <Investors />
    </>
  )
}
