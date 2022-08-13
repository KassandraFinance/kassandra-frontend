import Head from 'next/head'

import Managers from '../templates/Managers'

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
        <meta property="og:url" content="https://kassandra.finance/" />

        <meta
          name="description"
          content="Tokenize your portfolio in an one-stop-shop and earn money with it. Become a pillar of decentralized asset management and earn additional income whenever someone invests in your tokenized portfolios. Manage, track, evaluate in one place with no extra fees."
        />

        <title>Kassandra for Managers</title>
      </Head>
      <Managers />
    </>
  )
}
