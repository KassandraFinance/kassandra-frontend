/* eslint-disable prettier/prettier */
import React from 'react'
import BigNumber from 'bn.js'

import { chains, Staking } from '../../../constants/tokenAddresses'

import useMatomoEcommerce from '../../../hooks/useMatomoEcommerce'
import useStakingContract from '../../../hooks/useStakingContract'
import { useAppSelector } from '../../../store/hooks'

import StakeCard from '../../../components/StakeCard'

import * as S from './styles'

import {
  poolsKacyFuji,
  poolsInvestor,
  poolsKacy
} from '../../../constants/pools'

const Stake = () => {
  const [investor, setInvestor] = React.useState([false, false])

  const { trackCategoryPageView } = useMatomoEcommerce()
  const { balance } = useStakingContract(Staking)

  const { userWalletAddress, chainId } = useAppSelector(state => state)

  const chain =
    process.env.NEXT_PUBLIC_MASTER === '1' ? chains.avalanche : chains.fuji

  React.useEffect(() => {
    trackCategoryPageView([
      'Stake',
      process.env.NEXT_PUBLIC_MASTER === '1' ? 'Avalanche' : 'Fuji'
    ])
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
  )
}

export default Stake
