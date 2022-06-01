import React from 'react'
import Image from 'next/image'

import iconPower from '../../../../public/assets/iconGradient/voting-power-rank.svg'

import Partner, { PartnerData } from '../../../components/Products/Partner'

import * as S from './styles'

interface Input {
  partners: PartnerData[];
}

const PoweredBy = ({ partners }: Input) => {
  return (
    <S.PoweredBy>
      <S.Title>
        <Image src={iconPower} alt="Powered by Icon" width={18} height={18} />
        <h2>Powered by</h2>
      </S.Title>
      <S.Line />
      <S.PartnersContent>
        {partners.map(partner => (
          <Partner
            key={partner.name}
            href={partner.href}
            image={partner.image}
            name={partner.name}
          />
        ))}
      </S.PartnersContent>
    </S.PoweredBy>
  )
}

export default PoweredBy
