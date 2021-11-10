/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import BigNumber from 'bn.js'
import Big from 'big.js'

import { PoolInfo } from '../../../hooks/useStakingContract'

import { getDate } from '../../../utils/date'
import { BNtoDecimal } from '../../../utils/numerals'

import * as S from './styles'
import { IInfoStaked, IPriceLPToken } from '..'

interface IYourStakeProps {
  pid: number;
  balanceOf: (pid: number, walletAddress: string) => Promise<BigNumber>;
  poolInfo: (pid: number) => Promise<PoolInfo>;
  withdrawable: (pid: number, walletAddress: string) => Promise<boolean>;
  unstaking: (pid: number, walletAddress: string) => Promise<boolean>;
  userWalletAddress: string;
  infoStaked: IInfoStaked;
  setInfoStaked: React.Dispatch<React.SetStateAction<IInfoStaked>>;
  stakeWithVotingPower: boolean;
  priceLPToken: IPriceLPToken;
}

const YourStake = ({
  pid,
  balanceOf,
  poolInfo,
  withdrawable,
  unstaking,
  userWalletAddress,
  infoStaked,
  setInfoStaked,
  stakeWithVotingPower,
  priceLPToken
}: IYourStakeProps) => {
  let interval: any

  const getYourStake = React.useCallback(async () => {
    const poolInfoResponse = await poolInfo(pid)

    if (poolInfoResponse.withdrawDelay) {
      if (userWalletAddress === '') {
        const kacyRewards = new BigNumber(poolInfoResponse.rewardRate).mul(
          new BigNumber(86400)
        )

        const apr =
          poolInfoResponse.depositedAmount.toString() !== '0'
            ? kacyRewards
                .mul(new BigNumber(365))
                .mul(new BigNumber(100))
                .div(new BigNumber(poolInfoResponse.depositedAmount))
            : new BigNumber(0)

        const startDate = getDate(
          Number(poolInfoResponse.periodFinish) -
            Number(poolInfoResponse.rewardsDuration)
        )
        const endDate = getDate(Number(poolInfoResponse.periodFinish))

        const timestampNow = new Date().getTime()
        const periodFinish: any = new Date(
          Number(poolInfoResponse.periodFinish) * 1000
        )

        setInfoStaked(prevState => ({
          ...prevState,
          votingMultiplier: poolInfoResponse.votingMultiplier,
          startDate,
          endDate,
          withdrawDelay: poolInfoResponse.withdrawDelay,
          kacyRewards,
          totalStaked: new BigNumber(poolInfoResponse.depositedAmount),
          yourDailyKacyReward: new BigNumber(0),
          hasExpired: periodFinish < timestampNow,
          apr,
          stakingToken: poolInfoResponse.stakingToken
        }))

        return
      }

      const balance: BigNumber = await balanceOf(pid, userWalletAddress)
      const withdrawableResponse = await withdrawable(pid, userWalletAddress)
      const kacyRewards = new BigNumber(poolInfoResponse.rewardRate).mul(
        new BigNumber(86400)
      )
      const unstakeResponse = await unstaking(pid, userWalletAddress)

      const apr =
        poolInfoResponse.depositedAmount.toString() !== '0'
          ? kacyRewards
              .mul(new BigNumber(365))
              .mul(new BigNumber(100))
              .div(new BigNumber(poolInfoResponse.depositedAmount))
          : new BigNumber(0)

      const startDate = getDate(
        Number(poolInfoResponse.periodFinish) -
          Number(poolInfoResponse.rewardsDuration)
      )
      const endDate = getDate(Number(poolInfoResponse.periodFinish))

      const timestampNow = new Date().getTime()
      const periodFinish: any = new Date(
        Number(poolInfoResponse.periodFinish) * 1000
      )

      setInfoStaked(prevState => ({
        ...prevState,
        yourStake: balance,
        withdrawable: withdrawableResponse,
        votingMultiplier: poolInfoResponse.votingMultiplier,
        startDate,
        endDate,
        withdrawDelay: poolInfoResponse.withdrawDelay,
        kacyRewards,
        totalStaked: new BigNumber(poolInfoResponse.depositedAmount),
        yourDailyKacyReward: new BigNumber(0),
        hasExpired: periodFinish < timestampNow,
        unstake: unstakeResponse,
        apr,
        stakingToken: poolInfoResponse.stakingToken
      }))

      // interval
      interval = setInterval(async () => {
        const poolInfoResponse = await poolInfo(pid)

        if (poolInfoResponse.withdrawDelay) {
          const balance: BigNumber = await balanceOf(pid, userWalletAddress)
          const withdrawableResponse = await withdrawable(
            pid,
            userWalletAddress
          )
          const kacyRewards = new BigNumber(poolInfoResponse.rewardRate).mul(
            new BigNumber(86400)
          )

          const unstakeResponse = await unstaking(pid, userWalletAddress)

          const apr =
            poolInfoResponse.depositedAmount.toString() !== '0'
              ? kacyRewards
                  .mul(new BigNumber(365))
                  .mul(new BigNumber(100))
                  .div(new BigNumber(poolInfoResponse.depositedAmount))
              : new BigNumber(0)

          const timestampNow = new Date().getTime()
          const periodFinish: any = new Date(
            Number(poolInfoResponse.periodFinish) * 1000
          )

          setInfoStaked(prevState => ({
            ...prevState,
            yourStake: balance,
            withdrawable: withdrawableResponse,
            votingMultiplier: poolInfoResponse.votingMultiplier,
            totalStaked: new BigNumber(poolInfoResponse.depositedAmount),
            kacyRewards,
            yourDailyKacyReward: new BigNumber(0),
            hasExpired: periodFinish < timestampNow,
            unstake: unstakeResponse,
            apr
          }))
        }
      }, 6000)
    }
  }, [userWalletAddress])

  React.useEffect(() => {
    let yourDailyKacyReward: BigNumber = new BigNumber(0)

    if (infoStaked.yourStake.toString() !== '0') {
      yourDailyKacyReward = infoStaked.kacyRewards
        .mul(infoStaked.yourStake ? infoStaked.yourStake : new BigNumber(0))
        .div(new BigNumber(infoStaked.totalStaked))

      setInfoStaked(prevState => ({
        ...prevState,
        yourDailyKacyReward
      }))
    }
  }, [infoStaked.yourStake])

  React.useEffect(() => {
    getYourStake()

    return () => clearInterval(interval)
  }, [userWalletAddress])

  return userWalletAddress ? (
    <>
      <S.Info>
        <p>Your stake</p>
        <S.Stake>
          <p>
            {pid === 4
              ? Big(infoStaked.yourStake.toString())
                  .mul(priceLPToken.priceLP)
                  .div(Big(10).pow(18))
                  .toFixed(2)
              : BNtoDecimal(infoStaked.yourStake, new BigNumber(18), 2)}{' '}
            <S.Symbol>{!stakeWithVotingPower ? 'KACY' : 'USD'}</S.Symbol>
          </p>
          {!stakeWithVotingPower && (
            <span>
              &#8776;{' '}
              {Big(infoStaked.yourStake.toString())
                .mul(priceLPToken.priceLP)
                .div(Big(10).pow(18))
                .toFixed(2)}{' '}
              USD
            </span>
          )}
        </S.Stake>
      </S.Info>
      {!stakeWithVotingPower && (
        <>
          <S.Info>
            <span>Your voting power</span>
            <span>
              {BNtoDecimal(
                new BigNumber(
                  infoStaked.withdrawable || infoStaked.unstake
                    ? 1
                    : infoStaked.votingMultiplier
                ).mul(infoStaked.yourStake),
                new BigNumber(18),
                2
              )}
            </span>
          </S.Info>
          <S.Info>
            <span>Your daily KACY reward</span>
            <span>
              {infoStaked.hasExpired
                ? '0'
                : BNtoDecimal(
                    infoStaked.yourDailyKacyReward,
                    new BigNumber(18),
                    2
                  )}
              /day
            </span>
          </S.Info>
        </>
      )}
    </>
  ) : null
}

export default YourStake
