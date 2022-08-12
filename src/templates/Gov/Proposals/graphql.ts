import { gql } from 'graphql-request'

export const GET_ALL_PROPOSALS = gql`
  query {
    proposals {
      id
    }
  }
`
