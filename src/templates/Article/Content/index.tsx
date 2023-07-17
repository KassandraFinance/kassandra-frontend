import React from 'react'

import type { HandleSelectImageProps, IPost } from '..'
import { MarkdownContent } from './Markdown'
import { ShareArticle } from './ShareArticle'

// import HeimdallPro from '@ui/HeimdallPro'

import * as S from './styles'

type ContentProps = {
  handleSelectImage: ({ event, imageData }: HandleSelectImageProps) => void
  handleArticlePageClick: (path: string) => void
  markdownContainerRef: React.RefObject<HTMLDivElement>
  post: IPost
  isUserPRO?: boolean
}

export const Content = ({
  handleSelectImage,
  handleArticlePageClick,
  post,
  isUserPRO,
  markdownContainerRef
}: ContentProps) => {
  const notAllowedToRead = post?.isPRO && !isUserPRO
  const postContent = React.useMemo(() => post.content, [post.content])

  return (
    <>
      {notAllowedToRead ? (
        <S.LockedContent
          contentHeight={markdownContainerRef.current?.offsetHeight ?? 0}
        >
          <div ref={markdownContainerRef} className="markdown-content-wrapper">
            <MarkdownContent
              content={postContent}
              handleSelectImage={handleSelectImage}
            />
          </div>
          {/* <S.HeimdallProWrapper>
            <HeimdallPro sendInBlueListId={post.sendInBlueListId} />
          </S.HeimdallProWrapper> */}
        </S.LockedContent>
      ) : (
        <>
          <div ref={markdownContainerRef} className="markdown-content-wrapper">
            <MarkdownContent
              content={postContent}
              handleSelectImage={handleSelectImage}
            />
          </div>
          <ShareArticle
            postTitle={post.title}
            handleArticlePageClick={handleArticlePageClick}
          />
        </>
      )}
    </>
  )
}
