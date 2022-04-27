import WalletConnectProvider from '@walletconnect/web3-provider'

export async function subscribeToEvents(
  connector: WalletConnectProvider,
  handleAccountsChanged: (accounts: []) => void,
  handleChainChanged: (chainId: number) => void,
  handleDisconnected: () => void
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
        console.log(error)
        return
      }

      // Get provided accounts and chainId
      const { accounts, chainId } = payload.params[0]

      handleAccountsChanged(accounts)
      handleChainChanged(chainId)
    }
  )

  connector.on(
    'session_update',
    (
      error: unknown,
      payload: { params: { accounts: [], chainId: number }[] }
    ) => {
      if (error) {
        console.log(error)
        return
      }

      // Get updated accounts and chainId
      const { accounts, chainId } = payload.params[0]
      handleAccountsChanged(accounts)
      handleChainChanged(chainId)
    }
  )

  connector.on('disconnect', (error: unknown) => {
    handleDisconnected()
    if (error) {
      console.log(error)
      return
    }
  })

  connector.on(
    'wc_sessionUpdate',
    (
      error: unknown,
      payload: { params: { accounts: [], chainId: number }[] }
    ) => {
      if (error) {
        console.log(error)
        return
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
        console.log(error)
        return
      }

      // Get updated accounts and chainId
      const { accounts, chainId } = payload.params[0]
      handleAccountsChanged(accounts)
    }
  )
}
