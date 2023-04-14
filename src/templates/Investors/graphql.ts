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
          logo
          wraps {
            logo
          }
        }
      }
      now: price_candles(
        where: { base: "usd", period: 3600 }
        orderBy: timestamp
        orderDirection: desc
        first: 1
      ) {
        timestamp
        close
      }
      day: price_candles(
        where: { base: "usd", period: 3600, timestamp_gt: $day }
        orderBy: timestamp
        first: 1
      ) {
        timestamp
        close
      }
    }
  }
`
