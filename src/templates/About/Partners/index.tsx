import React from 'react'
import Image from 'next/image'

import avalanche from '../../../../public/assets/logos/avalanche-horizontal-red.svg'
import heimdall from '../../../../public/assets/logos/heimdall.svg'
import api3 from '../../../../public/assets/logos/api3.svg'
import transfero from '../../../../public/assets/logos/transfero.svg'
import shineDAO from '../../../../public/assets/logos/ShineDAO.svg'
import penguinFinance from '../../../../public/assets/logos/Penguin_Finance.svg'

import * as S from './styles'

const Partners = () => (
  <S.Container>
    <S.TitleAndIcon>
      <S.Icon>
        <img src="assets/icons/about-partners-icon.svg" alt="" />
      </S.Icon>
      <S.Title>Partners</S.Title>
    </S.TitleAndIcon>
    <S.Partners>
      <a
        href="https://www.avax.network/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={avalanche} alt="Avalanche" />
      </a>
      <a
        href="https://heimdall.land/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={heimdall} alt="Heimdall" />
      </a>
      <a href="https://api3.org/" target="_blank" rel="noopener noreferrer">
        <Image src={api3} alt="API3" />
      </a>
      <a
        href="https://transfero.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={transfero} alt="Transfero" />
      </a>
      <a
        href="https://shinedao.finance/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={shineDAO} alt="" />
        <span>ShineDAO</span>
      </a>
      <a
        href="https://penguinfinance.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={penguinFinance} alt="Penguin Finance" />
      </a>
    </S.Partners>
  </S.Container>
)

export default Partners
