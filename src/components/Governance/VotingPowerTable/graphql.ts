import { gql } from 'graphql-request'

export const GET_USERS = gql`
  query {
    users(orderDirection: desc, orderBy: votingPower, first: 5) {
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
