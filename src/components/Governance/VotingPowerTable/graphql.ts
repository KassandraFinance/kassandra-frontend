import { gql } from 'graphql-request'

export const GET_INFO_USERS = gql`
  query ($skip: Int!, $take: Int!) {
    users(
      orderDirection: desc
      orderBy: votingPower
      first: $take
      skip: $skip
    ) {
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
