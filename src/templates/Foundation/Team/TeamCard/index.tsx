import React from 'react'

import useMatomoEcommerce from '../../../../hooks/useMatomoEcommerce'

import FadeIn from '../../../../components/Animations/FadeIn'

import * as S from './styles'

interface ITeamCardProps {
  name: string;
  role: string;
  image: string;
  social: {
    github?: string,
    linkedin?: string,
    twitter?: string
  };
  isLastCard?: boolean;
}

const TeamCard = ({
  name,
  role,
  image,
  social,
  isLastCard = false
}: ITeamCardProps) => {
  const { trackEventFunction } = useMatomoEcommerce()

  return (
    <FadeIn threshold={0.5}>
      <S.TeamCardContainer isLastCard={isLastCard}>
        <S.Image>
          <img src={image} alt="" />
        </S.Image>
        <S.Name>{name}</S.Name>
        <S.Role>{role}</S.Role>
        <S.CardDivider />
        <S.Social>
          {social.github ? (
            <S.SocialIcon>
              <a
                href={social.github}
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  trackEventFunction(
                    'click-on-link',
                    `github-${name}`,
                    'section-team'
                  )
                }
              >
                <img src="assets/socialMidia/github.svg" alt="GitHub" />
              </a>
            </S.SocialIcon>
          ) : null}
          {social.twitter ? (
            <S.SocialIcon>
              <a
                href={social.twitter}
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  trackEventFunction(
                    'click-on-link',
                    `twitter-${name}`,
                    'section-team'
                  )
                }
              >
                <img src="assets/socialMidia/twitter.svg" alt="Twitter" />
              </a>
            </S.SocialIcon>
          ) : null}
          {social.linkedin ? (
            <S.SocialIcon>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  trackEventFunction(
                    'click-on-link',
                    `linkedin-${name}`,
                    'section-team'
                  )
                }
              >
                <img
                  src="assets/socialMidia/linkedin-gray.svg"
                  alt="LinkedIn"
                />
              </a>
            </S.SocialIcon>
          ) : null}
        </S.Social>
      </S.TeamCardContainer>
    </FadeIn>
  )
}
export default TeamCard
