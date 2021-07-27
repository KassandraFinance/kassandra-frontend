import React from 'react'
import BigNumber from 'bn.js'
import { HeimCorePool, HeimCRPPOOL } from '../../constants/tokenAddresses'
import usePoolContract from '../../hooks/usePoolContract'
import useERC20Contract from '../../hooks/useERC20Contract'
import styles from './input-heim.module.scss'

interface IInputHeimProps {
  action: string
  redeem: boolean
  amountHeim: any
  setAmountHeim: React.Dispatch<React.SetStateAction<any>>
  getBalanceToken: () => void
}

const InputHeim = ({ 
  action, 
  redeem, 
  amountHeim, 
  setAmountHeim,
  getBalanceToken
}: IInputHeimProps) => {


  return (
    <div className={styles['input-heim']}>
      <div className={styles['pay-with']}>
        <span>{action}</span>
        <p>HEIM</p>
      </div>
      <img className={styles['arrow-long']} src={`assets/arrow-long-${redeem ? 'down' : 'up'}.svg`} alt="" />
      <div className={styles.total}>
        <span>Total</span>
        <input
            type="number"
            placeholder="0"
            value={amountHeim.toString()}
            onChange={(e: any) => {
              getBalanceToken()
              setAmountHeim(new BigNumber(e.target.value))
            } 
          }
          />
        <span>U$ 10.00</span>
      </div>
    </div>
  )
}

export default InputHeim