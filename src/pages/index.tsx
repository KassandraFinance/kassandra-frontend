import Head from 'next/head'

import NewHome from '../templates/NewHome'

export default function home() {
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
        <title>Kassandra Finance</title>
      </Head>
      <NewHome />
    </>
  )
}
