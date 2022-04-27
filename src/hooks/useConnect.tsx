/* eslint-disable @typescript-eslint/no-explicit-any */
import detectEthereumProvider from '@metamask/detect-provider'
import WalletConnect from '@walletconnect/client'
import QRCodeModal from '@walletconnect/qrcode-modal'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'
import { toChecksumAddress } from 'web3-utils'
import { ToastError, ToastSuccess } from '../components/Toastify/toast'
import { actionSetChainId } from '../store/modules/chainId/actions'

import { actionGetUserAddressWallet } from '../store/modules/userWalletAddress/actions'
import { subscribeToEvents } from '../utils/walletConnect'

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
  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)
  const dispatch = useDispatch()

  const router = useRouter()

  const handleAccountsChanged = React.useCallback(accounts => {
    try {
      if (accounts.length === 0 || accounts[0] === undefined) {
        dispatch(actionGetUserAddressWallet(''))
      } else if (accounts[0] !== userWalletAddress) {
        dispatch(actionGetUserAddressWallet(toChecksumAddress(accounts[0])))
        if (router.asPath === '/gov/address') {
          router.push(`/gov/address/${toChecksumAddress(accounts[0])}`)
        }
      }
    } catch (error: any) {
      console.log(error)
    }
  }, [])

  const handleChainChanged = React.useCallback(chainId => {
    dispatch(actionSetChainId(Number.parseInt(chainId, 16)))
    window.location.reload()
  }, [])

  const getAccounts = React.useCallback(async () => {
    const accounts = await window.ethereum.request({ method: 'eth_accounts' })
    handleAccountsChanged(accounts)
  }, [])

  const getChainId = React.useCallback(async () => {
    const id = await window.ethereum.request({ method: 'eth_chainId' })
    dispatch(actionSetChainId(id))
  }, [])

  const handleDisconnected = React.useCallback(() => {
    if (connector) {
      dispatch(actionGetUserAddressWallet(''))
      connector.killSession()
      localStorage.removeItem('walletconnect')
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

  const connectToWalletConnect = React.useCallback(async () => {
    if (!connector.connected) {
      await provider.enable()
      
      web3.setProvider(provider as any)
      
      const connect = localStorage.getItem('walletconnect')
      
      if (connect) {
        const { accounts, chainId } = JSON.parse(connect)
        handleAccountsChanged(accounts)
        dispatch(actionSetChainId(chainId))
        subscribeToEvents(provider, handleAccountsChanged, handleChainChanged)
      }
      return
    }
  }, [])

  const startApp = React.useCallback(async (providerMetaMask) => {
    if (connector.connected) {
      return
    }

    if (providerMetaMask !== window.ethereum) {
      ToastError('Do you have multiple wallets installed?')
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
  
  const handleWallectConnect = React.useCallback(async ()=> {

      const connect = localStorage.getItem('walletconnect')
      if (connect) {
        const { accounts, chainId } = JSON.parse(connect)

        await provider.enable()

        handleAccountsChanged(accounts)
        // subscribeToEvents(provider, handleAccountsChanged, handleChainChanged)
        // dispatch(actionSetChainId(chainId))
      }
    
  },[])

  async function verifyProvider() {
    const providerMetaMask = await detectEthereumProvider()
    if(providerMetaMask) {
      hasEthereumProvider()
    } else {
      handleWallectConnect()
    }
  }
  
  React.useEffect(() => {
    const connect = localStorage.getItem('walletconnect')
    if (connect) {
      const { accounts, chainId } = JSON.parse(connect)

      // await provider.enable()

      handleAccountsChanged(accounts)
      dispatch(actionSetChainId(chainId))
    }

    verifyProvider()
  }, [web3.currentProvider])

  return {
    connect,
    connectToWalletConnect,
    handleDisconnected,
  }
}

export default useConnect
