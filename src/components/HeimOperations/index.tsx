import React from 'react'

import Buy from './Buy'
import Swap from './Swap'
import Sell from './Sell'
import Mint from './Mint'
import Redeem from './Redeem'

import styles from './heim-operations.module.scss'

const HeimOperations = () => {
  const [inputChecked, setInputChecked] = React.useState<string>('buy')
  return (
    <div className={styles['heim-operations']}>
      <div className={styles['select-operator']}>
        <input 
          type="radio" 
          name="operator" 
          id="buy" 
          onChange={() => setInputChecked('buy')}
          checked={inputChecked === 'buy'}
        />
        <label htmlFor="buy">buy</label>
        <input 
          type="radio" 
          name="operator" 
          id="sell" 
          onChange={() => setInputChecked('sell')}
          checked={inputChecked === 'sell'}
        />
        <label htmlFor="sell">sell</label>
        <input 
          type="radio" 
          name="operator" 
          id="swap"
          onChange={() => setInputChecked('swap')}
          checked={inputChecked === 'swap'}
        />
        <label htmlFor="swap">swap</label>
        <input 
          type="radio" 
          name="operator" 
          id="mint"
          onChange={() => setInputChecked('mint')}
          checked={inputChecked === 'mint'}
        />
        <label htmlFor="mint">mint</label>
        <input 
          type="radio" 
          name="operator" 
          id="redeem"
          onChange={() => setInputChecked('redeem')}
          checked={inputChecked === 'redeem'}
        />
        <label htmlFor="redeem">redeem</label>
      </div>
      {inputChecked === 'buy' && <Buy />}
      {inputChecked === 'sell' && <Sell />}
      {inputChecked === 'swap' && <Swap />}
      {inputChecked === 'mint' && <Mint />}
      {inputChecked === 'redeem' && <Redeem />}
    </div>
  )
}

export default HeimOperations