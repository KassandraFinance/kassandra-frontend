import styles from './input-default.module.scss'

const InputDefault = () => {
  return (
    <div className={styles['input-default']}>
      <div className={styles['info']}>
        <span>Receive (estimative)</span>
        <p>HEIM</p>
        <span />
      </div>
      <div className={styles['amount']}>
        <span>Amount</span>
        <input type="number" value="0" />
        <span>U$ 10.00</span>
      </div>
      <div className={styles['line']} />  
    </div>
  )
}

export default InputDefault