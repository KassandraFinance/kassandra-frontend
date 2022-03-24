import { gql } from 'graphql-request'

export const GET_USERS = gql`
  query {
    users(orderBy: votingPower) {
      id
      votingPower
      votes {
        proposal {
          number
        }
      }
      proposals {
        proposer {
          id
        }
      }
    }
    governances {
      totalVotingPower
    }
  }
`
