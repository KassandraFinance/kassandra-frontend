import { gql } from 'graphql-request'

export const GET_PROPOSALS = gql`
  query ($skip: Int!, $take: Int!) {
    proposals(
      orderDirection: desc
      orderBy: number
      first: $take
      skip: $skip
    ) {
      id
      number
      targets
      values
      signatures
      startBlock
      endBlock
      description
      created
    }
  }
`
