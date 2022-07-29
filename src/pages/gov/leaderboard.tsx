import React from 'react'
import Head from 'next/head'

import { useAppSelector } from '../../store/hooks'

import { chains } from '../../constants/tokenAddresses'

import VotingPowerTable from '../../components/Governance/VotingPowerTable'
import BreadcrumbItem from '../../components/Breadcrumb/BreadcrumbItem'
import TitleSection from '../../components/TitleSection'
import Web3Disabled from '../../components/Web3Disabled'
import Breadcrumb from '../../components/Breadcrumb'
import Header from '../../components/Header'

import votingPower from '../../../public/assets/iconGradient/voting-power-rank.svg'

import * as S from '../../templates/Gov/Proposals/styles'

const Leaderboard = () => {
  const { chainId } = useAppSelector(state => state)

  const chain =
    process.env.NEXT_PUBLIC_MASTER === '1' ? chains.avalanche : chains.fuji

  return (
    <>
      <Head>
        <meta
          property="og:image"
          content="https://kassandra.finance/kacy-og.png"
        />
        <meta property="og:image:width" content="1012" />
        <meta property="og:image:height" content="506" />
        <meta property="og:url" content="https://kassandra.finance/" />
      </Head>
      <Header />
      <Breadcrumb>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/gov">Vote</BreadcrumbItem>
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
              <VotingPowerTable />
            </S.VotingPowerLeaderboard>
          </S.VoteContent>
        </>
      )}
    </>
  )
}

export default Leaderboard
