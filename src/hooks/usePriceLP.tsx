import Big from "big.js"
import { AbiItem } from "web3-utils"

import PriceLP from "../constants/abi/PriceLP.json"
import web3 from '../utils/web3'

import { ERC20 } from "./useERC20Contract"

const usePriceLP = () => {
  const getContract = (address: string) => {
    // eslint-disable-next-line prettier/prettier
    const contract = new web3.eth.Contract((PriceLP.abi as unknown) as AbiItem, address)
    return contract
  }

  //maxPriorityFeePerGas: null, maxFeePerGas: null 1,500000031  [0] some((element: string) => element === 'PurchaseExecuted')  gas: 270804, gasPrice: 1500000031
  const getReserves = async (addressPriceLP: string) => {
    const contract = getContract(addressPriceLP)
    const value = await contract.methods.getReserves().call()
    return value
  }

  const getPriceKacyAndLP = async (addressKacyAvax: string, addressDaiAvax: string, getPriceLP: boolean) => {
    const reservesKacyAvax = await getReserves(addressKacyAvax)

    const reservesDaiAvax = await getReserves(addressDaiAvax)

    let daiReserve = reservesDaiAvax._reserve1
    let avaxReserve = reservesDaiAvax._reserve0
    let kacyReserve = reservesKacyAvax._reserve1
    let avaxKacyReserve = reservesKacyAvax._reserve0

    if (process.env.NEXT_PUBLIC_MASTER !== '1') {
      daiReserve = reservesDaiAvax._reserve0
      avaxReserve = reservesDaiAvax._reserve1
      kacyReserve = reservesKacyAvax._reserve0
      avaxKacyReserve = reservesKacyAvax._reserve1
    }

    const avaxInDollar = Big(daiReserve).div(Big(avaxReserve))
    const kacyPriceInDollar = avaxInDollar.mul(Big(avaxKacyReserve).div(kacyReserve))

    if(getPriceLP) {
      const ERC20Contract = ERC20(addressKacyAvax)

      const totalAvaxInDollars = Big(avaxKacyReserve).mul(avaxInDollar)

      const supplyLPToken = await ERC20Contract.totalSupply()

      if (supplyLPToken.toString() !== '0') {
        const priceLP = totalAvaxInDollars.mul(2).div(Big(supplyLPToken.toString()))
        return { kacyPriceInDollar, priceLP }
      }
    }

    return { kacyPriceInDollar }
  }

  return {
    getContract,
    getReserves,
    getPriceKacyAndLP
  }
}

export default usePriceLP
