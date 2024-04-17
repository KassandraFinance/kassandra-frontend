import { DiscordIcon, GithubIcon, TwitterIcon } from '@/Icons'

import * as S from './styles'

const socialMedias = [
  {
    type: 'Discord',
    icon: <DiscordIcon />,
    url: '',
    text: 'Enter the Kassandra Server'
  },
  {
    type: 'X',
    icon: <TwitterIcon />,
    url: '',
    text: 'Follow @dao_kassandra'
  },
  {
    type: 'Telegram',
    icon: <DiscordIcon />,
    url: '',
    text: 'Join Kassandra Group'
  },
  {
    type: 'Github',
    icon: <GithubIcon />,
    url: '',
    text: 'Watch Kassandra Development'
  },
  {
    type: 'Mailing List',
    icon: <DiscordIcon />,
    url: '',
    text: "Don't miss Kassandra's News"
  },
  {
    type: 'Medium',
    icon: <DiscordIcon />,
    url: '',
    text: 'Development Logs'
  },
  {
    type: 'Forum',
    icon: <DiscordIcon />,
    url: '',
    text: 'Shape Kassandra your way'
  },
  {
    type: 'Documentation',
    icon: <DiscordIcon />,
    url: '',
    text: 'Get onboarded on Kassandra'
  }
]

export function CommunityTemplate() {
  return (
    <S.Wrapper>
      <S.TextWrapper>
        <S.H1>Join the Kassandra Community</S.H1>
        <S.Text>Something here to support the title above</S.Text>
      </S.TextWrapper>
    </S.Wrapper>
  )
}
