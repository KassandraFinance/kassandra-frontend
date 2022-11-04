/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import BigNumber from 'bn.js'

import { AbiItem } from "web3-utils"
import { Contract } from "web3-eth-contract"

import web3 from '../utils/web3'

import ERC20ABI from "../constants/abi/ERC20.json"

function ERC20Contract(contract: Contract) {

  const totalSupply = async (): Promise<BigNumber> => {
    try {
      const supply: string = await contract.methods.totalSupply().call()
      return new BigNumber(supply)
    } catch (e) {
      return new BigNumber(0)
    }
  };

  return {
    totalSupply,
  }
}

const useERC20Contract = (address: string) => {
  const [contract, setContract] = React.useState(new web3.eth.Contract((ERC20ABI as unknown) as AbiItem, address))

  React.useEffect(() => {
    setContract(new web3.eth.Contract((ERC20ABI as unknown) as AbiItem, address))
  }, [address])

  return React.useMemo(() => {
    return ERC20Contract(contract)
  }, [contract])
}

export const ERC20 = (address: string) => {
  const contract = new web3.eth.Contract((ERC20ABI as unknown) as AbiItem, address)
  return ERC20Contract(contract)
}

export default useERC20Contract
