import { gql } from 'graphql-request'

export const GET_DAO_DATA = gql`
  query ($ids: [ID!]!, $day: Int!) {
    pools(where: { id_in: $ids }) {
      total_value_locked_usd
      withdraw: fees(
        where: { period: 3600, timestamp_gt: $day, type: "exit" }
      ) {
        volume_usd
      }
      swap: fees(where: { period: 3600, timestamp_gt: $day, type: "swap" }) {
        volume_usd
      }
      volumes(where: { period: 3600, timestamp_gt: $day }) {
        volume_usd
      }
    }
  }
`
