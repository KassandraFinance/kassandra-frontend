import { gql } from 'graphql-request'

export const GET_PROPOSAL = gql`
  query ($number: Int!) {
    proposal: proposals(where: { number: $number }) {
      number
      description
      forVotes
      againstVotes
      startBlock
      quorum
      values
      calldatas
      signatures
      targets
      created
      endBlock
      canceled
      queued
      executed
      eta
      proposer {
        id
      }
      votes {
        votingPower
        support
        voter {
          id
        }
      }
    }
  }
`
