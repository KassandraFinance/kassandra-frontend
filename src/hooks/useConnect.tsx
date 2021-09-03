import React from 'react'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'
import detectEthereumProvider from '@metamask/detect-provider'

import { actionGetUserAddressWallet } from '../store/modules/userWalletAddress/actions'

import { ToastError, ToastInfo, ToastSuccess, ToastWarning } from '../components/Toastify/toast'

declare let window: any

const useConnect = () => {
  console.log('executou')
  const [isLogged, setIsLogged] = React.useState<boolean>(false)

  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)
  const dispatch = useDispatch()

  const startApp = React.useCallback(async (provider) => {
    try {
      if (provider !== window.ethereum) {
        ToastWarning("Do you have multiple wallets installed?")
      }
  
      handleRequestAccounts()
  
      window.ethereum.on('chainChanged', handleChainChanged)
    } catch (error) {
      console.log(error.message)
    }
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

    // window.ethereum.on('accountsChanged', handleAccountsChanged);
  }, [])



  const handleAccountsChanged = React.useCallback(async (accounts) => {
    try {
      if (accounts.length === 0) {
        setIsLogged(false)
        dispatch(actionGetUserAddressWallet(''))
      } else if (accounts[0] !== userWalletAddress) {
        console.log(accounts[0])
        console.log(userWalletAddress)
        console.log('executou toastfy')
        dispatch(actionGetUserAddressWallet(accounts[0]))
        setIsLogged(true)
        ToastSuccess("Connected to MetaMask.")
      }
    } catch (error) {
      console.log(error.message)
    }
  }, [])


  const isUnlocked = React.useCallback(async () => {
    window.ethereum?._metamask.isUnlocked().then((unlocked: boolean) => {
      if (!unlocked) {
        console.info('MetaMask is locked')
        delete localStorage.currentAddress
      }
      console.info('MetaMask is unlocked')
    })
  }, [])





  const hasProvider = React.useCallback(async () => {
    const provider = await detectEthereumProvider()

    try {
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
    } catch (error) {
      console.log(error)
    }
      
  }, [])


  React.useEffect(() => {
    console.log(hasProvider)
    hasProvider()
  }, [])


  return {
    handleAccountsChanged,
    isUnlocked,
    isLogged,
    userWalletAddress
  }
}

export default useConnect