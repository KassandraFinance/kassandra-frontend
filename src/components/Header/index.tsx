import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { headerLinkInfo } from './constant'

import useMatomo from '@/hooks/useMatomo'

import Button from '../Button'
import NavMenuMobile from './NavMenuMobile'
import NavSectionButton from './NavSectionButton'

import kacy96 from '../../../public/assets/logos/kacy-96.svg'
import logoKassandra from '../../../public/assets/logos/kassandra-header.svg'

import * as S from './styles'

const Header = () => {
  const [isShowMenu, setIsShowMenu] = React.useState(false)

  const { trackEvent } = useMatomo()
  const router = useRouter()

  function handleHamburgerMenu() {
    setIsShowMenu(!isShowMenu)
  }

  return (
    <S.Wrapper id="top" data-fixed={router.pathname === '/blog/[slug]'}>
      <S.LogoWrapper>
        <Link href="/" passHref>
          <a
            onClick={() => {
              trackEvent({
                category: router.pathname,
                action: `click-on-link | Header | ${router.pathname}`,
                name: 'logo-desktop'
              })
            }}
            className="logo-desktop"
          >
            <Image src={logoKassandra} alt="Kassandra" />
          </a>
        </Link>

        <Link href="/" passHref>
          <a
            onClick={() => {
              trackEvent({
                category: router.pathname,
                action: `click-on-link | Header | ${router.pathname}`,
                name: 'logo-ipad'
              })
            }}
            className="logo-ipad"
          >
            <Image src={kacy96} width={27} height={24} alt="Kassandra" />
          </a>
        </Link>
      </S.LogoWrapper>

      <S.MenuWrapper>
        <S.NavWrapper>
          <NavMenuMobile
            isShowMenu={isShowMenu}
            setIsShowMenu={handleHamburgerMenu}
          />
        </S.NavWrapper>

        <S.NavegationLinkWrapper>
          {headerLinkInfo.map(linkInfo => {
            return (
              <NavSectionButton
                key={linkInfo.sectionName}
                linkInfo={linkInfo}
              />
            )
          })}
        </S.NavegationLinkWrapper>

        <S.HamburgerButton
          onClick={() => {
            setIsShowMenu(!isShowMenu)
            trackEvent({
              category: router.pathname,
              action: `click-on-button | Header | ${router.pathname}`,
              name: 'open-NavMenuMobile'
            })
          }}
        >
          <S.HamburgerMenu isShowMenu={isShowMenu}>
            <div></div>
            <div></div>
            <div></div>
          </S.HamburgerMenu>
        </S.HamburgerButton>

        <S.ButtonsWrapper>
          <Button
            as="a"
            backgroundBlack
            text="Launch App"
            className="button-mobile"
            href="https://app.kassandra.finance"
            onClick={() => {
              trackEvent({
                category: 'header',
                action: 'click-on-button-header',
                name: 'Launch App'
              })
            }}
          />
        </S.ButtonsWrapper>
      </S.MenuWrapper>
    </S.Wrapper>
  )
}

export default Header
