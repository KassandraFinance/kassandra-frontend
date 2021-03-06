import { gql } from 'graphql-request'

export const GET_PROPOSALS = gql`
  query ($id: ID!) {
    user(id: $id) {
      votes {
        proposal {
          id
          number
          targets
          values
          signatures
          startBlock
          description
        }
      }
    }
  }
`
