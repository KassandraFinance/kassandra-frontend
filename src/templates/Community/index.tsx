import {
  DiscordIcon,
  DocumentIcon,
  ForumIcon,
  GithubIcon,
  MediumIcon,
  TelegramIcon,
  XIcon
} from '@/Icons'

import * as S from './styles'
import { MailIcon } from '@/Icons/Mail'

const socialMedias = [
  {
    type: 'Discord',
    icon: DiscordIcon,
    url: 'https://discord.com/invite/fAqpbP6tFw',
    text: 'Enter the Kassandra Server'
  },
  {
    type: 'X',
    icon: XIcon,
    url: 'https://twitter.com/dao_kassandra',
    text: 'Follow @dao_kassandra'
  },
  {
    type: 'Telegram',
    icon: TelegramIcon,
    url: 'https://t.me/KassandraDAO',
    text: 'Join Kassandra Group'
  },
  {
    type: 'Github',
    icon: GithubIcon,
    url: 'https://github.com/KassandraFinance',
    text: 'Watch Kassandra Development'
  },
  {
    type: 'Mailing List',
    icon: MailIcon,
    url: '/blog',
    text: "Don't miss Kassandra's News"
  },
  {
    type: 'Medium',
    icon: MediumIcon,
    url: 'https://kassandrafoundation.medium.com/',
    text: 'Development Logs'
  },
  {
    type: 'Forum',
    icon: ForumIcon,
    url: 'https://gov.kassandra.finance/',
    text: 'Shape Kassandra your way'
  },
  {
    type: 'Documentation',
    icon: DocumentIcon,
    url: 'https://kassandra-1.gitbook.io/kassandras-onboarding-docs',
    text: 'Get onboarded on Kassandra'
  }
]

export function CommunityTemplate() {
  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.TextWrapper>
          <S.H1>Join the Kassandra Community</S.H1>
          <S.Text>Join the future of decentralized asset management</S.Text>
        </S.TextWrapper>

        <S.LinksWrapper>
          {socialMedias.map(socialMedia => {
            const Icon = socialMedia.icon
            return (
              <S.Link key={socialMedia.type}>
                <S.IconWrapper
                  key={socialMedia.type}
                  href={socialMedia.url}
                  target="_blank"
                  rel="noreferrer nofollow"
                >
                  <Icon fill="#FCFCFC" />
                </S.IconWrapper>
                <S.LinkContent>
                  <S.LinkType>{socialMedia.type}</S.LinkType>
                  <S.LinkText>{socialMedia.text}</S.LinkText>
                </S.LinkContent>
              </S.Link>
            )
          })}
        </S.LinksWrapper>
      </S.ContentWrapper>
    </S.Wrapper>
  )
}
