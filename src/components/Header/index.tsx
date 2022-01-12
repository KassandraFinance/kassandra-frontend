/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Link from 'next/link'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'
import { useMatomo } from '@datapunt/matomo-tracker-react'
import { useRouter } from 'next/router'


import { actionGetUserAddressWallet } from '../../store/modules/userWalletAddress/actions'

import substr from '../../utils/substr'
import web3 from '../../utils/web3'

import Button from '../Button'
import ModalLogOut from '../ModalLogOut'
import DropdownInvest from '../DropdownInvest'
import ModalWalletConnect from '../ModalWalletConnect'

import * as S from './styles'

declare let window: {
  ethereum: any,
}

export type MenuProps = {
  username?: string
}

const Header = () => {
  const [isModalWallet, setIsModalWallet] = React.useState<boolean>(false)
  const [isModalLogout, setIsModalLogout] = React.useState<boolean>(false)

  const [isOpen, setIsOpen] = React.useState(false)

  const dispatch = useDispatch()
  const { asPath } = useRouter()
  const { trackEvent } = useMatomo()

  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)


  function clickMatomoEvent(action: string, name: string) {
    trackEvent({
      category: 'header',
      action,
      name
    })
  }

  React.useEffect(() => {

    const loginInt = setInterval(async () => {
      if (!window.ethereum) {
        return
      }
      window.ethereum?.request({ method: 'eth_accounts' })
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
    <>
      <S.Wrapper pageHeim={asPath === '/heim'} id="top">
        <S.MenuIconContainer>
          <S.IconWrapper onClick={() => setIsOpen(true)}>
            <img src="/assets/menuIcon.svg" alt="Open menu" />
          </S.IconWrapper>
        </S.MenuIconContainer>

        <S.LogoWrapper>
          <Link href="/" passHref>
            <a>
              <img src="/assets/new-kassandra-logo-header.svg" alt="Kassandra" />
            </a>
          </Link>
        </S.LogoWrapper>

        <S.MenuDesktop>
        <S.MenuNav>
          {/* {asPath === '/' ? (
            <Link href="/heim" passHref>
              <S.MenuLink onClick={clickMatomoEvent('click-on-heim', 'heim-header')}> HEIM Index </S.MenuLink>
            </Link>
          ) : (
            <Link href="/" passHref>
              <S.MenuLink> Home </S.MenuLink>
            </Link>
          )} */}

          <DropdownInvest />

          <Link href="/farm" passHref>
            <S.MenuLink onClick={() => clickMatomoEvent('click-on-link', 'stake-farm')}>Stake/Farm</S.MenuLink>
          </Link>

          {/* <Link href="/" passHref> */}
            <S.MenuLinkDisable onClick={() => clickMatomoEvent('click-on-link', 'vote')} >Vote</S.MenuLinkDisable>
          {/* </Link> */}

          <Link href="/about" passHref>
            <S.MenuLink onClick={() => clickMatomoEvent('click-on-link', 'about')}>About</S.MenuLink>
          </Link>

          {web3.currentProvider !== null ? (
            userWalletAddress ? (
              <Button
                icon={
                  <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.48356 0.550049C10.3804 0.550049 11.5 1.64157 11.5 3.51004H9.17289V3.5291C8.09287 3.5291 7.21733 4.38272 7.21733 5.4357C7.21733 6.48868 8.09287 7.3423 9.17289 7.3423H11.5V7.51389C11.5 9.35852 10.3804 10.45 8.48356 10.45H3.51644C1.61956 10.45 0.5 9.35852 0.5 7.51389V3.48621C0.5 1.64157 1.61956 0.550049 3.51644 0.550049H8.48356ZM11.0893 4.32988C11.3161 4.32988 11.5 4.50913 11.5 4.73026V6.12208C11.4974 6.34213 11.315 6.51989 11.0893 6.52246H9.21689C8.67013 6.52963 8.19202 6.16465 8.068 5.64543C8.00589 5.32311 8.09308 4.99051 8.30619 4.73677C8.5193 4.48303 8.83654 4.33409 9.17289 4.32988H11.0893ZM9.43689 4.97335H9.256C9.14494 4.97208 9.03798 5.0142 8.95899 5.09032C8.88 5.16644 8.83556 5.27022 8.83556 5.3785C8.83554 5.60568 9.02301 5.79058 9.256 5.79319H9.43689C9.66909 5.79319 9.85733 5.60966 9.85733 5.38327C9.85733 5.15688 9.66909 4.97335 9.43689 4.97335ZM6.21022 2.6902H3.10578C2.87547 2.69019 2.68801 2.87083 2.68533 3.09535C2.68533 3.32253 2.87278 3.50743 3.10578 3.51004H6.21022C6.44243 3.51004 6.63067 3.32651 6.63067 3.10012C6.63067 2.87373 6.44243 2.6902 6.21022 2.6902Z" fill="white" />
                  </svg>
                }
                backgroundBlack
                size="medium"
                onClick={() => {
                  clickMatomoEvent('open-modal', 'your-wallet')
                  setIsModalLogout(true)
                }}
                text={substr(userWalletAddress)} />
            ) : (
              <Button
                icon={
                  <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.48356 0.550049C10.3804 0.550049 11.5 1.64157 11.5 3.51004H9.17289V3.5291C8.09287 3.5291 7.21733 4.38272 7.21733 5.4357C7.21733 6.48868 8.09287 7.3423 9.17289 7.3423H11.5V7.51389C11.5 9.35852 10.3804 10.45 8.48356 10.45H3.51644C1.61956 10.45 0.5 9.35852 0.5 7.51389V3.48621C0.5 1.64157 1.61956 0.550049 3.51644 0.550049H8.48356ZM11.0893 4.32988C11.3161 4.32988 11.5 4.50913 11.5 4.73026V6.12208C11.4974 6.34213 11.315 6.51989 11.0893 6.52246H9.21689C8.67013 6.52963 8.19202 6.16465 8.068 5.64543C8.00589 5.32311 8.09308 4.99051 8.30619 4.73677C8.5193 4.48303 8.83654 4.33409 9.17289 4.32988H11.0893ZM9.43689 4.97335H9.256C9.14494 4.97208 9.03798 5.0142 8.95899 5.09032C8.88 5.16644 8.83556 5.27022 8.83556 5.3785C8.83554 5.60568 9.02301 5.79058 9.256 5.79319H9.43689C9.66909 5.79319 9.85733 5.60966 9.85733 5.38327C9.85733 5.15688 9.66909 4.97335 9.43689 4.97335ZM6.21022 2.6902H3.10578C2.87547 2.69019 2.68801 2.87083 2.68533 3.09535C2.68533 3.32253 2.87278 3.50743 3.10578 3.51004H6.21022C6.44243 3.51004 6.63067 3.32651 6.63067 3.10012C6.63067 2.87373 6.44243 2.6902 6.21022 2.6902Z" fill="white" />
                  </svg>
                }
                as='button'
                backgroundBlack
                size="medium"
                onClick={() => {
                  clickMatomoEvent('open-metamask', 'connect-wallet')
                  setIsModalWallet(true)
                }}
                text='Connect Wallet' />
            )
          ) : (
            <Button
              as='a'
              backgroundBlack
              size="medium"
              href="https://metamask.io/download.html"
              target="_blank"
              onClick={() => {
                clickMatomoEvent('open-site-metamask', 'install-metamask')
              }}
              text='Install MetaMask!' />
          )}

        </S.MenuNav>
      </S.MenuDesktop>

        <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
          <S.CloseMenuIcon onClick={() => setIsOpen(false)}>
            <img src="/assets/closeMenuIcon.svg" alt="Close menu" />
          </S.CloseMenuIcon>
          <S.MenuNav>

            {/* <Link href="/heim" passHref>
              <S.MenuLink
                onClick={() => {
                  setIsOpen(false)
                  clickMatomoEvent()
                }}
              >
                HEIM Index
              </S.MenuLink>
            </Link> */}

            {/* <Link href="/" passHref>
              <S.MenuLink onClick={() => setIsOpen(false)}> Home </S.MenuLink>
            </Link> */}

            <Link href="/" passHref>
              <S.MenuLink
                onClick={() => clickMatomoEvent('click-on-link', 'home')}
              > Home </S.MenuLink>
            </Link>

            <Link href="/products/ahype" passHref>
              <S.MenuLink 
                onClick={() => {
                  clickMatomoEvent('click-on-link', 'invest')
                  setIsOpen(false)
                }}>Invest</S.MenuLink>
            </Link>

            <Link href="/farm" passHref>
              <S.MenuLink onClick={() => {
                clickMatomoEvent('click-on-link', 'stake-farm')
                setIsOpen(false)
              }}>Stake/Farm</S.MenuLink>
            </Link>
            
            {/* <Link href="/" passHref> */}
              <S.MenuLinkDisable>Vote</S.MenuLinkDisable>
            {/* </Link> */}
            <Link href="/about" passHref>
              <S.MenuLink onClick={() => {
                clickMatomoEvent('click-on-link', 'about')
                setIsOpen(false)
              }}>About</S.MenuLink>
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
                  onClick={() => {
                    clickMatomoEvent('click-on-btn', 'connect-wallet')
                    setIsModalWallet(true)
                    setIsOpen(false)
                  }}
                  text='Connect Wallet' />
              )
            ) : (
              <Button
                onClick={() => setIsOpen(false)}
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
          setModalOpen={setIsModalWallet}
        />
      </S.Wrapper>
      <ModalLogOut
        modalOpen={isModalLogout}
        setModalOpen={setIsModalLogout}
        userWalletAddress={userWalletAddress}
      />
    </>
  )
}

export default Header