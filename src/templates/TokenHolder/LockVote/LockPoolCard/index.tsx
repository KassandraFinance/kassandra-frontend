import Big from 'big.js'
import request from 'graphql-request'
import Image from 'next/image'
import React from 'react'
import useSWR from 'swr'
import { LP_KACY_AVAX_PNG } from '../../../../constants/pools'
import {
  LPDaiAvax,
  Staking,
  SUBGRAPH_URL
} from '../../../../constants/tokenAddresses'
import usePriceLP from '../../../../hooks/usePriceLP'
import { useAppSelector } from '../../../../store/hooks'
import { Heading } from '../../styles'
import { GET_INFO_POOL } from '../graphql'
import BigNumber from 'bn.js'

import * as S from './styles'
import useStakingContract from '../../../../hooks/useStakingContract'
import { IInfoStaked } from '../../../../components/StakeCard'
import { getDate } from '../../../../utils/date'
import { BNtoDecimal } from '../../../../utils/numerals'

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

const LockPoolCard = ({
  pid,
  symbol,
  properties,
  stakeWithVotingPower,
  stakeWithLockPeriod,
  isLP,
  address
}: ILockPoolCardProps) => {
  const stakingContract = useStakingContract(Staking)
  const [delegateTo, setDelegateTo] = React.useState<string>('')

  const [infoStaked, setInfoStaked] = React.useState<IInfoStaked>({
    yourStake: new BigNumber(-1),
    withdrawable: false,
    votingMultiplier: '',
    startDate: '...',
    endDate: '...',
    withdrawDelay: '',
    kacyRewards: new BigNumber(-1),
    totalStaked: new BigNumber(-1),
    yourDailyKacyReward: new BigNumber(-1),
    hasExpired: false,
    unstake: false,
    apr: new BigNumber(-1),
    stakingToken: '',
    vestingPeriod: '...',
    lockPeriod: '...'
  })
  const [kacyPrice, setKacyPrice] = React.useState<Big>(Big(-1))
  const [poolPrice, setPoolPrice] = React.useState<Big>(Big(-1))
  const { getPriceKacyAndLP } = usePriceLP()
  const { userWalletAddress } = useAppSelector(state => state)

  const { data } = useSWR(
    [GET_INFO_POOL, address],
    (query, id) => request(SUBGRAPH_URL, query, { id }),
    {
      refreshInterval: 10000
    }
  )

  // async function getLiquidityPoolPriceInDollar() {
  //   const addressProviderReserves = isLP && address ? address : LP_KACY_AVAX_PNG

  //   const { kacyPriceInDollar, priceLP } = await getPriceKacyAndLP(
  //     addressProviderReserves,
  //     LPDaiAvax,
  //     isLP
  //   )
  //   setKacyPrice(kacyPriceInDollar)

  //   if (isLP && priceLP) {
  //     setPoolPrice(priceLP)
  //     return
  //   }

  //   if (data) {
  //     setPoolPrice(Big(data?.pool?.price_usd || -1))
  //     return
  //   }

  //   setPoolPrice(kacyPriceInDollar)
  // }

  React.useEffect(() => {
    async function getYourStake() {
      const poolInfoResponse = await stakingContract.poolInfo(pid)

      // if (!poolInfoResponse.withdrawDelay) return

      // console.log(pid)
      console.log(poolInfoResponse)
    }

    getYourStake()
  }, [pid])

  // const getYourStake = React.useCallback(async () => {
  //   const poolInfoResponse = await stakingContract.poolInfo(pid)
  //   if (!poolInfoResponse.withdrawDelay) {
  //     return
  //   }

  //   const kacyRewards = new BigNumber(poolInfoResponse.rewardRate).mul(
  //     new BigNumber(86400)
  //   )
  //   const totalStaked = new BigNumber(poolInfoResponse.depositedAmount)
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

  //   const startDate = getDate(
  //     Number(poolInfoResponse.periodFinish) -
  //       Number(poolInfoResponse.rewardsDuration)
  //   )
  //   const endDate = getDate(Number(poolInfoResponse.periodFinish))

  //   const timestampNow = new Date().getTime()
  //   const periodFinish: any = new Date(
  //     Number(poolInfoResponse.periodFinish) * 1000
  //   )

  //   let balance = new BigNumber('0')
  //   let withdrawableResponse = false
  //   let unstakeResponse = false
  //   let yourDailyKacyReward = new BigNumber(0)

  //   if (userWalletAddress.length > 0) {
  //     balance = await stakingContract.balance(pid, userWalletAddress)
  //     withdrawableResponse = await stakingContract.withdrawable(
  //       pid,
  //       userWalletAddress
  //     )
  //     unstakeResponse = await stakingContract.unstaking(pid, userWalletAddress)

  //     if (balance.gt(new BigNumber('0'))) {
  //       yourDailyKacyReward = kacyRewards
  //         .mul(balance)
  //         .div(new BigNumber(totalStaked))
  //     }
  //   }

  //   setInfoStaked({
  //     yourStake: balance,
  //     withdrawable: withdrawableResponse,
  //     votingMultiplier: poolInfoResponse.votingMultiplier,
  //     startDate,
  //     endDate,
  //     kacyRewards,
  //     yourDailyKacyReward,
  //     withdrawDelay: poolInfoResponse.withdrawDelay,
  //     totalStaked,
  //     hasExpired: periodFinish < timestampNow,
  //     unstake: unstakeResponse,
  //     apr,
  //     stakingToken: poolInfoResponse.stakingToken,
  //     vestingPeriod: poolInfoResponse.vestingPeriod,
  //     lockPeriod: poolInfoResponse.lockPeriod
  //   })
  // }, [userWalletAddress, poolPrice, kacyPrice])

  // React.useEffect(() => {
  //   getYourStake()
  //   const interval = setInterval(getYourStake, 6000)

  //   return () => clearInterval(interval)
  // }, [getYourStake])

  // React.useEffect(() => {
  //   getLiquidityPoolPriceInDollar()
  // }, [infoStaked.stakingToken, pid, data])

  // React.useEffect(() => {
  //   const delegateInfo = async () => {
  //     const delegate = await stakingContract.userInfo(pid, userWalletAddress)
  //     setDelegateTo(delegate.delegatee)
  //   }
  //   if (userWalletAddress) {
  //     delegateInfo()
  //   }
  // }, [])

  // console.log(infoStaked)

  return (
    <S.LockPool>
      <div className="logo">
        <Image src="/assets/logos/kacy-logo-rounded.svg" layout="fill" />
      </div>
      <S.LockPoolInfo>
        <S.LockPoolTop>
          <Heading as="h3" level="3">
            No Lock Pool
          </Heading>
          <S.Info>
            <strong>
              {' '}
              {infoStaked.apr.lt(new BigNumber(0))
                ? '...'
                : infoStaked.hasExpired
                ? 0
                : BNtoDecimal(infoStaked.apr, 0)}
              %
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
            <strong> {infoStaked.votingMultiplier || '...'}</strong>/ $KACY
          </span>
          <div>
            <Heading className="heading" as="h4" level="5">
              WITHDRAW DELAY
            </Heading>
            <strong>
              {infoStaked.withdrawDelay.length === 0
                ? '...'
                : infoStaked.withdrawDelay / 60 / 60 / 24 < 1
                ? infoStaked.withdrawDelay / 60
                : infoStaked.withdrawDelay / 60 / 60 / 24}
            </strong>
            <Heading className="heading" as="h4" level="5">
              {infoStaked.withdrawDelay / 60 / 60 / 24 < 1 ? ' min' : ' days'}
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
