import { gql } from 'graphql-request'

export const GET_WITHDRAW_FEE = gql`
  query ($ids: [ID!]!) {
    pools(where: { id_in: $ids }) {
      withdraw: fees(where: { type: "exit" }, first: 1000) {
        volume_usd
      }
    }
  }
`
