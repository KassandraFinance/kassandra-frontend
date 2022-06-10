/* eslint-disable prettier/prettier */
import React from 'react'
import BigNumber from 'bn.js'
import { useSelector, RootStateOrAny } from 'react-redux'

import {
  chains,
  Staking,
  Kacy,
  HeimCRPPOOL,
  products
} from '../../constants/tokenAddresses'

import useMatomoEcommerce from '../../hooks/useMatomoEcommerce'
import useStakingContract from '../../hooks/useStakingContract'

import Web3Disabled from '../../components/Web3Disabled'
import VotingPower from '../../components/VotingPower'
import StakeCard from '../../components/StakeCard'
import Loading from '../../components/Loading'
import Header from '../../components/Header'
import Breadcrumb from '../../components/Breadcrumb'
import BreadcrumbItem from '../../components/Breadcrumb/BreadcrumbItem'

import * as S from './styles'

const StakeFarm = () => {
  const [loading, setLoading] = React.useState<boolean>(true)
  const [investor, setInvestor] = React.useState([false, false])

  const { trackCategoryPageView } = useMatomoEcommerce()
  const kacyStake = useStakingContract(Staking)

  const { userWalletAddress, chainId } = useSelector(
    (state: RootStateOrAny) => state
  )

  const chain =
    process.env.NEXT_PUBLIC_MASTER === '1' ? chains.avalanche : chains.fuji

  React.useEffect(() => {
    trackCategoryPageView([
      'Stake',
      process.env.NEXT_PUBLIC_MASTER === '1' ? 'Avalanche' : 'Fuji'
    ])

    setTimeout(() => {
      setLoading(false)
    }, 600)
  }, [])

  React.useEffect(() => {
    if (userWalletAddress.length === 0 || Number(chainId) !== chain.chainId) {
      return
    }

    const calc = async () => {
      const res = await Promise.all([
        kacyStake.balance(0, userWalletAddress),
        kacyStake.balance(1, userWalletAddress)
      ])

      setInvestor([
        res[0].gt(new BigNumber('0')),
        res[1].gt(new BigNumber('0'))
      ])
    }

    calc()
  }, [userWalletAddress])
  return (
    <>
      <Header />
      <Breadcrumb>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/farm" isLastPage>
          Stake/Farm
        </BreadcrumbItem>
      </Breadcrumb>
      {loading ? (
        <div
          style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Loading marginTop={0} />
        </div>
      ) : userWalletAddress.length === 0 &&
        Number(chainId) !== chain.chainId ? (
        <Web3Disabled
          textButton="Connect Wallet"
          textHeader="Your wallet is not connected"
          bodyText="Please connect your wallet to access our pools"
          type="connect"
        />
      ) : Number(chainId) !== chain.chainId ? (
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
                  <img
                    src="assets/iconGradient/vote.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                  <h1>Stake KACY</h1>
                </S.Name>
                <p>EARN REWARDS AND VOTING POWER</p>
              </S.NameStake>
              <VotingPower userWalletAddress={userWalletAddress} />
            </S.StakeWithPowerVote>
            <S.GridStaking>
              <StakeCard
                pid={process.env.NEXT_PUBLIC_MASTER === '1' ? 2 : 0}
                symbol="kacy"
                properties={{
                  logo: {
                    src: '/assets/logos/kacy-stake.svg',
                    style: { width: '5.8rem' }
                  }
                }}
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
                pid={process.env.NEXT_PUBLIC_MASTER === '1' ? 3 : 1}
                symbol="kacy"
                properties={{
                  logo: {
                    src: '/assets/logos/kacy-stake.svg',
                    style: { width: '5.8rem' }
                  }
                }}
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
                pid={process.env.NEXT_PUBLIC_MASTER === '1' ? 4 : 2}
                symbol="kacy"
                properties={{
                  logo: {
                    src: '/assets/logos/kacy-stake.svg',
                    style: { width: '5.8rem' }
                  }
                }}
                balanceOf={kacyStake.balance}
                earned={kacyStake.earned}
                getReward={kacyStake.getReward}
                withdrawable={kacyStake.withdrawable}
                poolInfo={kacyStake.poolInfo}
                unstaking={kacyStake.unstaking}
                stakedUntil={kacyStake.stakedUntil}
                stakeWithVotingPower={false}
              />
              {process.env.NEXT_PUBLIC_MASTER === '1' && investor[0] && (
                <StakeCard
                  pid={0}
                  symbol="kacy"
                  properties={{
                    logo: {
                      src: '/assets/logos/kacy-stake.svg',
                      style: { width: '5.8rem' }
                    }
                  }}
                  balanceOf={kacyStake.balance}
                  earned={kacyStake.earned}
                  getReward={kacyStake.getReward}
                  withdrawable={kacyStake.withdrawable}
                  poolInfo={kacyStake.poolInfo}
                  unstaking={kacyStake.unstaking}
                  stakedUntil={kacyStake.stakedUntil}
                  stakeWithVotingPower={false}
                  availableWithdraw={kacyStake.availableWithdraw}
                  lockUntil={kacyStake.lockUntil}
                  stakeWithLockPeriod={true}
                />
              )}
              {process.env.NEXT_PUBLIC_MASTER === '1' && investor[1] && (
                <StakeCard
                  pid={1}
                  symbol="kacy"
                  properties={{
                    logo: {
                      src: '/assets/logos/kacy-stake.svg',
                      style: { width: '5.8rem' }
                    }
                  }}
                  balanceOf={kacyStake.balance}
                  earned={kacyStake.earned}
                  getReward={kacyStake.getReward}
                  withdrawable={kacyStake.withdrawable}
                  poolInfo={kacyStake.poolInfo}
                  unstaking={kacyStake.unstaking}
                  stakedUntil={kacyStake.stakedUntil}
                  stakeWithVotingPower={false}
                  availableWithdraw={kacyStake.availableWithdraw}
                  lockUntil={kacyStake.lockUntil}
                  stakeWithLockPeriod={true}
                />
              )}
            </S.GridStaking>
            <S.NameStake left={true} style={{ margin: '100px 0 50px' }}>
              <S.Name>
                <img
                  src="assets/iconGradient/stake-money-withdraw.svg"
                  alt=""
                />
                <h1>Farm KACY</h1>
              </S.Name>
              <p>EARN KACY BY STAKING OTHER ASSETS</p>
            </S.NameStake>
            <S.GridStaking>
              {process.env.NEXT_PUBLIC_MASTER === '1' ? (
                <StakeCard
                  pid={5}
                  symbol="lp-png"
                  properties={{
                    logo: {
                      src: '/assets/logos/lp-kacy.svg',
                      style: { width: '14.4rem' }
                    },
                    title: '$KACY-AVAX PNG LP',
                    link: `https://app.pangolin.exchange/#/add/AVAX/${Kacy}`
                  }}
                  balanceOf={kacyStake.balance}
                  earned={kacyStake.earned}
                  getReward={kacyStake.getReward}
                  withdrawable={kacyStake.withdrawable}
                  poolInfo={kacyStake.poolInfo}
                  unstaking={kacyStake.unstaking}
                  stakedUntil={kacyStake.stakedUntil}
                  stakeWithVotingPower={true}
                />
              ) : null}
              {process.env.NEXT_PUBLIC_MASTER === '1' ? (
                <StakeCard
                  pid={7}
                  symbol="lp-joe"
                  properties={{
                    logo: {
                      src: '/assets/logos/joe-kacy.svg',
                      style: { width: '14.4rem' }
                    },
                    title: '$KACY-AVAX JOE LP',
                    link: `https://traderjoexyz.com/pool/AVAX/${Kacy}`
                  }}
                  balanceOf={kacyStake.balance}
                  earned={kacyStake.earned}
                  getReward={kacyStake.getReward}
                  withdrawable={kacyStake.withdrawable}
                  poolInfo={kacyStake.poolInfo}
                  unstaking={kacyStake.unstaking}
                  stakedUntil={kacyStake.stakedUntil}
                  stakeWithVotingPower={true}
                />
              ) : (
                ''
              )}
              {process.env.NEXT_PUBLIC_MASTER === '1' ? (
                <StakeCard
                  pid={6}
                  symbol="ahype"
                  address={HeimCRPPOOL}
                  properties={{
                    logo: {
                      src: '/assets/logos/ahype-stake.svg',
                      style: { width: '5.8rem' }
                    },
                    title: '$aHYPE',
                    link: '/explore/ahype'
                  }}
                  balanceOf={kacyStake.balance}
                  earned={kacyStake.earned}
                  getReward={kacyStake.getReward}
                  withdrawable={kacyStake.withdrawable}
                  poolInfo={kacyStake.poolInfo}
                  unstaking={kacyStake.unstaking}
                  stakedUntil={kacyStake.stakedUntil}
                  stakeWithVotingPower={true}
                />
              ) : (
                <StakeCard
                  pid={4}
                  symbol="ahype"
                  address={HeimCRPPOOL}
                  properties={{
                    logo: {
                      src: '/assets/logos/ahype-stake.svg',
                      style: { width: '5.8rem' }
                    },
                    title: '$aHYPE',
                    link: '/explore/ahype'
                  }}
                  balanceOf={kacyStake.balance}
                  earned={kacyStake.earned}
                  getReward={kacyStake.getReward}
                  withdrawable={kacyStake.withdrawable}
                  poolInfo={kacyStake.poolInfo}
                  unstaking={kacyStake.unstaking}
                  stakedUntil={kacyStake.stakedUntil}
                  stakeWithVotingPower={true}
                />
              )}
              {process.env.NEXT_PUBLIC_MASTER === '1' ? (
                <StakeCard
                  pid={8}
                  symbol="k3c"
                  address={products[1].sipAddress}
                  properties={{
                    logo: {
                      src: '/assets/logos/tricrypto-stake.svg',
                      style: { width: '5.8rem' }
                    },
                    link: '/explore/k3c',
                    title: '$K3C'
                  }}
                  balanceOf={kacyStake.balance}
                  earned={kacyStake.earned}
                  getReward={kacyStake.getReward}
                  withdrawable={kacyStake.withdrawable}
                  poolInfo={kacyStake.poolInfo}
                  unstaking={kacyStake.unstaking}
                  stakedUntil={kacyStake.stakedUntil}
                  stakeWithVotingPower={true}
                />
              ) : (
                ''
              )}
            </S.GridStaking>
          </S.StakeFarm>
        </>
      )}
    </>
  )
}

export default StakeFarm
