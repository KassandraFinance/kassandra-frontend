import React from 'react'
import useSWR from 'swr'
import { request } from 'graphql-request'

import { useAppSelector } from '../../../store/hooks'

import { chains, SUBGRAPH_URL } from '../../../constants/tokenAddresses'

import { GET_ALL_USERS } from './graphql'

import Header from '../../../components/Header'
import TitleSection from '../../../components/TitleSection'
import Breadcrumb from '../../../components/Breadcrumb'
import BreadcrumbItem from '../../../components/Breadcrumb/BreadcrumbItem'
import VotingPowerTable from '../../../components/Governance/VotingPowerTable'
import Web3Disabled from '../../../components/Web3Disabled'
import Pagination from '../../../components/Pagination'

import votingPower from '../../../../public/assets/iconGradient/voting-power-rank.svg'

import * as S from './styles'

const Leaderboard = () => {
  const [skip, setSkip] = React.useState<number>(0)

  const { chainId } = useAppSelector(state => state)

  const take = 10

  const chain =
    process.env.NEXT_PUBLIC_MASTER === '1' ? chains.avalanche : chains.fuji

  function handlePageClick(data: { selected: number }, take: number) {
    setSkip(data.selected * take)
  }

  const { data: allUsers } = useSWR([GET_ALL_USERS], query =>
    request(SUBGRAPH_URL, query)
  )

  return (
    <>
      <Header />
      <Breadcrumb>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/gov">Governance</BreadcrumbItem>
        <BreadcrumbItem href="/gov/leaderboard" isLastPage>
          Voting Power Leaderboard
        </BreadcrumbItem>
      </Breadcrumb>
      {Number(chainId) !== chain.chainId ? (
        <Web3Disabled
          textButton={`Connect to ${chain.chainName}`}
          textHeader="Your wallet is set to the wrong network."
          bodyText={`Please switch to the ${chain.chainName} network to have access to governance`}
          type="changeChain"
        />
      ) : (
        <>
          <S.VoteContent>
            <S.VotingPowerLeaderboard>
              <TitleSection
                image={votingPower}
                title="Voting Power Leaderboard"
              />
              <VotingPowerTable skip={skip} take={take} />
            </S.VotingPowerLeaderboard>
          </S.VoteContent>
        </>
      )}
      <Pagination
        take={take}
        skip={skip}
        totalItems={allUsers?.users && allUsers?.users.length}
        handlePageClick={handlePageClick}
      />
    </>
  )
}

export default Leaderboard
