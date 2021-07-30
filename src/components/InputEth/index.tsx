import React from 'react'
import BigNumber from 'bn.js'
import { useSelector, RootStateOrAny } from 'react-redux'
import web3 from '../../utils/web3'


import { HeimCorePool } from '../../constants/tokenAddresses'
import usePoolContract from '../../hooks/usePoolContract'

import styles from './input-eth.module.scss'

interface IInputEthProps {
  action: string
  redeem: boolean
  getBalanceToken: () => void
  investSelected: string
  setInvestSelected: React.Dispatch<React.SetStateAction<string>>
  amountTokenPool: BigNumber
  setAmountTokenPool: React.Dispatch<React.SetStateAction<BigNumber>>
  supplyHeim: BigNumber
  setInvestHeim: React.Dispatch<React.SetStateAction<BigNumber>>
}

const InputEth = ({
  action, 
  amountTokenPool, 
  setAmountTokenPool,
  getBalanceToken,
  investSelected,
  setInvestSelected,
  setInvestHeim,
  supplyHeim
}: IInputEthProps) => {
  const { poolTokens } = useSelector((state: RootStateOrAny) => state)
  
  const { calcPoolOutGivenSingleIn, denormalizedWeight, totalDenormalizedWeight, swapFee } = usePoolContract()


  const tokenSelected = poolTokens.filter((token: { address: string }) => {
    if (token.address === investSelected) {
      return token
    }
  })

  React.useEffect(() => {
    (async () => {
      if (!tokenSelected[0]?.address) {
        setInvestHeim(new BigNumber(0))
        return
      }
      console.log(tokenSelected)
      const denormalized = await denormalizedWeight(HeimCorePool, tokenSelected[0]?.address)
      const totalDenormalized = await totalDenormalizedWeight(HeimCorePool)
      const swap = await swapFee(HeimCorePool)

      console.log(denormalized, totalDenormalized, swap)

      const invest = await calcPoolOutGivenSingleIn(
        HeimCorePool, 
        tokenSelected[0]?.balance, 
        denormalized, 
        supplyHeim, 
        totalDenormalized, 
        amountTokenPool, 
        swap
      )

      setInvestHeim(invest)
    })()
  }, [amountTokenPool, investSelected])
  
  return (
    <div className={styles['input-eth']}>
      <div className={styles['pay-with']}>
        <span>{action}</span>
        <select defaultValue={investSelected} onChange={(e: any) => setInvestSelected(e.target.value)}>
          {poolTokens.map((token: { address: string, symbol: string}) =>
            <option key={token.address} value={token?.address}>{token?.symbol}</option>
          )}
        </select>
        <div className={styles.line} />
      </div>
      <img className={styles['arrow-long']} src="assets/arrow-long-down.svg" alt="" />
      <div className={styles.amount}>
        <span>Amount</span>
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

            setAmountTokenPool(new BigNumber(web3.utils.toWei(value)))
            // setAmountTokenPool(value)
          }
        }
      />
        <span>U$ 10.00</span>
        <div className={styles.line} />
      </div>
    </div>
  )
}

export default InputEth