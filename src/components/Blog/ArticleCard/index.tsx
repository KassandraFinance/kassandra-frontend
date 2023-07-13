import Link from 'next/link'

import { PostDataType } from '@/store/reducers/postsSlice'

import useMatomo from '@/hooks/useMatomo'
import { publishedAtToHumanReadable } from '@/utils/date'
import { LockerIcon } from '@/Icons/Locker'

import { Tag } from '../Tag'

import * as S from './styles'

interface IArticleCardProps {
  post: PostDataType
  isUserPRO?: boolean
}

const ArticleCard = ({ post, isUserPRO }: IArticleCardProps) => {
  const { trackEvent } = useMatomo()

  const readingDifficulty = {
    Beginner: 'green',
    Intermediate: 'purple',
    Advanced: 'red'
  } as const

  const firstTag = post.tags[0]?.name
  const otherTags = post.tags.slice(1)

  return (
    <Link href={`/research/${post.slug}`} passHref>
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
          {post.isPRO ? (
            <Tag
              variant="primary"
              shape="rounded"
              size="medium"
              className="pro-tag"
              leftIcon={isUserPRO ? undefined : <LockerIcon />}
              asLabel
            >
              Pro
            </Tag>
          ) : null}
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
                    ] ?? 'tertiary'
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
                  variant={'tertiary'}
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
                  variant="tertiary"
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
