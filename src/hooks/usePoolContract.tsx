import React from 'react'
import { useSelector, RootStateOrAny } from 'react-redux'
import { AbiItem } from "web3-utils"
import BigNumber from 'bn.js'
import web3 from '../utils/web3'
import Pool from "../constants/abi/Pool.json"
import useERC20Contract from './useERC20Contract'

const usePoolContract = () => {
  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)

  const { getERC20Contract } = useERC20Contract()


  const getPoolContract = (address: string) => {
    const contract = new web3.eth.Contract((Pool as unknown) as AbiItem, address)
    return contract
  }

  const denormalizedWeight = async (addresCorePool: string, tokenAddressIn: string) => {
    const contract = await getPoolContract(addresCorePool)
    const value = await contract.methods.getDenormalizedWeight(tokenAddressIn).call()
    return new BigNumber(value)
  }

  const totalDenormalizedWeight = async (addresCorePool: string) => {
    const contract = await getPoolContract(addresCorePool)
    const value = await contract.methods.getTotalDenormalizedWeight().call()
    return new BigNumber(value)
  }

  const calcPoolOutGivenSingleIn = async (
    addresCorePool: string, 
    tokenBalanceOut: BigNumber, 
    tokenWeightOut: BigNumber, 
    poolSupply: BigNumber, 
    totalWeight: BigNumber, 
    poolAmountIn: BigNumber, 
    swapFee: BigNumber
  ) => {
    const contract = getPoolContract(addresCorePool)
    const value = await contract.methods.calcPoolOutGivenSingleIn(
      tokenBalanceOut,
      tokenWeightOut,
      poolSupply,
      totalWeight,
      poolAmountIn,
      swapFee
    ).call()
    return new BigNumber(value)
  }

  const calcSingleOutGivenPoolIn = async (
    addresCorePool: string, 
    tokenBalanceIn: BigNumber, 
    tokenWeightIn: BigNumber, 
    poolTotalSupply: BigNumber, 
    totalWeightIn: BigNumber, 
    tokenAmountIn: BigNumber, 
    swapFee: BigNumber
  ) => {
    const contract = getPoolContract(addresCorePool)
    const value = await contract.methods.calcSingleOutGivenPoolIn(
      tokenBalanceIn, 
      tokenWeightIn, 
      poolTotalSupply, 
      totalWeightIn, 
      tokenAmountIn, 
      swapFee
    ).call()
    return new BigNumber(value)
  }

  const calcOutGivenIn = async (
    addresCorePool: string, 
    tokenBalanceIn: BigNumber,
    tokenWeightIn: BigNumber,
    tokenBalanceOut: BigNumber,
    tokenWeightOut: BigNumber,
    tokenAmountIn: BigNumber,
    swapFee: BigNumber
  ) => {
    const contract = getPoolContract(addresCorePool)
    const value = await contract.methods.calcOutGivenIn(
      tokenBalanceIn, 
      tokenWeightIn, 
      tokenBalanceOut, 
      tokenWeightOut, 
      tokenAmountIn, 
      swapFee
    ).call()
    return new BigNumber(value)
  }

  const swapFee = async (addresCorePool: string): Promise<BigNumber> => {
    const contract = await getPoolContract(addresCorePool)
    const value = await contract.methods.getSwapFee().call()
    return new BigNumber(value)
  }

  const swapExactAmountIn = async (
    addresCorePool: string, 
    tokenIn: string, 
    tokenAmountIn: BigNumber,
    tokenOut: string
  ) => {
    const contract = await getPoolContract(addresCorePool)
    const value = await contract
      .methods.swapExactAmountIn(
        tokenIn, 
        tokenAmountIn, 
        tokenOut, 
        0, 
        web3.utils.toTwosComplement(-1)
      )
      .send({ from: userWalletAddress })
  }

  const balanceToken = async (addresCorePool: string, address: string): Promise<BigNumber> => {
    const contract = await getPoolContract(addresCorePool)
    const value = await contract.methods.getBalance(address).call()
    return new BigNumber(value)
  }

  const nameToken = (address: string): string => {
    const tokenERC20Contract = getERC20Contract(address)
    return  tokenERC20Contract.methods.name().call()
  }

  const symbolToken = (address: string): string => {
    const tokenERC20Contract = getERC20Contract(address)
    return tokenERC20Contract.methods.symbol().call()
  }

  const decimalsToken = async (address: string): Promise<BigNumber> => {
    const tokenERC20Contract = await getERC20Contract(address)
    const value = await tokenERC20Contract.methods.decimals().call()
    return new BigNumber(value)
  }



  return { 
    getPoolContract,
    calcPoolOutGivenSingleIn,
    calcSingleOutGivenPoolIn,
    swapFee,
    balanceToken,
    nameToken,
    symbolToken,
    decimalsToken,
    denormalizedWeight,
    swapExactAmountIn,
    calcOutGivenIn,
  }
}

export default usePoolContract