import WalletConnect from '@walletconnect/client'
import { ToastSuccess } from '../components/Toastify/toast'

export async function subscribeToEvents(
  connector: WalletConnect,
  handleAccountsChanged: (accounts: []) => void,
  handleChainChanged: (chainId: number) => void
) {
  if (!connector) {
    return
  }

  // Subscribe to connection events
  connector.on(
    'connect',
    (
      error: unknown,
      payload: { params: { accounts: [], chainId: number }[] }
    ) => {
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
    (
      error: unknown,
      payload: { params: { accounts: [], chainId: number }[] }
    ) => {
      if (error) {
        throw error
      }

      // Get updated accounts and chainId
      const { accounts, chainId } = payload.params[0]
      handleAccountsChanged(accounts)
      handleChainChanged(chainId)
    }
  )

  connector.on('disconnect', (error: unknown, payload) => {
    if (error) {
      throw error
    }
  })

  connector.on(
    'wc_sessionUpdate',
    (
      error: unknown,
      payload: { params: { accounts: [], chainId: number }[] }
    ) => {
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
    (
      error: unknown,
      payload: { params: { accounts: [], chainId: number }[] }
    ) => {
      if (error) {
        throw error
      }

      // Get updated accounts and chainId
      const { accounts, chainId } = payload.params[0]
      handleAccountsChanged(accounts)
    }
  )
}
