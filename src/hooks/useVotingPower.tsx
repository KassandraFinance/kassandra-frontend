/* eslint-disable prettier/prettier */
import React from 'react'
import BigNumber from 'bn.js'
import { AbiItem } from "web3-utils"

import web3 from '../utils/web3'
import StakingContract from "../constants/abi/Staking.json"

import { TransactionCallback } from '../utils/txWait'
import { useAppSelector } from '../store/hooks'

const useVotingPower = (address: string) => {
  const userWalletAddress = useAppSelector(state => state.userWalletAddress)
  const [contract, setContract] = React.useState(new web3.eth.Contract((StakingContract as unknown) as AbiItem, address))

  React.useEffect(() => {
    setContract(new web3.eth.Contract((StakingContract as unknown) as AbiItem, address))
  }, [address])

  return React.useMemo(() => {
    const totalVotes = async () => {
      const value: string = await contract.methods.getTotalVotes().call()
      return new BigNumber(value)
    }

    const currentVotes = async (walletAddres: string | string[] | undefined) => {
      if (walletAddres) {
        const value: string = await contract.methods.getCurrentVotes(walletAddres).call()
        return new BigNumber(value)
      }
    }

    const delegateVote = async (pid: number, address: string, callback: TransactionCallback) => {
      await contract.methods.delegate(pid, address)
        .send({ from: userWalletAddress },
          callback
        )
    }

    const delegateAllVotes = async (address: string, callback: TransactionCallback) => {
      await contract.methods.delegateAll(address)
        .send({ from: userWalletAddress },
          callback
        )
    }

    const getPriorVotes = async (walletAddress: string, startBlockNumber: string) => {
      const value = await contract.methods.getPriorVotes(walletAddress, startBlockNumber).call()
      return value
    }

    return {
      currentVotes,
      totalVotes,
      delegateVote,
      delegateAllVotes,
      getPriorVotes
    }
  }, [contract])
}

export default useVotingPower
