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
    </section>
  )
}

export default Farm