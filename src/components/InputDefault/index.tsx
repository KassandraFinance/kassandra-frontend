import React from 'react'
import BigNumber from 'bn.js'
import { BNtoDecimal } from '../../utils/numerals'

import styles from './input-default.module.scss'

interface IInputDefaultProps {
  investHeim: any
}

const InputDefault = ({ investHeim }: IInputDefaultProps) => {
  return (
    <div className={styles['input-default']}>
      <div className={styles.info}>
        <span>Receive (estimative)</span>
        <p>HEIM</p>
        <span />
      </div>
      <div className={styles.amount}>
        <span>Amount</span>
        <input type="number" value={BNtoDecimal(investHeim, new BigNumber(18), 6)} readOnly />
        <span>U$ 10.00</span>
      </div>
      <div className={styles.line} />  
    </div>
  )
}

export default InputDefault
