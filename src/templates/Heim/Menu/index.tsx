/* eslint-disable react/react-in-jsx-scope */
import Link from 'next/link'

import { useState } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import Image from 'next/image'


import MediaMatch from '../../../components/MediaMatch'
import Button from '../../../components/Button'
import * as S from './styles'

export type MenuProps = {
  username?: string
}

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <MediaMatch lessThan="large">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Link href="/" passHref>
          <img src={"./assets/HeimLogoMenu.svg"}
            alt="Logo menu"
          />
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="large">
        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink>HEIM Index</S.MenuLink>
          </Link>
          <Link href="/games" passHref>
            <S.MenuLinkDisable>Buy $Heim</S.MenuLinkDisable>
          </Link>
          <Link href="/" passHref>
            <S.MenuLinkDisable>Stake/Farm</S.MenuLinkDisable>
          </Link>
          <Link href="/" passHref>
            <S.MenuLinkDisable>Vote</S.MenuLinkDisable>
          </Link>
          <Link href="/" passHref>
            <S.MenuLinkDisable>About</S.MenuLinkDisable>
          </Link>
          <Link href="/" passHref>
            <Button as="a" backgroundBlack size={'large'} >Connect Wallet</Button>
          </Link>
        </S.MenuNav>
      </MediaMatch>



      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink>HEIM Index</S.MenuLink>
          </Link>
          <Link href="/games" passHref>
            <S.MenuLink>Buy $Heim</S.MenuLink>
          </Link>
          <Link href="/" passHref>
            <S.MenuLink>Stake/Farm</S.MenuLink>
          </Link>

          <Link href="/" passHref>
            <Button as="a" backgroundBlack>Conect Wallet</Button>
          </Link>
        </S.MenuNav>
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
