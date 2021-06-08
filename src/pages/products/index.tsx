import React from 'react'
import HeimOperations from '../../components/HeimOperations'
import IndexDetails from '../../components/IndexDetails'

import styles from './products.module.scss'

const Products = () => (
  <>
    <section className={styles['main-products']}>
      <img src="assets/coming-soon.png" alt="coming-soon" className={styles['coming-soon']} />
      <HeimOperations />
    </section>
    <section>
      <IndexDetails />
    </section>
  </>
)

export default Products
