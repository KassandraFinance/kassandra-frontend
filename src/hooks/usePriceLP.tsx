import { AbiItem } from "web3-utils"
import { useSelector, RootStateOrAny } from 'react-redux'

import web3 from '../utils/web3'
import PriceLP from "../constants/abi/PriceLP.json"

const usePriceLP = () => {
  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)

  const getPriceLP = (address: string) => {
    // eslint-disable-next-line prettier/prettier
    const contract = new web3.eth.Contract((PriceLP.abi as unknown) as AbiItem, address)
    return contract
  }

//maxPriorityFeePerGas: null, maxFeePerGas: null 1,500000031  [0] some((element: string) => element === 'PurchaseExecuted')  gas: 270804, gasPrice: 1500000031 
  const viewgetReserves = async (addressPriceLP: string) => {
    const contract = await getPriceLP(addressPriceLP)
    const value = await contract.methods.getReserves().call({ from: userWalletAddress })
    return (value)
  }
  
  return { 
    getPriceLP,
    viewgetReserves,
  }
}

export default usePriceLP