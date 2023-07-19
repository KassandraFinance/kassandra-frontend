import React from 'react'

import { breakpoints } from '@/styles/theme'

import useMatomo from '@/hooks/useMatomo'
import { useWindowSize } from '@/hooks/useWindowSize'

import { SocialIconType } from '@/components/Blog/Authors'
import RightSidebar from '@/components/RightSidebar'
import SignUp from './SignUp'

import Recommended from './Recommended'
import ImageModal, { ImageModalRoot } from './ImageModal'
import { ArticleHeader } from './ArticleHeader'
import { Content } from './Content'
import { ProgressBar } from './ProgressBar'

import * as S from './styles'
import Image from 'next/image'

export const getVariantByDifficulty = (difficulty: string) => {
  switch (difficulty) {
    case 'Beginner':
      return 'blue'
    case 'Intermediate':
      return 'purple'
    case 'Advanced':
      return 'red'
    default:
      return 'gray'
  }
}

export interface IPost {
  id: string
  title: string
  banner: {
    url: string
    alternativeText: string
  }
  isPRO: boolean
  amountOfTitles: number
  highlighted: boolean
  slug: string
  readTimeInMinutes: number
  sendInBlueListId: number
  content: string
  coins: {
    id: string
    coinGeckoID: string
    symbol: string
    image: {
      url: string
    }
  }[]
  writers: {
    id: string
    name: string
    biography: string
    profilePicture: {
      url: string
      alternativeText: string
    }
    socials: {
      link: string
      type: SocialIconType
      username: string
    }[]
  }[]
  readingDifficulty: {
    difficultyName: string
  }
  tags: {
    name: string
  }[]
  tabs: {
    tabName: string
  }[]
  summary: string
  publishedAt: string
  recommendedPosts: {
    id: string
    title: string
    summary: string
    slug: string
    readTimeInMinutes: string
    publishedAt: string
    isPRO: boolean
    readingDifficulty: {
      difficultyName: string
    }[]
    banner: {
      url: string
    }
    writers: {
      id: string
      name: string
      profilePicture: {
        url: string
        alternativeText?: string
      }
    }[]
  }[]
}

export type HandleSelectImageProps = {
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  imageData: {
    url: string | undefined
    alt: string | undefined
  }
}

interface IArticleProps {
  post?: IPost
  posts?: IPost[]
  isUserPRO?: boolean
}

const Article = ({ post, posts, isUserPRO }: IArticleProps) => {
  const [isContentShowing, setIsContentShowing] = React.useState(true)
  const [selectedImageSrc, setSelectedImageSrc] = React.useState({
    src: '',
    alt: ''
  })
  const { width } = useWindowSize()

  const [lastSelectedImage, setLastSelectedImage] =
    React.useState<HTMLButtonElement | null>(null)

  const markdownContainerRef = React.useRef<HTMLDivElement>(null)
  const headerContentRef = React.useRef<HTMLDivElement>(null)

  const { trackEvent } = useMatomo({
    trackPageView: true
  })

  const handleSidebarButton = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>,
    slug?: string
  ) => {
    e.preventDefault()
    if (slug) {
      document.querySelector(`#${slug}`)?.scrollIntoView({
        behavior: 'smooth'
      })
    }
    if (width && width < breakpoints.tabletLarge) {
      setIsContentShowing(!isContentShowing)
    }
  }

  function handleArticlePageClick(path: string) {
    trackEvent({
      category: 'article-page',
      action: `click-on-${path}`,
      name: path
    })
  }

  const notAllowedToRead = React.useMemo(
    () => post?.isPRO && !isUserPRO,
    [post?.isPRO, isUserPRO]
  )

  const handleSelectImage = ({ event, imageData }: HandleSelectImageProps) => {
    setSelectedImageSrc({
      alt: imageData.alt ?? '',
      src: imageData.url ?? '/assets/icons/coming-soon.svg'
    })
    setLastSelectedImage(event.currentTarget)
  }

  return (
    <ImageModalRoot modal={true}>
      <ImageModal
        imageData={selectedImageSrc}
        onCloseAutoFocus={e => {
          if (lastSelectedImage) {
            e.preventDefault()
            lastSelectedImage.focus()
          }
        }}
      />

      <S.Article>
        <ProgressBar
          markdownContainerRef={markdownContainerRef}
          headerContentRef={headerContentRef}
        />

        <S.Content isContentShowing={isContentShowing}>
          {post && (
            <>
              <ArticleHeader
                post={post}
                handleArticlePageClick={handleArticlePageClick}
                handleSelectImage={handleSelectImage}
                headerContentRef={headerContentRef}
              />
              <S.Main>
                <Content
                  handleArticlePageClick={handleArticlePageClick}
                  handleSelectImage={handleSelectImage}
                  markdownContainerRef={markdownContainerRef}
                  post={post}
                  isUserPRO={isUserPRO}
                />
              </S.Main>
            </>
          )}

          <SignUp />

          <Recommended
            posts={posts}
            currentPostId={post?.id}
            handleArticlePageClick={handleArticlePageClick}
            currentPostTab={
              post?.tabs.filter(tab => tab.tabName !== 'All Articles')?.[0]
                ?.tabName
            }
          />
        </S.Content>
        <RightSidebar
          post={post}
          handleSidebarButton={handleSidebarButton}
          isContentShowing={isContentShowing}
          handleArticlePageClick={handleArticlePageClick}
          notAllowedToRead={notAllowedToRead}
        />
      </S.Article>
    </ImageModalRoot>
  )
}

export default Article
