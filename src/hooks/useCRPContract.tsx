/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import BigNumber from 'bn.js'

import { AbiItem } from "web3-utils"

import web3, { EventSubscribe } from '../utils/web3'
import ConfigurableRightsPool from "../constants/abi/ConfigurableRightsPool.json"

import { TransactionCallback } from '../utils/txWait'

interface Events {
  CapChanged: EventSubscribe;
  NewTokenCommitted: EventSubscribe;
  NewStrategy: EventSubscribe;
  LogCall: EventSubscribe;
  LogJoin: EventSubscribe;
  LogExit: EventSubscribe;
}

const useCRPContract = (address: string) => {
  const [contract, setContract] = React.useState(new web3.eth.Contract((ConfigurableRightsPool as unknown) as AbiItem, address))

  React.useEffect(() => {
    setContract(new web3.eth.Contract((ConfigurableRightsPool as unknown) as AbiItem, address))
  }, [address])

  return React.useMemo(() => {
    /* EVENT */

    const events: Events = contract.events

    /* SEND */

    const joinswapExternAmountIn = (
      tokenIn: string,
      tokenAmountIn: BigNumber,
      minPoolAmountOut: BigNumber,
      walletAddress: string,
      callback: TransactionCallback
    ) => {
      return contract.methods.joinswapExternAmountIn(tokenIn, tokenAmountIn, minPoolAmountOut).send(
        { from: walletAddress },
        callback
      )
    }

    const exitPool = (
      poolAmountIn: BigNumber,
      minAmountsOut: Array<BigNumber>,
      walletAddress: string,
      callback: TransactionCallback
    ) => {
      return contract.methods.exitPool(poolAmountIn, minAmountsOut).send(
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
      return contract.methods.exitswapPoolAmountIn(tokenOut, poolAmountIn, minAmountOut).send(
        { from: walletAddress },
        callback
      )
    }

    /* CALL */

    const tryJoinswapExternAmountIn = (
      tokenIn: string,
      tokenAmountIn: BigNumber,
      minPoolAmountOut: BigNumber,
      walletAddress: string
    ) => {
      return contract.methods.joinswapExternAmountIn(tokenIn, tokenAmountIn, minPoolAmountOut).call(
        { from: walletAddress }
      )
    }

    const tryExitPool = (
      poolAmountIn: BigNumber,
      minAmountsOut: Array<BigNumber>,
      walletAddress: string
    ) => {
      return contract.methods.exitPool(poolAmountIn, minAmountsOut).call(
        { from: walletAddress }
      )
    }

    const tryExitswapPoolAmountIn = (
      tokenOut: string,
      poolAmountIn: BigNumber,
      minAmountOut: BigNumber,
      walletAddress: string
    ) => {
      return contract.methods.exitswapPoolAmountIn(tokenOut, poolAmountIn, minAmountOut).call(
        { from: walletAddress }
      )
    }

    return {
      events,

      exitPool,
      exitswapPoolAmountIn,
      joinswapExternAmountIn,

      tryJoinswapExternAmountIn,
      tryExitPool,
      tryExitswapPoolAmountIn,
    }
  }, [contract])
}

export default useCRPContract
