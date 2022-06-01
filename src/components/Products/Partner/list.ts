import avalanche from '../../../../public/assets/logos/avalanche-logo.svg'
import heimdall from '../../../../public/assets/logos/heimdall.svg'
import api3 from '../../../../public/assets/logos/api3.svg'
import yieldYak from '../../../../public/assets/logos/yieldYak-banner.svg'
import aave from '../../../../public/assets/logos/aave.svg'
import traderJoe from '../../../../public/assets/logos/logo-traderJoe.svg'
import { PartnerData } from './'

const partners: { [key: string]: PartnerData } = {
  avalanche: {
    href: 'https://avax.network/',
    image: {
      src: avalanche,
      height: 40,
      width: 40
    },
    name: 'Avalanche'
  },
  heimdall: {
    href: 'https://heimdall.land/',
    image: {
      src: heimdall,
      height: 40,
      width: 200
    },
    name: 'Heimdall'
  },
  api3: {
    href: 'https://api3.org/',
    image: {
      src: api3,
      height: 40,
      width: 130
    },
    name: 'API3'
  },
  yieldYak: {
    href: 'https://yieldyak.com/',
    image: {
      src: yieldYak,
      height: 60,
      width: 100
    },
    name: 'YieldYak'
  },
  aave: {
    href: 'https://aave.com/',
    image: {
      src: aave,
      height: 40,
      width: 40
    },
    name: 'Aave'
  },
  traderJoe: {
    href: 'https://traderjoexyz.com/home',
    image: {
      src: traderJoe,
      height: 40,
      width: 40
    },
    name: 'TraderJoe'
  }
}

export default partners
