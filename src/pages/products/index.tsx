import { useRouter } from 'next/router'
import HeimOperations from '../../components/HeimOperations'

import styles from './products.module.scss'

const Products = () => {
  const { route } = useRouter()
  return (
    <section className={styles['main-products']}>
      <div className={styles['charts']}>echarts</div>
      <HeimOperations />
    </section>
  )
}

export default Products
