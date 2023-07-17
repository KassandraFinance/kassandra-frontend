import ArticlesSection from '@/components/Blog/ArticlesSection'
import Button from '@/components/Button'
import Hero from '@/components/Hero'
import { useSyncResearchFilters } from '@/hooks/useSyncResearchFilters'
import { PostDataType } from '@/store/reducers/postsSlice'

interface IBlogProps {
  posts?: PostDataType[]
  postsStats?: {
    pageCount: number
    total: number
  }
  tabs: string[]
}

const Blog = ({ posts, postsStats, tabs }: IBlogProps) => {
  useSyncResearchFilters()

  return (
    <>
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
      <ArticlesSection postsStats={postsStats} posts={posts} tabs={tabs} />
    </>
  )
}

export default Blog
