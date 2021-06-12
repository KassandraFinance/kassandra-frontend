/* eslint-disable react/require-default-props */
import React from 'react'
import styles from './others-staking-pools.module.scss'

interface IStakingProps {
  multiplier?: string
}

const OthersStakingPools = ({ multiplier }: IStakingProps) => {
  console.log('staking')
  return (
    <div className={`${styles['border-gradient']}`}>
      <div className={styles['inter-background']}>
        <img src="assets/logo-staking.svg" alt="" />
        <div className={styles['intro-staking']}>
          <p>Stake</p>
          <p style={{ fontWeight: 300}}>$HEIM</p>
          <p>Earn</p>
          <p style={{ fontWeight: 300}}>$KACY{multiplier}</p>
        </div>
      </div>
      <div className={styles['infos-staking']}>
        <div className={styles['withdraw-delay-and-days']}>
          <div className={styles['withdraw-delay']}>
            <p>Withdraw delay</p>
            <span>Start Date</span>
            <span>End Date</span>
            <span>Your stake</span>
            <span>Your voting power</span>
            <span>KACY reward</span>
            <p>Total staking</p>
            <p>APY</p>
          </div>
          <div className={styles.days}>
            <p>0 Days</p>
            <span>02/02/2021</span>
            <span>23/03/2022</span>
            <span>$56</span>
            <span>37</span>
            <span>$12</span>
            <p>$134,124</p>
            <p>210%</p>
          </div>
        </div>
        <div className={styles['btn-container']}>
          <button className={styles['btn-wallet']} type="button" onClick={() => alert('Connet Wallet')}>Connet Wallet</button>
          <button className={styles['btn-details']} type="button" onClick={() => alert('Details')}>Details</button>
        </div>
      </div>
    </div>
  )
}

export default OthersStakingPools