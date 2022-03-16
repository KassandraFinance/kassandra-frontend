/* eslint-disable prettier/prettier */
import React from 'react'
import { AbiItem } from "web3-utils"
import { EventData } from 'web3-eth-contract'

import web3 from '../utils/web3'
import Governance from "../constants/abi/Governance.json"

import approved from '../../public/assets/status/approved.svg'
import cancelled from '../../public/assets/status/cancelled.svg'
import executed from '../../public/assets/status/executed.svg'
import failed from '../../public/assets/status/failed.svg'
import queued from '../../public/assets/status/queued.svg'
import votingOpen from '../../public/assets/status/voting-open.svg'

const valuesStateProposal = [
  ["Active", "Pending", queued],
  ["Active", "Voting Open", votingOpen],
  ["Failed", "Canceled", cancelled],
  ["Failed", "Defeated", failed],
  ["Succeeded", "Succeeded", approved],
  ["Succeeded", "Queued", queued],
  ["Failed", "Expired", failed],
  ["Succeeded", "Executed", executed]
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

    const getProposal = async (events: EventData[], setProposalsList: React.Dispatch<React.SetStateAction<object[]>>) => {
      for (let i = events.length - 1; i >= Math.max(events.length - 5, 0); i--) {
        const state = await stateProposals(i + 1)
        const proposal = events[i].returnValues
        const block = await web3.eth.getBlock(proposal.endBlock)
  
        setProposalsList(prevState => [
          ...prevState,
          { state, proposal, timestamp: block.timestamp }
        ])
      }
    }

    return {
      proposalCount,
      proposals,
      stateProposals,
      pastEvents,
      getProposal
    }
  }, [contract])
}

export default useGovernance
