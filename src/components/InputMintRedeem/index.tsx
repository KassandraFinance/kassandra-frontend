import React from 'react'
import { IPoolTokensProps } from '../../store/modules/poolTokens/types'
import { BNtoDecimal } from '../../utils/numerals'
import styles from './input-mint-redeem.module.scss'

interface IInputMintRedeemProps {
  token: IPoolTokensProps
  getBalanceToken: any
}

const InputMintRedeem = ({ token, getBalanceToken }: IInputMintRedeemProps) => {
  const arrayBalanceToken = getBalanceToken()

  const balance = arrayBalanceToken.filter((balanceToken: IPoolTokensProps) => 
    balanceToken.address === token.address
  )

  return (
    <div className={styles['input-default']}>
      <div className={styles.info}>
        <span>Receive (estimative)</span>
        <p>{token.symbol}</p>
        <span>U$ 10.00</span>
      </div>
      <div className={styles.amount}>
        <span>Amount</span>
        <input type="number" readOnly value={BNtoDecimal(balance[0].balance, balance[0].decimals, 6)} />
        <button type="button" className={styles['btn-max']}>Max</button>
      </div>
      <div className={styles.line} />  
    </div>
  )
}


export default InputMintRedeem