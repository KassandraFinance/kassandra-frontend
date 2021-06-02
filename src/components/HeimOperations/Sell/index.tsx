import InputEth from '../../InputEth'
import InputDefault from '../../InputDefault'

import styles from './sell.module.scss'

const Sell = () => {
  return (
    <form className={styles.form}>
      <InputEth action="Sell" />
      <InputDefault />
      <button type="submit">Connect Wallet</button>
    </form>
  )
}

export default Sell