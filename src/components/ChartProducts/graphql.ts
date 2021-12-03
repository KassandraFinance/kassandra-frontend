import { gql } from 'graphql-request'

export const GET_CHART = gql`
  query ($id: ID!, $price_period: Int!) {
    pool(id: $id) {
      price_usd # preço do asset da pool
      # gráfico de candle do preço
      # pegando só o valor de close pode fazer um gráfico de linha
      # base pode ser usd ou btc
      # period é em segundos, tem em 5m, 15m, 1h, 4h, 1d, 7d
      # timestamp_gt é desde quando pegar
      price_candles(
        where: { base: "usd", period: $price_period, timestamp_gt: 0 }
        orderBy: timestamp
      ) {
        timestamp
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
            symbol
          }
          weight_normalized
        }
      }
    }
  }
`
