import Image from 'next/image'
import { useRouter } from 'next/router'

// import ChevronLeft from '@assets/arrows/chevron-left.svg'

import { ImageModalTrigger } from '../ImageModal'

import Button from '@/components/Button'
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
        <Button
          className="back-button"
          // leftIcon={ChevronLeft}
          // variant="ghost"
          size="medium"
          href="/research"
        >
          Back to Research
        </Button>
      </S.GoBackWrapper>
      <S.BackTags>
        {router.isFallback && <Loading height={150} />}

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
            variant="primary"
            size="large"
            shape="rounded"
            capitalization="capitalize"
            onClick={() => {
              handleArticlePageClick('Pro')
            }}
            href={`/research?tab=${allArticlesTab}&isPRO=true`}
          >
            Pro
          </S.StyledTag>
        )}
        {post?.readingDifficulty && (
          <S.StyledTag
            variant={getVariantByDifficulty(
              post.readingDifficulty.difficultyName
            )}
            size="large"
            shape="rounded"
            capitalization="capitalize"
            onClick={() =>
              handleArticlePageClick(post?.readingDifficulty.difficultyName)
            }
            href={`/research?tab=${allArticlesTab}&readingDifficulties=${post?.readingDifficulty.difficultyName}`}
          >
            {post?.readingDifficulty.difficultyName}
          </S.StyledTag>
        )}
        {post?.tags.map(tag => (
          <S.StyledTag
            key={tag.name}
            variant="tertiary"
            size="large"
            shape="rounded"
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
