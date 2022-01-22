/* eslint-disable prettier/prettier */
import React from 'react'
import { useSelector, RootStateOrAny } from 'react-redux'

import { chains, Staking } from '../../constants/tokenAddresses'

import useMatomoEcommerce from '../../hooks/useMatomoEcommerce'
import useStakingContract from '../../hooks/useStakingContract'

import Web3Disabled from '../../components/Web3Disabled'
import VotingPower from '../../components/VotingPower'
import StakeCard from '../../components/StakeCard'
import Loading from '../../components/Loading'
import Header from '../../components/Header'

import ComingSoon from './ComingSoon'

import * as S from './styles'

const StakeFarm = () => {
  const [loading, setLoading] = React.useState<boolean>(true)
  
  const { trackCategoryPageView } = useMatomoEcommerce()
  const kacyStake = useStakingContract(Staking)

  const { userWalletAddress, chainId } = useSelector((state: RootStateOrAny) => state)

  const chain = process.env.MASTER === '1' ? chains.avalanche : chains.fuji

  React.useEffect(() => {
    trackCategoryPageView(['Stake', process.env.MASTER === '1' ? 'Avalanche' : 'Fuji'])

    setTimeout(() => {
      setLoading(false)
    }, 600)
  }, [])

  return (
    <S.BackgroundStakeFarm>
      <Header />
      {loading
        ? (
          <div style={{ 
            height: 'calc(100vh - 140px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            }}
          >
            <Loading /> 
          </div>
        )  : (
          userWalletAddress.length === 0 && chainId !== chain.chainId
            ? (
              <Web3Disabled
                textButton="Connect Wallet"
                textHeader="Your wallet is not connected"
                bodyText="Please connect your wallet to access our pools"
                type="connect"
              />
            ) : (
              chainId !== chain.chainId
                ? (
                  <Web3Disabled
                    textButton={`Connect to ${chain.chainName}`}
                    textHeader="Your wallet is set to the wrong network."
                    bodyText={`Please switch to the ${chain.chainName} network to have access to all our staking pools`}
                    type="changeChain"
                  />
                ) : (
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
                          pid={process.env.MASTER === '1' ? 2 : 0}
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
                          pid={process.env.MASTER === '1' ? 3 : 1}
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
                          pid={process.env.MASTER === '1' ? 4 : 2}
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
                )
            )
        )
      }
    </S.BackgroundStakeFarm>
  )
}

export default StakeFarm
