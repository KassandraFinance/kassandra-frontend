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
    </section>
  )
}

export default Farm