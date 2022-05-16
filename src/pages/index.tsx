import Head from 'next/head'
import { SWRConfig } from 'swr'

import Home from '../templates/Home'

export default function Index() {
  return (
    <SWRConfig
      value={{
        refreshInterval: 10000,
        fetcher: url => fetch(url).then(res => res.json())
      }}
    >
      <Head>
        <meta
          property="og:image"
          content="https://kassandra.finance/kacy-og.png"
        />
        <meta property="og:image:width" content="1012" />
        <meta property="og:image:height" content="506" />
        <meta property="og:url" content="https://kassandra.finance/" />
      </Head>
      <Home />
    </SWRConfig>
  )
}
