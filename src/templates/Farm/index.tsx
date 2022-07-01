/* eslint-disable prettier/prettier */
import React from 'react'

import { useSelector, RootStateOrAny } from 'react-redux'

import BigNumber from 'bn.js'

import { chains, Staking } from '../../constants/tokenAddresses'

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
import {
  poolsKacyFuji,
  poolsInvestor,
  poolsKacy,
  poolsFunds,
  poolsFundsFuji
} from '../../constants/pools'

const StakeFarm = () => {
  const [loading, setLoading] = React.useState<boolean>(true)
  const [investor, setInvestor] = React.useState([false, false])

  const { trackCategoryPageView } = useMatomoEcommerce()
  const { balance } = useStakingContract(Staking)

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
        balance(0, userWalletAddress),
        balance(1, userWalletAddress)
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
              {process.env.NEXT_PUBLIC_MASTER === '1'
                ? poolsKacy.map(pool => (
                    <StakeCard
                      key={pool.pid}
                      pid={pool.pid}
                      symbol={pool.symbol}
                      properties={{ ...pool.properties }}
                      stakeWithVotingPower={pool.stakeWithVotingPower}
                      stakeWithLockPeriod={pool.stakeWithLockPeriod}
                      isLP={pool.isLP}
                    />
                  ))
                : poolsKacyFuji.map(pool => (
                    <StakeCard
                      key={pool.pid}
                      pid={pool.pid}
                      symbol={pool.symbol}
                      properties={{ ...pool.properties }}
                      stakeWithVotingPower={pool.stakeWithVotingPower}
                      stakeWithLockPeriod={pool.stakeWithLockPeriod}
                      isLP={pool.isLP}
                    />
                  ))}
              {process.env.NEXT_PUBLIC_MASTER === '1' &&
                poolsInvestor.map((pool, i) => {
                  if (investor[i] && pool.pid === i) {
                    return (
                      <StakeCard
                        key={pool.pid}
                        pid={pool.pid}
                        symbol={pool.symbol}
                        properties={{ ...pool.properties }}
                        stakeWithVotingPower={pool.stakeWithVotingPower}
                        stakeWithLockPeriod={pool.stakeWithLockPeriod}
                        isLP={pool.isLP}
                      />
                    )
                  }
                })}
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
              {process.env.NEXT_PUBLIC_MASTER === '1'
                ? poolsFunds.map(pool => (
                    <StakeCard
                      key={pool.pid}
                      pid={pool.pid}
                      address={pool.address}
                      symbol={pool.symbol}
                      properties={{ ...pool.properties }}
                      stakeWithVotingPower={pool.stakeWithVotingPower}
                      stakeWithLockPeriod={pool.stakeWithLockPeriod}
                      isLP={pool.isLP}
                    />
                  ))
                : poolsFundsFuji.map(pool => (
                    <StakeCard
                      key={pool.pid}
                      pid={pool.pid}
                      address={pool.address}
                      symbol={pool.symbol}
                      properties={{ ...pool.properties }}
                      stakeWithVotingPower={pool.stakeWithVotingPower}
                      stakeWithLockPeriod={pool.stakeWithLockPeriod}
                      isLP={pool.isLP}
                    />
                  ))}
            </S.GridStaking>
          </S.StakeFarm>
        </>
      )}
    </>
  )
}

export default StakeFarm
