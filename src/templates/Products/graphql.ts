import { gql } from 'graphql-request'

export const GET_INFO_POOL = gql`
  query ($id: ID!, $day: Int!) {
    pool(id: $id) {
      # information aHYPE
      id
      name
      decimals
      symbol
      price_usd
      fee_exit
      fee_swap
      total_value_locked_usd
      strategy
      price_usd
      decimals
      # pool token information
      underlying_assets(orderBy: weight_normalized, orderDirection: desc) {
        balance # token balance in pool
        weight_normalized # current allocation in the pool between 0 and 1
        weight_goal_normalized # expected allocation in the pool between 0 and 1
        # token information
        token {
          id
          name
          decimals
          symbol
          price_usd
        }
      }
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
