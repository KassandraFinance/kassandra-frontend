/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import BigNumber from 'bn.js'

import { AbiItem } from "web3-utils"

import web3 from '../utils/web3'
import HermesProxy from "../constants/abi/HermesProxy.json"

import { TransactionCallback } from '../utils/txWait'


const useProxy = (address: string, sipAddress: string, coreAddress: string) => {
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
        .joinswapExternAmountIn(sipAddress, tokenIn, tokenAmountIn, minPoolAmountOut)
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
        .exitswapPoolAmountIn(sipAddress, tokenOut, tokenAmountIn, minPoolAmountOut)
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
        .exitPool(sipAddress, poolAmountIn, tokensOut, minAmountsOut)
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
      const wrapped = await contract.methods.wNativeToken().call()

      const avaxValue = tokenIn === wrapped ? tokenAmountIn : new BigNumber(0)
      const res = await contract.methods
        .swapExactAmountIn(
          coreAddress,
          tokenIn, 
          tokenAmountIn, 
          tokenOut, 
          minAmountOut,
          new BigNumber('10').pow(new BigNumber(36))
        )
        .send({ from: walletAddress, value: avaxValue }, callback)
      return res
    }

    /* CALL */

    const spotPrice = async (corePoolAddress: string, swapOutAddress: string, swapInAddress: string) => {
      const res = await contract.methods.getSpotPrice(corePoolAddress, swapOutAddress, swapInAddress).call()

      return new BigNumber(res)
    }

    const exchangeRate = async (corePoolAddress: string, swapOutAddress: string) => {
      const res = await contract.methods.exchangeRate(corePoolAddress, swapOutAddress).call()

      return new BigNumber(res)
    }

    const tryJoinswapExternAmountIn = async (
      tokenIn: string,
      tokenAmountIn: BigNumber,
      minPoolAmountOut: BigNumber,
      walletAddress: string
    ) => {
      const wrapped = await contract.methods.wNativeToken().call()

      const avaxValue = tokenIn === wrapped ? tokenAmountIn : new BigNumber(0)
      
      const res = await contract.methods
        .joinswapExternAmountIn(sipAddress, tokenIn, tokenAmountIn, minPoolAmountOut)
        .call({ from: walletAddress, value: avaxValue })
  
      return res
    }

    const tryExitswapPoolAmountIn = async (
      tokenOut: string,
      poolAmountIn: BigNumber,
      minAmountOut: BigNumber,
      walletAddress: string
    ) => {

      const res = contract.methods
        .exitswapPoolAmountIn(sipAddress, tokenOut, poolAmountIn, minAmountOut)
        .call({ from: walletAddress })

      return res
    }

    const tryExitPool = async (
      poolAmountIn: BigNumber,
      tokensOut: Array<string>,
      minAmountsOut: Array<BigNumber>,
      walletAddress: string,
    ) => {
      const res = await contract.methods
        .exitPool(sipAddress, poolAmountIn, tokensOut, minAmountsOut)
        .call({ from: walletAddress })

      return res
    }

    const trySwapExactAmountIn = async (
      tokenIn: string, 
      tokenAmountIn: BigNumber,
      tokenOut: string,
      walletAddress: string,
    ) => {
      const wrapped = await contract.methods.wNativeToken().call()

      const avaxValue = tokenIn === wrapped ? tokenAmountIn : new BigNumber(0)
      const res = await contract.methods
        .swapExactAmountIn(
          coreAddress,
          tokenIn, 
          tokenAmountIn, 
          tokenOut, 
          new BigNumber(0),
          new BigNumber('10').pow(new BigNumber(36))
        )
        .call({ from: walletAddress, value: avaxValue })

      return res
    }

    return {
      joinswapExternAmountIn,
      exitswapPoolAmountIn,
      exitPool,
      swapExactAmountIn,
      
      spotPrice,
      exchangeRate,
      tryJoinswapExternAmountIn,
      tryExitswapPoolAmountIn,
      tryExitPool,
      trySwapExactAmountIn
    }
  }, [contract])
}

export default useProxy
