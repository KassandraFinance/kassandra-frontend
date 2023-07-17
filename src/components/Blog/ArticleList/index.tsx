import Link from 'next/link'
import Image from 'next/image'

import useMatomo from '@/hooks/useMatomo'
import { PostDataType } from '@/store/reducers/postsSlice'

import { publishedAtToHumanReadable } from '@/utils/date'

import * as S from './styles'

interface IArticleListProps {
  post: PostDataType
  borderShadow: 'true' | 'false'
  tabletView?: boolean
  imageLeft?: 'true' | 'false'
}

const ArticleList = ({
  post,
  borderShadow,
  tabletView,
  imageLeft
}: IArticleListProps) => {
  const { trackEvent } = useMatomo()

  return (
    <Link href={`/blog/${post.slug}`} passHref aria-labelledby={post.slug}>
      <S.ArticleList>
        <S.Content
          borderShadow={borderShadow}
          imageLeft={imageLeft}
          tabletView={tabletView}
          onClick={() =>
            trackEvent({
              category: 'article-list-item',
              action: 'click-on-link',
              name: post.slug
            })
          }
        >
          {imageLeft && (
            <S.ImageContainer>
              <Image
                objectPosition="left"
                className="post-img"
                src={post.banner.url}
                layout={'fill'}
                objectFit={'cover'}
              />
            </S.ImageContainer>
          )}
          <S.TextContainer tabletView={tabletView}>
            <S.TextTitlePlusMarketing>
              <span className="text-details">
                {publishedAtToHumanReadable(post.publishedAt)}・
                {post.readTimeInMinutes} min read
              </span>

              <p className="text-title" id={post.slug}>
                {post.title}
              </p>

              <p className="text-summary">{post.summary}</p>
            </S.TextTitlePlusMarketing>
            <S.AuthorPlusIcons>
              {post.writers.slice(0, 2).map(writer => (
                <S.AuthorsImagesWrapper key={writer.id}>
                  <S.ArticleAuthorImage
                    src={writer.profilePicture.url}
                    height={24}
                    alt={writer.profilePicture.alternativeText}
                    width={24}
                  />
                </S.AuthorsImagesWrapper>
              ))}
              <span className="text-footer">
                {post.writers
                  .slice(0, 2)
                  .map(writer => writer.name)
                  .join(', ')}
              </span>
            </S.AuthorPlusIcons>
          </S.TextContainer>
          {!imageLeft && (
            <S.ImageContainer tabletView={tabletView}>
              <Image
                className="post-img"
                src={post.banner.url}
                alt={post.banner.alternativeText}
                layout={'fill'}
                objectFit={'cover'}
              />
            </S.ImageContainer>
          )}
        </S.Content>
      </S.ArticleList>
    </Link>
  )
}

export default ArticleList
