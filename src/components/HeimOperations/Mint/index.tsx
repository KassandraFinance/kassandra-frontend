import React from 'react'
import { useSelector, RootStateOrAny } from 'react-redux'

import InputHeim from '../../InputHeim'
import InputMintRedeem from '../../InputMintRedeem'

import styles from './mint.module.scss'

const Mint = () => {
  const { corePool } = useSelector((state: RootStateOrAny) => state)
  
  return (
    <form className={styles.form}>
      <InputHeim action="Receive (estimative)" redeem={false} />
      {corePool.map((token) => (
        <InputMintRedeem token={token} />
      ))}
      <button type="submit">Connect Wallet</button>
    </form>
  )
}

export default Mint
