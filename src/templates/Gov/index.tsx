import React from 'react'
import Image from 'next/image'

import Header from '../../components/Header'
import TitleSection from '../../components/TitleSection'
import Overview from '../../components/Governance/Overview'
import ProposalTable from '../../components/Governance/ProposalTable'
import VotingPowerTable from '../../components/Governance/VotingPowerTable'

import overview from '../../../public/assets/iconGradient/overview.svg'
import proposals from '../../../public/assets/iconGradient/proposals.svg'
import votingPower from '../../../public/assets/iconGradient/voting-power-rank.svg'
import externalLink from '../../../public/assets/icons/external-link.svg'

import * as S from './styles'
import ExternalLink from '../../components/ExternalLink'

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
            <span>Discuss the proposals at the Forum</span>
            <Image src={externalLink} alt="" />
          </S.LinkForum>
        </S.TitleAndLinkContent>
        <ProposalTable />
        <ExternalLink href="/gov/proposals" text="Check more proposals" />
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
