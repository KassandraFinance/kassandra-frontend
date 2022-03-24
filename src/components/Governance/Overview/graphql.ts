import { gql } from 'graphql-request'

export const GET_GOVERNANCES = gql`
  query {
    governances {
      totalVotingPower
      votingAddresses
    }
  }
`
