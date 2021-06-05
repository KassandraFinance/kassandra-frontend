import React from 'react'

import InputHeim from '../../InputHeim'
import InputMintRedeem from '../../InputMintRedeem'

import styles from './mint.module.scss'

const Mint = () => (
  <form className={styles.form}>
    <InputHeim action="Receive (estimative)" redeem={false} />
    {new Array(10).fill(null).map(() => (
      <InputMintRedeem />
    ))}
    <button type="submit">Connect Wallet</button>
  </form>
)

export default Mint