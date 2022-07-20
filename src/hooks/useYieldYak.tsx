/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import React from 'react'
import { AbiItem } from "web3-utils"
import BigNumber from 'bn.js'

import web3 from '../utils/web3'
import YieldYak from "../constants/abi/YieldYak.json"

const useYieldYak = () => {
  return React.useMemo(() => {
    const getDecimals = async (address: string) => {
      const contract = new web3.eth.Contract((YieldYak as unknown) as AbiItem, address)
      const value = await contract.methods.depositToken().call()

      const decimals = new web3.eth.Contract((YieldYak as unknown) as AbiItem, value)

      const decimalsFinal = await decimals.methods.decimals().call()
      return decimalsFinal
    }

    const convertBalanceYRTtoWrap = async (amountYRT: BigNumber, addressYRT: string) => {
      const contract = new web3.eth.Contract((YieldYak as unknown) as AbiItem, addressYRT)
      const value = await contract.methods.getDepositTokensForShares(amountYRT).call()
      return new BigNumber(value)
    }

    const convertBalanceWrappedYRT = async (amountWrapped: BigNumber, addressYRT: string) => {
      const contract = new web3.eth.Contract((YieldYak as unknown) as AbiItem, addressYRT)
      const value = await contract.methods.getSharesForDepositTokens(amountWrapped).call()
      return new BigNumber(value)
    }

    return {
      convertBalanceYRTtoWrap,
      convertBalanceWrappedYRT,
      getDecimals,
    }
  }, [])
}

export default useYieldYak
