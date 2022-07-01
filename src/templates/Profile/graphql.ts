import { gql } from 'graphql-request'

export const GET_PROFILE = gql`
  query ($id: [ID!]!, $userVP: ID) {
    #    user(id: $'userVP') {
    #      votingPower
    #    }
    pools(where: { id_in: $id }) {
      id
      symbol
      price_usd # pool asset price
    }
  }
`
