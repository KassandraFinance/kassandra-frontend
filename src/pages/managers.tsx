import Head from 'next/head'
import Header from '../components/Header'

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
        <title>Kassandra for Managers</title>
      </Head>
      <Managers />
    </>
  )
}
