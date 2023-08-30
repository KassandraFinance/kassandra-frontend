import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import useMatomo from '@/hooks/useMatomo'

import SocialMidia from '@/components/SocialMidia'
import NavSectionButton from '../NavSectionButton'

import { headerLinkInfo } from '../constant'

import kacyIcon from '../../../../public/assets/logos/kacy-96.svg'
import { CloseIcon } from '@/Icons'

import * as S from './styles'

interface INavProps {
  isShowMenu: boolean
  setIsShowMenu: () => void
}

const NavegationMenuMobile = ({ isShowMenu, setIsShowMenu }: INavProps) => {
  const { trackEvent } = useMatomo()

  function handleClose() {
    setIsShowMenu()
  }

  return (
    <S.NavMenuMobileWrapper isShowMenu={isShowMenu}>
      <S.NavWrapper>
        <S.Nav>
          <S.IconsWrapper
            onClick={() => {
              trackEvent({
                category: 'header',
                action: 'click-on-logo',
                name: 'Kassandra'
              })
              handleClose()
            }}
          >
            <Link href="/" passHref>
              <a>
                <Image src={kacyIcon} width={28} height={28} />
              </a>
            </Link>

            <S.CloseIconWrapper>
              <CloseIcon width={14} height={14} />
            </S.CloseIconWrapper>
          </S.IconsWrapper>

          <S.MenuLink>
            {headerLinkInfo.map(item => {
              return (
                <NavSectionButton
                  key={item.sectionName}
                  linkInfo={item}
                  onClickLink={handleClose}
                />
              )
            })}
          </S.MenuLink>
        </S.Nav>

        <S.NavFooter>
          <SocialMidia />

          <S.ImageWrapper>
            <img
              src="/assets/images/kassandra-footer.svg"
              alt="kassandra"
              width="185"
              height="20"
            />
            <span>© 2021-{new Date().getFullYear()} Kassandra.</span>
          </S.ImageWrapper>
        </S.NavFooter>
      </S.NavWrapper>
    </S.NavMenuMobileWrapper>
  )
}

export default NavegationMenuMobile
