/* eslint-disable prettier/prettier */
import React from 'react'
import BigNumber from 'bn.js'
import { AbiItem } from "web3-utils"

import web3 from '../utils/web3'
import StakingContract from "../constants/abi/Staking.json"
import { RootStateOrAny, useSelector } from 'react-redux'

import { TransactionCallback } from '../utils/txWait'


const useVotingPower = (address: string) => {
  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)
  const [contract, setContract] = React.useState(new web3.eth.Contract((StakingContract as unknown) as AbiItem, address))

  React.useEffect(() => {
    setContract(new web3.eth.Contract((StakingContract as unknown) as AbiItem, address))
  }, [address])

  return React.useMemo(() => {
    const totalVotes = async () => {
      const value: string = await contract.methods.getTotalVotes().call()
      return new BigNumber(value)
    }

    const currentVotes = async (walletAddres: string) => {
      const value: string = await contract.methods.getCurrentVotes(walletAddres).call()
      return new BigNumber(value)
    }

    const delegateVote = async (pid: number, address: string, callback: TransactionCallback) => {
      const test =  await contract.methods.delegate(pid, address)
        .send({ from: userWalletAddress },
          callback
        )
      console.log(test)
    }

    return {
      currentVotes,
      totalVotes,
      delegateVote
    }
  }, [contract])
}

export default useVotingPower
