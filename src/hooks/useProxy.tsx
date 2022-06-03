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
      const res = await contract.methods
        .joinswapExternAmountIn(crpAddress, tokenIn, tokenAmountIn, minPoolAmountOut)
        .send({ from: walletAddress, value: avaxValue }, callback)

      return res
    }

    const exitswapPoolAmountIn = async (
      tokenOut: string,
      tokenAmountIn: BigNumber,
      minPoolAmountOut: BigNumber,
      walletAddress: string,
      callback: TransactionCallback
    ) => {

      const res = await contract.methods
        .exitswapPoolAmountIn(crpAddress, tokenOut, tokenAmountIn, minPoolAmountOut)
        .send({ from: walletAddress }, callback)
      
        return res
    }

    const exitPool = async (
      poolAmountIn: BigNumber,
      tokensOut: Array<string>,
      minAmountsOut: Array<BigNumber>,
      walletAddress: string,
      callback: TransactionCallback
    ) => {
      const res = await contract.methods
        .exitPool(crpAddress, poolAmountIn, tokensOut, minAmountsOut)
        .send({ from: walletAddress }, callback)

      return res
    }

    const swapExactAmountIn = async (
      tokenIn: string, 
      tokenAmountIn: BigNumber,
      tokenOut: string,
      minAmountOut: BigNumber,
      walletAddress: string,
      callback: TransactionCallback
    ) => {
      const res = await contract.methods
        .swapExactAmountIn(
          '0x17C1037B17b221f2f3b53f85cebD817C941f6bC5',
          tokenIn, 
          tokenAmountIn, 
          tokenOut, 
          minAmountOut,
          web3.utils.toTwosComplement(-1)
        )
        .send({ from: walletAddress }, callback)

      return res
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

    const tryExitswapPoolAmountIn = async (
      tokenOut: string,
      poolAmountIn: BigNumber,
      minAmountOut: BigNumber,
      walletAddress: string
    ) => {

      return contract.methods.exitswapPoolAmountIn(crpAddress, tokenOut, poolAmountIn, minAmountOut).call(
        { from: walletAddress }
      )
    }

    const tryExitPool = async (
      poolAmountIn: BigNumber,
      tokensOut: Array<string>,
      minAmountsOut: Array<BigNumber>,
      walletAddress: string,
    ) => {
      const res = await contract.methods
        .exitPool(crpAddress, poolAmountIn, tokensOut, minAmountsOut)
        .call({ from: walletAddress })

      return res
    }

    const trySwapExactAmountIn = async (
      tokenIn: string, 
      tokenAmountIn: BigNumber,
      tokenOut: string,
      walletAddress: string,
    ) => {
      const res = await contract.methods
        .swapExactAmountIn(
          '0x17C1037B17b221f2f3b53f85cebD817C941f6bC5',
          tokenIn, 
          tokenAmountIn, 
          tokenOut, 
          0,
          web3.utils.toTwosComplement(-1)
        )
        .call({ from: walletAddress })

      return res
    }

    return {
      joinswapExternAmountIn,
      exitswapPoolAmountIn,
      exitPool,
      swapExactAmountIn,
      
      tryJoinswapExternAmountIn,
      tryExitswapPoolAmountIn,
      tryExitPool,
      trySwapExactAmountIn
    }
  }, [contract])
}

export default useProxy
