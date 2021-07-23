import React from 'react'
import { AbiItem } from "web3-utils"

import web3 from '../utils/web3'
import ERC20ABI from "../constants/abi/ERC20.json"


const useERC20Contract = () => {

  const getERC20Contract = (address: string) => {
    const contract = new web3.eth.Contract((ERC20ABI as unknown) as AbiItem, address)
    return contract
  }


  const getAllowance = async (userAddress: string, spenderAddress: string, tokenAddress: string): Promise<string> => {
    try {
      const tokenContract = getERC20Contract(tokenAddress)
      const allowance: string = await tokenContract.methods.allowance(userAddress, spenderAddress).call()
      return allowance
    } catch (e) {
      return "0"
    }
  };
  
  const getBalance = async (tokenAddress: string, userAddress: string): Promise<string> => {
    const tokenContract = getERC20Contract(tokenAddress)
    try {
      const balance: string = await tokenContract.methods.balanceOf(userAddress).call()
      return balance
    } catch (e) {
      return "0"
    }
  };

  return { 
    getERC20Contract,
    getAllowance,
    getBalance
  }
}

export default useERC20Contract