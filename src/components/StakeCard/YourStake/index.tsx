/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

import BigNumber from 'bn.js'
import Big from 'big.js'

import { Staking } from '../../../constants/tokenAddresses'

import useStakingContract from '../../../hooks/useStakingContract'

import { getDate } from '../../../utils/date'
import { BNtoDecimal } from '../../../utils/numerals'
import substr from '../../../utils/substr'

import { IInfoStaked } from '../'

import * as S from './styles'

interface IYourStakeProps {
  pid: number;
  userWalletAddress: string;
  infoStaked: IInfoStaked;
  setInfoStaked: React.Dispatch<React.SetStateAction<IInfoStaked>>;
  stakeWithVotingPower: boolean;
  poolPrice: Big;
  kacyPrice: Big;
  stakeWithLockPeriod: boolean;
  lockPeriod: number;
  availableWithdraw: Big;
}

const YourStake = ({
  pid,
  userWalletAddress,
  infoStaked,
  setInfoStaked,
  stakeWithVotingPower,
  stakeWithLockPeriod,
  poolPrice,
  kacyPrice,
  lockPeriod,
  availableWithdraw
}: IYourStakeProps) => {
  const stakingContract = useStakingContract(Staking)

  const [delegateTo, setDelegateTo] = React.useState<string>('')

  const getYourStake = React.useCallback(async () => {
    const poolInfoResponse = await stakingContract.poolInfo(pid)
    if (!poolInfoResponse.withdrawDelay) {
      return
    }

    const kacyRewards = new BigNumber(poolInfoResponse.rewardRate).mul(
      new BigNumber(86400)
    )
    const totalStaked = new BigNumber(poolInfoResponse.depositedAmount)
    const apr =
      poolInfoResponse.depositedAmount.toString() !== '0' &&
      kacyPrice.gt('-1') &&
      (poolPrice || Big(0)).gt('-1')
        ? new BigNumber(
            Big(kacyRewards.toString())
              .mul('365')
              .mul('100')
              .mul(kacyPrice)
              .div(
                (poolPrice || Big(1)).mul(
                  Big(poolInfoResponse.depositedAmount.toString())
                )
              )
              .toFixed(0)
          )
        : new BigNumber(-1)

    const startDate = getDate(
      Number(poolInfoResponse.periodFinish) -
        Number(poolInfoResponse.rewardsDuration)
    )
    const endDate = getDate(Number(poolInfoResponse.periodFinish))

    const timestampNow = new Date().getTime()
    const periodFinish: any = new Date(
      Number(poolInfoResponse.periodFinish) * 1000
    )

    let balance = new BigNumber('0')
    let withdrawableResponse = false
    let unstakeResponse = false
    let yourDailyKacyReward = new BigNumber(0)

    if (userWalletAddress.length > 0) {
      balance = await stakingContract.balance(pid, userWalletAddress)
      withdrawableResponse = await stakingContract.withdrawable(
        pid,
        userWalletAddress
      )
      unstakeResponse = await stakingContract.unstaking(pid, userWalletAddress)

      if (balance.gt(new BigNumber('0'))) {
        yourDailyKacyReward = kacyRewards
          .mul(balance)
          .div(new BigNumber(totalStaked))
      }
    }

    setInfoStaked({
      yourStake: balance,
      withdrawable: withdrawableResponse,
      votingMultiplier: poolInfoResponse.votingMultiplier,
      startDate,
      endDate,
      kacyRewards,
      yourDailyKacyReward,
      withdrawDelay: poolInfoResponse.withdrawDelay,
      totalStaked,
      hasExpired: periodFinish < timestampNow,
      unstake: unstakeResponse,
      apr,
      stakingToken: poolInfoResponse.stakingToken,
      vestingPeriod: poolInfoResponse.vestingPeriod,
      lockPeriod: poolInfoResponse.lockPeriod
    })
  }, [userWalletAddress, poolPrice, kacyPrice])

  React.useEffect(() => {
    getYourStake()
    const interval = setInterval(getYourStake, 6000)

    return () => clearInterval(interval)
  }, [getYourStake])

  React.useEffect(() => {
    const delegateInfo = async () => {
      const delegate = await stakingContract.userInfo(pid, userWalletAddress)
      setDelegateTo(delegate.delegatee)
    }
    if (userWalletAddress) {
      delegateInfo()
    }
  }, [])

  return userWalletAddress ? (
    <>
      <S.Info>
        <p>Your stake</p>
        <S.Stake>
          {infoStaked.yourStake.lt(new BigNumber('0')) ||
          (poolPrice || Big(0)).lt(0) ? (
            '...'
          ) : stakeWithVotingPower ? (
            <p>
              {BNtoDecimal(infoStaked.yourStake, 18)}
              <S.Symbol>KACY</S.Symbol>
            </p>
          ) : (
            <p>
              {BNtoDecimal(
                Big(infoStaked.yourStake.toString())
                  .mul(poolPrice)
                  .div(Big(10).pow(18)),
                2,
                2,
                2
              )}
              <S.Symbol>USD</S.Symbol>
            </p>
          )}
          {stakeWithVotingPower && (
            <span>
              &#8776;{' '}
              {infoStaked.yourStake.lt(new BigNumber('0')) || kacyPrice.lt(0)
                ? '...'
                : BNtoDecimal(
                    Big(infoStaked.yourStake.toString())
                      .mul(kacyPrice)
                      .div(Big(10).pow(18)),
                    6,
                    2,
                    2
                  )}{' '}
              USD
            </span>
          )}
        </S.Stake>
      </S.Info>
      {stakeWithVotingPower && (
        <>
          <S.Info>
            <span>Pool Voting Power</span>
            <span>
              {infoStaked.yourStake.lt(new BigNumber(0))
                ? '...'
                : BNtoDecimal(
                    new BigNumber(
                      infoStaked.withdrawable || infoStaked.unstake
                        ? 1
                        : infoStaked.votingMultiplier
                    ).mul(infoStaked.yourStake),
                    18,
                    2
                  )}
            </span>
          </S.Info>
          <S.Info>
            <span>Delegated To</span>
            <span>
              {delegateTo === userWalletAddress ? 'Self' : substr(delegateTo)}
            </span>
          </S.Info>
        </>
      )}
      <S.Info>
        <span>Your daily KACY reward</span>
        <span>
          {infoStaked.yourDailyKacyReward.lt(new BigNumber(0))
            ? '...'
            : infoStaked.hasExpired
            ? '0'
            : BNtoDecimal(infoStaked.yourDailyKacyReward, 18, 2)}
          /day
        </span>
      </S.Info>
      {stakeWithLockPeriod && (
        <>
          <S.Info>
            <span>Lock period</span>
            <span>
              {parseInt(infoStaked.lockPeriod) / 60 / 60 / 24 / 30} months
            </span>
          </S.Info>
          <S.Info>
            <span>Vesting period</span>
            <span>
              {parseInt(infoStaked.vestingPeriod) / 60 / 60 / 24 / 30} months
            </span>
          </S.Info>
          <S.Info>
            <span>Locked until</span>
            <span>{getDate(lockPeriod)}</span>
          </S.Info>
          <S.Info>
            <span>Available for withdraw</span>
            <span>
              {availableWithdraw.gt(-1)
                ? BNtoDecimal(availableWithdraw.div(Big(10).pow(18)), 18)
                : '...'}{' '}
              KACY
            </span>
          </S.Info>
        </>
      )}
    </>
  ) : null
}

export default YourStake
