import Link from 'next/link'
import { useRouter } from 'next/router'
import useMatomo from '@/hooks/useMatomo'

import * as S from './styles'

type CategorieType = {
  name: string
  href: string
  isExterno: boolean
}

const PRODUCT: CategorieType[] = [
  {
    name: 'For Investors',
    href: '/investors',
    isExterno: false
  },
  {
    name: 'For Managers',
    href: '/managers',
    isExterno: false
  }
]

const COMMUNITY: CategorieType[] = [
  {
    name: 'KACY Token',
    href: '/dao',
    isExterno: false
  },
  {
    name: 'Incentives Program',
    href: '/incentives-program',
    isExterno: false
  },
  {
    name: 'Forum',
    href: 'http://gov.kassandra.finance/',
    isExterno: true
  }
]

const RESOURCES: CategorieType[] = [
  {
    name: 'Blog',
    href: 'https://kassandrafoundation.medium.com/',
    isExterno: true
  },
  {
    name: 'Docs',
    href: 'https://kassandra-1.gitbook.io/kassandras-onboarding-docs/',
    isExterno: true
  },
  {
    name: 'Github',
    href: 'https://github.com/KassandraFinance',
    isExterno: true
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/dao_kassandra',
    isExterno: true
  },
  {
    name: 'Discord',
    href: 'https://discord.gg/fAqpbP6tFw',
    isExterno: true
  },
  {
    name: 'Telegram',
    href: 'https://t.me/KassandraDAO',
    isExterno: true
  }
]

const ABOUT: CategorieType[] = [
  {
    name: 'About Us',
    href: '/foundation',
    isExterno: false
  }
]

const LEGAL: CategorieType[] = [
  {
    name: 'About Us',
    href: '#',
    isExterno: false
  }
]

const Categories = () => {
  const { trackEvent } = useMatomo()
  const router = useRouter()

  return (
    <S.Categories>
      <S.Categorie>
        <S.CategorieTitle>Product</S.CategorieTitle>

        <S.CategorieValueContainer>
          {PRODUCT.map(item => (
            <Link key={item.name} href={item.href} passHref>
              <a
                onClick={() =>
                  trackEvent({
                    category: router.pathname,
                    action: `click-on-link | Footer | ${router.pathname}`,
                    name: item.name
                  })
                }
              >
                <S.CategorieValue>{item.name}</S.CategorieValue>
              </a>
            </Link>
          ))}
        </S.CategorieValueContainer>
      </S.Categorie>

      <S.Categorie>
        <S.CategorieTitle>Community</S.CategorieTitle>

        <S.CategorieValueContainer>
          {COMMUNITY.map(item =>
            item.isExterno ? (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent({
                    category: router.pathname,
                    action: `click-on-link | Footer | ${router.pathname}`,
                    name: item.name
                  })
                }
              >
                <S.CategorieValue key={item.name}>{item.name}</S.CategorieValue>
              </a>
            ) : (
              <Link key={item.name} href={item.href} passHref>
                <a
                  onClick={() =>
                    trackEvent({
                      category: router.pathname,
                      action: `click-on-link | Footer | ${router.pathname}`,
                      name: item.name
                    })
                  }
                >
                  <S.CategorieValue>{item.name}</S.CategorieValue>
                </a>
              </Link>
            )
          )}
        </S.CategorieValueContainer>
      </S.Categorie>

      <S.Categorie>
        <S.CategorieTitle>Resources</S.CategorieTitle>

        <S.CategorieValueContainer>
          {RESOURCES.map(item => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent({
                  category: router.pathname,
                  action: `click-on-link | Footer | ${router.pathname}`,
                  name: item.name
                })
              }
            >
              <S.CategorieValue>{item.name}</S.CategorieValue>
            </a>
          ))}
        </S.CategorieValueContainer>
      </S.Categorie>

      <S.Categorie>
        <S.CategorieTitle>About Us</S.CategorieTitle>

        <S.CategorieValueContainer>
          {ABOUT.map(item => (
            <Link key={item.name} href={item.href} passHref>
              <a
                onClick={() =>
                  trackEvent({
                    category: router.pathname,
                    action: `click-on-link | Footer | ${router.pathname}`,
                    name: item.name
                  })
                }
              >
                <S.CategorieValue>{item.name}</S.CategorieValue>
              </a>
            </Link>
          ))}
        </S.CategorieValueContainer>
      </S.Categorie>
    </S.Categories>
  )
}

export default Categories
