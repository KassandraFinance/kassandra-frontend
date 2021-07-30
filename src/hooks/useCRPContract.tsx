import React from 'react'
import BigNumber from 'bn.js'
import { useSelector, RootStateOrAny } from 'react-redux'
import { AbiItem } from "web3-utils"

import web3 from '../utils/web3'
import ConfigurableRightsPool from "../constants/abi/ConfigurableRightsPool.json"

const usePoolContract = () => {
  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)

  const getCRPContract = (address: string) => {
    const contract = new web3.eth.Contract((ConfigurableRightsPool as unknown) as AbiItem, address)
    return contract
  }

  const joinswapExternAmountIn = (addressCRP: string, tokenAmountIn: BigNumber): BigNumber => {
    const contract = getCRPContract(addressCRP)
    return new BigNumber(contract.methods.joinswapExternAmountIn(tokenAmountIn, 0).send({ from: userWalletAddress }))
  }

  const exitPool = (addressCRP: string, poolAmountIn: BigNumber, minAmountsOut: Array<BigNumber>) => {
    const contract = getCRPContract(addressCRP)
    return contract.methods.exitPool(poolAmountIn, minAmountsOut).send({ from: userWalletAddress })
  }


  return { 
    getCRPContract,
    joinswapExternAmountIn,
    exitPool
  }
}

export default usePoolContract