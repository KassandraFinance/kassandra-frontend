import React from 'react'

import Header from '../../components/Header'
import TitleSection from '../../components/TitleSection'
import VotingPowerTable from '../../components/Governance/VotingPowerTable'
import Breadcrumb from '../../components/Breadcrumb'
import BreadcrumbItem from '../../components/Breadcrumb/BreadcrumbItem'

import votingPower from '../../../public/assets/iconGradient/voting-power-rank.svg'

import * as S from '../../templates/Gov/Proposals/styles'
import Head from 'next/head'

const Leaderboard = () => {
  return (
    <S.BackgroundVote>
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
      <S.VoteContent>
        <S.VotingPowerLeaderboard>
          <TitleSection image={votingPower} title="Voting Power Leaderboard" />
          <VotingPowerTable />
        </S.VotingPowerLeaderboard>
      </S.VoteContent>
    </S.BackgroundVote>
  )
}

export default Leaderboard
