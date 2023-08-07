import { useRouter } from 'next/router'

import Button from '@/components/Blog/Button'

import { TwitterIcon } from '@/Icons'

import * as S from '../styles'

type ShareArticleProps = {
  handleArticlePageClick: (path: string) => void
  postTitle: string
}

export const ShareArticle = ({
  handleArticlePageClick,
  postTitle
}: ShareArticleProps) => {
  const router = useRouter()

  let shareUrl = ''
  if (typeof window === 'object') {
    shareUrl = `${document?.location.origin}${router.asPath}`
  }

  const customMessage = `Check out this article, ${postTitle}, made by @dao_kassandra:`

  const handleClick = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${customMessage}&url=${shareUrl}`

    window.open(twitterUrl, '_blank')
    handleArticlePageClick('article-share')
  }

  return (
    <S.ShareArticle>
      <p>Liked the Article?</p>
      <Button
        leftIcon={<TwitterIcon />}
        variant="tertiary"
        className="share-btn"
        size="medium"
        onClick={handleClick}
        data-size="large"
      >
        Share
      </Button>
    </S.ShareArticle>
  )
}
