/* eslint-disable prettier/prettier */
import React from 'react'
import { useSelector, RootStateOrAny } from 'react-redux'

import { Staking } from '../../constants/tokenAddresses'

import web3 from '../../utils/web3'

import useMatomoEcommerce from '../../hooks/useMatomoEcommerce'
import useStakingContract from '../../hooks/useStakingContract'

import Web3Disabled from '../../components/Web3Disabled'
import VotingPower from '../../components/VotingPower'
import StakeCard from '../../components/StakeCard'
import Loading from '../../components/Loading'

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
    trackCategoryPageView(['Stake', 'Fuji'])

    if (screen.width < 700) {
      setTimeout(() => {
        setIsMobile(true)
        setLoading(false)
      }, 600)
    }

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
          }}
        >
          <Loading />
        </h1>
      }
      {web3.currentProvider !== null && chainId === "0xa869" && !loading && !isMobile ?
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
                pid={4}
                symbol="ahype"
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
                pid={5}
                symbol="lp"
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
          {!loading && isMobile && (
            <Web3Disabled
              textButton="asd"
              textHeader="You are on a mobile device"
              bodyText="The Stake/Farm page can only be accessed by a computer"
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
          {web3.currentProvider !== null && chainId !== "0xa869" && !loading && !isMobile && (
            <Web3Disabled
              textButton="Connect to Fuji"
              textHeader="Your wallet is set to the wrong network."
              bodyText="Please switch to the Avalanche Fuji testnet network to have access to all our staking pools"
              type="changeChain"
            />
          )}
        </>
      }
    </S.BackgroundStakeFarm>
  )
}

export default StakeFarm
