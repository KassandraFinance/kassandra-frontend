import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import {
  getHeadingsFromMarkdown as getHeadingsFromHTML,
  getSlugByTitle
} from '@/utils/markdownContentRegex'

import TitleBar from './TitleBar'
import Authors, { SocialIconType } from '../Blog/Authors'
import BlogButton from '../Blog/Button'
import Button from '../Button'
import IconButton from '../IconButton'
import { Tag } from '../Blog/Tag'

import { getVariantByDifficulty } from '@/templates/Article'

import { useSectionTitleObserver } from '@/hooks/useSectionTitleObserver'

import { ChevronIcon, TwitterIcon } from '@/Icons'
import { ShareExternalIcon } from '@/Icons/ShareExternal'

import * as S from './styles'

interface IPost {
  id: string
  title: string
  banner: {
    url: string
  }
  isPRO: boolean
  highlighted: boolean
  slug: string
  readTimeInMinutes: number
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
    }
    socials: {
      link: string
      type: SocialIconType
      username: string
    }[]
  }[]
  tags: {
    name: string
  }[]
  tabs: {
    tabName: string
  }[]
  summary: string
  publishedAt: string
}

interface IRightSidebarProps {
  post?: IPost
  handleSidebarButton: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>,
    slug?: string
  ) => void
  isContentShowing: boolean
  handleArticlePageClick: (path: string) => void
  notAllowedToRead?: boolean
}

const RightSidebar = ({
  post,
  handleSidebarButton,
  isContentShowing,
  handleArticlePageClick,
  notAllowedToRead
}: IRightSidebarProps) => {
  const [isSharing, setIsSharing] = React.useState(false)

  const router = useRouter()

  const allArticlesTab = 'All Articles'

  const postContent = React.useMemo(() => post?.content ?? '', [post?.content])

  const headings = React.useMemo(
    () => getHeadingsFromHTML(postContent),
    [postContent]
  )

  const itemIds = React.useMemo(
    () => headings.map(h => getSlugByTitle(h.content)),
    [headings]
  )
  const activeId = useSectionTitleObserver({ itemIds, heading: 'H2' })

  const shareUrl = `${document.location.origin}/${router.asPath}`
  const customMessage = `Check out this post, ${post?.title}, made by @Kassandra:`

  const handleShareButton = async () => {
    if (navigator.share) {
      try {
        setIsSharing(true)
        await navigator.share({
          title: post?.title,
          text: customMessage,
          url: shareUrl
        })
      } catch (error) {
        console.error('Error while sharing:', error)
      } finally {
        setIsSharing(false)
      }
    } else {
      const twitterUrl = `https://twitter.com/intent/tweet?text=${customMessage}&url=${shareUrl}`

      window.open(twitterUrl, '_blank')
    }
  }

  const handleTagClick = () => {
    handleArticlePageClick('share-sidebar/mobile')
  }

  const coins = React.useMemo(() => post?.coins, [post?.coins])

  return (
    <S.RightSidebar isContentShowing={isContentShowing}>
      {/* <S.RightSidebarLight>
        <Image
          src="/assets/images/backgroundBlog/post-right-pink-light.svg"
          height={823}
          width={753}
        />
      </S.RightSidebarLight> */}
      <TitleBar
        postTitle={post?.title ?? ''}
        handleSidebarButton={handleSidebarButton}
        isContentShowing={isContentShowing}
      />
      <S.RightSidebarWrapper isContentShowing={isContentShowing}>
        <S.Content>
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
          <S.PostsContent notAllowed={notAllowedToRead}>
            {headings.map((title, index) => {
              return (
                <Link
                  key={`post-title-${index}`}
                  shallow={true}
                  href={`#${title.id}`}
                  // className="topics-buttons"
                  // onClick={e => {
                  //   handleSidebarButton(e, title.id)
                  // }}
                >
                  <a
                    onClick={e => {
                      handleSidebarButton(e, title.id)
                    }}
                    className={`post-title ${
                      title.id === activeId ? 'active' : ''
                    }`}
                  >
                    {title.id === activeId ? (
                      <span className="bulletpoint">•</span>
                    ) : (
                      <span className="bulletpoint disabled">•</span>
                    )}{' '}
                    {title.content.replace(/\*\*/g, '')}
                  </a>
                </Link>
              )
            })}
            {notAllowedToRead ? (
              <Button size="medium" className="unlock-btn" href="#locked">
                Get pro to unlock
              </Button>
            ) : null}
          </S.PostsContent>

          <S.LinksContent>
            <S.TagsContent>
              <S.SectionTitle>Tags</S.SectionTitle>
              <S.Tags>
                {post?.isPRO && (
                  <Tag
                    variant="purple"
                    size="small"
                    capitalization="capitalize"
                    onClick={handleTagClick}
                    href={`/research?tab=${allArticlesTab}&isPRO=true`}
                  >
                    Pro
                  </Tag>
                )}
                {/* {post?.readingDifficulty && (
                  <Tag
                    variant={getVariantByDifficulty(
                      post.readingDifficulty.difficultyName
                    )}
                    size="small"
                    capitalization="capitalize"
                    onClick={handleTagClick}
                    href={`/research?tab=${allArticlesTab}&readingDifficulties=${post.readingDifficulty.difficultyName}`}
                  >
                    {post?.readingDifficulty.difficultyName}
                  </Tag>
                )} */}
                {post?.tags.map(tag => (
                  <Tag
                    key={tag.name}
                    variant="gray"
                    size="small"
                    capitalization="capitalize"
                    onClick={handleTagClick}
                    href={`/research?tab=${allArticlesTab}&tags=${tag.name}`}
                  >
                    {tag.name}
                  </Tag>
                ))}
              </S.Tags>
            </S.TagsContent>
            {post && post.coins.length > 0 ? (
              <S.CoinContent>
                <S.SectionTitle>Mentioned Coins</S.SectionTitle>
                <S.Coins>
                  {coins?.map(coin => (
                    <a
                      key={coin.id + coin.coinGeckoID + coin.symbol}
                      href={`https://www.coingecko.com/pt/moedas/${coin.coinGeckoID}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src={coin.image.url}
                        className="coin-image"
                        width={40}
                        height={40}
                      />
                    </a>
                  ))}
                </S.Coins>
              </S.CoinContent>
            ) : null}

            <S.ShareContent>
              <S.SectionTitle>Share</S.SectionTitle>
              <S.Buttons>
                <IconButton
                  icon={<ShareExternalIcon />}
                  onClick={() => {
                    handleShareButton()
                    handleArticlePageClick('share-mobile')
                  }}
                  disabled={isSharing}
                />

                <IconButton
                  icon={<TwitterIcon />}
                  onClick={() => handleArticlePageClick('twittershare-mobile')}
                  disabled={isSharing}
                  isExternalLink
                  href={`https://twitter.com/share?url=${shareUrl}`}
                />
              </S.Buttons>
            </S.ShareContent>
          </S.LinksContent>

          <S.AuthorsContent>
            <S.SectionTitle>Authors</S.SectionTitle>
            <Authors writers={post?.writers ?? []} />
          </S.AuthorsContent>
        </S.Content>
      </S.RightSidebarWrapper>
    </S.RightSidebar>
  )
}

export default RightSidebar
