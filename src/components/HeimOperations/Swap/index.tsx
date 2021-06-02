import InputEth from '../../InputEth'
import InputDefault from '../../InputDefault'

import styles from './swap.module.scss'

const Swap = () => {
  return (
    <form className={styles.form}>
      <InputEth action="You give" />
      <InputDefault />
      <button type="submit">Connect Wallet</button>
    </form>
  )
}

export default Swap