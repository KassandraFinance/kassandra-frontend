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
    url: 'url-here',
    text: 'Enter the Kassandra Server'
  },
  {
    type: 'X',
    icon: XIcon,
    url: 'url-here',
    text: 'Follow @dao_kassandra'
  },
  {
    type: 'Telegram',
    icon: TelegramIcon,
    url: 'url-here',
    text: 'Join Kassandra Group'
  },
  {
    type: 'Github',
    icon: GithubIcon,
    url: 'url-here',
    text: 'Watch Kassandra Development'
  },
  {
    type: 'Mailing List',
    icon: MailIcon,
    url: 'url-here',
    text: "Don't miss Kassandra's News"
  },
  {
    type: 'Medium',
    icon: MediumIcon,
    url: 'url-here',
    text: 'Development Logs'
  },
  {
    type: 'Forum',
    icon: ForumIcon,
    url: 'url-here',
    text: 'Shape Kassandra your way'
  },
  {
    type: 'Documentation',
    icon: DocumentIcon,
    url: 'url-here',
    text: 'Get onboarded on Kassandra'
  }
]

export function CommunityTemplate() {
  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.TextWrapper>
          <S.H1>Join the Kassandra Community</S.H1>
          <S.Text>Something here to support the title above</S.Text>
        </S.TextWrapper>

        <S.LinksWrapper>
          {socialMedias.map(socialMedia => {
            const Icon = socialMedia.icon
            return (
              <S.Link key={socialMedia.type}>
                <S.IconWrapper key={socialMedia.type} href={socialMedia.url}>
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
