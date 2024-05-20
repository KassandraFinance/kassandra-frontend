import Image from 'next/image'
import { useRouter } from 'next/router'
import useMatomo from '@/hooks/useMatomo'

import FadeIn from '../Animations/FadeIn'

import avalanche from '@assets/logos/avalanche-horizontal-red.svg'
import heimdall from '@assets/logos/heimdall.png'
import api3 from '@assets/logos/api3.png'
import transfero from '@assets/logos/transfero.svg'
import shineDAO from '@assets/logos/shine-dao.svg'
import penguinFinance from '@assets/logos/penguin-finance.svg'
import yieldYak from '@assets/logos/yield-yak-partner.svg'
import pangolin from '@assets/logos/pangolin.svg'
import traderJoe from '@assets/logos/trader-joe.svg'
import notus from '@assets/logos/partners/notus.png'

import * as S from './styles'

const Partners = () => {
  const { trackEvent } = useMatomo()
  const router = useRouter()

  const Partnerslist = [
    {
      name: 'avalanche',
      icon: avalanche,
      href: 'https://www.avax.network/'
    },
    {
      name: 'heimdall',
      icon: heimdall,
      href: 'https://heimdall.land/'
    },
    {
      name: 'notus',
      icon: notus,
      href: 'https://notus.team/'
    },
    {
      name: 'api3',
      icon: api3,
      href: 'https://api3.org/'
    },
    {
      name: 'transfero',
      icon: transfero,
      href: 'https://transfero.com/'
    },
    {
      name: 'shineDAO',
      icon: shineDAO,
      href: 'https://shinedao.finance/'
    },
    {
      name: 'penguin-finance',
      icon: penguinFinance,
      href: 'https://penguinfinance.org/'
    },
    {
      name: 'yield-yak',
      icon: yieldYak,
      href: 'https://yieldyak.com/'
    },
    {
      name: 'pangolin',
      icon: pangolin,
      href: 'https://pangolin.exchange/'
    },
    {
      name: 'trader-joe',
      icon: traderJoe,
      href: 'https://traderjoexyz.com/'
    }
  ]

  function handleCLickPartners(name: string) {
    trackEvent({
      category: router.pathname,
      action: `click-on-link | Partners | ${router.pathname}`,
      name
    })
  }

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
        {Partnerslist.map(partner => {
          return (
            <FadeIn threshold={0.8} key={partner.name}>
              <a
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleCLickPartners(partner.name)}
              >
                <Image
                  src={partner.icon}
                  alt={`${partner.name} partner logo`}
                />
              </a>
            </FadeIn>
          )
        })}
      </S.PartnerContent>
    </S.PartnersContainer>
  )
}

export default Partners
