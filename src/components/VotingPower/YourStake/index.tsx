import React from 'react'
import BigNumber from 'bn.js'
import { PoolInfo } from '../../../hooks/useStakingContract'

import { getDate } from '../../../utils/date'
import { BNtoDecimal } from '../../../utils/numerals'

import * as S from './styles'
import { IInfoStaked } from '..'

interface IYourStakeProps {
  pid: number
  balanceOf: (pid: number, walletAddress: string) => Promise<BigNumber>
  poolInfo: (pid: number) => Promise<PoolInfo>
  withdrawable: (pid: number, walletAddress: string) => Promise<boolean>
  unstaking: (pid: number, walletAddress: string) => Promise<boolean>
  userWalletAddress: string
  infoStaked: IInfoStaked
  setInfoStaked: React.Dispatch<React.SetStateAction<IInfoStaked>>
}

const YourStake = ({ 
  pid,
  balanceOf,
  poolInfo,
  withdrawable,
  unstaking,
  userWalletAddress,
  infoStaked,
  setInfoStaked
}: IYourStakeProps) => {

  let interval: any

  const getYourStake = React.useCallback(async () => {
    const poolInfoResponse = await poolInfo(pid)

    if (poolInfoResponse.withdrawDelay) {
      const balance: BigNumber = await balanceOf(pid, userWalletAddress)
      const withdrawableResponse = await withdrawable(pid, userWalletAddress)
      const kacyRewards = new BigNumber(poolInfoResponse.rewardRate).mul(
        new BigNumber(86400)
      )
      const unstakeResponse = await unstaking(pid, userWalletAddress)

      const apr = kacyRewards.mul(new BigNumber(365)).mul(new BigNumber(100)).div(new BigNumber(poolInfoResponse.depositedAmount))

      const startDate = getDate(
        Number(poolInfoResponse.periodFinish) -
        Number(poolInfoResponse.rewardsDuration)
      )
      const endDate = getDate(Number(poolInfoResponse.periodFinish))

      const timestampNow = new Date().getTime()
      const periodFinish: any = new Date(Number(poolInfoResponse.periodFinish) * 1000)

      
      setInfoStaked((prevState) => ({
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
        apr
      }))

      // interval
      interval = setInterval(async () => {
        const poolInfoResponse = await poolInfo(pid)

        if (poolInfoResponse.withdrawDelay) {
          const balance: BigNumber = await balanceOf(pid, userWalletAddress)
          const withdrawableResponse = await withdrawable(pid, userWalletAddress)
          const kacyRewards = new BigNumber(poolInfoResponse.rewardRate).mul(
            new BigNumber(86400)
          )
  
          const unstakeResponse = await unstaking(pid, userWalletAddress)
  
          const timestampNow = new Date().getTime()
          const periodFinish: any = new Date(Number(poolInfoResponse.periodFinish) * 1000)
  
  
          setInfoStaked((prevState) => ({
            ...prevState,
            yourStake: balance,
            withdrawable: withdrawableResponse,
            votingMultiplier: poolInfoResponse.votingMultiplier,
            totalStaked: new BigNumber(poolInfoResponse.depositedAmount),
            kacyRewards,
            yourDailyKacyReward: new BigNumber(0),
            hasExpired: periodFinish < timestampNow,
            unstake: unstakeResponse
          }))
        }

      }, 6000)
    }

  }, [])

  React.useEffect(() => {
    let yourDailyKacyReward: BigNumber = new BigNumber(0)

    if (infoStaked.yourStake.toString() !== "0") {
      yourDailyKacyReward = infoStaked.kacyRewards
        .mul(infoStaked.yourStake ? infoStaked.yourStake : new BigNumber(0))
        .div(new BigNumber(infoStaked.totalStaked))

        setInfoStaked((prevState) => ({
        ...prevState,
        yourDailyKacyReward
      }))
    }
  }, [infoStaked.yourStake])


  React.useEffect(() => {
    getYourStake()

    return () => clearInterval(interval)
  }, [])
  
  return (
    <>
      <S.Info>
        <p>Your stake</p>
        <S.Stake>
          <p>
            {BNtoDecimal(
              infoStaked.yourStake,
              new BigNumber(18),
              6
            )}{' '}
            KACY
          </p>
          <span>&#8776; {BNtoDecimal(new BigNumber(infoStaked.yourStake).mul(new BigNumber(2)), new BigNumber(18), 2)} USD</span>
        </S.Stake>
      </S.Info>
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
            6
          )}
        </span>
      </S.Info> 
      <S.Info>
        <span>Your daily KACY reward</span>
        <span>
          {infoStaked.hasExpired ? '0' : BNtoDecimal(
            infoStaked.yourDailyKacyReward,
            new BigNumber(18),
            2
          )}
          /day
        </span>
      </S.Info>
    </>
  )
}

export default YourStake