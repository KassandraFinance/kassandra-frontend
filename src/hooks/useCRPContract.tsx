import React from 'react'
import BigNumber from 'bn.js'
import { useSelector, RootStateOrAny } from 'react-redux'

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
  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)
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
      onComplete?: CompleteCallback,
    ): BigNumber => {
      return new BigNumber(
        contract.methods.joinswapExternAmountIn(tokenIn, tokenAmountIn, 0).send(
          { from: userWalletAddress },
          onComplete ? waitTransaction(onComplete) : false
        )
      )
    }

    const exitPool = (
      poolAmountIn: BigNumber,
      minAmountsOut: Array<BigNumber>,
      onComplete?: CompleteCallback,
    ) => {
      return contract.methods.exitPool(poolAmountIn, minAmountsOut).send(
        { from: userWalletAddress },
        onComplete ? waitTransaction(onComplete) : false
      )
    }

    const exitswapPoolAmountIn = (
      tokenOut: string,
      poolAmountIn: BigNumber,
      onComplete?: CompleteCallback,
    ) => {
      return contract.methods.exitswapPoolAmountIn(tokenOut, poolAmountIn, 0).send(
        { from: userWalletAddress },
        onComplete ? waitTransaction(onComplete) : false
      )
    }


    return {
      events,

      exitPool,
      exitswapPoolAmountIn,
      joinswapExternAmountIn,
    }
  }, [contract, userWalletAddress])
}

export default useCRPContract
