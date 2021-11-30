import React from 'react'

import TeamCard from './TeamCard'

import * as S from './styles'

const Team = () => {
  return (
    <>
      <S.Container>
        <S.TitleAndIcon>
          <S.Icon>
            <img src="assets/team-icon.svg" alt="Team icon" />
          </S.Icon>
          <S.Title>Our Team</S.Title>
        </S.TitleAndIcon>
      </S.Container>
      <S.Divider />
      <S.Grid>
        <TeamCard
          name="Kevin Voigt"
          role="CTO"
          image="assets/kevin-photo.svg"
          social={{
            github: 'https://github.com/Baruel',
            linkedin: 'linkedin.com/in/kevin-voigt-221b24196'
          }}
        />
        <TeamCard
          name="Hamilton Haskel"
          role="CFO"
          image="assets/hamilton-photo.svg"
          social={{
            linkedin: 'linkedin.com/in/hamilton-haskel-3585b477',
            twitter: 'https://twitter.com/kevinvoigt'
          }}
        />
        <TeamCard
          name="André Zanghelini"
          role="SOLIDITY ENGINEER"
          image="assets/andre-photo.svg"
          social={{
            github: 'https://github.com/an-dz',
            linkedin: 'https://www.linkedin.com/in/kevin-voigt-b6a7b2b1/',
            twitter: 'https://twitter.com/kevinvoigt'
          }}
        />
        <TeamCard
          name="Anthony João Bet"
          role="DATA SCIENTIST"
          image="assets/anthony-photo.svg"
          social={{
            github: 'github.com/AnthonyAposta',
            linkedin: 'linkedin.com/in/anthony-joão-bet',
            twitter: 'https://twitter.com/kevinvoigt'
          }}
        />
        <img src="assets/kassandra-team-logo.svg" alt="" />
        <TeamCard
          name="Jony Reis"
          role="FRONT-END DEVELOPER"
          image="assets/jony-photo.svg"
          social={{
            github: 'https://github.com/jonyreis',
            linkedin: 'https://www.linkedin.com/in/jonyreis/'
          }}
        />
        <TeamCard
          name="Arthur Stofella"
          role="UX/UI DESIGNER"
          image="assets/arthur-photo.svg"
          social={{
            linkedin: 'linkedin.com/in/arthurstofella',
            twitter: 'https://twitter.com/kevinvoigt'
          }}
        />
        <TeamCard
          name="Pedro Jung"
          role="QUANTITATIVE ANALYST"
          image="assets/pedro-photo.svg"
          social={{
            linkedin: 'https://www.linkedin.com/in/kevin-voigt-b6a7b2b1/',
            twitter: 'https://twitter.com/kevinvoigt'
          }}
        />
        <TeamCard
          name="Fernando Rigo"
          role="FRONT-END DEVELOPER"
          image="assets/fernando-photo.svg"
          social={{
            linkedin: 'https://www.linkedin.com/in/kevin-voigt-b6a7b2b1/',
            twitter: 'https://twitter.com/kevinvoigt'
          }}
        />
      </S.Grid>
    </>
  )
}
export default Team
