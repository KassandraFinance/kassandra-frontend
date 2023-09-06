import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { IHeaderLinkInfoProps } from '../constant'
import useMatomo from '@/hooks/useMatomo'

import LinkCard from '../LinkCard'
import NavSectionModal from '../NavSectionModal'

import { ArrowDownIcon } from '@/Icons/ArrowDown'

import * as S from './styles'

interface ILinksInfoCardProps {
  linkInfo: IHeaderLinkInfoProps
  onClickLink?: () => void
}

const NavSectionButton = ({ linkInfo, onClickLink }: ILinksInfoCardProps) => {
  const [openCard, setIsOpen] = React.useState(false)
  const router = useRouter()

  const { trackEvent } = useMatomo()

  function handleClickLink() {
    setIsOpen(!openCard)
  }

  function handleClickButtonHeader(typeAction: string) {
    trackEvent({
      category: router.pathname,
      action: `${typeAction} | Header | ${router.pathname}`,
      name: linkInfo.sectionName
    })
  }

  return (
    <S.NavSectionButtonWrapper>
      {linkInfo.route ? (
        <Link href={linkInfo.route} passHref>
          <S.NavegationLinkButton
            isActive={openCard}
            as="a"
            onClick={() => {
              handleClickButtonHeader('click-on-link')
              onClickLink && onClickLink()
            }}
          >
            {linkInfo.sectionName}
          </S.NavegationLinkButton>
        </Link>
      ) : (
        <S.NavegationLinkButton
          onClick={() => {
            handleClickButtonHeader('click-on-button')
            setIsOpen(!openCard)
          }}
          isActive={openCard}
        >
          {linkInfo.sectionName}
          <ArrowDownIcon stroke="#FCFCFC" />
        </S.NavegationLinkButton>
      )}

      <S.NavegationCardDesktopWrapper>
        <NavSectionModal
          linkInfo={linkInfo}
          isOpenCard={openCard}
          onClick={handleClickLink}
        />
      </S.NavegationCardDesktopWrapper>

      <S.LinkDropDownMobile
        openCard={openCard}
        height={(linkInfo.linkList?.length ?? 1) * 10}
      >
        {linkInfo.linkList?.map(link => {
          return (
            <LinkCard
              key={link.text}
              sectionName={linkInfo.sectionName}
              linkInfo={link}
              onClick={() => {
                onClickLink && onClickLink()
                handleClickLink
              }}
            />
          )
        })}
      </S.LinkDropDownMobile>
    </S.NavSectionButtonWrapper>
  )
}

export default NavSectionButton
