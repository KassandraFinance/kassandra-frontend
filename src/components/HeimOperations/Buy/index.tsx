import styles from './buy.module.scss'

const Buy = () => {
  return (
    <form className={styles.form}>
      <div className={styles['input-labels']}>
        <div className={styles['pay-with']}>
          <span>Pay With</span>
          <p>ETH</p>
        </div>
        <img className={styles['arrow-long']} src="assets/arrow-long-down.svg" alt="" />
        <div className={styles['amount-pay']}>
          <span>Amount</span>
          <input type="number" value="0" />
        </div>
      </div>
      <div className={styles['input-labels']}>
        <div className={styles['receive']}>
          <span>Receive (estimative)</span>
          <p>HEIM</p>
          {/* <span>USD Value</span> */}
        </div>
        <div></div>
        <div className={styles['amount-receive']}>
          <span>Amount</span>
          <input type="number" value="0" />
        </div>
      </div>
      <button>Connect Wallet</button>
    </form>
  )
}

export default Buy