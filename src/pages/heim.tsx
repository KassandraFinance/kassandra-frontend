import React from 'react'
import Head from 'next/head'

import Heim from '../templates/Heim'

export default function Index() {
  return (
    <>
      <Head>
        <title>Kassandra $HEIM Index</title>
        <meta
          name="description"
          content="A self-managed portfolio to track the cryptocurrencies with the most solid and engaged communities"
        />
        <link
          rel="icon"
          href="https://kassandra.finance/assets/HeimIcon.svg"
          sizes="any"
        />
        <meta property="og:site_name" content="Kassandra" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kassandra.finance/heim" />
        <meta property="og:title" content="Kassandra $HEIM Index" />
        <meta
          property="og:image"
          content="https://kassandra.finance/heim-og.png"
        />
        <meta property="og:image:width" content="1012" />
        <meta property="og:image:height" content="506" />
        <meta
          property="og:image:alt"
          content="The HEIM Social Index - Exposure to the hottest cryptocurrencies in the market"
        />
        <meta
          property="og:image"
          content="https://kassandra.finance/assets/HEIMIcon.svg"
        />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:alt" content="$HEIM" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@HeimdallLand" />
        <meta name="twitter:title" content="Kassandra $HEIM Index" />
        <meta
          name="twitter:image"
          content="https://kassandra.finance/heim-og.png"
        />
        <meta
          name="twitter:image:alt"
          content="The HEIM Social Index - Exposure to the hottest cryptocurrencies in the market"
        />
      </Head>
      <Heim />
    </>
  )
}
