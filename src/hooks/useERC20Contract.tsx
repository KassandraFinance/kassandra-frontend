import React from 'react'
import BigNumber from 'bn.js'
import { AbiItem } from "web3-utils"

import web3 from '../utils/web3'
import ERC20ABI from "../constants/abi/ERC20.json"
import { useSelector, RootStateOrAny } from 'react-redux'


const useERC20Contract = () => {
  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)

  const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  
  const waitTransaction = async (txHash: string) => {
    let txReceipt: any = null;
    while (txReceipt === null) {
      const r = await web3.eth.getTransactionReceipt(txHash);
      txReceipt = r;
      await sleep(2000);
    }
    return txReceipt.status;
  };
  
  const approve = async (
    spenderAddress: string,
    tokenAddress: string,
  ): Promise<boolean> => {
    try {
      const tokenContract = getERC20Contract(tokenAddress);
      return tokenContract.methods
        .approve(spenderAddress, web3.utils.toTwosComplement(-1))
        .send({ from: userWalletAddress }, async (error: any, txHash: string) => {
          if (error) {
            console.log("ERC20 could not be approved", error);
            return false;
          }
          const status = await waitTransaction(txHash);
          if (!status) {
            console.log("Approval transaction failed.");
            return false;
          }
          return true;
        });
    } catch (e) {
      console.log("error", e);
      return false;
    }
  };
  

  const getERC20Contract = (address: string) => {
    const contract = new web3.eth.Contract((ERC20ABI as unknown) as AbiItem, address)
    return contract
  }


  const getAllowance = async (addressCRP: string, tokenAddress: string): Promise<boolean> => {
    try {
      const tokenContract = getERC20Contract(tokenAddress)
      const allowance: string = await tokenContract.methods.allowance(userWalletAddress, addressCRP).call()
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

  return { 
    getERC20Contract,
    getAllowance,
    getBalance,
    getTotalSupply,
    approve
  }
}

export default useERC20Contract