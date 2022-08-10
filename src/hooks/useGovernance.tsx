/* eslint-disable prettier/prettier */
import React from 'react'
import { AbiItem } from "web3-utils"

import web3 from '../utils/web3'
import { TransactionCallback } from '../utils/txWait'

import Governance from "../constants/abi/Governance.json"

import approved from '../../public/assets/notificationStatus/approved.svg'
import cancelled from '../../public/assets/notificationStatus/cancelled.svg'
import executed from '../../public/assets/notificationStatus/executed.svg'
import failed from '../../public/assets/notificationStatus/failed.svg'
import queued from '../../public/assets/notificationStatus/queued.svg'
import votingOpen from '../../public/assets/notificationStatus/voting-open.svg'

const valuesStateProposal = [
  ["Active", "Pending", queued, 0],
  ["Active", "Voting Open", votingOpen, 1],
  ["Failed", "Canceled", cancelled, 2],
  ["Failed", "Defeated", failed, 3],
  ["Succeeded", "Succeeded", approved, 4],
  ["Succeeded", "Queued", queued, 5],
  ["Failed", "Expired", failed, 6],
  ["Succeeded", "Executed", executed, 7]
]

const useGovernance = (address: string) => {
  const [contract, setContract] = React.useState(new web3.eth.Contract((Governance as unknown) as AbiItem, address))

  React.useEffect(() => {
    setContract(new web3.eth.Contract((Governance as unknown) as AbiItem, address))
  }, [address])

  return React.useMemo(() => {
    const proposalCount = async () => {
      const value = await contract.methods.proposalCount().call()
      return value
    }

    const proposals = async (id: number) => {
      const value = await contract.methods.proposals(id).call()
      return value
    }

    const stateProposals = async (id: number) => {
      const value = await contract.methods.state(id).call()
      return valuesStateProposal[value]
    }

    const pastEvents = async (eventName: string, block: number) => {
      const events = await contract.getPastEvents(eventName, {
        fromBlock: block - 1,
        toBlock: block
      })

      return events
    }

    const castVote = async (proposalId: number, vote: boolean, userWalletAddress: string, callback: TransactionCallback) => {
      await contract.methods.castVote(proposalId, vote)
        .send(
          { from: userWalletAddress },
          callback
        )
    }

    return {
      proposalCount,
      proposals,
      stateProposals,
      castVote,
      pastEvents
    }
  }, [contract])
}

export default useGovernance
