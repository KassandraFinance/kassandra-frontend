/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import React from 'react'
import BigNumber from 'bn.js'
import { AbiItem } from "web3-utils"
import { useSelector, RootStateOrAny } from 'react-redux'

import web3, { EventSubscribe } from '../utils/web3'
import waitTransaction, { CompleteCallback } from '../utils/txWait'

import StakingContract from "../constants/abi/Staking.json"

interface Events {
  MinterChanged: EventSubscribe;
  DelegateChanged: EventSubscribe;
  DelegateVotesChanged: EventSubscribe;
  Transfer: EventSubscribe;
  Approval: EventSubscribe;
  NewPool: EventSubscribe;
  RewardAdded: EventSubscribe;
  Staked: EventSubscribe;
  Unstaking: EventSubscribe;
  Withdrawn: EventSubscribe;
  RewardPaid: EventSubscribe;
  RewardsDurationUpdated: EventSubscribe;
  Recovered: EventSubscribe;
}

export interface PoolInfo {
  stakingToken: string; // address
  depositedAmount: string; // uint256
  lastUpdateTime: string; // uint256
  rewardPerTokenStored: string; // uint256
  rewardsDuration: string; // uint256
  rewardRate: string; // uint256
  periodFinish: string; // uint256
  lockPeriod: string; // uint256
  withdrawDelay: string; // uint256
  vestingPeriod: string; // uint256
  votingMultiplier: string; // uint256
}

const useStakingContract = (address: string) => {
  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)
  const [contract, setContract] = React.useState(new web3.eth.Contract((StakingContract as unknown) as AbiItem, address))

  React.useEffect(() => {
    setContract(new web3.eth.Contract((StakingContract as unknown) as AbiItem, address))
  }, [address])

  return React.useMemo(() => {
    /* EVENT */

    const events: Events = contract.events

    /* SEND */

    const stake = async (pid: number, amount: BigNumber, onComplete?: CompleteCallback, message?: string) => {
      await contract.methods.stake(pid, amount, userWalletAddress, userWalletAddress)
        .send(
          { from: userWalletAddress }, 
          waitTransaction(onComplete ? onComplete : () => {}, message)
        )
    }

    const unstake = async (pid: number, onComplete?: CompleteCallback, message?: string) => {
      await contract.methods.unstake(pid)
        .send({ from: userWalletAddress },
          waitTransaction(onComplete ? onComplete : () => {}, message)
        )
    }

    const cancelUnstake = async (pid: number, onComplete?: CompleteCallback, message?: string) => {
      await contract.methods.cancelUnstake(pid)
        .send({ from: userWalletAddress }, 
          waitTransaction(onComplete ? onComplete : () => {}, message)
        )
    }

    const getReward = async (pid: number, onComplete?: CompleteCallback, message?: string) => {
      await contract.methods.getReward(pid)
        .send(
          { from: userWalletAddress }, 
          waitTransaction(onComplete ? onComplete : () => {}, message)
        )
    }

    const withdraw = async (pid: number, amount: BigNumber, onComplete?: CompleteCallback, message?: string) => {
      await contract.methods.withdraw(pid, amount)
        .send({ from: userWalletAddress },
          waitTransaction(onComplete ? onComplete : () => {}, message)
        )
    }

    // ======== Read Contract ========

    const balance = async (pid: number, walletAddress: string) => {
      const value: string = await contract.methods.balanceOf(pid, walletAddress).call()
      return new BigNumber(value)
    }

    const currentVotes = async (walletAddres: string) => {
      const value: string = await contract.methods.getCurrentVotes(walletAddres).call()
      return new BigNumber(value)
    }

    const earned = async (pid: number, walletAddress: string) => {
      const value: string = await contract.methods.earned(pid, walletAddress).call()
      return new BigNumber(value)
    }

    const poolInfo = async (pid: number) => {
      const value: PoolInfo = await contract.methods.poolInfo(pid).call()
      return value
    }

    const stakedUntil = async (pid: number, walletAddress: string) => {
      const value: string = await contract.methods.stakedUntil(pid, walletAddress).call()
      return value
    }

    const totalVotes = async () => {
      const value: string = await contract.methods.getTotalVotes().call()
      return new BigNumber(value)
    }

    const unstaking = async (pid: number, walletAddress: string) => {
      const value: boolean = await contract.methods.unstaking(pid, walletAddress).call()
      return value
    }

    const withdrawable = async (pid: number, walletAddress: string) => {
      const value: boolean = await contract.methods.withdrawable(pid, walletAddress).call()
      return value
    }

    return {
      events,

      stake,
      unstake,
      cancelUnstake,
      getReward,
      withdraw,

      balance,
      currentVotes,
      earned,
      poolInfo,
      stakedUntil,
      totalVotes,
      unstaking,
      withdrawable,
    }
  }, [contract, userWalletAddress])
}

export default useStakingContract
