import { gql } from 'graphql-request'

export const GET_CHART = gql`
  query ($id: [ID]!, $day: Int!, $month: Int!) {
    pools(where: { id_in: $id }) {
      id
      price_usd # pool asset price
      total_value_locked_usd
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

      month: price_candles(
        where: { base: "usd", period: 3600, timestamp_gt: $month }
        orderBy: timestamp
        first: 1
      ) {
        timestamp
        close
      }
    }
  }
`
