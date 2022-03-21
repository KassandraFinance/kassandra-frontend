import WalletConnect from '@walletconnect/client'
import { ToastSuccess } from '../components/Toastify/toast'

export async function subscribeToEvents(
  connector: WalletConnect,
  handleAccountsChanged: (accounts: any) => void,
  handleChainChanged: (chainId: any) => void
) {
  if (!connector) {
    return
  }

  // Subscribe to connection events
  connector.on(
    'connect',
    (error: any, payload: { params: { accounts: any, chainId: any }[] }) => {
      if (error) {
        throw error
      }

      // Get provided accounts and chainId
      const { accounts, chainId } = payload.params[0]

      handleAccountsChanged(accounts)
      handleChainChanged(chainId)
      ToastSuccess('Connected to Wallet Connect.')
    }
  )

  connector.on(
    'session_update',
    (error: any, payload: { params: { accounts: any, chainId: any }[] }) => {
      if (error) {
        throw error
      }

      // Get updated accounts and chainId
      const { accounts, chainId } = payload.params[0]
      handleAccountsChanged(accounts)
      handleChainChanged(chainId)
    }
  )

  connector.on('disconnect', (error: any, payload: any) => {
    if (error) {
      throw error
    }
  })

  connector.on(
    'wc_sessionUpdate',
    (error: any, payload: { params: { accounts: any, chainId: any }[] }) => {
      if (error) {
        throw error
      }

      // Get updated accounts and chainId
      const { accounts, chainId } = payload.params[0]
      handleAccountsChanged(accounts)
    }
  )

  connector.on(
    'call_request',
    (error: any, payload: { params: { accounts: any, chainId: any }[] }) => {
      if (error) {
        throw error
      }

      // Get updated accounts and chainId
      const { accounts, chainId } = payload.params[0]
      handleAccountsChanged(accounts)
    }
  )
}
