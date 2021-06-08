import React from 'react'
import InputEth from '../../InputEth'
import InputDefault from '../../InputDefault'

import styles from './buy.module.scss'

const Buy = () => (
  <form className={styles.form}>
    <InputEth action="Pay with" />
    <InputDefault />
    <button type="submit">Connect Wallet</button>
  </form>
  )

export default Buy