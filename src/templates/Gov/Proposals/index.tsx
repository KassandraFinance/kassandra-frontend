import React from 'react'
import Image from 'next/image'
import useSWR from 'swr'
import { request } from 'graphql-request'

import { chains, SUBGRAPH_URL } from '../../../constants/tokenAddresses'
import { useAppSelector } from '../../../store/hooks'

import { GET_ALL_PROPOSALS } from './graphql'

import Header from '../../../components/Header'
import TitleSection from '../../../components/TitleSection'
import Breadcrumb from '../../../components/Breadcrumb'
import BreadcrumbItem from '../../../components/Breadcrumb/BreadcrumbItem'
import VotingPower from '../../../components/VotingPower'
import ExternalLink from '../../../components/ExternalLink'
import ProposalTable from '../../../components/Governance/ProposalTable'
import ProposalOverview from '../../../components/Governance/ProposalOverview'
import Web3Disabled from '../../../components/Web3Disabled'
import Pagination from '../../../components/Pagination'

import proposals from '../../../../public/assets/iconGradient/details.svg'
import externalLink from '../../../../public/assets/utilities/external-link.svg'

import * as S from './styles'

const Proposals = () => {
  const { chainId } = useAppSelector(state => state)
  const userWalletAddress = useAppSelector(state => state.userWalletAddress)

  const chain =
    process.env.NEXT_PUBLIC_MASTER === '1' ? chains.avalanche : chains.fuji

  const [skip, setSkip] = React.useState<number>(0)

  const take = 10

  function handlePageClick(data: { selected: number }, take: number) {
    setSkip(data.selected * take)
  }

  const { data: allProposals } = useSWR([GET_ALL_PROPOSALS], query =>
    request(SUBGRAPH_URL, query)
  )

  return (
    <>
      <Header />
      <Breadcrumb>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/gov">Governance</BreadcrumbItem>
        <BreadcrumbItem href="/gov/proposals" isLastPage>
          Governance Proposals
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
            <S.GovernanceProposalsContent>
              <S.Title>
                <TitleSection image={proposals} title="Governance Proposals" />
                <S.VotingPowerContent>
                  <VotingPower
                    userWalletAddress={userWalletAddress}
                    isMobile={true}
                  />
                </S.VotingPowerContent>
                <ExternalLink
                  hrefNext={`/profile/${userWalletAddress}?tab=governance-data`}
                  text="Manage Delegation"
                />
              </S.Title>
              <ProposalOverview />
            </S.GovernanceProposalsContent>
            <S.AllProposalsContent>
              <S.TitleAndLinkContent>
                <TitleSection image={proposals} title="All Proposals" />
                <S.LinkForum
                  href="https://gov.kassandra.finance/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Discuss the proposals at the Forum</span>
                  <Image src={externalLink} alt="" />
                </S.LinkForum>
              </S.TitleAndLinkContent>
              <ProposalTable skip={skip} take={take} />
            </S.AllProposalsContent>
          </>
        )}
        <Pagination
          take={take}
          skip={skip}
          totalItems={allProposals?.proposals && allProposals?.proposals.length}
          handlePageClick={handlePageClick}
        />
      </S.VoteContent>
    </>
  )
}

export default Proposals
