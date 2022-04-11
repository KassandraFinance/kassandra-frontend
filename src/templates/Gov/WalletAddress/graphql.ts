import { gql } from 'graphql-request'

export const GET_USER = gql`
  query ($id: ID!) {
    user(id: $id) {
      votingPower
    }
    governances {
      totalVotingPower
    }
  }
`
