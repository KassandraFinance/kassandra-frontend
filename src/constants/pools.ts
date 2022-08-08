interface PoolDetails {
  pid: number;
  symbol: string;
  properties: {
    logo: {
      src: string,
      style: {
        width: string
      }
    },
    title?: string,
    link?: string
  };
  stakeWithVotingPower: boolean;
  stakeWithLockPeriod: boolean;
  address: string;
  isLP: boolean;
}

const KACY_ADDRESS =
  process.env.NEXT_PUBLIC_MASTER === '1'
    ? '0xf32398dae246C5f672B52A54e9B413dFFcAe1A44'
    : '0x1d7C6846F033e593b4f3f21C39573bb1b41D43Cb'

export const LP_KACY_AVAX_PNG =
  process.env.NEXT_PUBLIC_MASTER === '1'
    ? '0x1938cE0E14dD71caab96F52dF3F49b1D1DAF8861'
    : '0xbaa8b0d2AA6415d5b4077C1FA06b3507577FBCd7'

export const LP_KACY_AVAX_JOE = '0xc45893e0ee426a643e54829ee8c697995e5980ed'

export const AHYPE_ADDRESS =
  process.env.NEXT_PUBLIC_MASTER === '1'
    ? '0x38918142779e2CD1189cBd9e932723C968363D1E'
    : '0xE34A2935B04e9c879f5bDd022b97D7Cf2F1Dde1d'

const TRICRYPTO_ADDRESS = '0xA6CAB4b1019ee22309dcA5ba62C3372a791dcB2E'

const kacyInvestor1: PoolDetails = {
  pid: 0,
  symbol: 'KACY',
  properties: {
    logo: {
      src: '/assets/logos/kacy-stake.svg',
      style: { width: '5.8rem' }
    },
    link: `https://app.pangolin.exchange/#/swap?outputCurrency=${KACY_ADDRESS}`
  },
  stakeWithVotingPower: true,
  stakeWithLockPeriod: true,
  address: KACY_ADDRESS,
  isLP: false
}

const kacyInvestor2: PoolDetails = {
  pid: 1,
  symbol: 'KACY',
  properties: {
    logo: {
      src: '/assets/logos/kacy-stake.svg',
      style: { width: '5.8rem' }
    }
  },
  stakeWithVotingPower: true,
  stakeWithLockPeriod: true,
  address: KACY_ADDRESS,
  isLP: false
}

const kacy1x: PoolDetails = {
  pid: process.env.NEXT_PUBLIC_MASTER === '1' ? 2 : 0,
  symbol: 'KACY',
  properties: {
    logo: {
      src: '/assets/logos/kacy-stake.svg',
      style: { width: '5.8rem' }
    },
    link: `https://legacy.pangolin.exchange/#/swap?outputCurrency=${KACY_ADDRESS}`
  },
  stakeWithVotingPower: true,
  stakeWithLockPeriod: false,
  address: KACY_ADDRESS,
  isLP: false
}

const kacy2x: PoolDetails = {
  pid: process.env.NEXT_PUBLIC_MASTER === '1' ? 3 : 1,
  symbol: 'KACY',
  properties: {
    logo: {
      src: '/assets/logos/kacy-stake.svg',
      style: { width: '5.8rem' }
    },
    link: `https://legacy.pangolin.exchange/#/swap?outputCurrency=${KACY_ADDRESS}`
  },
  stakeWithVotingPower: true,
  stakeWithLockPeriod: false,
  address: KACY_ADDRESS,
  isLP: false
}

const kacy3x: PoolDetails = {
  pid: process.env.NEXT_PUBLIC_MASTER === '1' ? 4 : 2,
  symbol: 'KACY',
  properties: {
    logo: {
      src: '/assets/logos/kacy-stake.svg',
      style: { width: '5.8rem' }
    },
    link: `https://legacy.pangolin.exchange/#/swap?outputCurrency=${KACY_ADDRESS}`
  },
  stakeWithVotingPower: true,
  stakeWithLockPeriod: false,
  address: KACY_ADDRESS,
  isLP: false
}

const lpPNG: PoolDetails = {
  pid: 5,
  symbol: 'LP-PNG',
  properties: {
    logo: {
      src: '/assets/logos/lp-kacy.svg',
      style: { width: '14.4rem' }
    },
    title: '$KACY-AVAX PNG LP',
    link: `https://legacy.pangolin.exchange/#/add/AVAX/${KACY_ADDRESS}`
  },
  stakeWithVotingPower: false,
  stakeWithLockPeriod: false,
  address: LP_KACY_AVAX_PNG,
  isLP: true
}

const lpJoe: PoolDetails = {
  pid: 7,
  symbol: 'LP-JOE',
  properties: {
    logo: {
      src: '/assets/logos/joe-kacy.svg',
      style: { width: '14.4rem' }
    },
    title: '$KACY-AVAX JOE LP',
    link: `https://traderjoexyz.com/pool/AVAX/${KACY_ADDRESS}`
  },
  stakeWithVotingPower: false,
  stakeWithLockPeriod: false,
  address: LP_KACY_AVAX_JOE,
  isLP: true
}

const ahype: PoolDetails = {
  pid: process.env.NEXT_PUBLIC_MASTER === '1' ? 6 : 4,
  symbol: 'aHYPE',
  properties: {
    logo: {
      src: '/assets/logos/ahype-stake.svg',
      style: { width: '5.8rem' }
    },
    title: '$aHYPE',
    link: '/explore/ahype'
  },
  stakeWithVotingPower: false,
  stakeWithLockPeriod: false,
  address: AHYPE_ADDRESS,
  isLP: false
}

const tricrypto: PoolDetails = {
  pid: 8,
  symbol: 'K3C',
  properties: {
    logo: {
      src: '/assets/logos/tricrypto-stake.svg',
      style: { width: '5.8rem' }
    },
    title: '$K3C',
    link: '/explore/k3c'
  },
  stakeWithVotingPower: false,
  stakeWithLockPeriod: false,
  address: TRICRYPTO_ADDRESS,
  isLP: false
}

export const poolsKacy = [kacy1x, kacy2x, kacy3x]
export const poolsInvestor = [kacyInvestor1, kacyInvestor2]
export const poolsFunds = [lpPNG, lpJoe, ahype, tricrypto]
export const poolsKacyFuji = [kacy1x, kacy2x, kacy3x]
export const poolsFundsFuji = [lpPNG, ahype]
export const allPools = [kacy1x, kacy2x, kacy3x, lpPNG, lpJoe, ahype, tricrypto]
