import React from 'react'

import TeamCard from './TeamCard'

import * as S from './styles'

const Team = () => {
  return (
    <>
      <S.Container>
        <S.TitleAndIcon>
          <S.Icon>
            <img src="assets/team-icon.svg" alt="" />
          </S.Icon>
          <S.Title>Our Team</S.Title>
        </S.TitleAndIcon>
      </S.Container>
      <S.Divider />
      <S.Grid>
        <TeamCard
          name="Kevin Voigt"
          role="CTO"
          image="assets/team/kevin-voigt.png"
          social={{
            github: 'https://github.com/Baruel',
            linkedin: 'https://linkedin.com/in/kevin-voigt-221b24196'
          }}
        />
        <TeamCard
          name="Hamilton Haskel"
          role="CFO"
          image="assets/team/hamilton-haskel.png"
          social={{
            linkedin: 'https://linkedin.com/in/hamilton-haskel-3585b477'
          }}
        />
        <TeamCard
          name="André Zanghelini"
          role="SOLIDITY ENGINEER"
          image="assets/team/andre-zanghelini.png"
          social={{
            github: 'https://github.com/an-dz',
            linkedin: 'https://www.linkedin.com/in/zanghelini/'
          }}
        />
        <TeamCard
          name="Anthony Bet"
          role="DATA SCIENTIST"
          image="assets/team/anthony-bet.png"
          social={{
            github: 'github.com/AnthonyAposta',
            linkedin: 'https://linkedin.com/in/anthony-joão-bet'
          }}
        />
        <TeamCard
          name="Jorge Filho"
          role="BUSINESS DEVELOPMENT"
          image="assets/team/jorge-filho.png"
          social={{
            linkedin: 'https://www.linkedin.com/in/jorge-filho-35020018b/',
            twitter: 'https://twitter.com/AkademiaHash'
          }}
        />
        <TeamCard
          name="Jony Reis"
          role="FRONT-END DEVELOPER"
          image="assets/team/jony-reis.png"
          social={{
            github: 'https://github.com/jonyreis',
            linkedin: 'https://www.linkedin.com/in/jonyreis/'
          }}
        />
        <TeamCard
          name="Arthur Stofella"
          role="UI/UX DESIGNER"
          image="assets/team/arthur-stofella.png"
          social={{
            linkedin: 'https://linkedin.com/in/arthurstofella'
          }}
        />
        <TeamCard
          name="Pedro Jung"
          role="QUANTITATIVE ANALYST"
          image="assets/team/pedro-jung.png"
          social={{
            linkedin: 'https://www.linkedin.com/in/pedro-jung-tavares-b53021a4/'
          }}
        />
        <TeamCard
          name="Fernando Rigo"
          role="FRONT-END DEVELOPER"
          image="assets/team/fernando-rigo.png"
          social={{
            github: 'https://github.com/F-rigo',
            linkedin: 'https://linkedin.com/in/fernandorigo'
          }}
        />
      </S.Grid>
    </>
  )
}
export default Team
