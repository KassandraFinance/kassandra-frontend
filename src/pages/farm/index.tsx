import React from 'react'

import VotingPower from './VotingPower'
import OthersStakingPools from './OthersStakingPools'
import ModalStaking from '../../components/ModalStaking'

import styles from './farm.module.scss'

const Farm = () => {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false)

  return (
    <section className={styles.farm}>
      <h1>Staking</h1>
      <h3>Stake $KACY for Voting Power</h3>
      <div className={styles['container-grid-staking']}>
        <VotingPower days='0'/>
        <VotingPower days='15'/>
        <VotingPower days='45'/>
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
      <div className={`${styles['container-grid-staking']} ${styles.others} ${styles['staking-pools']}`}>
        <OthersStakingPools img="logo-heim" setModalOpen={setModalOpen} />
        <OthersStakingPools img="heim-index" setModalOpen={setModalOpen} />
        <OthersStakingPools img="" setModalOpen={setModalOpen} />
      </div>
      <ModalStaking modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </section>
  )
}

export default Farm