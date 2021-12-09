import { gql } from 'graphql-request'

export const GET_INFO_AHYPE = gql`
  query ($id: ID!) {
    pool(id: $id) {
      # information aHYPE
      id
      name
      decimals
      symbol
      price_usd
      # pool token information
      underlying_assets(orderBy: weight_goal_normalized, orderDirection: desc) {
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
