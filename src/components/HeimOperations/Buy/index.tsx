import InputDefault from '../../InputDefault'
import InputEth from '../../InputEth'

import styles from './buy.module.scss'

const Buy = () => {
  return (
    <form className={styles.form}>
      <InputEth />
      <InputDefault />
      <button type="submit">Connect Wallet</button>
    </form>
  )
}

export default Buy