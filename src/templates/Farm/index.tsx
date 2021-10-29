import React from 'react'
import { useSelector, RootStateOrAny } from 'react-redux'

import { Kacy, Staking } from '../../constants/tokenAddresses'

import web3 from '../../utils/web3'

import useConnect from '../../hooks/useConnect'
import useERC20Contract from '../../hooks/useERC20Contract'
import useStakingContract from '../../hooks/useStakingContract'

import Web3Disabled from '../../components/Web3Disabled'
import VotingPower from '../../components/VotingPower'
import StakeCard from '../../components/StakeCard'

import Header from '../../components/Header'
import BannerCTA from '../../components/BannerCTA'

import * as S from './styles'

declare let window: {
  ethereum: any,
}

const StakeFarm = () => {
  const [chainId, setChainId] = React.useState<string>('')
  const [loading, setLoading] = React.useState<boolean>(true)

  const kacyToken = useERC20Contract(Kacy)
  const kacyStake = useStakingContract(Staking)

  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)
  const { connect } = useConnect()

  async function getChainId() {
    if (web3.currentProvider === null) {
      return
    }

    const id = await window.ethereum.request({ method: 'eth_chainId' })
    setChainId(id)
  }

  React.useEffect(() => {
    getChainId()
  }, [userWalletAddress])


  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 600)
  }, [])

  return (
    <S.BackgroundStakeFarm>
      <Header />
      {loading &&
        <h1
          style={{
            height: '90vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 500
          }}
        >
          Loading...
        </h1>
      }
      {web3.currentProvider !== null && chainId === "0x3" && !loading ?
        <>
          <S.StakeFarm>
            <S.StakeWithPowerVote>
              <S.NameStake>
                <S.Name>
                  <img src="assets/stake-with-vote.svg" alt="" />
                  <h1>Stake With Power Vote</h1>
                </S.Name>
                <p>Stake $KACY to earn $KACY + Voting Power</p>
              </S.NameStake>
              <VotingPower
                getTotalVotes={kacyStake.totalVotes}
                getCurrentVotes={kacyStake.currentVotes}
                userWalletAddress={userWalletAddress}
              />
            </S.StakeWithPowerVote>
            <S.GridStaking>
              <StakeCard
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
                stakeWithVotingPower={false}
              />
              <StakeCard
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
                stakeWithVotingPower={false}
              />
              <StakeCard
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
                stakeWithVotingPower={false}
              />
            </S.GridStaking>
            <S.NameStake style={{ margin: '100px 0 50px' }} >
              <S.Name>
                <img src="assets/stake-money-withdraw.svg" alt="" />
                <h1>Other Staking Pools</h1>
              </S.Name>
              <p>Stake $KACY to earn $KACY + Voting Power</p>
            </S.NameStake>
            <S.GridStaking>
              <StakeCard
                pid={3}
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
                stakeWithVotingPower={true}
              />
              <StakeCard
                pid={4}
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
                stakeWithVotingPower={true}
              />
              <h1>Coming soon</h1>
            </S.GridStaking>
          </S.StakeFarm>
          <BannerCTA />
        </>
        :
        <>
          {web3.currentProvider === null && !loading && (
            <Web3Disabled
              textButton="Install Metamask"
              textHeader="Looks like you don't have the metamask wallet installed"
              bodyText="Please install the metamask wallet to access our pools "
              type="install"
            />
          )}
          {web3.currentProvider !== null && chainId !== "0x3" && !loading && (
            <Web3Disabled
              textButton="Connect to Ropsten"
              textHeader="Your wallet is set to the wrong network."
              bodyText="Please switch to the Ropsten network to have access to all our staking pools"
              type="changeChain"
            />
          )}
        </>
      }
    </S.BackgroundStakeFarm>
  )
}

export default StakeFarm
