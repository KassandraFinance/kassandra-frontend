import Big from 'big.js'
import { JsonRpcProvider, Contract } from 'ethers'

import PriceLP from '../constants/abi/PriceLP.json'

import { ERC20 } from './useERC20Contract'
import { networks } from '../constants/tokenAddresses'
import { env } from '@/env.mjs'

const usePriceLP = () => {
  const provider = new JsonRpcProvider(networks[43114].rpc)

  const getContract = (address: string) => {
    const contract = new Contract(address, PriceLP.abi, provider)
    return contract
  }

  const getReserves = async (addressPriceLP: string) => {
    const contract = getContract(addressPriceLP)
    const value = await contract.getReserves()
    return value
  }

  const getPriceKacyAndLP = async (
    addressKacyAvax: string,
    addressDaiAvax: string,
    getPriceLP: boolean
  ) => {
    const reservesKacyAvax = await getReserves(addressKacyAvax)

    const reservesDaiAvax = await getReserves(addressDaiAvax)

    let daiReserve = reservesDaiAvax._reserve1
    let avaxReserve = reservesDaiAvax._reserve0
    let kacyReserve = reservesKacyAvax._reserve1
    let avaxKacyReserve = reservesKacyAvax._reserve0

    if (env.NEXT_PUBLIC_MASTER !== '1') {
      daiReserve = reservesDaiAvax._reserve0
      avaxReserve = reservesDaiAvax._reserve1
      kacyReserve = reservesKacyAvax._reserve0
      avaxKacyReserve = reservesKacyAvax._reserve1
    }

    const avaxInDollar = Big(daiReserve).div(Big(avaxReserve))
    const kacyPriceInDollar = avaxInDollar.mul(
      Big(avaxKacyReserve).div(kacyReserve)
    )

    if (getPriceLP) {
      const ERC20Contract = await ERC20(addressKacyAvax, networks[43114].rpc)

      const totalAvaxInDollars = Big(avaxKacyReserve).mul(avaxInDollar)

      const supplyLPToken = await ERC20Contract.totalSupply()

      if (supplyLPToken.toString() !== '0') {
        const priceLP = totalAvaxInDollars
          .mul(2)
          .div(Big(supplyLPToken.toString()))
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
