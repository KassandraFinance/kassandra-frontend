import React from 'react'
import Image from 'next/image'

import useMatomoEcommerce from '../../../../hooks/useMatomoEcommerce'

import discordIcon from '../../../../../public/assets/socialMidia/discord.svg'
import telegramIcon from '../../../../../public/assets/socialMidia/telegram.svg'
import githubIcon from '../../../../../public/assets/socialMidia/github.svg'
import mediumIcon from '../../../../../public/assets/socialMidia/medium.svg'
import twitterIcon from '../../../../../public/assets/socialMidia/twitter.svg'
import discourseIcon from '../../../../../public/assets/socialMidia/discourse.svg'

import * as S from './styles'

type LinkType = {
  name: string,
  link: string,
  icon: string
}

const links: LinkType[] = [
  {
    name: 'Discord',
    link: 'https://discord.gg/fAqpbP6tFw',
    icon: discordIcon
  },
  {
    name: 'Telegram',
    link: 'https://t.me/KassandraDAO',
    icon: telegramIcon
  },
  {
    name: 'GitHub',
    link: 'https://github.com/KassandraFinance',
    icon: githubIcon
  },
  {
    name: 'Medium',
    link: 'https://kassandrafoundation.medium.com/',
    icon: mediumIcon
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/dao_kassandra',
    icon: twitterIcon
  },
  {
    name: 'Discourse',
    link: 'http://gov.kassandra.finance/',
    icon: discourseIcon
  }
]

const Social = () => {
  const { trackEventFunction } = useMatomoEcommerce()

  return (
    <S.Social>
      {links.map(link => {
        return (
          <S.Li
            key={link.name}
            onClick={() =>
              trackEventFunction(
                'click-on-link',
                `${link.name}`,
                `hero-foundation`
              )
            }
          >
            <S.Link href={link.link} target="_blank" rel="noopener noreferrer">
              <Image src={link.icon} />
            </S.Link>
          </S.Li>
        )
      })}
    </S.Social>
  )
}

export default Social
