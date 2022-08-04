import Image from 'next/image'

import useMatomoEcommerce from '../../../hooks/useMatomoEcommerce'

import avalanche from '../../../../public/assets/logos/avalanche-horizontal-red.svg'
import heimdall from '../../../../public/assets/logos/heimdall.png'
import api3 from '../../../../public/assets/logos/api3.png'
import transfero from '../../../../public/assets/logos/transfero.svg'
import shineDAO from '../../../../public/assets/logos/shine-dao.svg'
import penguinFinance from '../../../../public/assets/logos/penguin-finance.svg'
import yieldYak from '../../../../public/assets/logos/yield-yak-partner.svg'
import pangolin from '../../../../public/assets/logos/pangolin.svg'
import traderJoe from '../../../../public/assets/logos/trader-joe.svg'

import * as S from './styles'

const Partners = () => {
  const { trackEventFunction } = useMatomoEcommerce()

  return (
    <S.PartnersContainer>
      <h1>Partners</h1>
      <S.PartnerContent>
        <a
          href="https://www.avax.network/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackEventFunction('click-on-link', 'avalanche', 'partners')
          }
        >
          <Image src={avalanche} alt="Avalanche" />
        </a>
        <a
          href="https://heimdall.land/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackEventFunction('click-on-link', 'heimdall', 'partners')
          }
        >
          <Image src={heimdall} alt="Heimdall" />
        </a>
        <a
          href="https://api3.org/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackEventFunction('click-on-link', 'api3', 'partners')
          }
        >
          <Image src={api3} alt="API3" />
        </a>
        <a
          href="https://transfero.com/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackEventFunction('click-on-link', 'transfero', 'partners')
          }
        >
          <Image src={transfero} alt="Transfero" />
        </a>
        <a
          href="https://shinedao.finance/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackEventFunction('click-on-link', 'shinedao', 'partners')
          }
        >
          <Image src={shineDAO} alt="" />
        </a>
        <a
          href="https://penguinfinance.org/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackEventFunction('click-on-link', 'penguin-finance', 'partners')
          }
        >
          <Image src={penguinFinance} alt="Penguin Finance" />
        </a>
        <a
          href="https://yieldyak.com/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackEventFunction('click-on-link', 'yield-yak', 'partners')
          }
        >
          <Image src={yieldYak} alt="Yield Yak" />
        </a>
        <a
          href="https://pangolin.exchange/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackEventFunction('click-on-link', 'pangolin', 'partners')
          }
        >
          <Image src={pangolin} alt="Pangolin" />
        </a>
        <a
          href="https://traderjoexyz.com/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackEventFunction('click-on-link', 'trader-joe', 'partners')
          }
        >
          <Image src={traderJoe} alt="Trader Joe" />
        </a>
      </S.PartnerContent>
    </S.PartnersContainer>
  )
}

export default Partners
