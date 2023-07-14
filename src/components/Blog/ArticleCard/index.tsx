import Link from 'next/link'

import { PostDataType } from '@/store/reducers/postsSlice'

import useMatomo from '@/hooks/useMatomo'
import { publishedAtToHumanReadable } from '@/utils/date'

import { Tag } from '../Tag'

import * as S from './styles'

interface IArticleCardProps {
  post: PostDataType
}

const ArticleCard = ({ post }: IArticleCardProps) => {
  const { trackEvent } = useMatomo()

  const readingDifficulty = {
    Beginner: 'blue',
    Intermediate: 'yellow',
    Advanced: 'red'
  } as const

  const firstTag = post.tags[0]?.name
  const otherTags = post.tags.slice(1)

  return (
    <Link href={`/blog/${post.slug}`} passHref>
      <S.ArticleLink
        aria-labelledby={post.slug}
        onClick={() =>
          trackEvent({
            category: 'article-card',
            action: `click-on-link`,
            name: post.slug
          })
        }
      >
        <S.ArticleCard>
          <S.BannerImage
            className="post-img"
            src={post.banner.url}
            alt={post.banner.alternativeText}
            width={1024}
            height={512}
            objectFit="cover"
          />
          <S.ArticleInfo>
            <S.ArticleDate>
              {publishedAtToHumanReadable(post.publishedAt)} ・
              {post.readTimeInMinutes} min read
            </S.ArticleDate>
            <S.ArticleTitle id={post.slug}>{post.title}</S.ArticleTitle>

            <S.Tags>
              {post.readingDifficulty?.difficultyName ? (
                <Tag
                  variant={
                    readingDifficulty[
                      post.readingDifficulty
                        ?.difficultyName as keyof typeof readingDifficulty
                    ] ?? 'purple'
                  }
                  shape="square"
                  size="small"
                  className="tags"
                  asLabel
                >
                  {post.readingDifficulty.difficultyName}
                </Tag>
              ) : null}

              {firstTag && (
                <Tag
                  variant="purple"
                  shape="square"
                  size="small"
                  className="tags"
                  asLabel
                >
                  {firstTag}
                </Tag>
              )}
              {otherTags.length > 0 && (
                <Tag
                  variant="gray"
                  shape="rounded"
                  size="small"
                  className="number-tags"
                  asLabel
                >
                  {`+${otherTags.length}`}
                </Tag>
              )}
            </S.Tags>
          </S.ArticleInfo>
        </S.ArticleCard>
      </S.ArticleLink>
    </Link>
  )
}

export default ArticleCard
