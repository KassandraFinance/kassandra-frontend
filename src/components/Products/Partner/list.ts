import avalanche from '../../../../public/assets/avalancheIcon.svg'
import heimdall from '../../../../public/assets/heimdall.svg'
import api3 from '../../../../public/assets/api3.svg'
import yieldYak from '../../../../public/assets/yieldYak-banner.png'

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
      height: 80,
      width: 200
    },
    name: 'YieldYak'
  }
}

export default partners
