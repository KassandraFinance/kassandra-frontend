import React from 'react'
import styles from './input-heim.module.scss'

interface IInputHeimProps {
  action: string
  redeem: boolean
}

const InputHeim = ({ action, redeem }: IInputHeimProps) => (
    <div className={styles['input-heim']}>
      <div className={styles['pay-with']}>
        <span>{action}</span>
        <p>ETH</p>
      </div>
      <img className={styles['arrow-long']} src={`assets/arrow-long-${redeem ? 'down' : 'up'}.svg`} alt="" />
      <div className={styles.total}>
        <span>Total</span>
        <input type="number" placeholder="0" />
        <span>U$ 10.00</span>
      </div>
    </div>
  )

export default InputHeim