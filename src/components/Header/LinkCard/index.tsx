import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { ILinkListProps } from '../constant'

import useMatomo from '@/hooks/useMatomo'

import * as S from './styles'

interface ILinkCardProps {
  linkInfo: ILinkListProps
  sectionName?: string
  onClick?: () => void
}

const LinkCard = ({ linkInfo, sectionName, onClick }: ILinkCardProps) => {
  const { Icon, description, text, route } = linkInfo
  const isExternalLink = route.includes('https://')

  const router = useRouter()
  const { trackEvent } = useMatomo()

  function handleClickLink() {
    trackEvent({
      category: router.pathname,
      action: `click-on-Link | Header-${sectionName} | ${router.pathname}`,
      name: text
    })

    onClick && onClick()
  }

  return (
    <Link href={route} key={text} passHref>
      <S.CardLinkWrapper
        onClick={handleClickLink}
        target={isExternalLink ? '_blank' : '_self'}
      >
        <S.IconContent>
          <Icon />
        </S.IconContent>
        <S.TextWrapper isActive={router.route === route}>
          <p>{text}</p>
          <span>{description}</span>
        </S.TextWrapper>
      </S.CardLinkWrapper>
    </Link>
  )
}
export default LinkCard
