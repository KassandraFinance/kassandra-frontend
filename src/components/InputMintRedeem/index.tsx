import React from 'react'
import styles from './input-mint-redeem.module.scss'

interface IInputMintRedeemProps {
  token?: any
  getBalanceToken: any
}

const InputMintRedeem = ({ token, getBalanceToken }: IInputMintRedeemProps) => {
  const array = getBalanceToken() || []
  console.log(array)
  const value = array.filter((balanceToken) => balanceToken.address === token.address)
  console.log(value)
  return (
    <div className={styles['input-default']}>
      <div className={styles.info}>
        <span>Receive (estimative)</span>
        <p>{token.symbol}</p>
        <span>U$ 10.00</span>
      </div>
      <div className={styles.amount}>
        <span>Amount</span>
        <input type="number" value={value[0].balance} />
        <button type="button" className={styles['btn-max']}>Max</button>
      </div>
      <div className={styles.line} />  
    </div>
  )
}


export default InputMintRedeem