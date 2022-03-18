import React from 'react'

import PieChart from './PieChart'

import * as S from './styles'

const ProposalOverview = () => {
  return (
    <S.ProposalOverview>
      <S.Status>
        <h3>Proposal Overview</h3>
        <li>
          <span>Succeded</span> <span>6</span>
        </li>
        <li>
          <span>Voting open</span> <span>3</span>
        </li>
        <li>
          <span>Failed</span> <span>1</span>
        </li>
      </S.Status>
      <PieChart />
    </S.ProposalOverview>
  )
}

export default ProposalOverview
