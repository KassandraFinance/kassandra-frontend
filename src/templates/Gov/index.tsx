import React from 'react'
import Image from 'next/image'

import { useAppSelector } from '../../store/hooks'

import { chains } from '../../constants/tokenAddresses'

import Header from '../../components/Header'
import TitleSection from '../../components/TitleSection'
import Overview from '../../components/Governance/Overview'
import ProposalTable from '../../components/Governance/ProposalTable'
import VotingPowerTable from '../../components/Governance/VotingPowerTable'
import ExternalLink from '../../components/ExternalLink'
import Breadcrumb from '../../components/Breadcrumb'
import BreadcrumbItem from '../../components/Breadcrumb/BreadcrumbItem'
import Web3Disabled from '../../components/Web3Disabled'

import overview from '../../../public/assets/iconGradient/section-title-eye.svg'
import proposals from '../../../public/assets/iconGradient/details.svg'
import votingPower from '../../../public/assets/iconGradient/voting-power-rank.svg'
import externalLink from '../../../public/assets/utilities/external-link.svg'

import * as S from './styles'

const Gov = () => {
  const { chainId, userWalletAddress } = useAppSelector(state => state)

  const chain =
    process.env.NEXT_PUBLIC_MASTER === '1' ? chains.avalanche : chains.fuji

  const take = 5

  return (
    <>
      <Header />
      <Breadcrumb>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/gov" isLastPage>
          Governance
        </BreadcrumbItem>
      </Breadcrumb>
      <S.VoteContent>
        {Number(chainId) !== chain.chainId ? (
          <Web3Disabled
            textButton={`Connect to ${chain.chainName}`}
            textHeader="Your wallet is set to the wrong network."
            bodyText={`Please switch to the ${chain.chainName} network to have access to governance`}
            type="changeChain"
          />
        ) : (
          <>
            <TitleSection image={overview} title="Overview" />
            <Overview />
            <S.OverViewLinks>
              <ExternalLink hrefNext="farm?tab=stake" text="Obtain more" />
              <ExternalLink
                hrefNext={`/profile/${userWalletAddress}?tab=governance-data`}
                text="Manage Delegation"
              />
            </S.OverViewLinks>
            <S.TitleAndLinkContent>
              <TitleSection image={proposals} title="Recent Proposals" />
              <S.LinkForum
                href="https://gov.kassandra.finance/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Discuss the proposals at the Forum</span>
                <Image src={externalLink} alt="" />
              </S.LinkForum>
            </S.TitleAndLinkContent>
            <ProposalTable take={take} />
            <ExternalLink
              hrefNext="/gov/proposals"
              text="Check more proposals"
            />
            <TitleSection
              image={votingPower}
              title="Voting Power Leaderboard"
            />
            <VotingPowerTable take={take} />
            <ExternalLink
              hrefNext="/gov/leaderboard"
              text="Check leaderboard"
            />
          </>
        )}
      </S.VoteContent>
    </>
  )
}

export default Gov
