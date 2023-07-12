import Head from 'next/head'

import Button from '@/components/Button'
import Hero from '@/components/Hero'
import { Tag } from '@/components/Blog/Tag'

const Blog = () => {
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

      <Hero
        titleNumber="04"
        title="blog"
        titleColor="#26DBDB"
        subTitle="Enim at vitae et diam leo aliquet fermentum eget arcu leo enim sed."
        description="Blandit pellentesque dui nibh nulla at ultrices. Purus fusce varius arcu aliquet ut non lectus. Mus mauris nunc vulputate aliquam pharetra. Etiam velit nulla dictum duis eget sagittis."
      >
        <Button
          backgroundPrimary
          size="huge"
          text="Label"
          icon={<img src="/assets/utilities/go-to-page.svg" alt="go to page" />}
          as="a"
          href="https://www.kassandra.finance/blog"
        />
      </Hero>
      <Tag variant="primary" shape="rounded" size="medium">
        Tag
      </Tag>
    </>
  )
}

export default Blog
