import React from 'react'
import BigNumber from 'bn.js'
import { useSelector, RootStateOrAny } from 'react-redux'
import { AbiItem } from "web3-utils"

import web3 from '../utils/web3'
import { Staking } from '../constants/tokenAddresses'
import StakingContract from "../constants/abi/Staking.json"

import useConnect from './useConnect'

const useStakingContract = () => {
  const { userWalletAddress } = useConnect()

  const getStakingContract = (address: string) => {
    const contract = new web3.eth.Contract((StakingContract as unknown) as AbiItem, address)
    return contract
  }

  const stake = async (pid: number, amount: BigNumber) => {
    const contract = getStakingContract(Staking)
    await contract.methods.stake(pid, amount, userWalletAddress, userWalletAddress).send({ from: userWalletAddress })
  }

  return { 
    stake
  }
}

export default useStakingContract