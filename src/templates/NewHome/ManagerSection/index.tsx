import React from 'react'

import SectionCard from '../SectionCard'
import HomeHeading from '../HomeHeading'

import managerImg from '../../../../public/assets/images/kassandra-head.png'

import * as S from './styles'

const ManagerSection = () => {
  return (
    <S.Container>
      <SectionCard
        number="02"
        title="Managers"
        color="#26DBDB"
        subtitle="Tokenize your portfolio  in an one-stop-shop and earn money with it"
        text="Become a pillar of decentralized asset management and earn additional income whenever someone invests in your tokenized portfolios. Manage, track, evaluate in one place with no extra fees."
        btnText="Become a Manager"
        img={managerImg}
      />

      <HomeHeading title="kassandra for managers" color="#26DBDB" />
    </S.Container>
  )
}

export default ManagerSection
