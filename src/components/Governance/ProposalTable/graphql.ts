import { gql } from 'graphql-request'

export const GET_PROPOSALS = gql`
  query {
    proposals(orderDirection: desc, orderBy: number, first: 5) {
      id
      number
      targets
      values
      signatures
      startBlock
      description
    }
  }
`
