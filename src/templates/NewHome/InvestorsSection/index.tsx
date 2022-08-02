import React from 'react'

import { products } from '../../../constants/tokenAddresses'

import HomeHeading from '../HomeHeading'
import SectionCard from '../SectionCard'
import PoolHomeCard from '../../Home/Token/PoolHomeCard'

import investorImg from '../../../../public/assets/images/investor.png'

import * as S from './styles'

const InvestorsSection = () => {
  return (
    <S.Container>
      <SectionCard
        number="01"
        title="investors"
        color="#FFBF00"
        subtitle="Buy one token to follow strategies
that fit you"
        text="Take advantage of social trading to increase your diversification.
By buying a single token, you delegate funds to trusted managers
that will work to improve your gains and reduce your risks."
        btnText="Become an investor"
        img={investorImg}
      />

      <HomeHeading title="Foundation-curated Products" color="#FFBF00" />

      <S.PoolCardContainer>
        {products.map(product => (
          <PoolHomeCard key={product.symbol} pool={product} />
        ))}
      </S.PoolCardContainer>
    </S.Container>
  )
}

export default InvestorsSection
