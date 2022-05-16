import React from 'react'
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import Head from 'next/head'

type Props = {
  id: string
}

const Page = ({ id }: Props) => {
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://alpha.kassandra.finance'
      : 'http://localhost:3000'

  React.useEffect(() => {
    document
      // eslint-disable-next-line prettier/prettier
      .querySelector("meta[property='og:image']")!
      .setAttribute('content', `${baseUrl}/api/funds/shared?id=${id}`)
  }, [baseUrl, id])

  return (
    <>
      <Head>
        <meta
          property="og:image"
          key="ogImage"
          content={`${baseUrl}/api/funds/shared?id=${id}`}
        />
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
      </Head>
      <div>
        <img src={`${baseUrl}/api/funds/shared?id=${id}`} alt="" />
      </div>
    </>
  )
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<Props>> => {
  const getUrlBasedOnParams =
    context.params?.id === '0x38918142779e2CD1189cBd9e932723C968363D1E'
      ? 'ahype'
      : 'tricrypto'

  if (typeof context.params?.id === 'string') {
    return {
      props: {
        id: context.params?.id
      },
      redirect: {
        destination: `/explore/${getUrlBasedOnParams}`,
        permanent: false
      }
    }
  } else {
    return {
      notFound: true
    }
  }
}

export default Page
