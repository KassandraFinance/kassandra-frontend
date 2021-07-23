import React from 'react'
import { AbiItem } from "web3-utils"

import web3 from '../utils/web3'
import Pool from "../constants/abi/Pool.json"
import useERC20Contract from './useERC20Contract'

const usePoolContract = () => {
  const { getERC20Contract } = useERC20Contract()


  const getPoolContract = (address: string) => {
    const contract = new web3.eth.Contract((Pool as unknown) as AbiItem, address)
    return contract
  }

  const balanceToken = (addresCorePool: string, address: string) => {
    const contract = getPoolContract(addresCorePool)
    return contract.methods.getBalance(address).call()
  }

  const nameToken = (address: string) => {
    const tokenERC20Contract = getERC20Contract(address)
    return  tokenERC20Contract.methods.name().call()
  }

  const symbolToken = (address: string) => {
    const tokenERC20Contract = getERC20Contract(address)
    return tokenERC20Contract.methods.symbol().call()
  }

  const decimalsToken = (address: string) => {
    const tokenERC20Contract = getERC20Contract(address)
    return tokenERC20Contract.methods.decimals().call()
  }



  return { 
    getPoolContract,
    nameToken,
    symbolToken,
    balanceToken,
    decimalsToken
  }
}

export default usePoolContract