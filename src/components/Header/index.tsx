/* eslint-disable react/react-in-jsx-scope */
import React from 'react'
import Link from 'next/link'

import { useRouter } from 'next/router'
import { useSelector, RootStateOrAny } from 'react-redux'


import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'


import MediaMatch from '../MediaMatch'
import Button from '../Button'
import * as S from './styles'

import useConnect from '../../hooks/useConnect'
import substr from '../../utils/substr'
import web3 from '../../utils/web3'


export type MenuProps = {
  username?: string
}

const Header = () => {
  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)
  const { connect, isLogged } = useConnect()
  const [isOpen, setIsOpen] = React.useState(false)
  const { asPath } = useRouter()


  return (
    <S.Wrapper>
      <MediaMatch lessThan="large">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Link href="/" passHref>
          {asPath === '/heim'
            ? <img src="./assets/HeimLogoMenu.svg"
            alt="Logo menu"
          />
        : <img src="./assets/logo-header.svg"
          alt="Logo menu"
          />}
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="large">
        <S.MenuNav>
        {asPath === '/' ?
          <Link href="/heim" passHref>
            <S.MenuLink> HEIM Index </S.MenuLink>
          </Link>
        : <Link href="/" passHref><S.MenuLink> Home </S.MenuLink></Link>}


          <Link href="/" passHref>
            <S.MenuLinkDisable>
              Buy $Heim
            </S.MenuLinkDisable>
          </Link>

          <Link href="/" passHref>
            <S.MenuLinkDisable>
              Stake/Farm
            </S.MenuLinkDisable>
          </Link>

          <Link href="/" passHref>
            <S.MenuLinkDisable>
              Vote
            </S.MenuLinkDisable>
          </Link>

          <Link href="/" passHref>
            <S.MenuLinkDisable>
              About
            </S.MenuLinkDisable>
          </Link>

          <Button backgroundBlack size="large" disabled>
            Connect Wallet
          </Button>
        </S.MenuNav>
      </MediaMatch>



      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />

        <S.MenuNav>
          {asPath === '/' ?
            <Link href="/heim" passHref>
              <S.MenuLink> HEIM Index </S.MenuLink>
            </Link>
          : <Link href="/" passHref><S.MenuLink> Home </S.MenuLink></Link>}
          <Link href="/" passHref>
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
          <Button backgroundBlack size="large" disabled>
            Connect Wallet
          </Button>
        </S.MenuNav>
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Header
