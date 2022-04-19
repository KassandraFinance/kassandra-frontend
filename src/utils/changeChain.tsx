interface CurrencyDetails {
  name: string;
  symbol: string;
  decimals: number;
}

export interface ChainDetails {
  chainId: number;
  chainName: string;
  nativeCurrency: CurrencyDetails;
  rpcUrls: [string];
  blockExplorerUrls: [string];
  secondsPerBlock: number;
}

// eslint-disable-next-line prettier/prettier
declare let window: {
  ethereum: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    request: (input: { method: string, params: [any] }) => void
  }
}

export default async (chain: ChainDetails) => {
  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: chain.chainId }]
    })
  } catch (error: any) {
    // This error code indicates that the chain has not been added to MetaMask.
    if (error.code === 4902) {
      try {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [chain]
        })
      } catch (addError) {
        // handle "add" error
      }
    }
    // handle other "switch" errors
    console.log(error)
  }
}
