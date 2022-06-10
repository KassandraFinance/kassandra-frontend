import { gql } from 'graphql-request'

export const GET_INFO_POOL = gql`
  query ($id: ID!) {
    pool(id: $id) {
      price_usd
    }
  }
`
