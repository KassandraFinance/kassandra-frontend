/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import BigNumber from 'bn.js'

import { AbiItem } from "web3-utils"

import web3 from '../utils/web3'
import HermesProxy from "../constants/abi/HermesProxy.json"

import { TransactionCallback } from '../utils/txWait'


const useProxy = (address: string, crpAddress: string) => {
  const [contract, setContract] = React.useState(new web3.eth.Contract((HermesProxy as unknown) as AbiItem, address))

  React.useEffect(() => {
    setContract(new web3.eth.Contract((HermesProxy as unknown) as AbiItem, address))
  }, [address])

  return React.useMemo(() => {

    const joinswapExternAmountIn = async (
      tokenIn: string,
      tokenAmountIn: BigNumber,
      minPoolAmountOut: BigNumber,
      walletAddress: string,
      callback: TransactionCallback
    ) => {
      const wrapped = await contract.methods.wNativeToken().call()

      const avaxValue = tokenIn === wrapped ? tokenAmountIn : new BigNumber(0)
      const res =  contract.methods
        .joinswapExternAmountIn(crpAddress, tokenIn, tokenAmountIn, minPoolAmountOut)
        .send({ from: walletAddress, value: avaxValue },callback)

      return res
    }

    const exitPool = (
      poolAmountIn: BigNumber,
      tokensOut: Array<string>,
      minAmountsOut: Array<BigNumber>,
      walletAddress: string,
      callback: TransactionCallback
    ) => {
      return contract.methods.exitPool(crpAddress, poolAmountIn, tokensOut, minAmountsOut).send(
        { from: walletAddress },
        callback
      )
    }

    const exitswapPoolAmountIn = (
      tokenOut: string,
      poolAmountIn: BigNumber,
      minAmountOut: BigNumber,
      walletAddress: string,
      callback: TransactionCallback
    ) => {
      return contract.methods.exitswapPoolAmountIn(crpAddress, tokenOut, poolAmountIn, minAmountOut).send(
        { from: walletAddress },
        callback
      )
    }

    /* CALL */

    const tryJoinswapExternAmountIn = async (
      tokenIn: string,
      tokenAmountIn: BigNumber,
      minPoolAmountOut: BigNumber,
      walletAddress: string
    ) => {
      const wrapped = await contract.methods.wNativeToken().call()

      const avaxValue = tokenIn === wrapped ? tokenAmountIn : new BigNumber(0)
        const res = await contract.methods
          .joinswapExternAmountIn(crpAddress, tokenIn, tokenAmountIn, minPoolAmountOut)
          .call({ from: walletAddress, value: avaxValue })
  
        return res
    }

    const tryExitPool = (
      poolAmountIn: BigNumber,
      minAmountsOut: Array<BigNumber>,
      walletAddress: string
    ) => {
      return contract.methods.exitPool(crpAddress, poolAmountIn, minAmountsOut).call(
        { from: walletAddress }
      )
    }

    const tryExitswapPoolAmountIn = (
      tokenOut: string,
      poolAmountIn: BigNumber,
      minAmountOut: BigNumber,
      walletAddress: string
    ) => {
      return contract.methods.exitswapPoolAmountIn(crpAddress, tokenOut, poolAmountIn, minAmountOut).call(
        { from: walletAddress }
      )
    }

    return {
      exitPool,
      exitswapPoolAmountIn,
      joinswapExternAmountIn,

      tryJoinswapExternAmountIn,
      tryExitPool,
      tryExitswapPoolAmountIn,
    }
  }, [contract])
}

export default useProxy
