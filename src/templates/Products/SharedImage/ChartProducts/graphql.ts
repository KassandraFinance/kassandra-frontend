import { gql } from 'graphql-request'

export const GET_CHART = gql`
  query ($id: ID!, $price_period: Int!, $period_selected: Int!) {
    pool(id: $id) {
      price_usd # pool asset price
      # price candlestick
      # just taking the close value can make a line graph
      # base can be usd or btc
      # period is in seconds, 5m, 15m, 1h, 4h, 1d, 7d
      # timestamp_gt it's since when to catch
      price_candles(
        where: {
          base: "usd"
          period: $price_period
          timestamp_gt: $period_selected
        }
        orderBy: timestamp
        first: 365
      ) {
        timestamp
        close
      }
      # hourly TVL chart
      total_value_locked(
        where: { base: "usd", timestamp_gt: $period_selected }
        orderBy: timestamp
      ) {
        value
        timestamp
      }
      # hourly allocation chart
      weights(where: { timestamp_gt: $period_selected }, orderBy: timestamp) {
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
