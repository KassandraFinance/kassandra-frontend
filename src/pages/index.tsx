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
        <title>Kassandra Finance</title>
        <meta
          name="description"
          content="Create, manage and invest in tokenized crypto portfolios."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:url" content="https://kassandra.finance/" />
        <meta
          property="og:description"
          content="Create, manage and invest in tokenized crypto portfolios."
        />

        {/* Twitter */}
        <meta property="twitter:url" content="https://kassandra.finance/" />
        <meta
          property="twitter:description"
          content="Create, manage and invest in tokenized crypto portfolios."
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
