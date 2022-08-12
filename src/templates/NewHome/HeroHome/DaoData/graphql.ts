import { gql } from 'graphql-request'

export const GET_DAO_DATA = gql`
  query ($ids: [ID!]!) {
    pools(where: { id_in: $ids }) {
      total_value_locked_usd
      withdraw: fees(where: { period: 604800, type: "exit" }, first: 1000) {
        volume_usd
      }
      swap: fees(where: { period: 604800, type: "swap" }, first: 1000) {
        volume_usd
      }
      volumes(where: { period: 604800 }, first: 1000) {
        volume_usd
      }
    }
  }
`
