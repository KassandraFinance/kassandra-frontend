import React from 'react'
import BigNumber from 'bn.js'
import web3 from '../../utils/web3'
import styles from './input-heim.module.scss'

interface IInputHeimProps {
  action: string
  redeem: boolean
  setAmountHeim: React.Dispatch<React.SetStateAction<BigNumber>>
  getBalanceToken: () => void
}

const InputHeim = ({ 
  action,
  redeem,
  setAmountHeim,
  getBalanceToken
}: IInputHeimProps) => (
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
        step="any"
        min="0"
        onKeyDown={(e: Event) => {
          // don't allow negative numbers
          if (e.key === '-') {
            e.preventDefault()
          }
          // Blink bug makes the value come empty if pressing the decimal symbol that is not that of the current locale
          else if (e.key === '.' || e.key === ',') {
            // first time value will be ok, if pressing twice it zeroes, we ignore those
            if (e.target.value.length > 0 && e.target.value.search(/[,.]/) === -1) {
              e.target.dataset.lastvalue = e.target.value
            }
          }
          else if (e.key === 'Backspace' || e.key === 'Delete') {
            e.target.dataset.lastvalue = 0
          }
        }}
        onChange={
          (e: Event) => {
            getBalanceToken()
            let { value } = e.target

            if (value.length === 0) {
              value = e.target.dataset.lastvalue
            }

            setAmountHeim(new BigNumber(web3.utils.toWei(value)))
          }
        }
      />
      <span>U$ 10.00</span>
    </div>
  </div>
)

export default InputHeim
