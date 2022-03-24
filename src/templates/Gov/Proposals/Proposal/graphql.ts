import { gql } from 'graphql-request'

export const GET_PROPOSAL = gql`
  query ($number: Int!) {
    proposal: proposals(where: { number: $number }) {
      number
      description
      forVotes
      againstVotes
      quorum
      proposer {
        id
      }
      votes {
        votingPower
      }
    }
  }
`
