import React from 'react'
import BigNumber from 'bn.js'

import { AbiItem } from "web3-utils"

import web3, { EventSubscribe } from '../utils/web3'
import ConfigurableRightsPool from "../constants/abi/ConfigurableRightsPool.json"

import waitTransaction, { CompleteCallback } from '../utils/txWait'

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
      walletAddress: string,
      message?: string,
      onComplete?: CompleteCallback
    ) => {
      return contract.methods.joinswapExternAmountIn(tokenIn, tokenAmountIn, 0).send(
        { from: walletAddress },
        waitTransaction(onComplete ? onComplete : () => {}, message)
      )
    }

    const exitPool = (
      poolAmountIn: BigNumber,
      minAmountsOut: Array<BigNumber>,
      walletAddress: string,
      message?: string,
      onComplete?: CompleteCallback
    ) => {
      return contract.methods.exitPool(poolAmountIn, minAmountsOut).send(
        { from: walletAddress },
        waitTransaction(onComplete ? onComplete : () => {}, message)
      )
    }

    const exitswapPoolAmountIn = (
      tokenOut: string,
      poolAmountIn: BigNumber,
      walletAddress: string,
      message?: string,
      onComplete?: CompleteCallback
    ) => {
      return contract.methods.exitswapPoolAmountIn(tokenOut, poolAmountIn, 0).send(
        { from: walletAddress },
        waitTransaction(onComplete ? onComplete : () => {}, message)
      )
    }


    return {
      events,

      exitPool,
      exitswapPoolAmountIn,
      joinswapExternAmountIn,
    }
  }, [contract])
}

export default useCRPContract
