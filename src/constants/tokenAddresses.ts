import { ChainDetails } from '../utils/changeChain'

import { PartnerData } from '../components/Products/Partner'
import partners from '../components/Products/Partner/list'

export const HeimCRPPOOL = '0xE34A2935B04e9c879f5bDd022b97D7Cf2F1Dde1d'
export const HeimCorePool = '0xFCfB171A8a4666bc53Eac2d91Cb0b5203DDa63cD'

export const LPKacyAvax = '0xbaa8b0d2AA6415d5b4077C1FA06b3507577FBCd7'
export const LPDaiAvax = '0xe64b1772a9e28E694FEc27Bc7901f88855252E9F'
export const Kacy = '0x1d7C6846F033e593b4f3f21C39573bb1b41D43Cb'
export const Staking = '0xe08eD1e470160AF3dF917be221a6aed6284c1D2F'
export const Timelock = ''
export const GovernorAlpha = ''

export interface Networks {
  Ropsten: string;
  Avalanche: string;
  Fuji: string;
}

export interface ProductDetails {
  sipAddress: string;
  coreAddress: string;
  // eslint-disable-next-line prettier/prettier
  platform: keyof Networks;
  categories: string[];
  chain: ChainDetails;
  name: string;
  symbol: string;
  partners: PartnerData[];
}

export type ProductSymbols = keyof typeof products;

export const SUBGRAPH_URL =
  'https://graph.kassandra.finance/subgraphs/name/Kassandra'

export const chains: { [key: string]: ChainDetails } = {
  avalanche: {
    chainId: '0xa86a',
    chainName: 'Avalanche Mainnet',
    nativeCurrency: {
      name: 'Avalanche',
      symbol: 'AVAX',
      decimals: 18
    },
    rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
    blockExplorerUrls: ['https://snowtrace.io/']
  },
  fuji: {
    chainId: '0xa869',
    chainName: 'Avalanche Fuji Testnet',
    nativeCurrency: {
      name: 'Avalanche',
      symbol: 'AVAX',
      decimals: 18
    },
    rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
    blockExplorerUrls: ['https://testnet.snowtrace.io/']
  }
}

export const products: { [key: string]: ProductDetails } = {
  ahype: {
    sipAddress: '0xE34A2935B04e9c879f5bDd022b97D7Cf2F1Dde1d',
    coreAddress: '0xFCfB171A8a4666bc53Eac2d91Cb0b5203DDa63cD',
    platform: 'Fuji',
    categories: ['Fuji', 'Pool'],
    chain: chains.fuji,
    name: 'Avalanche Social Index',
    symbol: 'aHYPE',
    partners: [
      partners.avalanche,
      partners.heimdall,
      partners.api3
    ]
  }
}
