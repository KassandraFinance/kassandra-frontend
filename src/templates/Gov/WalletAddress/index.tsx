import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useSelector, RootStateOrAny } from 'react-redux'
import useSWR from 'swr'
import { request } from 'graphql-request'
import BigNumber from 'bn.js'

import { SUBGRAPH_URL, Staking } from '../../../constants/tokenAddresses'

import useVotingPower from '../../../hooks/useVotingPower'

import { GET_USER } from './graphql'

import Header from '../../../components/Header'
import TitleSection from '../../../components/TitleSection'
import IntroWalletAddress from '../../../components/Governance/IntroWalletAddress'
import AnyCard from '../../../components/Governance/AnyCard'
import Breadcrumb from '../../../components/Breadcrumb'
import BreadcrumbItem from '../../../components/Breadcrumb/BreadcrumbItem'
import OwnAndReceivedTable from '../../../components/Governance/OwnAndReceivedTable'

import proposals from '../../../../public/assets/iconGradient/proposals.svg'
import externalLink from '../../../../public/assets/icons/external-link.svg'

import * as S from './styles'

const WalletAddress = () => {
  const [hasVotingPower, setHasVotingPower] = React.useState<boolean>(false)
  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)
  const votingPower = useVotingPower(Staking)

  const router = useRouter()
  const { address } = router.query

  const { data } = useSWR([GET_USER], query =>
    request(SUBGRAPH_URL, query, {
      id: address
    })
  )

  async function handleCheckVotingPower() {
    const votingPowerValue = await votingPower.currentVotes(address)

    if (votingPowerValue?.eq(new BigNumber(0))) {
      setHasVotingPower(false)
      return
    }
    setHasVotingPower(true)
  }

  React.useEffect(() => {
    handleCheckVotingPower()
  }, [data])

  return (
    <S.BackgroundVote>
      <Header />
      <Breadcrumb>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/gov">Vote</BreadcrumbItem>
        <BreadcrumbItem href={router.asPath} isLastPage>
          Username
        </BreadcrumbItem>
      </Breadcrumb>
      <S.VoteContent>
        <IntroWalletAddress />

        {/* Owned Voting Power */}
        <TitleSection
          image={proposals}
          title="Own Voting Power"
          marginTop={64}
        />
        {hasVotingPower ? (
          <OwnAndReceivedTable />
        ) : userWalletAddress ? (
          <AnyCard
            text="To obtain voting power you need to have KACY staked"
            button={true}
          />
        ) : (
          <AnyCard
            text="This address doesn’t seem to have any KACY staked"
            button={false}
          />
        )}

        {/* Received Voting Power */}
        <TitleSection
          image={proposals}
          title="Received Voting Power"
          text="Velit lacus vel porta purus"
          marginTop={64}
        />
        {hasVotingPower ? (
          <OwnAndReceivedTable />
        ) : userWalletAddress ? (
          <AnyCard
            text="To obtain voting power you need to have KACY staked"
            button={true}
          />
        ) : (
          <AnyCard
            text="This address doesn’t seem to have any KACY staked"
            button={false}
          />
        )}

        {/* Voting History */}
        <S.TitleAndLinkContent>
          <TitleSection
            image={proposals}
            title="Voting History"
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
        {hasVotingPower ? (
          <OwnAndReceivedTable />
        ) : userWalletAddress ? (
          <AnyCard
            text="To obtain voting power you need to have KACY staked"
            button={true}
          />
        ) : (
          <AnyCard
            text="This address doesn’t seem to have any KACY staked"
            button={false}
          />
        )}
      </S.VoteContent>
    </S.BackgroundVote>
  )
}

export default WalletAddress
