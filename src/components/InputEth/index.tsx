import styles from './input-eth.module.scss'

const InputEth = () => {
  return(
    <div className={styles['input-eth']}>
      <div className={styles['pay-with']}>
        <span>Pay With</span>
        <p>ETH</p>
        <div className={styles['line']} />
      </div>
      <img className={styles['arrow-long']} src="assets/arrow-long-down.svg" alt="" />
      <div className={styles['amount']}>
        <span>Amount</span>
        <input type="number" placeholder="0" />
        <span>U$ 10.00</span>
        <div className={styles['line']} />
      </div>
    </div>
  )
}

export default InputEth