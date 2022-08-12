import React from 'react'

import TeamCard from './TeamCard'

import * as S from './styles'

const Team = () => {
  return (
    <S.OurTeamContainer>
      <S.TitleContainer>
        <S.TitlePurple>who is Kassandra Foundation?</S.TitlePurple>
        <S.Divider />
        <S.Title>Meet Our Team</S.Title>
      </S.TitleContainer>
      <S.TeamCardList>
        <TeamCard
          name="Kevin Voigt"
          role="CTO"
          image="assets/team/kevin.png"
          social={{
            github: 'https://github.com/Baruel',
            linkedin: 'https://linkedin.com/in/kevin-voigt-221b24196'
          }}
        />
        <TeamCard
          name="Hamilton Haskel"
          role="CFO"
          image="assets/team/hamilton.png"
          social={{
            linkedin: 'https://linkedin.com/in/hamilton-haskel-3585b477'
          }}
        />
        <TeamCard
          name="André Zanghelini"
          role="SOLIDITY ENGINEER"
          image="assets/team/andre.png"
          social={{
            github: 'https://github.com/an-dz',
            linkedin: 'https://www.linkedin.com/in/zanghelini/'
          }}
        />
        <TeamCard
          name="Antônio Farias"
          role="PRODUCT MANAGER"
          image="assets/team/tony.png"
          social={{
            linkedin: 'https://www.linkedin.com/in/tonifarias/',
            twitter: 'https://twitter.com/tonifariasjr'
          }}
        />
        <TeamCard
          name="Arthur Stofella"
          role="PRODUCT DESIGNER"
          image="assets/team/toffa.png"
          social={{
            linkedin: 'https://linkedin.com/in/arthurstofella'
          }}
        />
        <TeamCard
          name="Jony Reis"
          role="FRONT-END WEB3 DEVELOPER"
          image="assets/team/jony.png"
          social={{
            github: 'https://github.com/jonyreis',
            linkedin: 'https://www.linkedin.com/in/jonyreis/'
          }}
        />
        <TeamCard
          name="Edmar Alencar"
          role="FRONT-END DEV"
          image="assets/team/edmar.png"
          social={{
            github: 'https://github.com/jonyreis'
            // linkedin: 'https://www.linkedin.com/in/jonyreis/'
          }}
        />
        <TeamCard
          name="Tiago Caitano"
          role="FRONT-END DEV"
          image="assets/team/tiago.png"
          social={{
            github: 'https://github.com/jonyreis'
            // linkedin: 'https://www.linkedin.com/in/jonyreis/'
          }}
        />
        <TeamCard
          name="Christian Daniel"
          role="FRONT-END DEV"
          image="assets/team/christian.png"
          social={{
            github: 'https://github.com/jonyreis'
            // linkedin: 'https://www.linkedin.com/in/jonyreis/'
          }}
        />
        <TeamCard
          name="Guilherme Corrêa"
          role="BACK-END DEV"
          image="assets/team/guilherme.png"
          social={{
            github: 'https://github.com/jonyreis'
            // linkedin: 'https://www.linkedin.com/in/jonyreis/'
          }}
        />
        <TeamCard
          name="Pedro Jung"
          role="QUANTITATIVE ANALYST"
          image="assets/team/jung.png"
          social={{
            linkedin: 'https://www.linkedin.com/in/pedro-jung-tavares-b53021a4/'
          }}
        />
        <TeamCard
          name="Felipe Gabriel"
          role="QUANTITATIVE ANALYST"
          image="assets/team/felipe.png"
          social={{
            linkedin: 'https://www.linkedin.com/in/pedro-jung-tavares-b53021a4/'
          }}
        />
        <TeamCard
          name="Ricardo Werneck"
          role="COMMUNITY MANAGER"
          image="assets/team/ricardo.png"
          social={{
            linkedin: 'https://www.linkedin.com/in/ricardo-werneck-a94b0a15b/'
          }}
          isLastCard
        />

        <TeamCard
          name="Jorge Filho"
          role="BUSINESS DEVELOPMENT"
          image="assets/team/jorge.png"
          social={{
            linkedin: 'https://www.linkedin.com/in/jorge-filho-35020018b/',
            twitter: 'https://twitter.com/AkademiaHash'
          }}
          isLastCard
        />
      </S.TeamCardList>
    </S.OurTeamContainer>
  )
}
export default Team
