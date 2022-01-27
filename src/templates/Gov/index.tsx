import React from 'react'

import Header from '../../components/Header'
import TitleSection from '../../components/TitleSection'
import Overview from '../../components/Governance/Overview'
import ProposalTable from '../../components/Governance/ProposalTable'
import VotingPowerTable from '../../components/Governance/VotingPowerTable'

import overview from '../../../public/assets/iconGradient/overview.svg'
import proposals from '../../../public/assets/iconGradient/proposals.svg'
import votingPower from '../../../public/assets/iconGradient/voting-power-rank.svg'

import * as S from './styles'

const Gov = () => {
  return (
    <S.BackgroundVote>
      <Header />
      <S.VoteContent>
        <TitleSection
          image={overview}
          title="Overview"
          text="texto asdsad sadsadsa"
        />
        <Overview />
        <S.TitleAndLinkContent>
          <TitleSection
            image={proposals}
            title="Recent Proposals"
            text="texto asdsad sadsadsa"
          />
          <S.LinkForum
            href="https://t.me/KassandraDAO"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discuss the proposals at the Forum
          </S.LinkForum>
        </S.TitleAndLinkContent>
        <ProposalTable />
        <TitleSection
          image={votingPower}
          title="Voting Power Rank"
          text="texto asdsad sadsadsa"
        />
        <VotingPowerTable />
      </S.VoteContent>
    </S.BackgroundVote>
  )
}

export default Gov
