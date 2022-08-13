import React from 'react'
import Image from 'next/image'
import request from 'graphql-request'
import useSWR from 'swr'
import Big from 'big.js'
import BigNumber from 'bn.js'

import { LP_KACY_AVAX_PNG } from '../../../../constants/pools'
import {
  LPDaiAvax,
  Staking,
  SUBGRAPH_URL
} from '../../../../constants/tokenAddresses'
import usePriceLP from '../../../../hooks/usePriceLP'
import useStakingContract from '../../../../hooks/useStakingContract'

import { useAppSelector } from '../../../../store/hooks'

import { BNtoDecimal } from '../../../../utils/numerals'

import { GET_INFO_POOL } from '../graphql'

import { Heading } from '../../styles'
import * as S from './styles'

interface ILockPoolCardProps {
  pid: number;
  symbol: string;
  properties: {
    logo: {
      src: string,
      style: {
        width: string
      }
    },
    addressProviderReserves?: string,
    title?: string,
    link?: string
  };
  stakeWithVotingPower: boolean;
  stakeWithLockPeriod: boolean;
  isLP: boolean;
  address?: string;
}

// interface IInfoStaked {
//   votingMultiplier: string;
//   withdrawDelay: number;
//   hasExpired: boolean;
//   apr: BigNumber;
// }

interface IInfoStaked {
  type: string;
  withdrawDelay: string;
  apr: string;
  multiplier: string;
}

const LockPoolCard = ({
  type,
  withdrawDelay,
  apr,
  multiplier
}: IInfoStaked) => {
  // const [infoStaked, setInfoStaked] = React.useState<IInfoStaked>({
  //   votingMultiplier: '',
  //   withdrawDelay: 0,
  //   hasExpired: false,
  //   apr: new BigNumber(-1)
  // })
  // const [kacyPrice, setKacyPrice] = React.useState<Big>(Big(-1))
  // const [poolPrice, setPoolPrice] = React.useState<Big>(Big(-1))
  // const { getPriceKacyAndLP } = usePriceLP()
  // const { userWalletAddress } = useAppSelector(state => state)

  // const stakingContract = useStakingContract(Staking)

  // const { data } = useSWR(
  //   [GET_INFO_POOL, address],
  //   (query, id) => request(SUBGRAPH_URL, query, { id }),
  //   {
  //     refreshInterval: 10000
  //   }
  // )

  // async function getLiquidityPoolPriceInDollar() {
  //   const { kacyPriceInDollar } = await getPriceKacyAndLP(
  //     LP_KACY_AVAX_PNG,
  //     LPDaiAvax,
  //     false
  //   )

  //   setKacyPrice(kacyPriceInDollar)
  //   setPoolPrice(kacyPriceInDollar)
  // }

  // const getYourStake = React.useCallback(async () => {
  //   const poolInfoResponse = await stakingContract.poolInfo(pid)
  //   if (!poolInfoResponse.withdrawDelay) {
  //     return
  //   }

  //   const kacyRewards = new BigNumber(poolInfoResponse.rewardRate).mul(
  //     new BigNumber(86400)
  //   )

  //   const apr =
  //     poolInfoResponse.depositedAmount.toString() !== '0' &&
  //     kacyPrice.gt('-1') &&
  //     (poolPrice || Big(0)).gt('-1')
  //       ? new BigNumber(
  //           Big(kacyRewards.toString())
  //             .mul('365')
  //             .mul('100')
  //             .mul(kacyPrice)
  //             .div(
  //               (poolPrice || Big(1)).mul(
  //                 Big(poolInfoResponse.depositedAmount.toString())
  //               )
  //             )
  //             .toFixed(0)
  //         )
  //       : new BigNumber(-1)

  //   const timestampNow = new Date().getTime()
  //   const periodFinish: any = new Date(
  //     Number(poolInfoResponse.periodFinish) * 1000
  //   )

  //   setInfoStaked({
  //     votingMultiplier: poolInfoResponse.votingMultiplier,
  //     withdrawDelay: Number(poolInfoResponse.withdrawDelay),
  //     hasExpired: periodFinish < timestampNow,
  //     apr
  //   })
  // }, [userWalletAddress, poolPrice, kacyPrice])

  // React.useEffect(() => {
  //   getYourStake()
  //   const interval = setInterval(getYourStake, 6000)

  //   return () => clearInterval(interval)
  // }, [getYourStake])

  // React.useEffect(() => {
  //   getLiquidityPoolPriceInDollar()
  // }, [pid, data])

  return (
    <S.LockPool>
      <div className="logo">
        <Image src="/assets/logos/kacy-logo-rounded.svg" layout="fill" />
      </div>
      <S.LockPoolInfo>
        <S.LockPoolTop>
          <Heading as="h3" level="3">
            {/* {pid === 2
              ? 'No Lock Pool'
              : infoStaked.withdrawDelay / 60 / 60 / 24 < 1
              ? infoStaked.withdrawDelay / 60 + '-Day Lock Pool'
              : infoStaked.withdrawDelay / 60 / 60 / 24 + '-Day Lock Pool'} */}
            {type}
          </Heading>
          <S.Info>
            <strong>
              {/* {' '}
              {infoStaked.apr.lt(new BigNumber(0))
                ? '...'
                : infoStaked.hasExpired
                ? 0
                : BNtoDecimal(infoStaked.apr, 0)} */}
              {apr}%
            </strong>
            <span>
              APR{' '}
              <Image
                src="/assets/utilities/warning-blue.svg"
                width={18}
                height={18}
              />
            </span>
          </S.Info>
        </S.LockPoolTop>
        <S.Hr />
        <S.LockPoolBottom>
          <span>
            VOTING POWER{' '}
            <strong>
              {multiplier}
              {/* {infoStaked.votingMultiplier || '...'} */}
            </strong>
            / $KACY
          </span>
          <div>
            <Heading className="heading" as="h4" level="5">
              WITHDRAW DELAY
            </Heading>
            <strong>
              {withdrawDelay}
              {/* {infoStaked.withdrawDelay === 0
                ? '0'
                : infoStaked.withdrawDelay / 60 / 60 / 24 < 1
                ? infoStaked.withdrawDelay / 60
                : infoStaked.withdrawDelay / 60 / 60 / 24} */}
            </strong>
            <Heading className="heading" as="h4" level="5">
              {/* {infoStaked.withdrawDelay / 60 / 60 / 24 < 1 ? ' day' : ' days'} */}
            </Heading>
            <Image
              className="warning-gray-icon"
              src="/assets/utilities/warning-gray.svg"
              width={18}
              height={18}
            />
          </div>
        </S.LockPoolBottom>
      </S.LockPoolInfo>
    </S.LockPool>
  )
}

export default LockPoolCard
