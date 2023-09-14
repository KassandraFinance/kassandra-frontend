import { ChainDetails } from '../utils/changeChain'

import { PartnerData } from '../components/Partner'
import partners from '../components/Partner/list'

import ahypeIcon from '../../public/assets/logos/ahype.svg'
import tricryptoIcon from '../../public/assets/logos/tricrypto.svg'
import { env } from '@/env.mjs'

export const LPDaiAvax =
  env.NEXT_PUBLIC_MASTER === '1'
    ? '0xbA09679Ab223C6bdaf44D45Ba2d7279959289AB0'
    : '0xe64b1772a9e28E694FEc27Bc7901f88855252E9F'

export const BACKEND_KASSANDRA = 'https://backend.kassandra.finance'

export const LPKacyAvaxPNG =
  env.NEXT_PUBLIC_MASTER === '1'
    ? '0x1938cE0E14dD71caab96F52dF3F49b1D1DAF8861'
    : '0xbaa8b0d2AA6415d5b4077C1FA06b3507577FBCd7'

export const LPKacyAvaxJOE =
  env.NEXT_PUBLIC_MASTER === '1'
    ? '0xc45893e0ee426a643e54829ee8c697995e5980ed'
    : ''

export const Kacy =
  env.NEXT_PUBLIC_MASTER === '1'
    ? '0xf32398dae246C5f672B52A54e9B413dFFcAe1A44'
    : '0x1d7C6846F033e593b4f3f21C39573bb1b41D43Cb'

export const Staking =
  env.NEXT_PUBLIC_MASTER === '1'
    ? '0xfddc1956d88a34fcB0671508Fa3d5aaC73b2a031'
    : '0xe08eD1e470160AF3dF917be221a6aed6284c1D2F'

export const Timelock =
  env.NEXT_PUBLIC_MASTER === '1'
    ? ''
    : '0xB8897C7f08D085Ded52A938785Df63C79BBE9c25'

export const GovernorAlpha =
  env.NEXT_PUBLIC_MASTER === '1'
    ? '0xA216238A775bA525D6868372afaB11E7922D5cd7'
    : '0x2B6C46b9552B6Fa36DD097b6527ba20fdDB3FfD5'

export const ProxyContract =
  env.NEXT_PUBLIC_MASTER === '1'
    ? '0x84f154A845784Ca37Ae962504250a618EB4859dc'
    : '0x97e33051B09092C1301A90b964a74cA51C0b068B'

export const KacyPoligon = '0x366e293A5CF90A0458D9fF9f3f92234dA598F62e'
export interface Networks {
  Ropsten: string
  Avalanche: string
  Fuji: string
}

export interface ProductDetails {
  sipAddress: string
  coreAddress: string
  // eslint-disable-next-line prettier/prettier
  platform: keyof Networks
  categories: string[]
  chain: ChainDetails
  name: string
  symbol: string
  partners: PartnerData[]
  fundBy?: string
  fundIcon?: any
  pid?: number
  fundSummary?: string
  fundLink?: string
  addresses: string[]
}

export type ProductSymbols = keyof typeof products

export const SUBGRAPH_URL =
  'https://graph.kassandra.finance/subgraphs/name/Kassandra'

export const MEDIUM_FEED_URL =
  'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kassandrafoundation'

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
    wrapped: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7'
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
    wrapped: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c'
  }
}

const ahype: ProductDetails =
  env.NEXT_PUBLIC_MASTER === '1'
    ? {
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
        fundLink:
          'https://kassandrafoundation.medium.com/avalanche-social-index-4042a823c972',
        fundSummary: `$aHYPE reflects the perfomance of a portfolio composed from the most socially active cryptocurrencies in Avalanche using Heimdall's Social Score data.`,
        partners: [partners.avalanche, partners.heimdall, partners.api3],
        addresses: [
          '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
          '0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd',
          '0xf32398dae246C5f672B52A54e9B413dFFcAe1A44',
          '0x8729438EB15e2C8B576fCc6AeCdA6A148776C0F5',
          '0xA32608e873F9DdEF944B24798db69d80Bbb4d1ed',
          '0x60781C2586D68229fde47564546784ab3fACA982',
          '0xd1c3f94DE7e5B45fa4eDBBA472491a9f4B166FC4'
        ]
      }
    : {
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
        fundLink:
          'https://kassandrafoundation.medium.com/avalanche-social-index-4042a823c972',
        fundSummary: `$aHYPE reflects the perfomance of a portfolio composed from the most socially active cryptocurrencies in Avalanche using Heimdall's Social Score data.`,
        partners: [partners.avalanche, partners.heimdall, partners.api3],
        addresses: [
          '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
          '0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd',
          '0xf32398dae246C5f672B52A54e9B413dFFcAe1A44',
          '0x8729438EB15e2C8B576fCc6AeCdA6A148776C0F5',
          '0xA32608e873F9DdEF944B24798db69d80Bbb4d1ed',
          '0x60781C2586D68229fde47564546784ab3fACA982',
          '0xd1c3f94DE7e5B45fa4eDBBA472491a9f4B166FC4'
        ]
      }

