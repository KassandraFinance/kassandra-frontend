import React from 'react'
import { useSelector, RootStateOrAny } from 'react-redux'
import InputHeim from '../../InputHeim'
import InputMintRedeem from '../../InputMintRedeem'

import styles from './redeem.module.scss'

const Redeem = () => {
  const { corePool } = useSelector((state: RootStateOrAny) => state)

  return (
    <form className={styles.form}>
      <InputHeim action="Send" redeem />
      {corePool.map((token) => (
      <InputMintRedeem token={token} />
      ))}
      <button type="submit">Connect Wallet</button>
    </form>
  )
}

export default Redeem
