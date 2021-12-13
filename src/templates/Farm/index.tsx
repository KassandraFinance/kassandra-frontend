/* eslint-disable prettier/prettier */
import React from 'react'
import { useSelector, RootStateOrAny } from 'react-redux'

import { Staking } from '../../constants/tokenAddresses'

import web3 from '../../utils/web3'

import useConnect from '../../hooks/useConnect'
import useMatomoEcommerce from '../../hooks/useMatomoEcommerce'
import useStakingContract from '../../hooks/useStakingContract'

import Web3Disabled from '../../components/Web3Disabled'
import VotingPower from '../../components/VotingPower'
import StakeCard from '../../components/StakeCard'

import ComingSoon from './ComingSoon'
import Header from '../../components/Header'

import * as S from './styles'

declare let window: {
  ethereum: any,
}

const StakeFarm = () => {
  const [chainId, setChainId] = React.useState<string>('')
  const [loading, setLoading] = React.useState<boolean>(true)
  const [isMobile, setIsMobile] = React.useState<boolean>(false)
  
  const { trackCategoryPageView } = useMatomoEcommerce()
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
    trackCategoryPageView(['Stake', 'Ropsten'])

    const device = localStorage.getItem('device')
    setIsMobile(device === 'isMobile')

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
      {web3.currentProvider !== null && chainId === "0x3" && !loading && !isMobile ?
        <>
          <S.StakeFarm>
            <S.StakeWithPowerVote>
              <S.NameStake>
                <S.Name>
                  <img src="assets/stake-with-vote.svg" alt="" />
                  <h1>Stake KACY</h1>
                </S.Name>
                <p>EARN REWARDS AND VOTING POWER</p>
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
                symbol="kacy"
                connect={connect}
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
                symbol="kacy"
                connect={connect}
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
                symbol="kacy"
                connect={connect}
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
            <S.NameStake left={true} style={{ margin: '100px 0 50px' }}>
              <S.Name>
                <img src="assets/stake-money-withdraw.svg" alt="" />
                <h1>Farm KACY</h1>
              </S.Name>
              <p>EARN KACY BY STAKING OTHER ASSETS</p>
            </S.NameStake>
            <S.GridStaking>
              <StakeCard
                pid={3}
                symbol="ahype"
                connect={connect}
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
                symbol="keu"
                connect={connect}
                balanceOf={kacyStake.balance}
                earned={kacyStake.earned}
                getReward={kacyStake.getReward}
                withdrawable={kacyStake.withdrawable}
                poolInfo={kacyStake.poolInfo}
                unstaking={kacyStake.unstaking}
                stakedUntil={kacyStake.stakedUntil}
                stakeWithVotingPower={true}
              />
              <ComingSoon />
            </S.GridStaking>
          </S.StakeFarm>
        </>
        :
        <>
          {isMobile && (
            <Web3Disabled
              textButton="asd"
              textHeader="You are on a mobile device"
              bodyText="To access the Stake/Farm and Products page, go to a computer."
              type="isMobile"
            />
          )}
          {web3.currentProvider === null && !loading && !isMobile && (
            <Web3Disabled
              textButton="Install Metamask"
              textHeader="Looks like you don't have the metamask wallet installed"
              bodyText="Please install the metamask wallet to access our pools "
              type="install"
            />
          )}
          {web3.currentProvider !== null && chainId !== "0x3" && !loading && !isMobile && (
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
