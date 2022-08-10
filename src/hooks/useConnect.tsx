/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import detectEthereumProvider from '@metamask/detect-provider'
import WalletConnect from '@walletconnect/client'
import QRCodeModal from '@walletconnect/qrcode-modal'
import { toChecksumAddress } from 'web3-utils'

import { subscribeToEvents } from '../utils/walletConnect'

import { useAppDispatch, useAppSelector } from '../store/hooks'
import { setChainId } from '../store/reducers/chainId'
import { setUserWalletAddress } from '../store/reducers/userWalletAddress'

import web3, { provider } from '../utils/web3'

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
  const dispatch = useAppDispatch()
  const userWalletAddress = useAppSelector(state => state.userWalletAddress)
  const [isConnected, setIsConnected] = React.useState(false)
  const [metaMaskError, setMetaMaskError] = React.useState<string | null>(null)

  const handleAccountsChanged = React.useCallback(accounts => {
    try {
      if (accounts.length === 0 || accounts[0] === undefined) {
        dispatch(setUserWalletAddress(''))
      } else if (accounts[0] !== userWalletAddress) {
        dispatch(setUserWalletAddress(toChecksumAddress(accounts[0])))
      }
    } catch (error: any) {
      console.log(error)
    }
  }, [])

  const handleChainChanged = React.useCallback(chainId => {
    dispatch(setChainId(Number.parseInt(chainId, 16)))
    window.location.reload()
  }, [])

  const getAccounts = React.useCallback(async () => {
    const accounts = await web3.eth.getAccounts()
    handleAccountsChanged(accounts)
  }, [])

  const getChainId = React.useCallback(async () => {
    const id = await web3.eth.getChainId()
    dispatch(setChainId(id))
  }, [])

  const handleDisconnected = React.useCallback(() => {
    if (connector) {
      dispatch(setUserWalletAddress(''))
      connector.killSession()
      localStorage.removeItem('walletconnect')
      window.location.reload()
    }
  }, [])

  const connect = React.useCallback(async () => {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })

      handleAccountsChanged(accounts)
      setIsConnected(true)
    } catch (error: any) {
      setMetaMaskError(error.message)
      console.error(error)
    }
  }, [])

  const connectToWalletConnect = React.useCallback(async () => {
    if (!connector.connected) {
      await provider.enable()

      web3.setProvider(provider as any)

      const connect = localStorage.getItem('walletconnect')

      if (connect) {
        const { accounts, chainId } = JSON.parse(connect)
        handleAccountsChanged(accounts)
        setIsConnected(true)
        dispatch(setChainId(chainId))
        subscribeToEvents(provider, handleAccountsChanged, handleChainChanged, handleDisconnected)
      }
      return
    }
  }, [])

  const startApp = React.useCallback(async (providerMetaMask) => {
    if (connector.connected) {
      return
    }

    if (providerMetaMask !== window.ethereum) {
      setMetaMaskError('Do you have multiple wallets installed?')
      return
    }

    getAccounts()
    getChainId()

    window.ethereum.on('accountsChanged', handleAccountsChanged)
    window.ethereum.on('chainChanged', handleChainChanged)
  }, [])

  const hasEthereumProvider = React.useCallback(async () => {
    const providerMetaMask = await detectEthereumProvider()

    if (providerMetaMask) {
      startApp(providerMetaMask)
    }
  }, [])

  async function verifyProvider() {
    const providerMetaMask = await detectEthereumProvider()
    if (providerMetaMask) {
      hasEthereumProvider()
    }
  }

  React.useEffect(() => {
    const connect = localStorage.getItem('walletconnect')
    if (connect) {
      const { accounts, chainId } = JSON.parse(connect)

      // await provider.enable()

      handleAccountsChanged(accounts)
      dispatch(setChainId(chainId))
    }

    verifyProvider()
  }, [])

  function cleanError() {
    setMetaMaskError(null)
  }

  return {
    connect,
    connectToWalletConnect,
    handleDisconnected,
    isConnected,
    metaMaskError,
    cleanError
  }
}

export default useConnect
