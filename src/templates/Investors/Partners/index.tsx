import Image from 'next/image'
import { useRouter } from 'next/router'
import useMatomo from '@/hooks/useMatomo'

import FadeIn from '../../../components/Animations/FadeIn'

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
  const { trackEvent } = useMatomo()
  const router = useRouter()

  return (
    <S.PartnersContainer>
      <FadeIn threshold={0.5}>
        <S.PartnersTitleWrapper>
          <div>
            <h1>Partners</h1>
          </div>
        </S.PartnersTitleWrapper>
      </FadeIn>

      <S.PartnerContent>
        <FadeIn threshold={0.8}>
          <a
            href="https://www.avax.network/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent({
                category: router.pathname,
                action: `click-on-link | Partners | ${router.pathname}`,
                name: 'avalanche'
              })
            }
          >
            <Image src={avalanche} alt="Avalanche" />
          </a>
        </FadeIn>

        <FadeIn threshold={0.8}>
          <a
            href="https://heimdall.land/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent({
                category: router.pathname,
                action: `click-on-link | Partners | ${router.pathname}`,
                name: 'heimdall'
              })
            }
          >
            <Image src={heimdall} alt="Heimdall" />
          </a>
        </FadeIn>

        <FadeIn threshold={0.8}>
          <a
            href="https://api3.org/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent({
                category: router.pathname,
                action: `click-on-link | Partners | ${router.pathname}`,
                name: 'heimdall'
              })
            }
          >
            <Image src={api3} alt="API3" />
          </a>
        </FadeIn>

        <FadeIn threshold={0.8}>
          <a
            href="https://transfero.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent({
                category: router.pathname,
                action: `click-on-link | Partners | ${router.pathname}`,
                name: 'transfero'
              })
            }
          >
            <Image src={transfero} alt="Transfero" />
          </a>
        </FadeIn>

        <FadeIn threshold={0.8}>
          <a
            href="https://shinedao.finance/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent({
                category: router.pathname,
                action: `click-on-link | Partners | ${router.pathname}`,
                name: 'shinedao'
              })
            }
          >
            <Image src={shineDAO} alt="ShineDao" />
          </a>
        </FadeIn>

        <FadeIn threshold={0.8}>
          <a
            href="https://penguinfinance.org/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent({
                category: router.pathname,
                action: `click-on-link | Partners | ${router.pathname}`,
                name: 'penguin-finance'
              })
            }
          >
            <Image src={penguinFinance} alt="Penguin Finance" />
          </a>
        </FadeIn>

        <FadeIn threshold={0.8}>
          <a
            href="https://yieldyak.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent({
                category: router.pathname,
                action: `click-on-link | Partners | ${router.pathname}`,
                name: 'yield-yak'
              })
            }
          >
            <Image src={yieldYak} alt="Yield Yak" />
          </a>
        </FadeIn>

        <FadeIn threshold={0.8}>
          <a
            href="https://pangolin.exchange/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent({
                category: router.pathname,
                action: `click-on-link | Partners | ${router.pathname}`,
                name: 'pangolin'
              })
            }
          >
            <Image src={pangolin} alt="Pangolin" />
          </a>
        </FadeIn>

        <FadeIn threshold={0.8}>
          <a
            href="https://traderjoexyz.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent({
                category: router.pathname,
                action: `click-on-link | Partners | ${router.pathname}`,
                name: 'trader-joe'
              })
            }
          >
            <Image src={traderJoe} alt="Trader Joe" />
          </a>
        </FadeIn>
      </S.PartnerContent>
    </S.PartnersContainer>
  )
}

export default Partners
