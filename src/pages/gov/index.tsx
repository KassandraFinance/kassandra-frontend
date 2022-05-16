import Head from 'next/head'
import { SWRConfig } from 'swr'

import Gov from '../../templates/Gov'

export default function Index() {
  return (
    <SWRConfig
      value={{
        refreshInterval: 30000
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
      <Gov />
    </SWRConfig>
  )
}
