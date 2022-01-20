import React from 'react'
import WalletConnect from '@walletconnect/client'
import QRCodeModal from '@walletconnect/qrcode-modal'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'
import detectEthereumProvider from '@metamask/detect-provider'

import { actionGetUserAddressWallet } from '../store/modules/userWalletAddress/actions'
import { actionSetChainId } from '../store/modules/chainId/actions'

import { subscribeToEvents } from '../utils/walletConnect'

import web3 from '../utils/web3'

import {
  ToastError,
  ToastInfo,
  ToastSuccess,
  ToastWarning
} from '../components/Toastify/toast'

// eslint-disable-next-line prettier/prettier
declare let window: {
  ethereum: any,
  location: {
    reload: (noCache?: boolean) => void
  }
}

const useConnect = () => {
  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)
  const dispatch = useDispatch()

  const handleChainChanged = React.useCallback((chainId: string) => {
    dispatch(actionSetChainId(chainId))
  }, [])

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

  const handleRequestAccounts = React.useCallback(async () => {
    const accounts = await web3.eth.getAccounts()

    handleAccountsChanged(accounts)
  }, [])

  const getChainId = React.useCallback(async () => {
    const id = await window.ethereum.request({ method: 'eth_chainId' })
    dispatch(actionSetChainId(id))
  }, [])

  const startApp = React.useCallback(async provider => {
    try {
      if (provider !== window.ethereum) {
        ToastWarning('Do you have multiple wallets installed?')
      }

      handleRequestAccounts()
      getChainId()

      window.ethereum.on('chainChanged', handleChainChanged)
    } catch (error: any) {
      console.log(error.message)
    }
  }, [])

  const handleDisconnected = React.useCallback(async () => {
    const connector = await connectWalletConnect(true)
    if (connector) {
      connector.killSession()
      dispatch(actionGetUserAddressWallet(''))
    }
  }, [])

  const connect = React.useCallback(() => {
    try {
      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then(handleAccountsChanged)
        .catch((err: any) => {
          if (err.code === 4001) {
            // EIP-1193 userRejectedRequest error
            ToastInfo('Please connect to MetaMask.')
          } else {
            ToastError(err.message)
            console.error(err)
          }
        })
    } catch (error: any) {
      ToastError(error.message)
    }
  }, [])

  const connectWalletConnect = React.useCallback(async (check: boolean) => {
    const bridge = 'https://bridge.walletconnect.org'
  
    const connector = new WalletConnect({ bridge, qrcodeModal: QRCodeModal })
  
    if (!connector.connected) {
      if (!check) {
        await connector.createSession()
      } else {
        return false
      }
    }
  
    const { chainId, accounts } = connector
    handleChainChanged(`0x${chainId.toString(16)}`)
    handleAccountsChanged(accounts)
    subscribeToEvents(connector, handleAccountsChanged)
    return connector
  }, [])

  const hasProvider = React.useCallback(async () => {
    const provider = await detectEthereumProvider()

    try {
      if (await connectWalletConnect(true)) {
        return
      }
      
      if (provider !== null) {
        // window.onbeforeunload = function() { return "Prevent reload" }

        window.ethereum.on('disconnect', handleDisconnected)
        window.ethereum.on('accountsChanged', handleAccountsChanged)
        window.ethereum.on('chainChanged', handleChainChanged)

        startApp(provider)
      }
    } catch (error) {
      console.log(error)
    }
  }, [])

  React.useEffect(() => {
    hasProvider()
  }, [])

  return {
    connect,
    connectWalletConnect,
    handleDisconnected
  }
}

export default useConnect
