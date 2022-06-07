import React from 'react'

import { products } from '../../../constants/tokenAddresses'

import * as S from './styles'
import PoolHomeCard from './PoolHomeCard'

const Token = () => {
  return (
    <S.Token id="Token">
      <p>OUR PRODUCTS</p>
      <S.Divider />
      <h1>the world of data-driven investment funds</h1>
      <span>
        Tokens backed by a basket of assets, managed by autonomous strategies
        with data from external data providers
      </span>
      <S.PoolCardContainer>
        {products.map(product => (
          <PoolHomeCard key={product.symbol} pool={product} />
        ))}
      </S.PoolCardContainer>
    </S.Token>
  )
}

export default Token
