import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector, RootStateOrAny } from 'react-redux'
import { useMatomo } from '@datapunt/matomo-tracker-react'

import substr from '../../utils/substr'

import Button from '../Button'
import ModalLogOut from '../ModalLogOut'
import DropdownInvest from '../DropdownInvest'
import ModalWalletConnect from '../ModalWalletConnect'
import ModalSocialMediaMobile from '../ModalSocialMediaMobile'

import options from '../../../public/assets/options.svg'
import kacy64 from '../../../public/assets/logo-64.svg'
import logoKassandra from '../../../public/assets/new-kassandra-logo-header.svg'

import * as S from './styles'

export type MenuProps = {
  username?: string
}

const Header = () => {
  const [isModalWallet, setIsModalWallet] = React.useState<boolean>(false)
  const [isModalLogout, setIsModalLogout] = React.useState<boolean>(false)
  const [isModalLanguages, setIsModalLanguages] = React.useState<boolean>(false)
  // eslint-disable-next-line prettier/prettier
  const [isModalSocialMedia, setIsModalSocialMedia] = React.useState<boolean>(false)

  const { trackEvent } = useMatomo()

  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)

  function clickMatomoEvent(action: string, name: string) {
    trackEvent({
      category: 'header',
      action,
      name
    })
  }

  return (
    <>
      <S.Wrapper id="top">
        <Link href="/" passHref>
          <S.LogoWrapper>
            <a className="logo-desktop">
              <Image src={logoKassandra} alt="Kassandra" />
            </a>
            <a className="logo-ipad">
              <Image src={kacy64} alt="Kassandra" />
            </a>
          </S.LogoWrapper>
        </Link>
        <S.Menu>
          <Link href="/" passHref>
            <a className="logo-mobile">
              <Image src={kacy64} alt="Kassandra" />
            </a>
          </Link>
          {process.env.NEXT_PUBLIC_MASTER === '1' ? (
            <S.MenuLinkDisable
              onClick={() => clickMatomoEvent('click-on-link', 'invest')}
            >
              Invest
            </S.MenuLinkDisable>
          ) : (
            <DropdownInvest />
          )}
          <Link href="/farm" passHref>
            <S.MenuLink
              onClick={() => clickMatomoEvent('click-on-link', 'stake-farm')}
            >
              Stake/Farm
            </S.MenuLink>
          </Link>
          <Link href="/vote" passHref>
            <S.MenuLink
              onClick={() => clickMatomoEvent('click-on-link', 'vote')}
            >
              Vote
            </S.MenuLink>
          </Link>
          <Link href="/about" passHref>
            <S.MenuLink
              onClick={() => clickMatomoEvent('click-on-link', 'about')}
            >
              About
            </S.MenuLink>
          </Link>
          {userWalletAddress ? (
            <Button
              className="connect-wallet"
              icon={
                <svg
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.48356 0.550049C10.3804 0.550049 11.5 1.64157 11.5 3.51004H9.17289V3.5291C8.09287 3.5291 7.21733 4.38272 7.21733 5.4357C7.21733 6.48868 8.09287 7.3423 9.17289 7.3423H11.5V7.51389C11.5 9.35852 10.3804 10.45 8.48356 10.45H3.51644C1.61956 10.45 0.5 9.35852 0.5 7.51389V3.48621C0.5 1.64157 1.61956 0.550049 3.51644 0.550049H8.48356ZM11.0893 4.32988C11.3161 4.32988 11.5 4.50913 11.5 4.73026V6.12208C11.4974 6.34213 11.315 6.51989 11.0893 6.52246H9.21689C8.67013 6.52963 8.19202 6.16465 8.068 5.64543C8.00589 5.32311 8.09308 4.99051 8.30619 4.73677C8.5193 4.48303 8.83654 4.33409 9.17289 4.32988H11.0893ZM9.43689 4.97335H9.256C9.14494 4.97208 9.03798 5.0142 8.95899 5.09032C8.88 5.16644 8.83556 5.27022 8.83556 5.3785C8.83554 5.60568 9.02301 5.79058 9.256 5.79319H9.43689C9.66909 5.79319 9.85733 5.60966 9.85733 5.38327C9.85733 5.15688 9.66909 4.97335 9.43689 4.97335ZM6.21022 2.6902H3.10578C2.87547 2.69019 2.68801 2.87083 2.68533 3.09535C2.68533 3.32253 2.87278 3.50743 3.10578 3.51004H6.21022C6.44243 3.51004 6.63067 3.32651 6.63067 3.10012C6.63067 2.87373 6.44243 2.6902 6.21022 2.6902Z"
                    fill="white"
                  />
                </svg>
              }
              backgroundBlack
              size="medium"
              onClick={() => {
                clickMatomoEvent('open-modal', 'your-wallet')
                setIsModalLogout(true)
              }}
              text={substr(userWalletAddress)}
            />
          ) : (
            <Button
              className="connect-wallet"
              icon={
                <svg
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.48356 0.550049C10.3804 0.550049 11.5 1.64157 11.5 3.51004H9.17289V3.5291C8.09287 3.5291 7.21733 4.38272 7.21733 5.4357C7.21733 6.48868 8.09287 7.3423 9.17289 7.3423H11.5V7.51389C11.5 9.35852 10.3804 10.45 8.48356 10.45H3.51644C1.61956 10.45 0.5 9.35852 0.5 7.51389V3.48621C0.5 1.64157 1.61956 0.550049 3.51644 0.550049H8.48356ZM11.0893 4.32988C11.3161 4.32988 11.5 4.50913 11.5 4.73026V6.12208C11.4974 6.34213 11.315 6.51989 11.0893 6.52246H9.21689C8.67013 6.52963 8.19202 6.16465 8.068 5.64543C8.00589 5.32311 8.09308 4.99051 8.30619 4.73677C8.5193 4.48303 8.83654 4.33409 9.17289 4.32988H11.0893ZM9.43689 4.97335H9.256C9.14494 4.97208 9.03798 5.0142 8.95899 5.09032C8.88 5.16644 8.83556 5.27022 8.83556 5.3785C8.83554 5.60568 9.02301 5.79058 9.256 5.79319H9.43689C9.66909 5.79319 9.85733 5.60966 9.85733 5.38327C9.85733 5.15688 9.66909 4.97335 9.43689 4.97335ZM6.21022 2.6902H3.10578C2.87547 2.69019 2.68801 2.87083 2.68533 3.09535C2.68533 3.32253 2.87278 3.50743 3.10578 3.51004H6.21022C6.44243 3.51004 6.63067 3.32651 6.63067 3.10012C6.63067 2.87373 6.44243 2.6902 6.21022 2.6902Z"
                    fill="white"
                  />
                </svg>
              }
              as="button"
              backgroundBlack
              size="medium"
              onClick={() => {
                clickMatomoEvent('open-metamask', 'connect-wallet')
                setIsModalWallet(true)
              }}
              text="Connect Wallet"
            />
          )}
        </S.Menu>
      </S.Wrapper>
      <S.MenuBottom>
        {/* <S.KacyAmount>
          <Image src={kacy64} alt="kacy" />
          <span>100b KACY</span>
        </S.KacyAmount> */}
        {userWalletAddress ? (
          <Button
            className="connect-wallet button-mobile"
            icon={
              <svg
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.48356 0.550049C10.3804 0.550049 11.5 1.64157 11.5 3.51004H9.17289V3.5291C8.09287 3.5291 7.21733 4.38272 7.21733 5.4357C7.21733 6.48868 8.09287 7.3423 9.17289 7.3423H11.5V7.51389C11.5 9.35852 10.3804 10.45 8.48356 10.45H3.51644C1.61956 10.45 0.5 9.35852 0.5 7.51389V3.48621C0.5 1.64157 1.61956 0.550049 3.51644 0.550049H8.48356ZM11.0893 4.32988C11.3161 4.32988 11.5 4.50913 11.5 4.73026V6.12208C11.4974 6.34213 11.315 6.51989 11.0893 6.52246H9.21689C8.67013 6.52963 8.19202 6.16465 8.068 5.64543C8.00589 5.32311 8.09308 4.99051 8.30619 4.73677C8.5193 4.48303 8.83654 4.33409 9.17289 4.32988H11.0893ZM9.43689 4.97335H9.256C9.14494 4.97208 9.03798 5.0142 8.95899 5.09032C8.88 5.16644 8.83556 5.27022 8.83556 5.3785C8.83554 5.60568 9.02301 5.79058 9.256 5.79319H9.43689C9.66909 5.79319 9.85733 5.60966 9.85733 5.38327C9.85733 5.15688 9.66909 4.97335 9.43689 4.97335ZM6.21022 2.6902H3.10578C2.87547 2.69019 2.68801 2.87083 2.68533 3.09535C2.68533 3.32253 2.87278 3.50743 3.10578 3.51004H6.21022C6.44243 3.51004 6.63067 3.32651 6.63067 3.10012C6.63067 2.87373 6.44243 2.6902 6.21022 2.6902Z"
                  fill="white"
                />
              </svg>
            }
            backgroundBlack
            size="medium"
            onClick={() => {
              clickMatomoEvent('open-modal', 'your-wallet')
              setIsModalLogout(true)
            }}
            text={substr(userWalletAddress)}
          />
        ) : (
          <Button
            className="connect-wallet button-mobile"
            icon={
              <svg
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.48356 0.550049C10.3804 0.550049 11.5 1.64157 11.5 3.51004H9.17289V3.5291C8.09287 3.5291 7.21733 4.38272 7.21733 5.4357C7.21733 6.48868 8.09287 7.3423 9.17289 7.3423H11.5V7.51389C11.5 9.35852 10.3804 10.45 8.48356 10.45H3.51644C1.61956 10.45 0.5 9.35852 0.5 7.51389V3.48621C0.5 1.64157 1.61956 0.550049 3.51644 0.550049H8.48356ZM11.0893 4.32988C11.3161 4.32988 11.5 4.50913 11.5 4.73026V6.12208C11.4974 6.34213 11.315 6.51989 11.0893 6.52246H9.21689C8.67013 6.52963 8.19202 6.16465 8.068 5.64543C8.00589 5.32311 8.09308 4.99051 8.30619 4.73677C8.5193 4.48303 8.83654 4.33409 9.17289 4.32988H11.0893ZM9.43689 4.97335H9.256C9.14494 4.97208 9.03798 5.0142 8.95899 5.09032C8.88 5.16644 8.83556 5.27022 8.83556 5.3785C8.83554 5.60568 9.02301 5.79058 9.256 5.79319H9.43689C9.66909 5.79319 9.85733 5.60966 9.85733 5.38327C9.85733 5.15688 9.66909 4.97335 9.43689 4.97335ZM6.21022 2.6902H3.10578C2.87547 2.69019 2.68801 2.87083 2.68533 3.09535C2.68533 3.32253 2.87278 3.50743 3.10578 3.51004H6.21022C6.44243 3.51004 6.63067 3.32651 6.63067 3.10012C6.63067 2.87373 6.44243 2.6902 6.21022 2.6902Z"
                  fill="white"
                />
              </svg>
            }
            as="button"
            backgroundBlack
            size="medium"
            onClick={() => {
              clickMatomoEvent('open-metamask', 'connect-wallet')
              setIsModalWallet(true)
            }}
            text="Connect Wallet"
          />
        )}
        <S.OptionsContainer>
          <S.ButtonOptions onClick={() => setIsModalSocialMedia(true)}>
            <Image src={options} alt="options" />
          </S.ButtonOptions>
        </S.OptionsContainer>
      </S.MenuBottom>

      <ModalSocialMediaMobile
        modalOpen={isModalSocialMedia}
        setModalOpen={setIsModalSocialMedia}
      />

      <ModalWalletConnect
        modalOpen={isModalWallet}
        setModalOpen={setIsModalWallet}
      />

      <ModalLogOut
        modalOpen={isModalLogout}
        setModalOpen={setIsModalLogout}
        userWalletAddress={userWalletAddress}
      />
    </>
  )
}

export default Header
