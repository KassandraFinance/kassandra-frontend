import React from 'react'
import HeimOperations from '../../components/HeimOperations'
import IndexDetails from '../../components/IndexDetails'

import { ProductsContainer, ComingSoon } from './styles'

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

export default Products
