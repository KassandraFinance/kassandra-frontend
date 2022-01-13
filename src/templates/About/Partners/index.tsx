import React from 'react'
import Image from 'next/image'

import heimdall from '../../../../public/assets/heimdall.svg'
import api3 from '../../../../public/assets/api3.svg'
import ShineDAO from '../../../../public/assets/ShineDAO.svg'
import Penguin_Finance from '../../../../public/assets/Penguin_Finance.svg'

import * as S from './styles'

const Partners = () => (
  <S.Container>
    <S.TitleAndIcon>
      <S.Icon>
        <img src="assets/about-partners-icon.svg" alt="" />
      </S.Icon>
      <S.Title>Partners</S.Title>
    </S.TitleAndIcon>
    <S.Partners>
      <a
        href="https://heimdall.land/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={heimdall} alt="" />
      </a>
      <a href="https://api3.org/" target="_blank" rel="noopener noreferrer">
        <Image src={api3} alt="" />
      </a>
      <a
        href="https://shinedao.finance/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={ShineDAO} alt="" />
        <span>ShineDAO</span>
      </a>
      <a
        href="https://penguinfinance.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={Penguin_Finance} alt="" />
      </a>
    </S.Partners>
  </S.Container>
)

export default Partners
