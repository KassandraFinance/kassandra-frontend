import { gql } from 'graphql-request'

export const GET_GOVERNANCES = gql`
  query ($id: ID!) {
    user(id: $id) {
      votingPower
    }

    governances {
      totalVotingPower
      votingAddresses
    }
  }
`
