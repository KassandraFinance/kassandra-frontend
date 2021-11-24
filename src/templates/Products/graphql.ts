import { gql } from 'graphql-request'

export const TOKENS_QUERY = gql`
  query {
    pool(id: "0x03c0c7b6b55a0e5c1f2fad2c45b453c56a8f866a") {
      name
      symbol
      total_value_locked_usd
      price_usd # preço do asset da pool
      # gráfico de candle do preço
      # pegando só o valor de close pode fazer um gráfico de linha
      # base pode ser usd ou btc
      # period é em segundos, tem em 5m, 15m, 1h, 4h, 1d, 7d
      # timestamp_gt é desde quando pegar
      price_candles(
        where: { base: "usd", period: 300, timestamp_gt: 0 }
        orderBy: timestamp
      ) {
        timestamp
        open
        high
        low
        close
      }
      # gráfico de TVL em hora
      total_value_locked(
        where: { base: "usd", timestamp_gt: 0 }
        orderBy: timestamp
      ) {
        value
        timestamp
      }
      # gráfico de alocação em hora
      weights(where: { timestamp_gt: 0 }, orderBy: timestamp) {
        timestamp
        weights {
          token {
            id
            name
            decimals
            symbol
            price_usd
          }
          weight_normalized
        }
      }
      # informações dos tokens da pool
      underlying_assets {
        balance # balanço do token na pool
        weight_goal_normalized # allocation atual na pool entre 0 e 1
        # informações do token
        token {
          id
          name
          decimals
          symbol
          price_usd
        }
      }
    }
  }
`

export const TOKENS_IN_POOL = gql`
  query {
    pool(id: "0x03c0c7b6b55a0e5c1f2fad2c45b453c56a8f866a") {
      # gráfico de alocação em hora
      weights(where: { timestamp_gt: 0 }, orderBy: timestamp) {
        timestamp
        weights {
          token {
            id
            name
            decimals
            symbol
            price_usd
          }
          weight_normalized
        }
      }
    }
  }
`
