import React from 'react'
import styled from 'styled-components'
import theme from '../../styles/theme'

import HeimOperations from '../../components/HeimOperations'
import IndexDetails from '../../components/IndexDetails'

const Products = () => (
  <>
    <ProductsContainer>
      <ComingSoon src="assets/coming-soon.png" alt="coming-soon" />
      <HeimOperations />
    </ProductsContainer>
    <section>
      <IndexDetails />
    </section>
  </>
)

const ProductsContainer = styled.section`
  max-width: 1520px;
  margin: 40px auto;
  padding: 0 ${theme.spacings.space32};
;

  min-height: 100vh;
  display: grid;
  grid-template-columns: auto 440px;
  gap: 60px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const ComingSoon = styled.img`
  max-width: 100%;
  @media (max-width: 900px) {
    display: none;
  }
`

export default Products
