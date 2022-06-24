import { gql } from 'graphql-request'

export const GET_INFO_AHYPE = gql`
  query ($id: [ID!]) {
    pools(where: { id_in: $id }) {
      price_usd
    }
  }
`
