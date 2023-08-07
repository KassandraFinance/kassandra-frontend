import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import useMatomo from '@/hooks/useMatomo'

import Overlay from '../../Overlay'
import SocialMidia from '@/components/SocialMidia'

import kacyIcon from '../../../../public/assets/logos/kacy-96.svg'

import * as S from './styles'

interface INavProps {
  isShowMenu: boolean
  showOverlay: boolean
  setIsShowMenu: () => void
  setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>
}

const HeaderLinks = [
  {
    route: '/investors',
    name: 'Investors'
  },
  {
    route: '/managers',
    name: 'Managers'
  },
  {
    route: '/incentives-program',
    name: 'Incentives Program'
  },
  {
    route: '/dao',
    name: 'DAO'
  },
  {
    route: '/foundation',
    name: 'Foundation'
  },
  {
    route: '/blog',
    name: 'Blog'
  }
]

const Nav = ({
  isShowMenu,
  showOverlay,
  setIsShowMenu,
  setShowOverlay
}: INavProps) => {
  const { trackEvent } = useMatomo()

  const router = useRouter()

  function handleClose() {
    setIsShowMenu()
  }

  function animationClose() {
    setShowOverlay(false)
  }

  return (
    <>
      {showOverlay && (
        <Overlay
          isOpen={isShowMenu}
          onClick={handleClose}
          onAnimationEnd={animationClose}
        />
      )}

      <S.NavWrapper isShowMenu={isShowMenu}>
        <S.Nav>
          <Link href="/" passHref>
            <S.MenuLink
              active={false}
              onClick={() => {
                trackEvent({
                  category: 'header',
                  action: 'click-on-logo',
                  name: 'Kassandra'
                })
                handleClose()
              }}
            >
              <Image src={kacyIcon} width={27} height={24} />
            </S.MenuLink>
          </Link>

          {HeaderLinks.map(item => {
            return (
              <Link href={item.route} passHref key={item.route}>
                <S.MenuLink
                  active={router.asPath === item.route}
                  onClick={() => {
                    handleClose()
                    trackEvent({
                      category: 'header',
                      action: 'click-on-link',
                      name: item.name
                    })
                  }}
                >
                  {item.name}
                </S.MenuLink>
              </Link>
            )
          })}
        </S.Nav>

        <S.NavFooter>
          <SocialMidia />

          <S.ImageWrapper>
            <img
              src="/assets/images/kassandra-footer.svg"
              alt="kassandra"
              width="185"
              height="20"
            />
            <span>© 2021-{new Date().getFullYear()} Kassandra.</span>
          </S.ImageWrapper>
        </S.NavFooter>
      </S.NavWrapper>
    </>
  )
}

export default Nav
