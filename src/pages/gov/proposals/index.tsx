import React from 'react'
import Image from 'next/image'
import { useSelector, RootStateOrAny } from 'react-redux'

import { Staking } from '../../../constants/tokenAddresses'

import useStakingContract from '../../../hooks/useStakingContract'

import Header from '../../../components/Header'
import TitleSection from '../../../components/TitleSection'
import VotingPower from '../../../components/VotingPower'
import ExternalLink from '../../../components/ExternalLink'
import ProposalTable from '../../../components/Governance/ProposalTable'
import ProposalOverview from '../../../components/Governance/ProposalOverview'

import proposals from '../../../../public/assets/iconGradient/proposals.svg'
import externalLink from '../../../../public/assets/icons/external-link.svg'

import * as S from './styles'

const AllProposals = () => {
  const kacyStake = useStakingContract(Staking)
  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)

  return (
    <S.BackgroundVote>
      <Header />
      <S.VoteContent>
        <S.GovernanceProposalsContent>
          <S.Title>
            <TitleSection
              image={proposals}
              title="Governance Proposals"
              text="Velit lacus vel porta purus"
            />
            <S.VotingPowerContent>
              <VotingPower
                getTotalVotes={kacyStake.totalVotes}
                getCurrentVotes={kacyStake.currentVotes}
                userWalletAddress={userWalletAddress}
                isMobile={true}
              />
            </S.VotingPowerContent>
            <ExternalLink href="/farm" text="Manage Delegation" />
          </S.Title>
          <ProposalOverview />
        </S.GovernanceProposalsContent>
        <S.AllProposalsContent>
          <S.TitleAndLinkContent>
            <TitleSection
              image={proposals}
              title="All Proposals"
              text="Velit lacus vel porta purus"
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
        </S.AllProposalsContent>
      </S.VoteContent>
    </S.BackgroundVote>
  )
}

export default AllProposals
