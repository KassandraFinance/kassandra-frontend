import React from 'react'

import styles from './farm.module.scss'
import OthersStakingPools from './OthersStakingPools'
import VotingPower from './VotingPower'

const Farm = () => {
  console.log('farm')
  return (
    <section className={styles.farm}>
      <h1>Staking</h1>
      <h3>Stake $KACY for Voting Power</h3>
      <div className={styles['container-grid-staking']}>
        <VotingPower multiplier='0'/>
        <VotingPower multiplier='10'/>
        <VotingPower multiplier='30'/>
      </div>
      <div className={styles['total-voting']}>
        <fieldset>
          <legend>Your voting power</legend>
          <span>10</span>
        </fieldset>
        <fieldset>
          <legend>Total voting power</legend>
          <span>500.231.540</span>
        </fieldset>
      </div>
      <h3>Other Staking Pools</h3>
      <div className={styles['container-grid-staking']}>
        <OthersStakingPools />
      </div>
    </section>
  )
}

export default Farm