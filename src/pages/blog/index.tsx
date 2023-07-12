import Head from 'next/head'

import Blog from '@/templates/Blog'

const Index = () => {
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
      <Blog />
    </>
  )
}

export default Index
