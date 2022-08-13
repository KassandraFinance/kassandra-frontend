import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import useMatomoEcommerce from '../../hooks/useMatomoEcommerce'

import Button from '../Button'
import ModalSocialMediaMobile from '../Modals/ModalSocialMediaMobile'

import kacy96 from '../../../public/assets/logos/kacy-96.svg'
import logoKassandra from '../../../public/assets/logos/kassandra-header.svg'
import options from '../../../public/assets/utilities/options.svg'

import * as S from './newStylesHeader'

export type MenuProps = {
  username?: string
}

const Header = () => {
  const { trackEventFunction } = useMatomoEcommerce()
  const [isOpenModal, setIsOpenModal] = React.useState(false)

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
              <Image src={kacy96} width={27} height={24} alt="Kassandra" />
            </a>
          </Link>
        </S.LogoWrapper>
        <S.Menu>
          <Link href="/investors" passHref>
            <S.MenuLink active={pathName === '/investors'}>
              Investors
            </S.MenuLink>
          </Link>
          <Link href="/managers" passHref>
            <S.MenuLink active={pathName === '/managers'}>Managers</S.MenuLink>
          </Link>
          <Link href="/dao" passHref>
            <S.MenuLink active={pathName === '/dao'}>DAO</S.MenuLink>
          </Link>
          <Link href="/foundation" passHref>
            <S.MenuLink active={pathName === '/foundation'}>
              Foundation
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
            <S.OptionsContainer>
              <S.ButtonOptions onClick={() => setIsOpenModal(true)}>
                <Image src={options} alt="options" />
              </S.ButtonOptions>
            </S.OptionsContainer>
            {isOpenModal && (
              <ModalSocialMediaMobile setModalOpen={setIsOpenModal} />
            )}
          </S.MenuBottom>
        </S.Menu>
      </S.Wrapper>
    </>
  )
}

export default Header