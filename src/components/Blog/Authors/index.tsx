import Image from 'next/image'

import IconButton from '@/components/IconButton'

import { DiscordIcon, GithubIcon, RedditIcon, TwitterIcon } from '@/Icons'

import * as S from './styles'

const socialIconByName = {
  TWITTER: TwitterIcon,
  DISCORD: DiscordIcon,
  REDDIT: RedditIcon,
  GITHUB: GithubIcon
}

export type SocialIconType = keyof typeof socialIconByName

interface IAuthorsProps {
  writers: {
    id: string
    name: string
    biography: string
    profilePicture: {
      url: string
    }
    socials: {
      link: string
      type: SocialIconType
      username: string
    }[]
  }[]
}

const Authors = ({ writers }: IAuthorsProps) => {
  return (
    <S.AuthorsContainer>
      {writers.map(writer => (
        <S.ContentCard key={writer.name}>
          <S.AuthorHeader>
            <Image src={writer.profilePicture.url} width={40} height={40} />
            <S.AuthorTitle>
              <p className="author-name">{writer.name}</p>
              {writer.socials.map(social => {
                if (social.type === 'TWITTER')
                  return (
                    <a
                      key={social.username}
                      className="author-handle"
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @{social.username}
                    </a>
                  )
              })}
            </S.AuthorTitle>
          </S.AuthorHeader>
          <p className="author-biography">{writer.biography}</p>
          <S.Socials>
            {writer.socials.map(social => {
              const Icon = socialIconByName[social.type]
              return (
                <IconButton
                  icon={<Icon />}
                  key={social.type}
                  href={social.link}
                  isExternalLink
                />
              )
            })}
          </S.Socials>
        </S.ContentCard>
      ))}
    </S.AuthorsContainer>
  )
}

export default Authors
