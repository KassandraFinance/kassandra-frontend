import React from 'react'

import OthersStakingPools from '../../components/OthersStakingPools'

import styled from 'styled-components'

const Farm = () => {
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
        <OthersStakingPools img="logo-heim" />
        <OthersStakingPools img="heim-index" />
        <OthersStakingPools img="" />
      </GridStaking>
    </FarmContainer>
  )
}

const FarmContainer = styled.section`
  h1 {
    font-size: 24px;
    font-weight: 400;
    @media (max-width: 420px) {
      padding: 0 10px;
    }
  }
  h3 {
    font-size: 20px;
    font-weight: 400;
    margin: 16px 0 32px;
    @media (max-width: 420px) {
      padding: 0 10px;
    }
  }
`

const GridStaking = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  margin: 40px 0 64px;
  @media (max-width: 1160px) {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    height: 100%;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 420px) {
    gap: 32px;
  }
`

const TotalVoting = styled.div`
  height: 93px;
  margin: 80px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  fieldset {
    border: 2px solid #FFBF00;
    font-size: 18px;

    display: flex;
    justify-content: space-between;
    
    width: 100%;
    @media (max-width: 420px) {
      font-size: 16px;
    }
    &:nth-child(1) {
      border-right: none;
      legend {
        margin-left: 32px;
        padding: 0 8px;
      }
      span {
        display: flex;
        align-items: center;
        margin-left: 40px;
      }
    }
    &:nth-child(2) {
      border-left: none;
      legend {
        margin-left:  auto;
        margin-right: 32px;
        padding: 0 8px;
      }
      span {
        display: flex;
        align-items: center;
        margin-left:  auto;
        margin-right: 40px;
      }
    }
  }
`

export default Farm
