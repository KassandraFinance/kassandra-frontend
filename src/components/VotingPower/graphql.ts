import { gql } from 'graphql-request'

export const GET_VOTINGPOWER = gql`
  query ($id: ID!) {
    user(id: $id) {
      votingPower
    }
    governances {
      totalVotingPower
    }
  }
`
