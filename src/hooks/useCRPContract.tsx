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

  const joinswapExternAmountIn = (addressCRP: string, tokenAmountIn) => {
    console.log(tokenAmountIn)
    const contract = getCRPContract(addressCRP)
    return contract.methods.joinswapExternAmountIn(new BigNumber(tokenAmountIn).mul(new BigNumber(10).pow(new BigNumber(18))), 0).send({ from: userWalletAddress })
  }

  const exitPool = (addressCRP: string, poolAmountIn, minAmountsOut: Array<BigNumber>) => {
    console.log(poolAmountIn)
    const contract = getCRPContract(addressCRP)
    return contract.methods.exitPool(new BigNumber(poolAmountIn).mul(new BigNumber(10).pow(new BigNumber(18))), minAmountsOut).send({ from: userWalletAddress })
  }



  return { 
    getCRPContract,
    joinswapExternAmountIn,
    exitPool
  }
}

export default usePoolContract