const tricrypto: ProductDetails =
  env.NEXT_PUBLIC_MASTER === '1'
    ? {
        sipAddress: '0xA6CAB4b1019ee22309dcA5ba62C3372a791dcB2E',
        coreAddress: '0x440C5De429B36967E46C192f2140259e2ec22fc8',
        platform: 'Avalanche',
        categories: ['Avalanche', 'Pool'],
        chain: chains.avalanche,
        name: 'Kassandra Tricrypto Index',
        fundBy: 'Kassandra with Yield Yak',
        symbol: 'K3C',
        fundIcon: tricryptoIcon,
        pid: 8,
        fundLink:
          'https://kassandrafoundation.medium.com/kassandras-new-autocompounding-strategy-tricrypto-185eb1fca2c2',
        fundSummary: `K3C represents a yield-earning portfolio composed of BTC,
    ETH, DAI and KACY built in partnership with our friends back at Yield Yak.`,
        partners: [
          partners.avalanche,
          partners.yieldYak,
          partners.traderJoe,
          partners.aave,
          partners.benqi
        ],
        addresses: [
          '0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab',
          '0x50b7545627a5162f82a992c33b87adc75187b218',
          '0xd586e7f844cea2f87f50152665bcbc2c279d8d70',
          '0xf32398dae246C5f672B52A54e9B413dFFcAe1A44'
        ]
      }
    : {
        sipAddress: '0xE34A2935B04e9c879f5bDd022b97D7Cf2F1Dde1d',
        coreAddress: '0xFCfB171A8a4666bc53Eac2d91Cb0b5203DDa63cD',
        platform: 'Fuji',
        categories: ['Fuji', 'Pool'],
        chain: chains.fuji,
        name: 'Kassandra Tricrypto Index',
        fundBy: 'Kassandra with Yield Yak',
        symbol: 'K3C',
        fundIcon: tricryptoIcon,
        pid: 4,
        fundLink:
          'https://kassandrafoundation.medium.com/kassandras-new-autocompounding-strategy-tricrypto-185eb1fca2c2',
        fundSummary: `K3C represents a yield-earning portfolio composed of BTC,
    ETH, DAI and KACY built in partnership with our friends back at Yield Yak.`,
        partners: [
          partners.avalanche,
          partners.yieldYak,
          partners.traderJoe,
          partners.aave,
          partners.benqi
        ],
        addresses: [
          '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
          '0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd',
          '0xf32398dae246C5f672B52A54e9B413dFFcAe1A44',
          '0x8729438EB15e2C8B576fCc6AeCdA6A148776C0F5',
          '0xA32608e873F9DdEF944B24798db69d80Bbb4d1ed',
          '0x60781C2586D68229fde47564546784ab3fACA982',
          '0xd1c3f94DE7e5B45fa4eDBBA472491a9f4B166FC4'
        ]
      }

export const products = [ahype, tricrypto]

export type IFeaturedProductDetailsProps = {
  id: string
  title: string
  description: string
  infoList: string[]
  foundedBy?: string
  externalLink?: string
}

