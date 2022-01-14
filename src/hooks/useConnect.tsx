import React from 'react'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'
import detectEthereumProvider from '@metamask/detect-provider'

import { actionGetUserAddressWallet } from '../store/modules/userWalletAddress/actions'

import web3 from '../utils/web3'


import {
  ToastError,
  ToastInfo,
  ToastSuccess,
  ToastWarning
} from '../components/Toastify/toast'

declare let window: {
  ethereum: any,
  location: {
    reload: (noCache?: boolean) => void
  }
}

const useConnect = () => {
  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)
  const dispatch = useDispatch()

  const handleChainChanged = React.useCallback(_chainId => {
    window.location.reload()
  }, [])

  // const handleAccountsChanged = React.useCallback(async accounts => {
  //   try {
  //     if (accounts.length === 0 || accounts[0] === undefined) {
  //       dispatch(actionGetUserAddressWallet(''))
  //     } else if (accounts[0] !== userWalletAddress) {
  //         dispatch(actionGetUserAddressWallet(accounts[0]))
  //       // ToastSuccess('Connected to MetaMask.')
  //     }
  //   } catch (error: any) {
  //     console.log(error.message)
  //   }
  // }, [])

  const handleAccountsChanged = React.useCallback(async accounts => {
    try {
      if (accounts.length === 0 || accounts[0] === undefined) {
        dispatch(actionGetUserAddressWallet(''))
      } else if (accounts[0] !== userWalletAddress) {
          dispatch(actionGetUserAddressWallet(accounts[0]))
        // ToastSuccess('Connected to MetaMask.')
      }
    } catch (error: any) {
      console.log(error.message)
    }
  }, [])

  const handleRequestAccounts = React.useCallback((accounts) => {
    console.log(accounts)
    try {
      if (accounts.length === 0 || accounts[0] === undefined) {
        dispatch(actionGetUserAddressWallet(''))
      } else if (accounts[0] !== userWalletAddress) {
          dispatch(actionGetUserAddressWallet(accounts[0]))
        // ToastSuccess('Connected to MetaMask.')
      }
    } catch (error: any) {
      console.log(error)
    }
  }, [])

  // const startApp = React.useCallback(async provider => {
  //   try {
  //     if (provider !== window.ethereum) {
  //       ToastWarning('Do you have multiple wallets installed?')
  //     }

  //     handleRequestAccounts()

  //     window.ethereum.on('chainChanged', handleChainChanged)
  //   } catch (error: any) {
  //     console.log(error.message)
  //   }
  // }, [])

  // const handleDisconnected = React.useCallback(() => {
  //   dispatch(actionGetUserAddressWallet(''))
  // }, [])

  // const connect = React.useCallback(() => {
  //   try {
  //     window.ethereum
  //       .request({ method: 'eth_requestAccounts' })
  //       .then(handleAccountsChanged)
  //       .catch((err: any) => {
  //         if (err.code === 4001) {
  //           // EIP-1193 userRejectedRequest error
  //           ToastInfo('Please connect to MetaMask.')
  //         } else {
  //           ToastError(err.message)
  //           console.error(err)
  //         }
  //       })
  //   } catch (error: any) {
  //     ToastError(error.message)
  //   }
  // }, [])

  // const hasProvider = React.useCallback(async () => {
  //   const provider = await detectEthereumProvider()

  //   try {
  //     if (provider !== null) {
  //       // window.onbeforeunload = function() { return "Prevent reload" }

  //       window.ethereum.on('disconnect', handleDisconnected)
  //       window.ethereum.on('accountsChanged', handleAccountsChanged)
  //       window.ethereum.on('chainChanged', handleChainChanged)

  //       const permissions = await window.ethereum.request({
  //         method: 'wallet_getPermissions'
  //       })

  //       if (permissions.length > 0) {
  //         startApp(provider)
  //       } else {
  //         // ToastError("User has no permissions")
  //         console.log('User has no permissions')
  //         return
  //       }
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }, [])

  // React.useEffect(() => {
  //   hasProvider()
  // }, [])

  return {
    handleRequestAccounts
  }
}

export default useConnect
