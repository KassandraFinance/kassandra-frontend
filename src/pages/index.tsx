import React from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { dehydrate, QueryClient } from '@tanstack/react-query'

import { fetchDaoInfo } from '@/hooks/query/useDaoInfo'

import Home from '../templates/Home'

export default function HomePage() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>
          Kassandra Finance - Tokenized crypto portfolios for investors and
          managers
        </title>
        <meta
          name="description"
          content="A DeFi platform that empowers users to manage crypto assets and create tokenized portfolios, while providing investors with opportunities to invest in curated pools."
        />

        {/* Open Graph / Facebook */}
        <meta
          property="og:image"
          content="https://kassandra.finance/kacy-og.png"
        />
        <meta property="og:url" content="https://kassandra.finance/" />
        <meta
          property="og:description"
          content="A DeFi platform that empowers users to manage crypto assets and create tokenized portfolios, while providing investors with opportunities to invest in curated pools."
        />

        {/* Twitter */}
        <meta property="twitter:url" content="https://kassandra.finance/" />
        <meta
          property="twitter:description"
          content="A DeFi platform that empowers users to manage crypto assets and create tokenized portfolios, while providing investors with opportunities to invest in curated pools."
        />
      </Head>

      <Home />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['dao-info'],
    queryFn: () => fetchDaoInfo()
  })

  return {
    props: {
      dehydrateState: dehydrate(queryClient)
    },
    revalidate: 300
  }
}
