import { gql } from 'graphql-request'

export const GET_DAO_DATA = gql`
  query ($ids: [ID!]!) {
    factory(id: "0x958c051B55a173e393af696EcB4C4FF3D6C13930") {
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
