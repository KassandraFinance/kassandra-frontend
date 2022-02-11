/* eslint-disable prettier/prettier */
import React from 'react'
import { AbiItem } from "web3-utils"
// import BigNumber from 'bn.js'

import web3 from '../utils/web3'
import Governance from "../constants/abi/Governance.json"

const useGovernance = (address: string) => {
  const [contract, setContract] = React.useState(new web3.eth.Contract((Governance as unknown) as AbiItem, address))

  React.useEffect(() => {
    setContract(new web3.eth.Contract((Governance as unknown) as AbiItem, address))
  }, [address])

  return React.useMemo(() => {
    const proposalCount = async () => {
      const value = await contract.methods.proposalCount().call()
      return value
    }

    return {
      proposalCount
    }
  }, [contract])
}

export default useGovernance
