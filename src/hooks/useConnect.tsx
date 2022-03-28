/* eslint-disable @typescript-eslint/no-explicit-any */
import detectEthereumProvider from '@metamask/detect-provider'
import WalletConnect from '@walletconnect/client'
import QRCodeModal from '@walletconnect/qrcode-modal'
import React from 'react'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'
import { ToastError, ToastSuccess } from '../components/Toastify/toast'
import { actionSetChainId } from '../store/modules/chainId/actions'

import { actionGetUserAddressWallet } from '../store/modules/userWalletAddress/actions'
import { subscribeToEvents } from '../utils/walletConnect'

import web3 from '../utils/web3'

// eslint-disable-next-line prettier/prettier
declare let window: {
  ethereum: any,
  location: {
    reload: (noCache?: boolean) => void
  }
}

const bridge = 'https://bridge.walletconnect.org'
const connector = new WalletConnect({ bridge, qrcodeModal: QRCodeModal })

const useConnect = () => {
  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)
  const dispatch = useDispatch()

  const handleAccountsChanged = React.useCallback(accounts => {
    try {
      if (accounts.length === 0 || accounts[0] === undefined) {
        dispatch(actionGetUserAddressWallet(''))
      } else if (accounts[0] !== userWalletAddress) {
        dispatch(actionGetUserAddressWallet(accounts[0]))
      }
    } catch (error: any) {
      console.log(error)
    }
  }, [])

  const handleChainChanged = React.useCallback(chainId => {
    dispatch(actionSetChainId(chainId))
    window.location.reload()
  }, [])

  const getAccounts = React.useCallback(async () => {
    const accounts = await web3.eth.getAccounts()
    handleAccountsChanged(accounts)
  }, [])

  const getChainId = React.useCallback(async () => {
    const id = await window.ethereum.request({ method: 'eth_chainId' })
    // const chainId = await web3.eth.getChainId()
    dispatch(actionSetChainId(id))
  }, [])

  const handleDisconnected = React.useCallback(() => {
    if (connector) {
      dispatch(actionGetUserAddressWallet(''))
      connector.killSession()
      window.location.reload()
    }
  }, [])

  const connect = React.useCallback(async () => {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })

      handleAccountsChanged(accounts)
      ToastSuccess('Connected to MetaMask.')
    } catch (error: any) {
      ToastError(error.message)
      console.error(error)
    }
  }, [])

  const connectToWalletConnect = React.useCallback(() => {
    if (!connector.connected) {
      connector.createSession()
      subscribeToEvents(connector, handleAccountsChanged, handleChainChanged)
      return
    }
  }, [])

  const startApp = React.useCallback(async (provider) => {
    if (connector.connected) {
      return
    }

    if (provider !== window.ethereum) {
      ToastError('Do you have multiple wallets installed?')
      return
    }

    getAccounts()
    getChainId()

    window.ethereum.on('accountsChanged', handleAccountsChanged)
    window.ethereum.on('chainChanged', handleChainChanged)
  }, [])

  const hasEthereumProvider = React.useCallback(async () => {
    const provider = await detectEthereumProvider()

    if (provider) {
      startApp(provider)
    } else {
      // ToastError('Please install MetaMask!')
    }
  }, [])

  React.useEffect(() => {
    const handleWallectConnect = () => {
      const connect = localStorage.getItem('walletconnect')

      if (connect) {
        const { accounts, chainId } = JSON.parse(connect)
        handleAccountsChanged(accounts)
        dispatch(actionSetChainId(chainId))
      }
    }

    handleWallectConnect()
    hasEthereumProvider()
  }, [])

  return {
    connect,
    connectToWalletConnect,
    handleDisconnected,
  }
}

export default useConnect
