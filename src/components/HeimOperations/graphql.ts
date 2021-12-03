import { gql } from 'graphql-request'

export const GET_INFO_AHYPE = gql`
  query {
    pool(id: "0x03c0c7b6b55a0e5c1f2fad2c45b453c56a8f866a") {
      # information aHYPE
      id
      name
      decimals
      symbol
      price_usd
      # pool token information
      underlying_assets {
        balance # token balance in pool
        weight_goal_normalized # current allocation in the pool between 0 and 1
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
  }
`
