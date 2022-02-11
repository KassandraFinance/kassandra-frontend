import React from 'react'

import Header from '../../components/Header'
import TitleSection from '../../components/TitleSection'
import VotingPowerTable from '../../components/Governance/VotingPowerTable'

import votingPower from '../../../public/assets/iconGradient/voting-power-rank.svg'

import * as S from '../../templates/Gov/Proposals/styles'

const Leaderboard = () => {
  return (
    <S.BackgroundVote>
      <Header />
      <S.VoteContent>
        <S.VotingPowerLeaderboard>
          <TitleSection image={votingPower} title="Voting Power Leaderboard" />
          <VotingPowerTable />
        </S.VotingPowerLeaderboard>
      </S.VoteContent>
    </S.BackgroundVote>
  )
}

export default Leaderboard
