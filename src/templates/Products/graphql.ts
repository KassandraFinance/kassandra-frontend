import { gql } from 'graphql-request'

export const GET_INFO_POOL = gql`
  query ($id: ID!, $day: Int!) {
    pool(id: $id) {
      total_value_locked_usd
      strategy
    }
    withdraw: fees(
      where: { pool: $id, period: 3600, timestamp_gt: $day, type: "exit" }
    ) {
      volume_usd
    }
    swap: fees(
      where: { pool: $id, period: 3600, timestamp_gt: $day, type: "swap" }
    ) {
      volume_usd
    }
    volumes(where: { pool: $id, period: 3600, timestamp_gt: $day }) {
      volume_usd
    }
  }
`
