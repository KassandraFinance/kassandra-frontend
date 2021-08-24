import React from 'react'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'
import detectEthereumProvider from '@metamask/detect-provider'

import { actionGetUserAddressWallet } from '../store/modules/userWalletAddress/actions'

declare let window: any

const useConnect = () => {
  const [currentAccount, setCurrentAccount] = React.useState('')
  const [isLogged, setIsLogged] = React.useState(false)
  // const [isWalletPermissions, setIsWalletPermissions] = React.useState(false)

  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)
  const dispatch = useDispatch()

  React.useEffect(() => {
    (async () => {
      const provider = await detectEthereumProvider()
      
      if (provider !== null) {
        const permissions = await window.ethereum.request({ method: 'wallet_getPermissions' });
        console.log(permissions)
        if (permissions.length > 0) {
          // User is already connected just straight log him in
          startApp(provider)
          // setIsWalletPermissions(true)
        }
        else {
          // User not connected initial flow
          console.log("User has no permissions")
          // setIsWalletPermissions(false)
        }
      }
      console.log("Install MestaMask")
    })()

    window.onbeforeunload = function() { return "Prevent reload" }

    window.ethereum.on('accountsChanged', handleAccountsChanged)
    // window.ethereum.on('disconnect',  handleDisconnected)
    window.ethereum.on('chainChanged', handleChainChanged)


  }, [])


  const startApp = React.useCallback(async (provider) => {
    // If the provider returned by detectEthereumProvider is not the same as
    // window.ethereum, something is overwriting it, perhaps another wallet.
    if (provider !== window.ethereum) {
      console.error('Do you have multiple wallets installed?')
    }
    // Access the decentralized web!
    // const chainId = await window.ethereum.request({ method: 'eth_chainId' })

    // handleChainChanged(chainId)
    handleRequestAccounts()

    // window.ethereum.on('chainChanged', handleChainChanged)
  }, [])


  const handleChainChanged = React.useCallback((_chainId) => {
    // We recommend reloading the page, unless you must do otherwise
    window.location.reload()
  }, [])


  const handleRequestAccounts = React.useCallback(() => {
    window.ethereum
      .request({ method: 'eth_accounts' })
      .then(handleAccountsChanged)
      .catch((err) => {
        // Some unexpected error.
        // For backwards compatibility reasons, if no accounts are available,
        // eth_accounts will return an empty array.
        console.error(err);
      });

    // Note that this event is emitted on page load.
    // If the array of accounts is non-empty, you're already
    // connected.
    window.ethereum.on('accountsChanged', handleAccountsChanged);
  }, [])



  // For now, 'eth_accounts' will continue to always return an array
  const handleAccountsChanged = React.useCallback((accounts) => {
    if (accounts.length === 0) {
      // MetaMask is locked or the user has not connected any accounts
      console.log('Please connect to MetaMask.')
      setIsLogged(false)
      dispatch(actionGetUserAddressWallet(''))
    } else if (accounts[0] !== userWalletAddress) {
      dispatch(actionGetUserAddressWallet(accounts[0]))
      setIsLogged(true)
      // Do any other work!
    }
  }, [])


  const connect = React.useCallback(() => {
    window.ethereum
      .request({ method: 'eth_requestAccounts' })
      .then(handleAccountsChanged)
      .catch((error) => {
        if (error.code === 4001) {
          // EIP-1193 userRejectedRequest error
          console.log('Please connect to MetaMask.');
        } else {
          console.error(error);
        }
      })
  }, [])


  return {
    connect,
    handleRequestAccounts,
    isLogged
  }
}

export default useConnect