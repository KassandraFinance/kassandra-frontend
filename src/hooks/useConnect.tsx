import React from 'react'
import detectEthereumProvider from '@metamask/detect-provider'

declare let window: any

const useConnect = () => {
  const [currentAccount, setCurrentAccount] = React.useState('')
  const [isLogged, setIsLogged] = React.useState(false)

  React.useEffect(() => {
    (async () => {
      const provider = await detectEthereumProvider()
      
      if (provider !== null) {
        window.ethereum.request({ method: 'wallet_getPermissions' }).then((permissions) => {
          console.log(permissions)
          if (permissions.length > 0) {
            //User is already connected just straight log him in
            connectWallet()
          }
          else {
            //User not connected initial flow
            console.log("User has no permissions")
          }
        })
      }
      console.log("Install MestaMask")
    })()

    window.onbeforeunload = function() { return "Prevent reload" }

    window.ethereum.on('accountsChanged', handleAccountsChanged)
    // window.ethereum.on('disconnect',  handleDisconnected)
    window.ethereum.on('chainChanged', handleChainChanged)


  }, [])



  const connectWallet = React.useCallback(async () => {
    try {
      const id = await window.ethereum.request({ method: 'eth_chainId' })
      console.log("the id:")
      console.log(id)
      console.log(typeof id)
      console.log(id !== '0x89')
      if (id === '0x89' || id === '0x13881') {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        setIsLogged(true)
        setCurrentAccount(accounts[0])
        return accounts[0]  
      }
      else {
        console.log('Please change to Mumbai or Matic Mainnet as we only accept those networks.')
        setCurrentAccount('')
      }
    } catch (err) {
        if (err.code === 4001) {
          // EIP-1193 userRejectedRequest error
          // If this happens, the user rejected the connection request.
          console.log('Please connect to MetaMask.')

        } else if(err.code === -32002) {
          console.log('Please unlock MetaMask.')
        } else {
          console.error(err)
        }
    }
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
      setCurrentAccount('')
      window.location.reload()
    } else if (accounts[0] !== currentAccount) {
      setCurrentAccount(accounts[0])
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
    connectWallet,
    handleRequestAccounts,
    currentAccount,
    isLogged
  }
}

export default useConnect