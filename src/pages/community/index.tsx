import { CommunityTemplate } from '@/templates/Community'
import Head from 'next/head'

export default function Index() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Kassandra Community</title>
        <meta name="description" content="" />

        {/* Open Graph / Facebook */}
        <meta property="og:url" content="https://kassandra.finance/" />
        <meta property="og:description" content="" />

        {/* Twitter */}
        <meta property="twitter:url" content="https://kassandra.finance/" />
        <meta property="twitter:description" content="." />
      </Head>

      <CommunityTemplate />
    </>
  )
}