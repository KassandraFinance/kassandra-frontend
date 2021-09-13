import React from 'react'
import BigNumber from 'bn.js'
import { useSelector, RootStateOrAny } from 'react-redux'

import web3 from '../../utils/web3'
import { BNtoDecimal } from '../../utils/numerals'


import useConnect from '../../hooks/useConnect'
import useStakingContract from '../../hooks/useStakingContract'

import VotingPower from '../../components/VotingPower'
import OthersStakingPools from '../../components/OthersStakingPools'

import styled from 'styled-components'

const Farm = () => {
  const [totalVotes, setTotalVotes] = React.useState<BigNumber>(new BigNumber(0))
  const [yourVotingPower, setYourVotingPower] = React.useState<BigNumber>(new BigNumber(0))
  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)

  const { connect } = useConnect()
  const { getTotalVotes, getCurrentVotes } = useStakingContract()


  function getVotingPower() {
    if (!web3.currentProvider) {
      return
    }

    setInterval(async () => {
      const totalVotes = await getTotalVotes()
      setTotalVotes(totalVotes)
      if (userWalletAddress) {
        const currentVotes = await getCurrentVotes(userWalletAddress)
        setYourVotingPower(currentVotes)
      }
    }, 8000)
  }

  React.useEffect(() => {
    getVotingPower()
  }, [userWalletAddress])

  return (
    <FarmContainer>
      <h1>Staking</h1>
      <h3>Stake $KACY for Voting Power</h3>
      <GridStaking>
        <VotingPower days='0' percentage="12" pid={0} connect={connect} />
        <VotingPower days='30' percentage="20" pid={1} connect={connect} />
        <VotingPower days='45' percentage="32" pid={2} connect={connect} />
      </GridStaking>
      <TotalVoting>
        <fieldset>
          <legend>Your voting power</legend>
          <span>{BNtoDecimal(new BigNumber(yourVotingPower), new BigNumber(18), 6)}</span>
        </fieldset>
        <fieldset>
          <legend>Total voting power</legend>
          <span>{BNtoDecimal(new BigNumber(totalVotes), new BigNumber(18), 6)}</span>
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
  max-width: 1520px;
  margin: 40px auto 64px;
  padding: 0 32px;

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
