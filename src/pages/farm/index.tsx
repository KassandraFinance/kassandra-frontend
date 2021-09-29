import React from 'react'
import { useSelector, RootStateOrAny } from 'react-redux'

import styled from 'styled-components'
import theme from '../../styles/theme'

import { Kacy, Staking } from '../../constants/tokenAddresses'

import web3 from '../../utils/web3'

import useConnect from '../../hooks/useConnect'
import useERC20Contract from '../../hooks/useERC20Contract'
import useStakingContract from '../../hooks/useStakingContract'

import Web3Disabled from '../../components/Web3Disabled'
import TotalVoting from '../../components/TotalVoting'
import VotingPower from '../../components/VotingPower'
import OthersStakingPools from '../../components/OthersStakingPools'

declare let window: {
  ethereum: any,
}

const Farm = () => {
  const [chainId, setChainId] = React.useState<string>('')
  const [loading, setLoading] = React.useState<boolean>(true)

  const kacyToken = useERC20Contract(Kacy)
  const kacyStake = useStakingContract(Staking)

  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)
  const { connect } = useConnect()

  async function getChainId() {
    if (web3.currentProvider === null) {
      return
    }

    const id = await window.ethereum.request({ method: 'eth_chainId' })
    setChainId(id)
  }

  React.useEffect(() => {
    getChainId()
  }, [userWalletAddress])
  
  
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 600)
  }, [])

  return (
    <>
      {loading && 
        <h1 
          style={{ 
            height: '90vh', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            fontWeight: 500 
          }}
        >
          Loading...
        </h1>
      }
      {web3.currentProvider !== null && userWalletAddress && chainId === "0x3" && !loading ?
        <FarmContainer>
          <h1>Staking</h1>
          <h3>Stake $KACY for Voting Power</h3>
          <GridStaking>
            <VotingPower
              days="0"
              pid={0}
              connect={connect}
              approve={kacyToken.approve}
              getAllowance={kacyToken.allowance}
              balanceOf={kacyStake.balance}
              earned={kacyStake.earned}
              getReward={kacyStake.getReward}
              withdrawable={kacyStake.withdrawable}
              poolInfo={kacyStake.poolInfo}
              unstaking={kacyStake.unstaking}
              stakedUntil={kacyStake.stakedUntil}
            />
            <VotingPower
              days="30"
              pid={1}
              connect={connect}
              approve={kacyToken.approve}
              getAllowance={kacyToken.allowance}
              balanceOf={kacyStake.balance}
              earned={kacyStake.earned}
              getReward={kacyStake.getReward}
              withdrawable={kacyStake.withdrawable}
              poolInfo={kacyStake.poolInfo}
              unstaking={kacyStake.unstaking}
              stakedUntil={kacyStake.stakedUntil}
            />
            <VotingPower
              days="45"
              pid={2}
              connect={connect}
              approve={kacyToken.approve}
              getAllowance={kacyToken.allowance}
              balanceOf={kacyStake.balance}
              earned={kacyStake.earned}
              getReward={kacyStake.getReward}
              withdrawable={kacyStake.withdrawable}
              poolInfo={kacyStake.poolInfo}
              unstaking={kacyStake.unstaking}
              stakedUntil={kacyStake.stakedUntil}
            />
          </GridStaking>
          <TotalVoting
            getTotalVotes={kacyStake.totalVotes}
            getCurrentVotes={kacyStake.currentVotes}
            userWalletAddress={userWalletAddress}
          />
          <h3>Other Staking Pools</h3>
          <GridStaking>
            <OthersStakingPools connect={connect} img="logo-heim" />
            <OthersStakingPools connect={connect} img="heim-index" />
            <OthersStakingPools connect={connect} img="" />
          </GridStaking>
        </FarmContainer>
      :
        <>
          {web3.currentProvider === null && !loading && (
            <Web3Disabled
              textButton="Install Metamask"
              textHeader="Wallet connection to ETH mainnet is required"
              bodyText="To have access to all our staking pools, please connect your wallet"
              type="install"
            />
          )}
          {!userWalletAddress && chainId === "0x3" && !loading && (
            <Web3Disabled
              textButton="Connect Wallet"
              textHeader="Wallet connection to ETH mainnet is required"
              bodyText="To have access to all our staking pools, please connect your wallet"
              type="connect"
            />
          )}
          {web3.currentProvider !== null && chainId !== "0x3" && !loading && (
            <Web3Disabled
              textButton="Connect to Ropsten"
              textHeader="Your wallet is set to the wrong network. Please switch to the test Ropsten network."
              bodyText="To have access to all our staking pools, please switch the network."
              type="changeChain"
            />
          )}
        </>
      }
    </>
  )
}

const FarmContainer = styled.section`
  max-width: 1520px;
  margin: 40px auto 64px;
  padding: 0 ${theme.spacings.space32};

  h1 {
    font-size: ${theme.font.sizes.font24};
    font-weight: ${theme.font.weight.normal};

    @media (max-width: 420px) {
      padding: 0 10px;
    }
  }
  h3 {
    font-size: ${theme.font.sizes.font20};
    font-weight: ${theme.font.weight.normal};
    margin: ${theme.spacings.space16} 0 32px;
    @media (max-width: 420px) {
      padding: 0 10px;
    }
  }

  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`

const GridStaking = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(360px, 400px));
  gap: 24px;
  justify-content: space-between;

  margin: 0 auto;
  max-width: 1520px;
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

export default Farm
