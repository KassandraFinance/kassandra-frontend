import { gql } from '@apollo/client'

export const TOKENS_QUERY = gql`
  query {
    tokens {
      id
      name
      symbol
      decimals
    }
  }
`
