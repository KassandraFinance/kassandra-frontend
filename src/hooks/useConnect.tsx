import React from 'react'
import detectEthereumProvider from '@metamask/detect-provider'


import { ToastError, ToastInfo, ToastSuccess, ToastWarning } from '../components/Toastify/toast'

declare let window: any

const useConnect = () => {
  const [isLogged, setIsLogged] = React.useState<boolean>(false)
  const [userWalletAddress, setUserWalletAddress] = React.useState<string>('')

  const startApp = React.useCallback(async (provider) => {
    if (provider !== window.ethereum) {
      ToastWarning("Do you have multiple wallets installed?")
    }

    handleRequestAccounts()

    window.ethereum.on('chainChanged', handleChainChanged)
  }, [])


  const handleDisconnected = React.useCallback(() => { 
    setIsLogged(false);
  }, [])

  const handleChainChanged = React.useCallback((_chainId) => {
    console.log(_chainId)
    window.location.reload()
  }, [])


  const handleRequestAccounts = React.useCallback(() => {
    window.ethereum
      .request({ method: 'eth_accounts' })
      .then(handleAccountsChanged)
      .catch((err: any) => {
        ToastError(err.message)
        console.error(err);
      });

    window.ethereum.on('accountsChanged', handleAccountsChanged);
  }, [])



  const handleAccountsChanged = React.useCallback(async (accounts) => {
    if (accounts.length === 0) {
      setIsLogged(false)
      setUserWalletAddress('')
    } else if (accounts[0] !== userWalletAddress) {
      setUserWalletAddress(() => accounts[0])
      setIsLogged(true)
      ToastSuccess("Connected to MetaMask.")
    }
  }, [])


  const isUnlocked = React.useCallback(async resolve => {
    window.ethereum?._metamask.isUnlocked().then((unlocked: boolean) => {
      if (!unlocked) {
        console.info('MetaMask is locked')
        delete localStorage.currentAddress
        resolve(null)
      }
      console.info('MetaMask is unlocked')
    })
  }, [])


  const connect = React.useCallback(() => {
    window.ethereum
      .request({ method: 'eth_requestAccounts' })
      .then(handleAccountsChanged)
      .catch((err: any) => {
        if (err.code === 4001) {
          // EIP-1193 userRejectedRequest error
          ToastInfo("Please connect to MetaMask.")
        } else {
          ToastError(err.message)
          console.error(err);
        }
      })
  }, [])


  const hasProvider = React.useCallback(async () => {
    const provider = await detectEthereumProvider()
      
    if (provider !== null) {
      // window.onbeforeunload = function() { return "Prevent reload" }

      window.ethereum.on('disconnect',  handleDisconnected)
      window.ethereum.on('accountsChanged', handleAccountsChanged)
      window.ethereum.on('chainChanged', handleChainChanged)

      const permissions = await window.ethereum.request({ method: 'wallet_getPermissions' });

      if (permissions.length > 0) {
        startApp(provider)
      }
      else {
        ToastError("User has no permissions")
      }
    }
    return
  }, [])


  React.useEffect(() => {

    hasProvider()
  }, [])


  return {
    connect,
    isLogged,
    userWalletAddress
  }
}

export default useConnect