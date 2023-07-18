import Image from 'next/image'

import * as S from './styles'
import IconButton from '../../IconButton'

import TwitterIcon from '@assets/socialMidia/twitter.svg'
import InstagramIcon from '@assets/socialMidia/webpage.svg'
import DiscordIcon from '@assets/socialMidia/discord.svg'
import FacebookIcon from '@assets/socialMediaShare/facebook-share.svg'
import RedditIcon from '@assets/socialMediaShare/reddit-share.svg'
import WebsiteIcon from '@assets/socialMidia/webpage.svg'
import YoutubeIcon from '@assets/socialMidia/webpage.svg'

const socialIconByName = {
  TWITTER: TwitterIcon,
  INSTAGRAM: InstagramIcon,
  DISCORD: DiscordIcon,
  FACEBOOK: FacebookIcon,
  REDDIT: RedditIcon,
  WEBSITE: WebsiteIcon,
  YOUTUBE: YoutubeIcon
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
            {writer.socials.map(social => (
              <IconButton
                icon={socialIconByName[social.type]}
                key={social.type}
                href={social.link}
                isExternalLink
              />
            ))}
          </S.Socials>
        </S.ContentCard>
      ))}
    </S.AuthorsContainer>
  )
}

export default Authors
