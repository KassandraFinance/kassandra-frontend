import { ChainDetails } from '../utils/changeChain'

import { PartnerData } from '../components/Products/Partner'
import partners from '../components/Products/Partner/list'

import ahypeIcon from '../../public/assets/logos/ahype.svg'
import tricryptoIcon from '../../public/assets/logos/tricrypto.svg'

export const HeimCRPPOOL = process.env.NEXT_PUBLIC_MASTER === '1' ?
  '0x38918142779e2CD1189cBd9e932723C968363D1E'
  :
  '0xE34A2935B04e9c879f5bDd022b97D7Cf2F1Dde1d'

export const HeimCorePool = process.env.NEXT_PUBLIC_MASTER === '1' ?
  '0x17C1037B17b221f2f3b53f85cebD817C941f6bC5'
  :
  '0xFCfB171A8a4666bc53Eac2d91Cb0b5203DDa63cD'

export const LPDaiAvax = process.env.NEXT_PUBLIC_MASTER === '1' ?
  '0xbA09679Ab223C6bdaf44D45Ba2d7279959289AB0'
  :
  '0xe64b1772a9e28E694FEc27Bc7901f88855252E9F'

export const LPKacyAvaxPNG = process.env.NEXT_PUBLIC_MASTER === '1' ?
  '0x1938cE0E14dD71caab96F52dF3F49b1D1DAF8861'
  :
  '0xbaa8b0d2AA6415d5b4077C1FA06b3507577FBCd7'


export const LPKacyAvaxJOE = process.env.NEXT_PUBLIC_MASTER === '1' ?
  '0xc45893e0ee426a643e54829ee8c697995e5980ed'
  :
  ''

export const Kacy = process.env.NEXT_PUBLIC_MASTER === '1' ?
  '0xf32398dae246C5f672B52A54e9B413dFFcAe1A44'
  :
  '0x1d7C6846F033e593b4f3f21C39573bb1b41D43Cb'

export const Staking = process.env.NEXT_PUBLIC_MASTER === '1' ?
  '0xfddc1956d88a34fcB0671508Fa3d5aaC73b2a031'
  :
  '0xe08eD1e470160AF3dF917be221a6aed6284c1D2F'

export const Timelock = process.env.NEXT_PUBLIC_MASTER === '1' ?
  ''
  :
  '0xB8897C7f08D085Ded52A938785Df63C79BBE9c25'

export const GovernorAlpha = process.env.NEXT_PUBLIC_MASTER === '1' ?
  ''
  :
  '0x2B6C46b9552B6Fa36DD097b6527ba20fdDB3FfD5'

export const ProxyContract = process.env.NEXT_PUBLIC_MASTER === '1' ?
  '0x1dd8b313ec6f7a744b69fc86ae47ad2a5eb45bc4'
  :
  '0x97e33051B09092C1301A90b964a74cA51C0b068B'

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
  fundBy?: string;
  fundIcon?: any;
  pid?: number;
  fundSummary?: string;
  fundLink?: string;
}

export type ProductSymbols = keyof typeof products;

export const SUBGRAPH_URL = `https://graph.kassandra.finance/subgraphs/name/${process.env.NEXT_PUBLIC_MASTER === '1' ?
  'KassandraAvalanche'
  :
  'KassandraFuji'}`


export const chains: { [key: string]: ChainDetails } = {
  avalanche: {
    chainId: 43114,
    chainIdHex: '0xa86a',
    chainName: 'Avalanche Mainnet',
    nativeCurrency: {
      name: 'Avalanche',
      symbol: 'AVAX',
      decimals: 18
    },
    rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
    blockExplorerUrls: ['https://snowtrace.io/'],
    secondsPerBlock: 2,
    wrapped: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
  },
  fuji: {
    chainId: 43113,
    chainIdHex: '0xa869',
    chainName: 'Avalanche Fuji Testnet',
    nativeCurrency: {
      name: 'Avalanche',
      symbol: 'AVAX',
      decimals: 18
    },
    rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
    blockExplorerUrls: ['https://testnet.snowtrace.io/'],
    secondsPerBlock: 2,
    wrapped: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c',
  }
}

const ahype: ProductDetails  = process.env.NEXT_PUBLIC_MASTER === '1' ?
   {
    sipAddress: '0x38918142779e2CD1189cBd9e932723C968363D1E',
    coreAddress: '0x17C1037B17b221f2f3b53f85cebD817C941f6bC5',
    platform: 'Avalanche',
    categories: ['Avalanche', 'Pool'],
    chain: chains.avalanche,
    name: 'Avalanche Social Index',
    fundBy: 'HEIMDALL.land',
    symbol: 'aHYPE',
    fundIcon: ahypeIcon,
    pid: 6,
    fundLink: 'https://kassandrafoundation.medium.com/avalanche-social-index-4042a823c972',
    fundSummary: `The Social Index $aHYPE reflects the performance of a portfolio selected
    from the most socially active cryptocurrencies in the past 30 days,
    using Heimdall Social Score data.`,
    partners: [
      partners.avalanche,
      partners.heimdall,
      partners.api3
    ]
  }
 :
   {
    sipAddress: '0xE34A2935B04e9c879f5bDd022b97D7Cf2F1Dde1d',
    coreAddress: '0xFCfB171A8a4666bc53Eac2d91Cb0b5203DDa63cD',
    platform: 'Fuji',
    categories: ['Fuji', 'Pool'],
    chain: chains.fuji,
    name: 'Avalanche Social Index',
    fundBy: 'HEIMDALL.land',
    symbol: 'aHYPE',
    fundIcon: ahypeIcon,
    pid: 4,
    fundLink: 'https://kassandrafoundation.medium.com/avalanche-social-index-4042a823c972',
    fundSummary: `The Social Index $aHYPE reflects the performance of a portfolio selected
    from the most socially active cryptocurrencies in the past 30 days,
    using Heimdall Social Score data.`,
    partners: [
      partners.avalanche,
      partners.heimdall,
      partners.api3
    ]
  }

const tricrypto: ProductDetails  = {
  sipAddress: '0xA6CAB4b1019ee22309dcA5ba62C3372a791dcB2E',
  coreAddress: '0x440C5De429B36967E46C192f2140259e2ec22fc8',
  platform: 'Avalanche',
  categories: ['Avalanche', 'Pool'],
  chain: chains.avalanche,
  name: 'Tricrypto Social Index',
  fundBy: 'Kassandra with Yield Yak',
  symbol: 'K3C',
  fundIcon: tricryptoIcon,
  pid: 6,
  fundLink: 'https://kassandra.finance/',
  fundSummary: `The #K3C represents a yield-earning portfolio composed of BTC,
  ETH, USDT and KACY built in partnership with our friends back at Yield Yak.`,
  partners: [
    partners.avalanche,
    partners.yieldYak,
    partners.traderJoe,
    partners.aave
  ]
}

export const products = [ahype, tricrypto]
