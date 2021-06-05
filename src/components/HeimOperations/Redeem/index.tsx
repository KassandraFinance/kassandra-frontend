import React from 'react'

import InputHeim from '../../InputHeim'
import InputMintRedeem from '../../InputMintRedeem'

import styles from './redeem.module.scss'

const Redeem = () => (
  <form className={styles.form}>
    <InputHeim action="Send" redeem />
    {new Array(10).fill(null).map(() => (
    <InputMintRedeem />
    ))}
    <button type="submit">Connect Wallet</button>
  </form>
  )

export default Redeem