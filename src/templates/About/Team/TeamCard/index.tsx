import React from 'react'

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
}

const TeamCard = ({ name, role, image, social }: ITeamCardProps) => (
  <S.Card>
    <S.Image>
      <img src={image} alt="" />
    </S.Image>
    <S.Name>{name}</S.Name>
    <S.Role>{role}</S.Role>
    <S.CardDivider />
    <S.Social>
      <S.SocialIcon>
        {social.github ? (
          <a href={social.github} target="_blank" rel="noreferrer">
            <img src="assets/github-icon.svg" alt="GitHub icon" />
          </a>
        ) : null}
      </S.SocialIcon>
      <S.SocialIcon>
        {social.twitter ? (
          <a href={social.twitter} target="_blank" rel="noreferrer">
            <img src="assets/twitter-icon.svg" alt="Twitter icon" />
          </a>
        ) : null}
      </S.SocialIcon>
      <S.SocialIcon>
        {social.linkedin ? (
          <a href={social.linkedin} target="_blank" rel="noreferrer">
            <img src="assets/linkedin-icon.svg" alt="LinkedIn icon" />
          </a>
        ) : null}
      </S.SocialIcon>
    </S.Social>
  </S.Card>
)
export default TeamCard
