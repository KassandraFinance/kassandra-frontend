import React from 'react'
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import Head from 'next/head'
import { ParsedUrlQuery } from 'querystring'
import { useRouter } from 'next/router'

type Props = {
  id: string
}

const Page = ({ id }: Props) => {
  const router = useRouter()
  const fund = id.split('-').pop()

  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://alpha.kassandra.finance'
      : 'http://localhost:3000'

  //   React.useEffect(() => {
  //     document
  //       // eslint-disable-next-line prettier/prettier
  //       .querySelector("meta[property='og:image']")!
  //       .setAttribute('content', `${baseUrl}/api/funds/shared?id=${id}`)
  //   }, [baseUrl, id])

  React.useEffect(() => {
    router.push(`/explore/${fund}`)
  }, [])

  return (
    <>
      <Head>
        <meta
          property="og:image"
          key="ogImage"
          content={`${baseUrl}/api/funds/shared?id=${id}`}
        />
        <meta property="og:url" content={`${baseUrl}/shared/${id}`} />
        <meta
          name="twitter:card"
          key="twitterCard"
          content="summary_large_image"
        />
        <meta
          name="twitter:image"
          key="twitterImage"
          content={`${baseUrl}/api/funds/shared?id=${id}`}
        />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="500" />
      </Head>
      <div>
        <img src={`${baseUrl}/api/funds/shared?id=${id}`} alt="" />
      </div>
    </>
  )
}

interface Fund extends ParsedUrlQuery {
  id: string;
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext<Fund>
): Promise<GetServerSidePropsResult<Props>> => {
  if (typeof context.params?.id === 'string') {
    return {
      props: {
        id: context.params?.id
      }
    }
  } else {
    return {
      notFound: true
    }
  }
}

export default Page