import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useSelector, RootStateOrAny } from 'react-redux'
import useSWR from 'swr'
import { request } from 'graphql-request'
import BigNumber from 'bn.js'
import Big from 'big.js'

import { SUBGRAPH_URL, Staking } from '../../../constants/tokenAddresses'

import useVotingPower from '../../../hooks/useVotingPower'
import useStakingContract from '../../../hooks/useStakingContract'

import { GET_USER } from './graphql'

import Header from '../../../components/Header'
import TitleSection from '../../../components/TitleSection'
import IntroWalletAddress from '../../../components/Governance/IntroWalletAddress'
import AnyCard from '../../../components/Governance/AnyCard'
import Breadcrumb from '../../../components/Breadcrumb'
import BreadcrumbItem from '../../../components/Breadcrumb/BreadcrumbItem'
import OwnAndReceivedTable from '../../../components/Governance/OwnAndReceivedTable'
import UserTableVotingHistory from '../../../components/Governance/UserTableVotingHistory'

import proposals from '../../../../public/assets/iconGradient/proposals.svg'
import votingPoweRrank from '../../../../public/assets/iconGradient/voting-power-rank.svg'
import stakingPools from '../../../../public/assets/iconGradient/stakingPools.svg'

import externalLink from '../../../../public/assets/icons/external-link.svg'

import * as S from './styles'

interface IUserVotingPowerProps {
  pool: string;
  votingPower: BigNumber;
  kacy: Big;
  from: {
    id: string
  };
  to: {
    id: string
  };
}

const WalletAddress = () => {
  const [hasVotingPower, setHasVotingPower] = React.useState<boolean>(false)
  // eslint-disable-next-line prettier/prettier
  const [userReceivedFromVP, setUserReceivedFromVP] = React.useState<IUserVotingPowerProps[]>([])
  // eslint-disable-next-line prettier/prettier
  const [userDelegatingToVP, setUserDelegatingToVP] = React.useState<IUserVotingPowerProps[]>([])

  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)

  const votingPower = useVotingPower(Staking)
  const { userInfo } = useStakingContract(Staking)

  const router = useRouter()
  const { address } = router.query

  const { data } = useSWR([GET_USER], query =>
    request(SUBGRAPH_URL, query, {
      id: address
    })
  )

  async function getAmountKacy(pool: string, address: string | undefined) {
    const poolNumber = Number(pool)
    const value = await userInfo(poolNumber, address)

    return Big(value.amount).div(Big(10).pow(18))
  }

  async function handleFromDelegated() {
    if (data) {
      const receivedToVP = await Promise.all(
        data.received.map(async (prop: IUserVotingPowerProps) => {
          return {
            pool: prop.pool,
            votingPower: prop.votingPower,
            kacy: await getAmountKacy(prop.pool, prop.from?.id),
            from: {
              id: prop.from?.id
            },
            to: {
              id: prop.to.id
            }
          }
        })
      )

      setUserReceivedFromVP(receivedToVP)
    }
  }

  async function handleRereceived() {
    if (data) {
      const delegatingToVP = await Promise.all(
        data.delegations.map(async (prop: IUserVotingPowerProps) => {
          return {
            pool: prop.pool,
            votingPower: prop.votingPower,
            kacy: await getAmountKacy(prop.pool, prop.from?.id),
            to: {
              id: prop.to.id
            }
          }
        })
      )

      setUserDelegatingToVP(delegatingToVP)
    }
  }

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

    if (data) {
      handleFromDelegated()
      handleRereceived()
    }
  }, [data, userWalletAddress, address])

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
          image={stakingPools}
          title="Staking Pools"
          marginTop={64}
        />
        {hasVotingPower || userWalletAddress ? (
          <OwnAndReceivedTable
            userVotingPower={userDelegatingToVP}
            isDelegationTable={true}
          />
        ) : (
          <AnyCard
            text="This address doesn’t seem to have any KACY staked"
            button={false}
          />
        )}

        {/* Received Voting Power */}
        <TitleSection
          image={votingPoweRrank}
          title="Received Voting Power"
          text="Velit lacus vel porta purus"
          marginTop={64}
        />
        {hasVotingPower || userWalletAddress ? (
          <OwnAndReceivedTable
            userVotingPower={userReceivedFromVP}
            isDelegationTable={false}
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

        <UserTableVotingHistory
          userAddressUrl={address}
          userWalletAddress={userWalletAddress}
        />
      </S.VoteContent>
    </S.BackgroundVote>
  )
}

export default WalletAddress
