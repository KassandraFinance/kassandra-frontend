import Image from 'next/image'
import { useRouter } from 'next/router'
import useMatomo from '@/hooks/useMatomo'

import * as S from './styles'

const socialLinksList = [
  {
    name: 'discord',
    href: 'https://discord.gg/fAqpbP6tFw',
    src: '/assets/socialMidia/discord.svg',
    alt: 'Join our Discord community'
  },
  {
    name: 'telegram',
    href: 'https://t.me/KassandraDAO',
    src: '/assets/socialMidia/telegram.svg',
    alt: 'Join our Telegram group'
  },
  {
    name: 'github',
    href: 'https://github.com/KassandraFinance',
    src: '/assets/socialMidia/github.svg',
    alt: 'Access our GitHub repository'
  },
  {
    name: 'medium',
    href: 'https://kassandrafoundation.medium.com/',
    src: '/assets/socialMidia/medium.svg',
    alt: 'Read our Medium blog'
  },
  {
    name: 'twitter',
    href: 'https://twitter.com/dao_kassandra',
    src: '/assets/socialMidia/twitter.svg',
    alt: 'Follow our Twitter feed'
  },
  {
    name: 'discourse',
    href: 'http://gov.kassandra.finance/',
    src: '/assets/socialMidia/discourse.svg',
    alt: 'Follow our Discourse'
  },
  {
    name: 'gitbook',
    href: 'https://kassandra-1.gitbook.io/kassandras-onboarding-docs/',
    src: '/assets/logos/gitbook.svg',
    alt: 'Read our GitBook'
  }
]

const SocialMedia = () => {
  const { trackEvent } = useMatomo()
  const router = useRouter()

  return (
    <S.SocialMedia>
      {socialLinksList.map(item => (
        <li key={item.name}>
          <S.SocialWrapper
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
            <S.IconWrapper>
              <Image src={item.src} alt={item.alt} layout="fill" />
            </S.IconWrapper>
          </S.SocialWrapper>
        </li>
      ))}
    </S.SocialMedia>
  )
}

export default SocialMedia
