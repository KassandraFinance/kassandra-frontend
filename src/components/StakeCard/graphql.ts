import { gql } from 'graphql-request'

export const GET_INFO_AHYPE = gql`
  query ($id: ID!) {
    pool(id: $id) {
      # information aHYPE
      price_usd
    }
  }
`
