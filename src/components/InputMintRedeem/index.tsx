import React from 'react'
import styles from './input-mint-redeem.module.scss'

interface IInputMintRedeemProps {
  token?: any
}

const InputMintRedeem = ({ token }: IInputMintRedeemProps) => {
  return (
    <div className={styles['input-default']}>
      <div className={styles.info}>
        <span>Receive (estimative)</span>
        <p>{token.symbol}</p>
        <span>U$ 10.00</span>
      </div>
      <div className={styles.amount}>
        <span>Amount</span>
        <input type="number" value="0" />
        <button type="button" className={styles['btn-max']}>Max</button>
      </div>
      <div className={styles.line} />  
    </div>
  )
}


export default InputMintRedeem