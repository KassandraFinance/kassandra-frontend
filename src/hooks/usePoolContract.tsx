import { AbiItem } from "web3-utils"
import BigNumber from 'bn.js'
import { useSelector, RootStateOrAny } from 'react-redux'

import web3 from '../utils/web3'
import Pool from "../constants/abi/Pool.json"

import useERC20Contract from './useERC20Contract'

const usePoolContract = () => {
  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)


  const getPoolContract = (address: string) => {
    const contract = new web3.eth.Contract((Pool as unknown) as AbiItem, address)
    return contract
  }

  const getCurrentTokens = async (addresCorePool: string): Promise<[string]> => {
    const contract = await getPoolContract(addresCorePool)
    const value = await contract.methods.getCurrentTokens().call()
    return value
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
    tokenBalanceIn: BigNumber,
    tokenWeightIn: BigNumber,
    poolSupply: BigNumber,
    totalWeight: BigNumber,
    tokenAmountIn: BigNumber,
    swapFee: BigNumber
  ) => {
    const contract = getPoolContract(addresCorePool)
    const value = await contract.methods.calcPoolOutGivenSingleIn(
      tokenBalanceIn,
      tokenWeightIn,
      poolSupply,
      totalWeight,
      tokenAmountIn,
      swapFee,
    ).call()
    return new BigNumber(value)
  }

  const calcSingleOutGivenPoolIn = async (
    addresCorePool: string, 
    tokenBalanceOut: BigNumber, 
    tokenWeightOut: BigNumber, 
    poolSupply: BigNumber, 
    totalWeight: BigNumber, 
    poolAmountIn: BigNumber, 
    swapFee: BigNumber
  ) => {
    const contract = getPoolContract(addresCorePool)
    const value = await contract.methods.calcSingleOutGivenPoolIn(
      tokenBalanceOut, 
      tokenWeightOut, 
      poolSupply, 
      totalWeight, 
      poolAmountIn, 
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

  const getSpotPrice = async (addresCorePool: string, tokenOut: string, tokenIn: string) => {
    const contract = getPoolContract(addresCorePool)
    const value = await contract.methods.getSpotPrice(tokenOut, tokenIn).call()
    return new BigNumber(value)
  }

  const getNormalizedWeight = async (addresCorePool: string, address: string): Promise<Number> => {
    const contract = await getPoolContract(addresCorePool)
    const value = await contract.methods.getNormalizedWeight(address).call()
    return Number(new BigNumber(value).div(new BigNumber(10).pow(new BigNumber(14))))/100
  }

  const balanceToken = async (addresCorePool: string, address: string): Promise<BigNumber> => {
    const contract = await getPoolContract(addresCorePool)
    const value = await contract.methods.getBalance(address).call()
    return new BigNumber(value)
  }


  return { 
    getPoolContract,
    getCurrentTokens,
    calcPoolOutGivenSingleIn,
    calcSingleOutGivenPoolIn,
    swapFee,
    balanceToken,
    denormalizedWeight,
    totalDenormalizedWeight,
    swapExactAmountIn,
    getSpotPrice,
    calcOutGivenIn,
    getNormalizedWeight
  }
}

export default usePoolContract