export const FeaturedProductDetails = [
  {
    id: '421610xf69d5e7c0eb43127d5874121867fb763f2967dbb0001000000000000000004b0',
    title:
      'Stay ahead of the curve with Arbitrum’s all-star protocols ranked by TVL',
    description:
      '$aECO reflects the performance of a portfolio composed of the leading protocols on Arbitrum’s network, determined by their Total Value Locked (TVL).',
    infoList: [
      'Easy exposure to the strongest assets',
      'Surf the sturdiest tides on arbitrum',
      'protocols of High resilience'
    ],
    foundedBy: 'on POLYGON network',
    externalLink:
      'https://medium.com/@kassandrafoundation/kassandra-new-featured-pools-89634fedbbe3'
  },
  {
    id: '1370x107cb7c6d67ad745c50d7d4627335c1c6a684003000100000000000000000c37',
    title: 'Yield farming with the safest crypto assets for your investment',
    description:
      '$DEFI represents a yield-earning portfolio composed of UNI, LDO, MKR, AAVE, SNX, RPL, FXS, CRV, and COMP, offering exposure to the growth and development of the leading DeFi protocols based on Market Cap.',
    infoList: [
      'HAVE A CONSISTENT BLUECHIP STRATEGY',
      'Hedge your exposure',
      'Improve your hodl'
    ],
    foundedBy: 'on ARBITRUM network',
    externalLink:
      'https://medium.com/@kassandrafoundation/kassandra-new-featured-pools-89634fedbbe3'
  }
]

type CurrencyDetails = {
  name: string
  symbol: string
  decimals: number
  address: string
}

type NetworkType = Record<
  number,
  {
    chainName: string
    chainId: number
    kacyAddress?: string
    rpc: string
    coingecko: string
    whiteList: string
    factory: string
    stakingContract?: string
    privateInvestor: string
    nativeCurrency: CurrencyDetails
    blockExplorer: string
    kacyOFT: string
  }
>

export const networks: NetworkType = {
  '5': {
    chainName: 'Goerli Test Network',
    chainId: 5,
    rpc: 'https://rpc.ankr.com/eth_goerli',
    blockExplorer: 'https://goerli.etherscan.io',
    coingecko: 'polygon-pos',
    whiteList: '0xe119DE3b0FDab34e9CE490FDAa562e6457126A57',
    factory: '0x9E3feC2E3AEc12572242dd1376BEd5E1F5bb8200',
    privateInvestor: '0xC8d8AeDBeDd1973b383D6f330C66D653F7DF11D6',
    kacyOFT: '',
    nativeCurrency: {
      address: '0xffb99f4a02712c909d8f7cc44e67c87ea1e71e83',
      name: 'Goerli Test Token', //Ether
      symbol: 'ETH',
      decimals: 18
    }
  },
  '137': {
    chainName: 'Polygon',
    chainId: 137,
    rpc: 'https://rpc.ankr.com/polygon',
    kacyAddress: KacyPoligon,
    blockExplorer: 'https://polygonscan.com',
    coingecko: 'polygon-pos',
    whiteList: '0xfe7AeA0E15F34aCa30285E64C529b1B2a074F531',
    // factory: '0x290272D39BA3Fa0Fb2a683fC88290A9d55a1023d', // factory test
    factory: '0x228885c9d0440Ae640B88fBeE31522CC6a59Fd2F',
    privateInvestor: '0xa356Dc5260Ca76b4113CD7251906ffb57629b985',
    kacyOFT: '0x366e293a5cf90a0458d9ff9f3f92234da598f62e',
    stakingContract: '0xd530f3ce79c9eb03e59dce89a7504dd41d4899bb',
    nativeCurrency: {
      address: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
      name: 'Matic Token',
      symbol: 'MATIC',
      decimals: 18
    }
  },
  '43114': {
    chainId: 43114,
    chainName: 'Avalanche',
    rpc: 'https://api.avax.network/ext/bc/C/rpc',
    kacyAddress: Kacy,
    blockExplorer: 'https://snowtrace.io',
    coingecko: 'avalanche',
    whiteList: '',
    factory: '',
    privateInvestor: '0x',
    kacyOFT: '0x366e293a5cf90a0458d9ff9f3f92234da598f62e',
    stakingContract: '0xfddc1956d88a34fcB0671508Fa3d5aaC73b2a031',
    nativeCurrency: {
      address: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      name: 'Avalanche',
      symbol: 'AVAX',
      decimals: 18
    }
  },
  '43113': {
    chainId: 43113,
    chainName: 'Avalanche',
    rpc: 'https://api.avax-test.network/ext/C/rpc',
    kacyAddress: Kacy,
    blockExplorer: 'https://testnet.snowtrace.io',
    coingecko: 'avalanche',
    whiteList: '',
    factory: '',
    privateInvestor: '',
    kacyOFT: '0x366e293a5cf90a0458d9ff9f3f92234da598f62e',
    nativeCurrency: {
      address: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      name: 'Avalanche',
      symbol: 'AVAX',
      decimals: 18
    }
  }
}
