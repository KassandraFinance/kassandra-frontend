import Head from 'next/head'
import WalletAddress from '../../../templates/Gov/WalletAddress'

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
      </Head>
      <WalletAddress />
    </>
  )
}
