import React from 'react'

import VotingPower from './VotingPower'
import OthersStakingPools from './OthersStakingPools'
import ModalStaking from '../../components/ModalStaking'

import { FarmContainer, GridStaking, TotalVoting } from './styles'

const Farm = () => {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false)

  return (
    <FarmContainer>
      <h1>Staking</h1>
      <h3>Stake $KACY for Voting Power</h3>
      <GridStaking>
        <VotingPower days='0'/>
        <VotingPower days='15'/>
        <VotingPower days='45'/>
      </GridStaking>
      <TotalVoting>
        <fieldset>
          <legend>Your voting power</legend>
          <span>10</span>
        </fieldset>
        <fieldset>
          <legend>Total voting power</legend>
          <span>500.231.540</span>
        </fieldset>
      </TotalVoting>
      <h3>Other Staking Pools</h3>
      <GridStaking>
        <OthersStakingPools img="logo-heim" setModalOpen={setModalOpen} />
        <OthersStakingPools img="heim-index" setModalOpen={setModalOpen} />
        <OthersStakingPools img="" setModalOpen={setModalOpen} />
      </GridStaking>
      <ModalStaking modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </FarmContainer>
  )
}

export default Farm