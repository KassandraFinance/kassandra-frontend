import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import Head from 'next/head'

type Props = {
  id: string
}

const Page = ({ id }: Props) => {
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://kassandra.finance/'
      : 'http://localhost:3000'
  console.log(`${baseUrl}/api/funds/shared?id=${id}`)
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
