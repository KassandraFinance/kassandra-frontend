import React from 'react'

import { products } from '../../../constants/tokenAddresses'

import HomeHeading from '../HomeHeading'
import SectionCard from '../SectionCard'
import PoolHomeCard from '../../Home/Token/PoolHomeCard'

import * as S from './styles'

const InvestorsSection = () => {
  return (
    <S.Container>
      <SectionCard />

      <HomeHeading />

      <S.PoolCardContainer>
        {products.map(product => (
          <PoolHomeCard key={product.symbol} pool={product} />
        ))}
      </S.PoolCardContainer>
    </S.Container>
  )
}

export default InvestorsSection
