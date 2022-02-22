/* eslint-disable prettier/prettier */
import React from 'react'
import BigNumber from 'bn.js'
import { AbiItem } from "web3-utils"

import web3 from '../utils/web3'
import StakingContract from "../constants/abi/Staking.json"


const useVotingPower = (address: string) => {
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

    return {
      currentVotes,
      totalVotes
    }
  }, [contract])
}

export default useVotingPower
