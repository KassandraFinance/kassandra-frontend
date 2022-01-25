import WalletConnect from '@walletconnect/client'

export async function subscribeToEvents(
  connector: WalletConnect, 
  handleAccountsChanged: { (accounts: any): Promise<void>; (arg0: any): void }
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
    }
  )

  connector.on('disconnect', (error: any, payload: any) => {
    if (error) {
      throw error
    }
    // Delete connector
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