import React from 'react'
import { useSelector, RootStateOrAny } from 'react-redux'

import { Kacy, Staking } from '../../constants/tokenAddresses'

import useConnect from '../../hooks/useConnect'
import useERC20Contract from '../../hooks/useERC20Contract'
import useStakingContract from '../../hooks/useStakingContract'

import TotalVoting from '../../components/TotalVoting'
import VotingPower from '../../components/VotingPower'
import OthersStakingPools from '../../components/OthersStakingPools'

import styled from 'styled-components'

const Farm = () => {
  const kacyToken = useERC20Contract(Kacy)
  const kacyStake = useStakingContract(Staking)

  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)
  const { connect } = useConnect()

  return (
    <FarmContainer>
      <h1>Staking</h1>
      <h3>Stake $KACY for Voting Power</h3>
      <GridStaking>
        <VotingPower
          days="0"
          percentage="12"
          pid={0}
          connect={connect}
          approve={kacyToken.approve}
          getAllowance={kacyToken.allowance}
          balanceOf={kacyStake.balance}
          earned={kacyStake.earned}
          getReward={kacyStake.getReward}
          withdrawable={kacyStake.withdrawable}
          poolInfo={kacyStake.poolInfo}
          unstaking={kacyStake.unstaking}
          stakedUntil={kacyStake.stakedUntil}
        />
        <VotingPower
          days="30"
          percentage="20"
          pid={1}
          connect={connect}
          approve={kacyToken.approve}
          getAllowance={kacyToken.allowance}
          balanceOf={kacyStake.balance}
          earned={kacyStake.earned}
          getReward={kacyStake.getReward}
          withdrawable={kacyStake.withdrawable}
          poolInfo={kacyStake.poolInfo}
          unstaking={kacyStake.unstaking}
          stakedUntil={kacyStake.stakedUntil}
        />
        <VotingPower
          days="45"
          percentage="32"
          pid={2}
          connect={connect}
          approve={kacyToken.approve}
          getAllowance={kacyToken.allowance}
          balanceOf={kacyStake.balance}
          earned={kacyStake.earned}
          getReward={kacyStake.getReward}
          withdrawable={kacyStake.withdrawable}
          poolInfo={kacyStake.poolInfo}
          unstaking={kacyStake.unstaking}
          stakedUntil={kacyStake.stakedUntil}
        />
      </GridStaking>
      <TotalVoting
        getTotalVotes={kacyStake.totalVotes}
        getCurrentVotes={kacyStake.currentVotes}
        userWalletAddress={userWalletAddress}
      />
      <h3>Other Staking Pools</h3>
      <GridStaking>
        <OthersStakingPools connect={connect} img="logo-heim" />
        <OthersStakingPools connect={connect} img="heim-index" />
        <OthersStakingPools connect={connect} img="" />
      </GridStaking>
    </FarmContainer>
  )
}

const FarmContainer = styled.section`
  max-width: 1520px;
  margin: 40px auto 64px;
  padding: 0 32px;

  h1 {
    font-size: 24px;
    font-weight: 400;
    @media (max-width: 420px) {
      padding: 0 10px;
    }
  }
  h3 {
    font-size: 20px;
    font-weight: 400;
    margin: 16px 0 32px;
    @media (max-width: 420px) {
      padding: 0 10px;
    }
  }
`

const GridStaking = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  @media (max-width: 1160px) {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    height: 100%;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 420px) {
    gap: 32px;
  }
`

export default Farm
