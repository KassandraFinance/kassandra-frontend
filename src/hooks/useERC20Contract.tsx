import React from 'react'
import { JsonRpcProvider, Contract } from 'ethers'

import ERC20ABI from '../constants/abi/ERC20.json'
import { networks } from '../constants/tokenAddresses'

function ERC20Contract(contract: Contract) {
  // Read
  const name = async (): Promise<string> => {
    const value = await contract.name()
    return value
  }

  const symbol = async (): Promise<string> => {
    const value = await contract.symbol()
    return value
  }

  const decimals = async (): Promise<bigint> => {
    const value = await contract.decimals()
    return value
  }

  const allowance = async (
    contractAddress: string,
    userWalletAddress: string
  ): Promise<string> => {
    const value = await contract.allowance(userWalletAddress, contractAddress)

    return value
  }

  const balance = async (userAddress: string): Promise<string> => {
    const value = await contract.balanceOf(userAddress)
    return value
  }

  const totalSupply = async (): Promise<string> => {
    const value: string = await contract.totalSupply()
    return value
  }

  return {
    name,
    symbol,
    decimals,
    allowance,
    balance,
    totalSupply
  }
}

const useERC20Contract = (address: string, rpcURL = networks[137].rpc) => {
  const provider = new JsonRpcProvider(rpcURL)
  const contract = new Contract(address, ERC20ABI, provider)

  return React.useMemo(() => {
    return ERC20Contract(contract)
  }, [contract])
}

export const ERC20 = async (address: string, rpcUrl = networks[137].rpc) => {
  const provider = new JsonRpcProvider(rpcUrl)
  const contract = new Contract(address, ERC20ABI, provider)

  return ERC20Contract(contract)
}

export default useERC20Contract
