import React from 'react'
import { useSelector, RootStateOrAny } from 'react-redux'

import * as S from './styles'

import { Kacy, Staking } from '../../constants/tokenAddresses'

import web3 from '../../utils/web3'

import useConnect from '../../hooks/useConnect'
import useERC20Contract from '../../hooks/useERC20Contract'
import useStakingContract from '../../hooks/useStakingContract'

import Web3Disabled from '../../components/Web3Disabled'
import TotalVoting from '../../components/TotalVoting'
import StakeCard from '../../components/StakeCard'

import Header from '../../components/Header'
import BannerCTA from '../../components/BannerCTA'

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
            {/* <S.IntroWrapper>
              <h1>Voting Power Pools</h1>
              <h3><b>Stake</b> $KACY to <b>earn</b> $KACY + Voting Power</h3>
              <S.Link>
                <a href="">Active</a>
                <a href="">Ended</a>
              </S.Link>
            </S.IntroWrapper> */}
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
            <TotalVoting
              getTotalVotes={kacyStake.totalVotes}
              getCurrentVotes={kacyStake.currentVotes}
              userWalletAddress={userWalletAddress}
            />
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

