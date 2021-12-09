import { gql } from 'graphql-request'

export const GET_POOL_PRICE = gql`
  query (
    $id: ID!
    $day: Int!
    $week: Int!
    $month: Int!
    $quarterly: Int!
    $year: Int!
  ) {
    now: candles(
      where: { base: "usd", period: 3600, pool: $id }
      orderBy: timestamp
      orderDirection: desc
      first: 1
    ) {
      timestamp
      close
    }
    day: candles(
      where: { base: "usd", period: 3600, timestamp_gt: $day, pool: $id }
      orderBy: timestamp
      first: 1
    ) {
      timestamp
      close
    }
    week: candles(
      where: { base: "usd", period: 3600, timestamp_gt: $week, pool: $id }
      orderBy: timestamp
      first: 1
    ) {
      timestamp
      close
    }
    month: candles(
      where: { base: "usd", period: 3600, timestamp_gt: $month, pool: $id }
      orderBy: timestamp
      first: 1
    ) {
      timestamp
      close
    }
    quarterly: candles(
      where: { base: "usd", period: 3600, timestamp_gt: $quarterly, pool: $id }
      orderBy: timestamp
      first: 1
    ) {
      timestamp
      close
    }
    year: candles(
      where: { base: "usd", period: 3600, timestamp_gt: $year, pool: $id }
      orderBy: timestamp
      first: 1
    ) {
      timestamp
      close
    }
  }
`
