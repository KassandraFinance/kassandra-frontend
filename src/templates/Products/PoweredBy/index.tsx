import React from 'react'
import Image from 'next/image'
import { useMatomo } from '@datapunt/matomo-tracker-react'

import iconPower from '../../../../public/assets/iconPower.svg'
import avalanche from '../../../../public/assets/avalancheIcon.svg'
import heimdall from '../../../../public/assets/heimdall.svg'
import api3 from '../../../../public/assets/api3.svg'

import * as S from './styles'

const PoweredBy = () => {
  const { trackEvent } = useMatomo()

  function matomoEvent(action: string, name: string) {
    trackEvent({
      category: 'powered-invest',
      action,
      name
    })
  }

  return (
    <S.PoweredBy>
      <S.Title>
        <Image src={iconPower} alt="" />
        <h2>Powered by</h2>
      </S.Title>
      <S.Line />
      <S.PartnersContent>
        <a
          id="avalanche"
          href="https://www.avax.network/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => matomoEvent('click-on-partner', 'avalanche')}
        >
          <Image src={avalanche} alt="" />
        </a>
        <a
          id="heimdall"
          href="https://heimdall.land/about"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => matomoEvent('click-on-partner', 'heimdall')}
        >
          <Image src={heimdall} alt="" />
        </a>
        <a
          id="api3"
          href="https://api3.org/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => matomoEvent('click-on-partner', 'api3')}
        >
          <Image src={api3} alt="" />
        </a>
      </S.PartnersContent>
    </S.PoweredBy>
  )
}

export default PoweredBy
