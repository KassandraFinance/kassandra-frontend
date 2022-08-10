import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import useMatomoEcommerce from '../../hooks/useMatomoEcommerce'

import Button from '../Button'

import kacy64 from '../../../public/assets/logos/kacy-64.svg'
import logoKassandra from '../../../public/assets/logos/kassandra-header.svg'

import * as S from './styles'

export type MenuProps = {
  username?: string
}

const Header = () => {
  const { trackEventFunction } = useMatomoEcommerce()

  return (
    <>
      <S.Wrapper id="top">
        <S.LogoWrapper>
          <Link href="/" passHref>
            <a className="logo-desktop">
              <Image src={logoKassandra} alt="Kassandra" />
            </a>
          </Link>
          <Link href="/" passHref>
            <a className="logo-ipad">
              <Image src={kacy64} width={64} height={64} alt="Kassandra" />
            </a>
          </Link>
        </S.LogoWrapper>
        <S.Menu>
          <Link href="/" passHref>
            <a className="logo-mobile">
              <Image src={kacy64} width={64} height={64} alt="Kassandra" />
            </a>
          </Link>
          <Link href="/investors" passHref>
            <S.MenuLink>Invest</S.MenuLink>
          </Link>
          <Link href="/" passHref>
            <S.MenuLink>Manager</S.MenuLink>
          </Link>
          <Link href="/" passHref>
            <S.MenuLink>DAO</S.MenuLink>
          </Link>
          <Link href="/" passHref>
            <S.MenuLink>Fundation</S.MenuLink>
          </Link>
          <S.MenuBottom>
            <S.ButtonsWrapper>
              <Button
                href="https://app.kassandra.finance"
                className="button-mobile"
                as="a"
                backgroundBlack
                onClick={() => {
                  trackEventFunction('open-app', 'lauch-app', 'header')
                }}
                text="Launch App"
              />
            </S.ButtonsWrapper>
          </S.MenuBottom>
        </S.Menu>
      </S.Wrapper>
    </>
  )
}

export default Header
