import { gql } from 'graphql-request'

export const GET_PROPOSALS = gql`
  query {
    proposals(orderBy: number) {
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
