import Image from 'next/image'
import { useRouter } from 'next/router'

import { ChevronIcon } from '@/Icons'

import { ImageModalTrigger } from '../ImageModal'

import BlogButton from '@/components/Blog/Button'
import { Loading } from '@/components/Blog/Loading'
import { HandleSelectImageProps, IPost, getVariantByDifficulty } from '..'

import * as S from './styles'

type ArticleHeaderProps = {
  post: IPost
  handleSelectImage: ({ event, imageData }: HandleSelectImageProps) => void
  headerContentRef: React.RefObject<HTMLDivElement>
  handleArticlePageClick: (path: string) => void
}

export const ArticleHeader = ({
  post,
  handleSelectImage,
  headerContentRef,
  handleArticlePageClick
}: ArticleHeaderProps) => {
  const router = useRouter()

  const allArticlesTab = 'All Articles'

  return (
    <S.Header ref={headerContentRef}>
      <S.GoBackWrapper>
        <BlogButton
          variant="ghost"
          className="back-button"
          size="medium"
          href="/blog"
          leftIcon={<ChevronIcon style={{ transform: 'rotate(90deg)' }} />}
        >
          Back to blog
        </BlogButton>
      </S.GoBackWrapper>
      <S.BackTags>
        {router.isFallback && <Loading />}

        <ImageModalTrigger
          tabIndex={0}
          onClick={event =>
            handleSelectImage({
              event,
              imageData: {
                url: post?.banner.url,
                alt: post?.banner.alternativeText
              }
            })
          }
        >
          <Image
            src={post?.banner.url ?? ''}
            alt={post?.banner.alternativeText}
            width={758}
            height={380}
            priority={true}
            sizes="(max-width: 758px) 100vw, 758px"
          />
        </ImageModalTrigger>
      </S.BackTags>
      <h1>{post?.title}</h1>
      <S.Authors>
        <S.WritersImages>
          {post?.writers.map(writer => (
            <Image
              key={writer.id}
              src={writer.profilePicture.url}
              alt={writer.profilePicture.alternativeText}
              width={32}
              height={32}
            />
          ))}
        </S.WritersImages>
        <S.MetadataWrapper>
          <S.WritersNames>
            {post?.writers.map(writer => writer.name).join(', ')}
          </S.WritersNames>

          <S.PostMetadata>
            {post &&
              new Intl.DateTimeFormat('en-US', {
                dateStyle: 'long'
              }).format(new Date(post?.publishedAt))}{' '}
            • {post?.readTimeInMinutes} min read
          </S.PostMetadata>
        </S.MetadataWrapper>
      </S.Authors>

      <p>{post?.summary}</p>

      <S.Tags>
        {post?.isPRO && (
          <S.StyledTag
            variant="blue"
            size="large"
            capitalization="capitalize"
            onClick={() => {
              handleArticlePageClick('Pro')
            }}
            href={`/research?tab=${allArticlesTab}&isPRO=true`}
          >
            Pro
          </S.StyledTag>
        )}
        {/* {post?.readingDifficulty && (
          <S.StyledTag
            variant={getVariantByDifficulty(
              post.readingDifficulty.difficultyName
            )}
            size="large"
            capitalization="capitalize"
            onClick={() =>
              handleArticlePageClick(post?.readingDifficulty.difficultyName)
            }
            href={`/research?tab=${allArticlesTab}&readingDifficulties=${post?.readingDifficulty.difficultyName}`}
          >
            {post?.readingDifficulty.difficultyName}
          </S.StyledTag>
        )} */}
        {post?.tags.map(tag => (
          <S.StyledTag
            key={tag.name}
            variant="red"
            size="medium"
            capitalization="capitalize"
            onClick={() => handleArticlePageClick(tag.name)}
            href={`/research?tab=${allArticlesTab}&tags=${tag.name}`}
          >
            {tag.name}
          </S.StyledTag>
        ))}
      </S.Tags>
    </S.Header>
  )
}
