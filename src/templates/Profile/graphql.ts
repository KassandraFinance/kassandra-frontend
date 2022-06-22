import { gql } from 'graphql-request'

export const GET_PROFILE = gql`
  query ($id: ID!) {
    user(id: $id) {
      votingPower
    }
  }
`
