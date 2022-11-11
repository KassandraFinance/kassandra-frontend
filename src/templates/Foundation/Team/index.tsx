import React from 'react'

import TeamCard from './TeamCard'
import FadeIn from '../../../components/Animations/FadeIn'
import SectionSubtitle from '../../../components/SectionSubtitle'

import * as S from './styles'

const Team = () => {
  return (
    <S.OurTeamContainer>
      <FadeIn threshold={0.5}>
        <S.TitleContainer>
          <S.TitlePurple>who is Kassandra Foundation?</S.TitlePurple>
          <S.Divider />
          <SectionSubtitle text="Meet Our Team" />
        </S.TitleContainer>
      </FadeIn>

      <S.TeamCardList>
        <TeamCard
          name="Kevin Voigt"
          role="PROJECT LEAD"
          image="assets/team/kevin.png"
          social={{
            github: 'https://github.com/Baruel',
            linkedin: 'https://linkedin.com/in/kevin-voigt-221b24196'
          }}
        />
        <TeamCard
          name="Hamilton Haskel"
          role="FINANCE LEAD"
          image="assets/team/hamilton.png"
          social={{
            linkedin: 'https://linkedin.com/in/hamilton-haskel-3585b477'
          }}
        />
        <TeamCard
          name="André Zanghelini"
          role="TECHNOLOGY LEAD"
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
          role="FRONTEND DEVELOPER"
          image="assets/team/jony.png"
          social={{
            github: 'https://github.com/jonyreis',
            linkedin: 'https://www.linkedin.com/in/jonyreis/'
          }}
        />
        <TeamCard
          name="Tiago Caitano"
          role="FRONTEND DEVELOPER"
          image="assets/team/tiago.png"
          social={{
            github: 'https://github.com/Tiago138',
            linkedin: 'https://www.linkedin.com/in/tiago-neves-caitano/'
          }}
        />
        <TeamCard
          name="Christian Daniel"
          role="FRONTEND DEVELOPER"
          image="assets/team/christian.png"
          social={{
            github: 'https://github.com/ChristanDaniel',
            linkedin: 'https://www.linkedin.com/in/christian-daniel-841921210/'
          }}
        />
        <TeamCard
          name="Guilherme Corrêa"
          role="BACKEND DEVELOPER"
          image="assets/team/guilherme.png"
          social={{
            github: 'https://github.com/guilherme-correa-s',
            linkedin: 'https://www.linkedin.com/in/guilherme-correa-s/'
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
      </S.TeamCardList>
    </S.OurTeamContainer>
  )
}
export default Team
