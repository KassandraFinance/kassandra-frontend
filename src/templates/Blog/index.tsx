import { PostDataType } from '@/store/reducers/postsSlice'
import { useSyncResearchFilters } from '@/hooks/useSyncResearchFilters'

import Subtitle from '@/components/Subtitle'
import Paragraph from '@/components/Paragraph'
import SectionTitle from '@/components/SectionTitle'
import ArticlesSection from '@/components/Blog/ArticlesSection'

import SubscribeInput from '@/components/SubscribeInput'

import * as S from './styles'

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
    <S.Blog>
      <S.Hero>
        <S.HeroContent>
          <SectionTitle title="blog" titleColor="#26DBDB" titleNumber="04" />

          <S.TextWrapper>
            <Subtitle text="Subscribe to our newsletter" as="h2" />
            <Paragraph
              text="Keep up with Kassandra’s resources, including available tokens, pool strategies, their performance, and in-depth research material for DeFi players."
              fontWeight={400}
            />
          </S.TextWrapper>

          <SubscribeInput />
        </S.HeroContent>

        <S.ImageWrapper>
          <img
            src="/assets/images/heroBlog.svg"
            alt=""
            width={350}
            height={350}
          />
        </S.ImageWrapper>
      </S.Hero>

      <ArticlesSection postsStats={postsStats} posts={posts} tabs={tabs} />
    </S.Blog>
  )
}

export default Blog
