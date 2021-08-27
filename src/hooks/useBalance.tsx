import React from 'react'

import useConnect from './useConnect'
import useERC20Contract from "./useERC20Contract"


const useBalance = () => {
  const { userWalletAddress } = useConnect()
  const { getBalance } = useERC20Contract()


  const getBalanceToken = React.useCallback( async (tokenSelected: string) => {
    const balance = await getBalance(tokenSelected, userWalletAddress)

    return balance
  }, [userWalletAddress])

  return {
    getBalanceToken
  }    

}

export default useBalance