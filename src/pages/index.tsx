import Head from 'next/head'

import Home from '../templates/Home'

export default function home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Manage, tokenized
          investment funds effortlessly"
        />
        <meta
          property="og:image"
          content="https://kassandra.finance/kacy-og.png"
        />
        <meta property="og:image:width" content="1012" />
        <meta property="og:image:height" content="506" />
        <meta property="og:url" content="https://kassandra.finance/" />

        <meta
          name="description"
          content="Create, Manage and invest in tokenized investment funds effortlessly."
        />

        <title>Kassandra Finance</title>
      </Head>

      <Home />
    </>
  )
}
