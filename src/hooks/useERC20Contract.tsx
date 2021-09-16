import BigNumber from 'bn.js'

import { AbiItem } from "web3-utils"

import web3, { EventSubscribe } from '../utils/web3'
import ERC20ABI from "../constants/abi/ERC20.json"

import waitTransaction, { CompleteCallback } from '../utils/txWait'

interface Events {
  Transfer: EventSubscribe;
  Approval: EventSubscribe;
}

const useERC20Contract = (address: string) => {
  const contract = new web3.eth.Contract((ERC20ABI as unknown) as AbiItem, address)

  /* EVENT */

  const events: Events = contract.events

  /* SEND */

  const approve = async (
    spenderAddress: string,
    userWalletAddress: string,
    onComplete?: CompleteCallback,
  ): Promise<boolean> => {
    try {
      return contract.methods.approve(spenderAddress, web3.utils.toTwosComplement(-1)).send(
        { from: userWalletAddress },
        onComplete ? waitTransaction(onComplete) : false
      );
    } catch (e) {
      console.log("error", e);
      return false;
    }
  };

  /* VIEWS */

  const name = async (): Promise<string> => {
    const value = await contract.methods.name().call()
    return value
  }

  const symbol = async (): Promise<string> => {
    const value = await contract.methods.symbol().call()
    return value
  }

  const decimals = async (): Promise<BigNumber> => {
    const value = await contract.methods.decimals().call()
    return new BigNumber(value)
  }

  const allowance = async (addressCRP: string, userWalletAddress: string): Promise<boolean> => {
    try {
      const allowance: string = await contract.methods.allowance(userWalletAddress, addressCRP).call()
      return allowance !== "0"
    } catch (e) {
      return false
    }
  };

  const balance = async (userAddress: string): Promise<BigNumber> => {
    try {
      const balance: string = await contract.methods.balanceOf(userAddress).call()
      return new BigNumber(balance)
    } catch (e) {
      return new BigNumber(0)
    }
  };

  const totalSupply = async (): Promise<BigNumber> => {
    try {
      const supply: string = await contract.methods.totalSupply().call()
      return new BigNumber(supply)
    } catch (e) {
      return new BigNumber(0)
    }
  };

  return {
    events,

    approve,

    name,
    symbol,
    decimals,
    allowance,
    balance,
    totalSupply,
  }
}

export const ERC20 = useERC20Contract
export default useERC20Contract
