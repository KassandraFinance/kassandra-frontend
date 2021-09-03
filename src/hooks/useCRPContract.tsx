import BigNumber from 'bn.js'
import { useSelector, RootStateOrAny } from 'react-redux'

import { AbiItem } from "web3-utils"

import web3 from '../utils/web3'
import ConfigurableRightsPool from "../constants/abi/ConfigurableRightsPool.json"

import waitTransaction, { CompleteCallback } from '../utils/txWait'

const useCRPContract = () => {
  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)

  const getCRPContract = (address: string) => {
    const contract = new web3.eth.Contract((ConfigurableRightsPool as unknown) as AbiItem, address)
    return contract
  }

  const joinswapExternAmountIn = (
    addressCRP: string,
    tokenIn: string,
    tokenAmountIn: BigNumber,
    onComplete?: CompleteCallback,
  ): BigNumber => {
    const contract = getCRPContract(addressCRP)
    return new BigNumber(
      contract.methods.joinswapExternAmountIn(tokenIn, tokenAmountIn, 0).send(
        { from: userWalletAddress },
        onComplete ? waitTransaction(onComplete) : undefined
      )
    )
  }

  const exitPool = (
    addressCRP: string,
    poolAmountIn: BigNumber,
    minAmountsOut: Array<BigNumber>,
    onComplete?: CompleteCallback,
  ) => {
    const contract = getCRPContract(addressCRP)
    return contract.methods.exitPool(poolAmountIn, minAmountsOut).send(
      { from: userWalletAddress },
      onComplete ? waitTransaction(onComplete) : undefined
    )
  }

  const exitswapPoolAmountIn = (
    addressCRP: string,
    tokenOut: string,
    poolAmountIn: BigNumber,
    onComplete?: CompleteCallback,
  ) => {
    const contract = getCRPContract(addressCRP)
    return contract.methods.exitswapPoolAmountIn(tokenOut, poolAmountIn, 0).send(
      { from: userWalletAddress },
      onComplete ? waitTransaction(onComplete) : undefined
    )
  }


  return { 
    getCRPContract,
    joinswapExternAmountIn,
    exitPool,
    exitswapPoolAmountIn
  }
}

export default useCRPContract