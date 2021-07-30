import React from 'react'
import BigNumber from 'bn.js'
import { AbiItem } from 'web3-utils'

import web3 from '../utils/web3'
import Pool from "../constants/abi/Pool.json"
import useERC20Contract from './useERC20Contract'

const usePoolContract = () => {
  const { getERC20Contract } = useERC20Contract()


  const getPoolContract = (address: string) => {
    const contract = new web3.eth.Contract((Pool as unknown) as AbiItem, address)
    return contract
  }

  const swapFee = async (addresCorePool: string): Promise<BigNumber> => {
    const contract = await getPoolContract(addresCorePool)
    const value = await contract.methods.getSwapFee().call()
    return new BigNumber(value)
  }

  const balanceToken = async (addresCorePool: string, address: string): Promise<BigNumber> => {
    const contract = await getPoolContract(addresCorePool)
    const value = await contract.methods.getBalance(address).call()
    return new BigNumber(value)
  }

  const nameToken = (address: string): string => {
    const tokenERC20Contract = getERC20Contract(address)
    return  tokenERC20Contract.methods.name().call()
  }

  const symbolToken = (address: string): string => {
    const tokenERC20Contract = getERC20Contract(address)
    return tokenERC20Contract.methods.symbol().call()
  }

  const decimalsToken = async (address: string): Promise<BigNumber> => {
    const tokenERC20Contract = await getERC20Contract(address)
    const value = await tokenERC20Contract.methods.decimals().call()
    return new BigNumber(value)
  }



  return { 
    getPoolContract,
    swapFee,
    balanceToken,
    nameToken,
    symbolToken,
    decimalsToken
  }
}

export default usePoolContract