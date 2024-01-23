import Marquee from 'react-fast-marquee'

import YakLogo from '../../../public/assets/logos/partners/yak.png'
import NotusLogo from '../../../public/assets/logos/partners/notus.png'
import OneinchLogo from '../../../public/assets/logos/partners/1inch.png'
import PolygonLogo from '../../../public/assets/logos/partners/polygon.png'
import ArbitrumLogo from '../../../public/assets/logos/partners/arbitrum.png'
import PangolinLogo from '../../../public/assets/logos/partners/pangolin.png'
import AvalancheLogo from '../../../public/assets/logos/partners/avalanche.png'
import TransferoLogo from '../../../public/assets/logos/partners/transfero.png'

import * as S from './styles'

const partnersList = [
  { name: 'avalanche', logo: AvalancheLogo },
  { name: 'arbitrum', logo: ArbitrumLogo },
  { name: 'pangolin', logo: PangolinLogo },
  { name: 'polygon', logo: PolygonLogo },
  { name: 'yak', logo: YakLogo },
  { name: 'transfero', logo: TransferoLogo },
  { name: '1inch', logo: OneinchLogo },
  { name: 'notus', logo: NotusLogo }
]

const PartnersMarquee = () => {
  return (
    <S.PartnersMarquee>
      <Marquee autoFill>
        {partnersList.map(partner => (
          <img
            src={partner.logo.src}
            alt={`${partner.name} partner logo`}
            key={partner.name}
          />
        ))}
      </Marquee>
    </S.PartnersMarquee>
  )
}

export default PartnersMarquee
