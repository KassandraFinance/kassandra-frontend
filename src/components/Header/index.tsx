import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import useMatomo from '@/hooks/useMatomo'

import Nav from './Nav'
import Button from '../Button'

import kacy96 from '../../../public/assets/logos/kacy-96.svg'
import logoKassandra from '../../../public/assets/logos/kassandra-header.svg'

import * as S from './styles'

const Header = () => {
  const { trackEvent } = useMatomo()
  const [isShowMenu, setIsShowMenu] = React.useState(false)
  const [showOverlay, setShowOverlay] = React.useState(false)

  const router = useRouter()

  function handleHamburgerMenu() {
    const width = window.innerWidth
    if (width > 768) {
      return
    }

    setIsShowMenu(!isShowMenu)
    setShowOverlay(true)
    const userDashBoardButton = document.getElementById(
      'userDashBoardButton'
    )?.style
    if (userDashBoardButton) {
      if (isShowMenu) {
        userDashBoardButton.zIndex = '1021'
      } else {
        userDashBoardButton.zIndex = '0'
      }
    }
  }

  return (
    <S.Wrapper id="top" data-fixed={router.pathname === '/blog/[slug]'}>
      <S.LogoWrapper>
        <Link href="/" passHref>
          <a
            onClick={() => {
              trackEvent({
                category: 'header',
                action: 'click-on-logo-desktop',
                name: 'Kassandra'
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
                category: 'header',
                action: 'click-on-logo-ipad',
                name: 'Kassandra'
              })
            }}
            className="logo-ipad"
          >
            <Image src={kacy96} width={27} height={24} alt="Kassandra" />
          </a>
        </Link>
      </S.LogoWrapper>

      <S.MenuWrapper>
        <S.HamburgerButton
          onClick={() => {
            setIsShowMenu(!isShowMenu)
            setShowOverlay(true)
          }}
        >
          <S.HamburgerMenu isShowMenu={isShowMenu}>
            <div></div>
            <div></div>
            <div></div>
          </S.HamburgerMenu>
        </S.HamburgerButton>

        <Nav
          isShowMenu={isShowMenu}
          showOverlay={showOverlay}
          setIsShowMenu={handleHamburgerMenu}
          setShowOverlay={setShowOverlay}
        />

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
