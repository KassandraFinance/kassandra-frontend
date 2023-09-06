import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import useMatomo from '@/hooks/useMatomo'

import discordIcon from '../../../../../public/assets/socialMidia/discord.svg'
import telegramIcon from '../../../../../public/assets/socialMidia/telegram.svg'
import githubIcon from '../../../../../public/assets/socialMidia/github.svg'
import mediumIcon from '../../../../../public/assets/socialMidia/medium.svg'
import twitterIcon from '../../../../../public/assets/socialMidia/twitter.svg'
import discourseIcon from '../../../../../public/assets/socialMidia/discourse.svg'

import * as S from './styles'

type LinkType = {
  name: string
  link: string
  icon: string
  alt: string
}

const links: LinkType[] = [
  {
    name: 'Discord',
    link: 'https://discord.gg/fAqpbP6tFw',
    icon: discordIcon,
    alt: 'Discord logo'
  },
  {
    name: 'Telegram',
    link: 'https://t.me/KassandraDAO',
    icon: telegramIcon,
    alt: 'Telegram logo'
  },
  {
    name: 'GitHub',
    link: 'https://github.com/KassandraFinance',
    icon: githubIcon,
    alt: 'GitHub logo'
  },
  {
    name: 'Medium',
    link: 'https://kassandrafoundation.medium.com/',
    icon: mediumIcon,
    alt: 'Medium logo'
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/dao_kassandra',
    icon: twitterIcon,
    alt: 'Twitter logo'
  },
  {
    name: 'Discourse',
    link: 'http://gov.kassandra.finance/',
    icon: discourseIcon,
    alt: 'Discourse logo'
  }
]

const Social = () => {
  const { trackEvent } = useMatomo()
  const router = useRouter()

  return (
    <S.Social>
      {links.map(link => {
        return (
          <S.Li
            key={link.name}
            onClick={() =>
              trackEvent({
                category: router.pathname,
                action: `click-on-link | social-link-hero | ${router.pathname}`,
                name: `${link.name}`
              })
            }
          >
            <S.Link href={link.link} target="_blank" rel="noopener noreferrer">
              <Image src={link.icon} alt={link.alt} />
            </S.Link>
          </S.Li>
        )
      })}
    </S.Social>
  )
}

export default Social
