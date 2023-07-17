import React from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { flattenObj } from '@/utils/strapiResponseTransformer'
import { strapiClient } from '@/graphQLClients'

import Article from '@/templates/Article'
import { SocialIconType } from '@/components/Blog/Authors'
import * as S from '@/templates/Article/styles'
import Image from 'next/image'

interface IPost {
  id: string
  title: string
  banner: {
    url: string
    alternativeText: string
  }
  isPRO: boolean
  amountOfTitles: number
  highlighted: boolean
  slug: string
  readTimeInMinutes: number
  sendInBlueListId: number
  content: string
  coins: {
    id: string
    coinGeckoID: string
    symbol: string
    image: {
      url: string
    }
  }[]
  writers: {
    id: string
    name: string
    biography: string
    profilePicture: {
      url: string
      alternativeText: string
    }
    socials: {
      link: string
      type: SocialIconType
      username: string
    }[]
  }[]
  readingDifficulty: {
    difficultyName: string
  }
  tags: {
    name: string
  }[]
  tabs: {
    tabName: string
  }[]
  summary: string
  publishedAt: string
  recommendedPosts: {
    id: string
    title: string
    summary: string
    slug: string
    readTimeInMinutes: string
    publishedAt: string
    isPRO: boolean
    readingDifficulty: {
      difficultyName: string
    }[]
    banner: {
      url: string
    }
    writers: {
      id: string
      name: string
      profilePicture: {
        url: string
        alternativeText?: string
      }
    }[]
  }[]
}

interface IArticleProps {
  post: IPost
  posts: IPost[]
  isUserPRO?: boolean
}

const ArticlePage = ({ post, posts, isUserPRO }: IArticleProps) => {
  React.useEffect(() => {
    document.documentElement.classList.add('smooth-scroll')
  }, [])

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.summary} />

        {/* Open Graph  Meta Tags  */}
        <meta
          property="og:url"
          content={`https://heimdall.land/blog/${post.slug}`}
          key="og:url"
        />
        <meta property="og:title" content={post.title} key="og:title" />
        <meta
          property="og:description"
          content={post.summary}
          key="og:description"
        />
        <meta property="og:image" content={post.banner.url} />

        {/* Twitter Meta Tags  */}
        <meta
          property="twitter:url"
          content={`https://heimdall.land/blog/${post.slug}`}
          key="twitter:url"
        />
        <meta
          property="twitter:title"
          content={post.title}
          key="twitter:title"
        />
        <meta
          property="twitter:description"
          content={post.summary}
          key="titter:description"
        />
        <meta name="twitter:image" content={post.banner.url} />
      </Head>
      <S.PostTopLeftLight>
        <Image
          src="/assets/images/backgroundBlog/post-left-top-light.svg"
          height={823}
          width={753}
        />
      </S.PostTopLeftLight>

      <S.PostBottomLeftLight>
        <Image
          src="/assets/images/backgroundBlog/post-left-bottom-light.svg"
          height={823}
          width={753}
        />
      </S.PostBottomLeftLight>
      <Article post={post} posts={posts} isUserPRO={isUserPRO} />
    </>
  )
}

export default ArticlePage

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { postBySlug, posts } = await strapiClient.PostBySlug({
    slug: params?.slug as string
  })

  if (!postBySlug?.data)
    return {
      notFound: true
    }

  let flatPost = flattenObj<IPost>(postBySlug)

  let count = 0
  const lines = flatPost.content.split('\n\n')
  const amountOfTitles = flatPost.amountOfTitles

  const paragraphsWithTitle = lines.filter(line => {
    if (line.startsWith('##') && count <= amountOfTitles) {
      count += 1
      return line
    }

    if (count <= amountOfTitles) {
      return line
    }
  })

  paragraphsWithTitle.pop()

  // function generated for readability
  const generateContent = () => {
    if (flatPost.isPRO) {
      if (paragraphsWithTitle.length > 0) {
        return paragraphsWithTitle.join('\n\n')
      }

      return flatPost.content
    }

    return flatPost.content
  }

  const newContent = generateContent()
  const coinsToShow = flatPost.coins

  flatPost = {
    ...flatPost,
    coins: coinsToShow,
    content: newContent
  }

  return {
    props: {
      post: flatPost,
      posts:
        flatPost.recommendedPosts.length > 0
          ? flatPost.recommendedPosts
          : flattenObj<IPost[]>(posts)
    }
  }
}
