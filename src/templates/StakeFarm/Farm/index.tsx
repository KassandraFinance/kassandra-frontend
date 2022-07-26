/* eslint-disable prettier/prettier */
import React from 'react'

import useMatomoEcommerce from '../../../hooks/useMatomoEcommerce'

import StakeCard from '../../../components/StakeCard'

import { poolsFunds, poolsFundsFuji } from '../../../constants/pools'

import * as S from './styles'

const Farm = () => {
  const { trackCategoryPageView } = useMatomoEcommerce()

  React.useEffect(() => {
    trackCategoryPageView([
      'farm',
      process.env.NEXT_PUBLIC_MASTER === '1' ? 'Avalanche' : 'Fuji'
    ])
  }, [])

  return (
    <>
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
    </>
  )
}

export default Farm
