import { IPost } from '..'

import ArticleList from '@/components/Blog/ArticleList'
import Button from '@/components/Blog/Button'
import { CircledArrowIcon } from '@/Icons/CircledArrow'

import * as S from './styles'

interface IRecommendedProps {
  posts?: IPost[]
  currentPostId: string | undefined
  isUserPro?: string | undefined
  handleArticlePageClick: (path: string, tag: string) => void
  currentPostTab?: string
}

const Recommended = ({
  posts,
  currentPostId,
  handleArticlePageClick
}: IRecommendedProps) => {
  const recommendedPosts = (posts || [])
    .filter(post => post.id !== (currentPostId ?? ''))
    .slice(0, 3)

  return (
    <S.Recommended>
      <S.RecommendedContent>
        <p className="recommended-title">related content</p>

        {recommendedPosts.map(post => (
          <ArticleList
            tabletView={true}
            borderShadow="true"
            key={post.slug}
            post={post}
          />
        ))}
      </S.RecommendedContent>

      <Button
        variant="ghost"
        size="large"
        className="readmore-btn"
        href="/blog"
        onClick={() => handleArticlePageClick('readmore-btn', 'DeFi')}
      >
        Read more from DeFi <CircledArrowIcon />
      </Button>
    </S.Recommended>
  )
}

export default Recommended
