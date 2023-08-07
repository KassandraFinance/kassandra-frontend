import React from 'react'
import Head from 'next/head'

import Blog from '@/templates/Blog'
import { QueryClient, dehydrate } from '@tanstack/react-query'
import { getPosts } from '@/shared/queries/getPosts'
import { strapiClient } from '@/graphQLClients'
import { flattenObj } from '@/utils/strapiResponseTransformer'
import { GetStaticProps } from 'next'
import {
  PostDataType,
  setCoins,
  setPosts,
  setPostsStats,
  setTabs,
  setTags
} from '@/store/reducers/postsSlice'
import { useDispatch } from 'react-redux'

import * as S from '@/templates/Blog/styles'

interface IndexProps {
  posts?: PostDataType[]
  tags?: string[]
  coins: {
    name: string
    image: {
      url: string
      alternativeText: string
    }
    symbol: string
    coinGeckoID: string
  }[]
  tabs?: string[]
  postsStats?: {
    pageCount: number
    total: number
  }
}

const Index = ({ posts, tags, coins, tabs, postsStats }: IndexProps) => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    if (posts) dispatch(setPosts(posts))
    if (tags) dispatch(setTags(tags))
    if (coins) dispatch(setCoins(coins))
    if (tabs) dispatch(setTabs(tabs))
    if (postsStats) dispatch(setPostsStats(postsStats))
  }, [dispatch, posts, tags, coins, postsStats, tabs])

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Kassandra Blog</title>
        <meta name="description" content="It's a me, a Blog(io)" />

        {/* Open Graph / Facebook */}
        <meta property="og:url" content="https://kassandra.finance/blog" />
        <meta property="og:description" content="A Blog" />

        {/* Twitter */}
        <meta property="twitter:url" content="https://kassandra.finance/blog" />
        <meta property="twitter:description" content="A Blog" />
      </Head>

      <S.Background />
      <S.HeroBackground />
      <Blog posts={posts} postsStats={postsStats} tabs={tabs ?? []} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const queryClient = new QueryClient()
    const tabs = await strapiClient.ResearchTabs()
    const flattenTabs = flattenObj<{
      tabs: { tabName: string; position: number }[]
    }>(tabs)

    const tab = flattenTabs.tabs?.sort((a, b) => a.position - b.position)[0]
      ?.tabName

    const posts = await getPosts({
      isPRO: false,
      page: 1,
      tags: [],
      coins: [],
      perPage: 24,
      tab: tab ?? undefined
    })

    queryClient.setQueryData(['researchCoins', { query: '' }], {
      coins: posts.coins
    })

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
        posts: posts.posts,
        tags: posts.tags,
        coins: posts.coins,
        postsStats: posts.postsStats ?? {
          pageCount: 0,
          total: 0
        },
        tabs: posts.tabs
      }
    }
  } catch (err) {
    return {
      props: {},
      revalidate: 1
    }
  }
}

export default Index
