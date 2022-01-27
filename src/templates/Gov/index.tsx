import React from 'react'

import Header from '../../components/Header'
import ProposalTable from '../../components/Governance/ProposalTable'
import Overview from '../../components/Governance/Overview'

import * as S from './styles'

const Gov = () => {
  return (
    <S.BackgroundVote>
      <Header />
      <S.VoteContent>
        <Overview />
        <ProposalTable />
      </S.VoteContent>
    </S.BackgroundVote>
  )
}

export default Gov
