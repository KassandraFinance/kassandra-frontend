import React from 'react'

import Header from '../../components/Header'
import TitleSection from '../../components/TitleSection'
import VotingPowerTable from '../../components/Governance/VotingPowerTable'
import Breadcrumb from '../../components/Breadcrumb'
import BreadcrumbItem from '../../components/Breadcrumb/BreadcrumbItem'

import votingPower from '../../../public/assets/iconGradient/voting-power-rank.svg'

import * as S from '../../templates/Gov/Proposals/styles'

const Leaderboard = () => {
  return (
    <>
      <Header />
      <Breadcrumb>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/gov">Vote</BreadcrumbItem>
        <BreadcrumbItem href="/gov/leaderboard" isLastPage>
          Voting Power Leaderboard
        </BreadcrumbItem>
      </Breadcrumb>
      <S.VoteContent>
        <S.VotingPowerLeaderboard>
          <TitleSection image={votingPower} title="Voting Power Leaderboard" />
          <VotingPowerTable />
        </S.VotingPowerLeaderboard>
      </S.VoteContent>
    </>
  )
}

export default Leaderboard
