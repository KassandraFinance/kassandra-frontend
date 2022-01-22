import avalanche from '../../../../public/assets/avalancheIcon.svg'
import heimdall from '../../../../public/assets/heimdall.svg'
import api3 from '../../../../public/assets/api3.svg'

import { PartnerData } from './'

const partners: { [key: string]: PartnerData } = {
  avalanche: {
    href: 'https://avax.network/',
    image: avalanche,
    name: 'Avalanche'
  },
  heimdall: {
    href: 'https://heimdall.land/',
    image: heimdall,
    name: 'Heimdall'
  },
  api3: {
    href: 'https://api3.org/',
    image: api3,
    name: 'API3'
  }
}

export default partners
