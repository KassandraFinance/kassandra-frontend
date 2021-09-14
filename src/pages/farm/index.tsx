import React from 'react'
import BigNumber from 'bn.js'
import { useSelector, RootStateOrAny } from 'react-redux'

import web3 from '../../utils/web3'
import { BNtoDecimal } from '../../utils/numerals'

import useConnect from '../../hooks/useConnect'
import useERC20Contract from '../../hooks/useERC20Contract'
import useStakingContract from '../../hooks/useStakingContract'

import TotalVoting from '../../components/TotalVoting'
import VotingPower from '../../components/VotingPower'
import OthersStakingPools from '../../components/OthersStakingPools'

import styled from 'styled-components'

const Farm = () => {
  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)

  const {
    balanceOf,
    earned,
    getReward,
    withdrawable,
    poolInfo,
    unstaking,
    stakedUntil,
    getTotalVotes,
    getCurrentVotes
  } = useStakingContract()
  const { getAllowance, approve } = useERC20Contract()
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
          approve={approve}
          getAllowance={getAllowance}
          balanceOf={balanceOf}
          earned={earned}
          getReward={getReward}
          withdrawable={withdrawable}
          poolInfo={poolInfo}
          unstaking={unstaking}
          stakedUntil={stakedUntil}
        />
        <VotingPower
          days="30"
          percentage="20"
          pid={1}
          connect={connect}
          approve={approve}
          getAllowance={getAllowance}
          balanceOf={balanceOf}
          earned={earned}
          getReward={getReward}
          withdrawable={withdrawable}
          poolInfo={poolInfo}
          unstaking={unstaking}
          stakedUntil={stakedUntil}
        />
        <VotingPower
          days="45"
          percentage="32"
          pid={2}
          connect={connect}
          approve={approve}
          getAllowance={getAllowance}
          balanceOf={balanceOf}
          earned={earned}
          getReward={getReward}
          withdrawable={withdrawable}
          poolInfo={poolInfo}
          unstaking={unstaking}
          stakedUntil={stakedUntil}
        />
      </GridStaking>
      <TotalVoting
        getTotalVotes={getTotalVotes}
        getCurrentVotes={getCurrentVotes}
        userWalletAddress={userWalletAddress}
      />
      <h3>Other Staking Pools</h3>
      <GridStaking>
        <OthersStakingPools img="logo-heim" />
        <OthersStakingPools img="heim-index" />
        <OthersStakingPools img="" />
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
