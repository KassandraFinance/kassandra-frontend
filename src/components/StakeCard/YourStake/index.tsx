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
  const getYourStake = React.useCallback(async () => {
    const poolInfoResponse = await poolInfo(pid)

    if (!poolInfoResponse.withdrawDelay) {
      return
    }

    const kacyRewards = new BigNumber(poolInfoResponse.rewardRate).mul(
      new BigNumber(86400)
    )
    const totalStaked = new BigNumber(poolInfoResponse.depositedAmount)

    const stakingTokenPrice =
      pid === 5 ? priceLPToken.priceLP : priceLPToken.kacy

    const apr =
      poolInfoResponse.depositedAmount.toString() !== '0' &&
      priceLPToken.kacy.gt('-1') &&
      stakingTokenPrice.gt('-1')
        ? new BigNumber(
            Big(kacyRewards.toString())
              .mul('365')
              .mul('100')
              .mul(priceLPToken.kacy)
              .div(
                stakingTokenPrice.mul(
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
      balance = await balanceOf(pid, userWalletAddress)
      withdrawableResponse = await withdrawable(pid, userWalletAddress)
      unstakeResponse = await unstaking(pid, userWalletAddress)

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
      stakingToken: poolInfoResponse.stakingToken
    })
  }, [userWalletAddress, priceLPToken])

  React.useEffect(() => {
    getYourStake()
    const interval = setInterval(getYourStake, 6000)

    return () => clearInterval(interval)
  }, [getYourStake])

  return userWalletAddress ? (
    <>
      <S.Info>
        <p>Your stake</p>
        <S.Stake>
          <p>
            {infoStaked.yourStake.lt(new BigNumber('0')) ||
            (pid === 5 && priceLPToken.priceLP.lt(0)) ||
            (pid === 6 && priceLPToken.aHYPE.lt(0))
              ? '...'
              : !stakeWithVotingPower
              ? BNtoDecimal(infoStaked.yourStake, 18)
              : BNtoDecimal(
                  Big(infoStaked.yourStake.toString())
                    .mul(pid === 5 ? priceLPToken.priceLP : priceLPToken.aHYPE)
                    .div(Big(10).pow(18)),
                  2,
                  2,
                  2
                )}
            <S.Symbol>{!stakeWithVotingPower ? 'KACY' : 'USD'}</S.Symbol>
          </p>
          {!stakeWithVotingPower && (
            <span>
              &#8776;{' '}
              {infoStaked.yourStake.lt(new BigNumber('0')) ||
              priceLPToken.kacy.lt(0)
                ? '...'
                : BNtoDecimal(
                    Big(infoStaked.yourStake.toString())
                      .mul(priceLPToken.kacy)
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
      {!stakeWithVotingPower && (
        <>
          <S.Info>
            <span>Your voting power</span>
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
    </>
  ) : null
}

export default YourStake
