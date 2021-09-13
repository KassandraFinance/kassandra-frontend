import BigNumber from 'bn.js'
import { AbiItem } from "web3-utils"
import { useSelector, RootStateOrAny } from 'react-redux'

import web3 from '../utils/web3'
import waitTransaction, { CompleteCallback } from '../utils/txWait'

import { Staking } from '../constants/tokenAddresses'
import StakingContract from "../constants/abi/Staking.json"

const useStakingContract = () => {
  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)


  const getStakingContract = (address: string) => {
    const contract = new web3.eth.Contract((StakingContract as unknown) as AbiItem, address)
    return contract
  }

  // ======== Write on Contract ========

  const stake = async (pid: number, amount: BigNumber, onComplete?: CompleteCallback, message?: string) => {
    const contract = getStakingContract(Staking)
    await contract.methods.stake(pid, amount, userWalletAddress, userWalletAddress)
      .send(
        { from: userWalletAddress }, 
        onComplete ? waitTransaction(onComplete, message) : undefined
      )
  }

  const unstake = async (pid: number, onComplete?: CompleteCallback, message?: string) => {
    const contract = getStakingContract(Staking)
    await contract.methods.unstake(pid)
      .send({ from: userWalletAddress },
        onComplete ? waitTransaction(onComplete, message) : undefined
      )
  }

  const getReward = async (pid: number, onComplete?: CompleteCallback, message?: string) => {
    const contract = getStakingContract(Staking)
    const getReward = await contract.methods.getReward(pid)
      .send(
        { from: userWalletAddress }, 
        onComplete ? waitTransaction(onComplete, message) : undefined
      )
    return getReward
  }

  const withdraw = async (pid: number, amount: BigNumber, onComplete?: CompleteCallback, message?: string) => {
    const contract = getStakingContract(Staking)
    await contract.methods.withdraw(pid, amount)
      .send({ from: userWalletAddress },
        onComplete ? waitTransaction(onComplete, message) : undefined
      )
  }

  const cancelUnstake = async (pid: number) => {
    const contract = getStakingContract(Staking)
    await contract.methods.cancelUnstake(pid).send({ from: userWalletAddress })
  }

  // ======== Read Contract ========

  const balanceOf = async (pid: number, walletAddress: string) => {
    const contract = getStakingContract(Staking)
      const balance = await contract.methods.balanceOf(pid, walletAddress).call()
      return new BigNumber(balance)
  }

  const earned = async (pid: number, walletAddress: string) => {
    const contract = getStakingContract(Staking)
      const earned = await contract.methods.earned(pid, walletAddress).call()
      return new BigNumber(earned)
  }

  const withdrawable = async (pid: number, walletAddress: string) => {
    const contract = getStakingContract(Staking)
      const withdrawable = await contract.methods.withdrawable(pid, walletAddress).call()
      return withdrawable
  }

  const poolInfo = async (pid: number) => {
    const contract = getStakingContract(Staking)
      const poolInfo = await contract.methods.poolInfo(pid).call()
      return poolInfo
  }

  const unstaking = async (pid: number, walletAddress: string) => {
    const contract = getStakingContract(Staking)
      const isUnstaking = await contract.methods.unstaking(pid, walletAddress).call()
      return isUnstaking
  }

  const stakedUntil = async (pid: number, walletAddress: string) => {
    const contract = getStakingContract(Staking)
      const isUnstaking = await contract.methods.stakedUntil(pid, walletAddress).call()
      return isUnstaking
  }

  const getTotalVotes = async () => {
    const contract = getStakingContract(Staking)
      const totalVotes = await contract.methods.getTotalVotes().call()
      return totalVotes
  }

  const getCurrentVotes = async (walletAddres: string) => {
    const contract = getStakingContract(Staking)
      const currentVotes = await contract.methods.getCurrentVotes(walletAddres).call()
      return currentVotes
  }

  return { 
    stake,
    unstake,
    withdraw,
    cancelUnstake,
    getReward,
    balanceOf,
    earned,
    withdrawable,
    poolInfo,
    unstaking,
    stakedUntil,
    getTotalVotes,
    getCurrentVotes
  }
}

export default useStakingContract