import React from 'react'
import Image from 'next/image'

import Header from '../../components/Header'
import TitleSection from '../../components/TitleSection'
import Overview from '../../components/Governance/Overview'
import ProposalTable from '../../components/Governance/ProposalTable'
import VotingPowerTable from '../../components/Governance/VotingPowerTable'
import ExternalLink from '../../components/ExternalLink'

import overview from '../../../public/assets/iconGradient/overview.svg'
import proposals from '../../../public/assets/iconGradient/proposals.svg'
import votingPower from '../../../public/assets/iconGradient/voting-power-rank.svg'
import externalLink from '../../../public/assets/icons/external-link.svg'

import * as S from './styles'
import Breadcrumb from '../../components/Breadcrumb'
import BreadcrumbItem from '../../components/Breadcrumb/BreadcrumbItem'

const Gov = () => {
  return (
    <S.BackgroundVote>
      <Header />
      <Breadcrumb>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/gov" isLastPage>
          Vote
        </BreadcrumbItem>
      </Breadcrumb>
      <S.VoteContent>
        <TitleSection
          image={overview}
          title="Overview"
          text="texto asdsad sadsadsa"
        />
        <Overview />
        <S.OverViewLinks>
          <ExternalLink hrefNext="/farm" text="Obtain more" />
          <ExternalLink hrefNext="/farm" text="Manage Delegation" />
        </S.OverViewLinks>
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
        <ExternalLink hrefNext="/gov/proposals" text="Check more proposals" />
        <TitleSection
          image={votingPower}
          title="Voting Power Rank"
          text="texto asdsad sadsadsa"
        />
        <VotingPowerTable />
        <ExternalLink hrefNext="/gov/leaderboard" text="Check leaderboard" />
      </S.VoteContent>
    </S.BackgroundVote>
  )
}

export default Gov
