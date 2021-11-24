import { gql } from 'graphql-request'

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
