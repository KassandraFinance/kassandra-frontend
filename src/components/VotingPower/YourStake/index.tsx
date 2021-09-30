import React from 'react'
import BigNumber from 'bn.js'
import { PoolInfo } from '../../../hooks/useStakingContract'

import { BNtoDecimal } from '../../../utils/numerals'

import * as S from './styles'

interface IYourStakeProps {
  pid: number
  balanceOf: (pid: number, walletAddress: string) => Promise<BigNumber>
  poolInfo: (pid: number) => Promise<PoolInfo>
  withdrawable: (pid: number, walletAddress: string) => Promise<boolean>
  unstaking: (pid: number, walletAddress: string) => Promise<boolean>
  unstake: boolean
  setUnstake: React.Dispatch<React.SetStateAction<boolean>>
  userWalletAddress: string
  setIsWithdrawable: React.Dispatch<React.SetStateAction<boolean>>
  setHasStake: React.Dispatch<React.SetStateAction<boolean>>
}

const YourStake = ({ 
  pid,
  balanceOf,
  poolInfo,
  withdrawable,
  unstaking,
  unstake,
  setUnstake,
  userWalletAddress,
  setIsWithdrawable,
  setHasStake
}: IYourStakeProps) => {
  const [hasExpired, setHasExpired] = React.useState(false)
  const [infoStaked, setInfoStaked] = React.useState({
    yourStake: new BigNumber(0),
    withdrawable: false,
    votingMultiplier: '',
    kacyRewards: new BigNumber(0),
    totalStaked: new BigNumber(0),
    yourDailyKacyReward: new BigNumber(0)
  })
  
  let interval: any

  const getYourStake = React.useCallback(async () => {
    const poolInfoResponse = await poolInfo(pid)

    if (poolInfoResponse.withdrawDelay) {
      const balance: BigNumber = await balanceOf(pid, userWalletAddress)
      const withdrawableResponse = await withdrawable(pid, userWalletAddress)

      const unstakeResponse = await unstaking(pid, userWalletAddress)

      const timestampNow = new Date().getTime()
      const periodFinish: any = new Date(Number(poolInfoResponse.periodFinish) * 1000)
      const hasStake = balance.toString() !== '0'



      setInfoStaked({
        yourStake: balance,
        withdrawable: withdrawableResponse,
        votingMultiplier: poolInfoResponse.votingMultiplier,
        totalStaked: new BigNumber(poolInfoResponse.depositedAmount),
        kacyRewards: new BigNumber(poolInfoResponse.rewardRate).mul(new BigNumber(86400)),
        yourDailyKacyReward: new BigNumber(0),      
      })

      setUnstake(unstakeResponse)
      setHasExpired(periodFinish < timestampNow)
      setIsWithdrawable(withdrawableResponse)
      setHasStake(hasStake)

      // interval
      interval = setInterval(async () => {
        const balance: BigNumber = await balanceOf(pid, userWalletAddress)
        const withdrawableResponse = await withdrawable(pid, userWalletAddress)

        const unstakeResponse = await unstaking(pid, userWalletAddress)

        const timestampNow = new Date().getTime()
        const periodFinish: any = new Date(Number(poolInfoResponse.periodFinish) * 1000)
        const hasStake = balance.toString() !== '0'

        setInfoStaked({
          yourStake: balance,
          withdrawable: withdrawableResponse,
          votingMultiplier: poolInfoResponse.votingMultiplier,
          totalStaked: new BigNumber(poolInfoResponse.depositedAmount),
          kacyRewards: new BigNumber(poolInfoResponse.rewardRate).mul(new BigNumber(86400)),
          yourDailyKacyReward: new BigNumber(0),      
        })

        setUnstake(unstakeResponse)
        setHasExpired(periodFinish < timestampNow)
        setIsWithdrawable(withdrawableResponse)
        setHasStake(hasStake)
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
          <span>~ {BNtoDecimal(new BigNumber(infoStaked.yourStake).mul(new BigNumber(2)), new BigNumber(18), 2)} USD</span>
        </S.Stake>
      </S.Info>
      <S.Info>
        <span>Your voting power</span>
        <span>
          {BNtoDecimal(
            new BigNumber(
              infoStaked.withdrawable || unstake
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
          {hasExpired ? '0' : BNtoDecimal(
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