import BigNumber from 'bn.js'
import { useSelector, RootStateOrAny } from 'react-redux'

import { AbiItem } from "web3-utils"

import web3 from '../utils/web3'
import ERC20ABI from "../constants/abi/ERC20.json"

import waitTransaction, { CompleteCallback } from '../utils/txWait'


const useERC20Contract = () => {
  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)


  const approve = async (
    spenderAddress: string,
    tokenAddress: string,
    onComplete?: CompleteCallback,
  ): Promise<boolean> => {
    try {
      const tokenContract = getERC20Contract(tokenAddress);
      return tokenContract.methods.approve(spenderAddress, web3.utils.toTwosComplement(-1)).send(
        { from: userWalletAddress },
        onComplete ? waitTransaction(onComplete) : undefined
      );
    } catch (e) {
      console.log("error", e);
      return false;
    }
  };
  

  const getERC20Contract = (address: string) => {
    const contract = new web3.eth.Contract((ERC20ABI as unknown) as AbiItem, address)
    return contract
  }


  const getAllowance = async (addressCRP: string, tokenAddress: string, walletAddress?: string): Promise<boolean> => {
    try {
      const tokenContract = getERC20Contract(tokenAddress)
      const allowance: string = await tokenContract.methods.allowance(walletAddress || userWalletAddress, addressCRP).call()
      return allowance !== "0"
    } catch (e) {
      return false
    }
  };
  
  const getBalance = async (tokenAddress: string, userAddress: string): Promise<BigNumber> => {
    const tokenContract = getERC20Contract(tokenAddress)
    try {
      const balance: string = await tokenContract.methods.balanceOf(userAddress).call()
      return new BigNumber(balance)
    } catch (e) {
      return new BigNumber(0)
    }
  };

  const getTotalSupply = async (tokenAddress: string): Promise<BigNumber> => {
    const tokenContract = getERC20Contract(tokenAddress)
    try {
      const supply: string = await tokenContract.methods.totalSupply().call()
      return new BigNumber(supply)
    } catch (e) {
      return new BigNumber(0)
    }
  };

  const name = async (address: string): Promise<string> => {
    const tokenERC20Contract = await getERC20Contract(address)
    const res = await tokenERC20Contract.methods.name().call()
    return res
  }

  const symbol = async (address: string): Promise<string> => {
    const tokenERC20Contract = await getERC20Contract(address)
    const res = await tokenERC20Contract.methods.symbol().call()
    return res
  }

  const decimals = async (address: string): Promise<BigNumber> => {
    const tokenERC20Contract = await getERC20Contract(address)
    const value = await tokenERC20Contract.methods.decimals().call()
    return new BigNumber(value)
  }

  return { 
    getERC20Contract,
    getAllowance,
    getBalance,
    getTotalSupply,
    approve,
    name,
    symbol,
    decimals,
  }
}

export default useERC20Contract