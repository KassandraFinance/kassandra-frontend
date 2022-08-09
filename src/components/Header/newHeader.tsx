import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import useMatomoEcommerce from '../../hooks/useMatomoEcommerce'

import Button from '../Button'

import kacy96 from '../../../public/assets/logos/kacy-96.svg'
import logoKassandra from '../../../public/assets/logos/kassandra-header.svg'

import * as S from './newStylesHeader'

export type MenuProps = {
  username?: string
}

const Header = () => {
  const { trackEventFunction } = useMatomoEcommerce()

  const router = useRouter()
  const pathName = router.pathname

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
              <Image src={kacy96} width={64} height={64} alt="Kassandra" />
            </a>
          </Link>
          <Link href="/" passHref>
            <a className="logo-mobile">
              <Image src={kacy96} width={35} height={35} alt="Kassandra" />
            </a>
          </Link>
        </S.LogoWrapper>
        <S.Menu>
          <Link href="/investors" passHref>
            <S.MenuLink active={pathName === '/investors'}>Invest</S.MenuLink>
          </Link>
          <Link href="/managers" passHref>
            <S.MenuLink active={pathName === '/managers'}>Manager</S.MenuLink>
          </Link>
          <Link href="/token-holder" passHref>
            <S.MenuLink active={pathName === '/token-holder'}>DAO</S.MenuLink>
          </Link>
          <Link href="/fundation" passHref>
            <S.MenuLink active={pathName === '/fundation'}>
              Fundation
            </S.MenuLink>
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
