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
  isLastCard?: boolean;
}

const TeamCard = ({ name, role, image, social, isLastCard = false }: ITeamCardProps) => (
  <S.Card
    isLastCard = {isLastCard}
  >
    <S.Image>
      <img src={image} alt="" />
    </S.Image>
    <S.Name>{name}</S.Name>
    <S.Role>{role}</S.Role>
    <S.CardDivider />
    <S.Social>
      {social.github ? (
        <S.SocialIcon>
          <a href={social.github} target="_blank" rel="noreferrer">
            <img src="assets/Github.svg" alt="GitHub" />
          </a>
        </S.SocialIcon>
      ) : null}
      {social.twitter ? (
        <S.SocialIcon>
          <a href={social.twitter} target="_blank" rel="noreferrer">
            <img src="assets/Twitter.svg" alt="Twitter" />
          </a>
        </S.SocialIcon>
      ) : null}
      {social.linkedin ? (
        <S.SocialIcon>
          <a href={social.linkedin} target="_blank" rel="noreferrer">
            <img src="assets/linkedin-icon.svg" alt="LinkedIn" />
          </a>
        </S.SocialIcon>
      ) : null}
    </S.Social>
  </S.Card>
)
export default TeamCard
