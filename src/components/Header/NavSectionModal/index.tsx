import React from 'react'
import { useRouter } from 'next/router'

import { IHeaderLinkInfoProps } from '../constant'

import useMatomo from '@/hooks/useMatomo'

import LinkCard from '../LinkCard'
import Overlay from '@/components/Overlay'
import LastBlogPostCard from './LastBlogPostCard'
import SocialMidia from '@/components/SocialMidia'

import * as S from './styles'

interface INavegationCardProps {
  isOpenCard: boolean
  linkInfo: IHeaderLinkInfoProps
  onClick: () => void
}

const NavSectionModal = ({
  isOpenCard,
  linkInfo,
  onClick
}: INavegationCardProps) => {
  const isResources = linkInfo.isResources
  const { trackEvent } = useMatomo()
  const router = useRouter()

  const lastBlogPostCardHeight = 182
  const linkHeight = 98
  const paddingHeight = isResources ? 64 + lastBlogPostCardHeight : 64

  React.useEffect(() => {
    if (!isOpenCard) return

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClick()
      }
    }

    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [isOpenCard])

  return (
    <>
      {isOpenCard && <Overlay isOpen={isOpenCard} onClick={onClick} />}

      <S.NavSectionModalWrapper
        openCard={isOpenCard}
        height={(linkInfo.linkList?.length ?? 1) * linkHeight + paddingHeight}
      >
        <S.SideLeft>
          <S.CardTitleWrapper>
            <p>{linkInfo.sectionName}</p>
            <span>{linkInfo.description}</span>
          </S.CardTitleWrapper>

          {isResources && (
            <S.FollowUsWrapper>
              <S.FollowUs>Follow us</S.FollowUs>

              <SocialMidia />
            </S.FollowUsWrapper>
          )}
        </S.SideLeft>

        <S.Line />

        <S.SideRight>
          {linkInfo.linkList?.map(link => {
            return (
              <LinkCard
                key={link.text}
                linkInfo={link}
                sectionName={linkInfo.sectionName}
                onClick={onClick}
              />
            )
          })}

          {isResources && (
            <LastBlogPostCard
              onClick={() => {
                trackEvent({
                  category: router.pathname,
                  action: `click-on-link | Header-${linkInfo.sectionName} | ${router.pathname}`,
                  name: 'Acess Post'
                })

                onClick()
              }}
            />
          )}
        </S.SideRight>
      </S.NavSectionModalWrapper>
    </>
  )
}

export default NavSectionModal
