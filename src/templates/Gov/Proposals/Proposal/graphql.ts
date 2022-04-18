import { gql } from 'graphql-request'

export const GET_PROPOSAL = gql`
  query ($number: Int!, $voter: ID!) {
    proposal: proposals(where: { number: $number }) {
      number
      description
      forVotes
      againstVotes
      startBlock
      endBlock
      quorum
      values
      calldatas
      signatures
      targets
      created
      canceled
      queued
      executed
      eta
      proposer {
        id
      }
      votes(where: { voter: $voter }) {
        support
        voter {
          id
        }
      }
    }
  }
`
