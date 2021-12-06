import { gql } from 'graphql-request'

export const GET_CHART = gql`
  query ($id: ID!, $price_period: Int!) {
    pool(id: $id) {
      price_usd # pool asset price
      # price candlestick
      # just taking the close value can make a line graph
      # base can be usd or btc
      # period is in seconds, 5m, 15m, 1h, 4h, 1d, 7d
      # timestamp_gt it's since when to catch
      price_candles(
        where: { base: "usd", period: $price_period, timestamp_gt: 0 }
        orderBy: timestamp
      ) {
        timestamp
        close
      }
      # hourly TVL chart
      total_value_locked(
        where: { base: "usd", timestamp_gt: 0 }
        orderBy: timestamp
      ) {
        value
        timestamp
      }
      # hourly allocation chart
      weights(where: { timestamp_gt: 0 }, orderBy: timestamp) {
        timestamp
        weights {
          token {
            id
            symbol
          }
          weight_normalized
        }
      }
    }
  }
`
