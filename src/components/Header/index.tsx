/* eslint-disable react/react-in-jsx-scope */
import React from 'react'
import Link from 'next/link'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'
import { useMatomo } from '@datapunt/matomo-tracker-react'
import { useRouter } from 'next/router'

import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import { actionGetUserAddressWallet } from '../../store/modules/userWalletAddress/actions'

import substr from '../../utils/substr'
import web3 from '../../utils/web3'
import useConnect from '../../hooks/useConnect'

import Button from '../Button'
import MediaMatch from '../MediaMatch'
import ModalWalletConnect from '../ModalWalletConnect'

import * as S from './styles'

declare let window: {
  ethereum: any,
}

export type MenuProps = {
  username?: string
}

const Header = () => {
  const [isModalWallet, setIsModaWallet] = React.useState<boolean>(false)
  const [isOpen, setIsOpen] = React.useState(false)

  const dispatch = useDispatch()
  const { asPath } = useRouter()
  const { connect } = useConnect()
  const { trackEvent } = useMatomo()

  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)


  function clickMatomoEvent() {
    trackEvent({
      category: 'header',
      action: 'click-on-heim',
      name: 'heim-header'
    })
  }

  React.useEffect(() => {

    const loginInt = setInterval(async () => {
      window.ethereum.request({ method: 'eth_accounts' })
        .then((result: string[]) => {
          if (!result[0]) {
            dispatch(actionGetUserAddressWallet(''))
          }
      })
    }, 5000)

    return () => clearInterval(loginInt)

  }, [])

  React.useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

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

          <Link href="/products" passHref>
            <S.MenuLink>Buy $Heim</S.MenuLink>
          </Link>

          <Link href="/farm" passHref>
            <S.MenuLink>Stake/Farm</S.MenuLink>
          </Link>

          <Link href="/" passHref>
            <S.MenuLinkDisable>Vote</S.MenuLinkDisable>
          </Link>

          <Link href="/" passHref>
            <S.MenuLinkDisable>About</S.MenuLinkDisable>
          </Link>

          {web3.currentProvider !== null ? (
            userWalletAddress ? (
              <Button
                backgroundBlack
                size="large"
                text={substr(userWalletAddress)} />
            ) : (
              <Button
                as='button'
                backgroundBlack
                size="large"
                onClick={() => setIsModaWallet(true)}
                text='Connect Wallet' />

            )
          ) : (
            <Button
              as='a'
              backgroundBlack
              size="large"
              href="https://metamask.io/download.html"
              target="_blank"
              text='Install MetaMask!' />
          )}

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
          <Link href="/products" passHref>
            <S.MenuLink onClick={() => setIsOpen(false)}>Buy $Heim</S.MenuLink>
          </Link>
          <Link href="/farm" passHref>
            <S.MenuLink onClick={() => setIsOpen(false)}>Stake/Farm</S.MenuLink>
          </Link>
          <Link href="/" passHref>
            <S.MenuLinkDisable>Vote</S.MenuLinkDisable>
          </Link>
          <Link href="/" passHref>
            <S.MenuLinkDisable>About</S.MenuLinkDisable>
          </Link>
          {web3.currentProvider !== null ? (
            userWalletAddress ? (
              <Button
                backgroundBlack
                size="large"
                text={substr(userWalletAddress)} />
            ) : (
              <Button
                as='button'
                backgroundBlack
                size="large"
                onClick={() => setIsModaWallet(true)}
                text='Connect Wallet' />

            )
          ) : (
            <Button
              as='a'
              backgroundBlack
              size="large"
              href="https://metamask.io/download.html"
              target="_blank"
              text='Install MetaMask!' />
          )}
        </S.MenuNav>
      </S.MenuFull>
      <ModalWalletConnect
        modalOpen={isModalWallet}
        setModalOpen={setIsModaWallet}
        connect={connect}
      />
    </S.Wrapper>
  )
}

export default Header
