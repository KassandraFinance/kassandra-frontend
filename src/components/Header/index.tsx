/* eslint-disable react/react-in-jsx-scope */
import React from 'react'
import Link from 'next/link'
import { useMatomo } from '@datapunt/matomo-tracker-react'

import { useRouter } from 'next/router'
// import { useSelector, RootStateOrAny } from 'react-redux'

import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import MediaMatch from '../MediaMatch'
import Button from '../Button'
import * as S from './styles'

// import useConnect from '../../hooks/useConnect'
// import substr from '../../utils/substr'
// import web3 from '../../utils/web3'

export type MenuProps = {
  username?: string
}

const Header = () => {
  // const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)
  // const { connect, isLogged } = useConnect()
  const [isOpen, setIsOpen] = React.useState(false)
  const { asPath } = useRouter()
  const { trackEvent } = useMatomo()

  function clickMatomoEvent() {
    trackEvent({
      category: 'header',
      action: 'click-on-heim',
      name: 'heim-header'
    })
  }

  return (
    <S.Wrapper pageHeim={asPath === '/heim'}>
      <MediaMatch lessThan="large">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Link href="/" passHref>
          {asPath === '/heim' ? (
            <img src="./assets/HeimLogoMenu.svg" alt="Logo menu" />
          ) : (
            <img src="./assets/logo-header.svg" alt="Logo menu" />
          )}
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="large">
        <S.MenuNav>
          {asPath === '/' ? (
            <Link href="/heim" passHref>
              <S.MenuLink onClick={clickMatomoEvent}> HEIM Index </S.MenuLink>
            </Link>
          ) : (
            <Link href="/" passHref>
              <S.MenuLink> Home </S.MenuLink>
            </Link>
          )}

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

          {/* {web3.currentProvider !== null ? (
            isLogged ? (
              <S.ButtonConnectWallet
                type="button"
                style={{ backgroundColor: '${theme.colors.cyan}', color: '#211426' }}
              >
                {substr(userWalletAddress)}
              </S.ButtonConnectWallet>
            ) : (
              <S.ButtonConnectWallet type="button" onClick={connect}>
                Connect Wallet
              </S.ButtonConnectWallet>
            )
          ) : (
            <S.LinkInstallMetaMask
              href="https://metamask.io/download.html"
              target="_blank"
            >
              Install MetaMask!
            </S.LinkInstallMetaMask>
          )} */}
          <Button backgroundBlack size="large" disabled>
            Connect Wallet
          </Button>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />

        <S.MenuNav>
          {asPath === '/' ? (
            <Link href="/heim" passHref>
              <S.MenuLink
                onClick={() => {
                  setIsOpen(false)
                  clickMatomoEvent()
                }}
              >
                HEIM Index
              </S.MenuLink>
            </Link>
          ) : (
            <Link href="/" passHref>
              <S.MenuLink onClick={() => setIsOpen(false)}> Home </S.MenuLink>
            </Link>
          )}
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
