import React from 'react'

import styles from '../farm.module.scss'

interface IStakingProps {
  days: string
}

const VotingPower = ({ days }: IStakingProps) => {
  console.log('staking')
  return (
    <div className={`${styles['border-gradient']}`}>
      <div className={styles['inter-background']}>
        <img src="assets/logo-staking.svg" alt="" />
        <div className={styles['intro-staking']}>
          <p>Earn</p>
          <p>$KACY</p>
          <p>1 voting power</p>
          <p>per $KACY staked</p>
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
            <p className={styles['total-staking']}>Total staking</p>
            <p style={{ position: 'relative'}}>APY</p>
          </div>
          <div className={styles.days}>
            <p>{days} Days</p>
            <span>02/02/2021</span>
            <span>23/03/2022</span>
            <span>$56</span>
            <span>37</span>
            <span>$12</span>
            <p className={styles['total-staking']}>$134,124</p>
            <p>210%</p>
          </div>
        </div>
        <div className={styles['btn-container']}>
          <button className={styles['btn-wallet']} type="button" onClick={() => alert('Connet Wallet')}>Connet Wallet</button>
          <button className={styles['btn-details']} type="button" onClick={() => alert('Details')}>Details <img src="assets/arrow-down-cyan.svg" alt=""/></button>
          <img 
            src="assets/info-icon.svg" 
            alt="" 
            className={styles['img-info']}
            onMouseOver={() => alert('tooltip')}
          />
        </div>
      </div>
    </div>
  )
}

export default VotingPower