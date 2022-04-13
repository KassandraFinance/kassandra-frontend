import { gql } from 'graphql-request'

export const GET_USER = gql`
  query ($id: ID!) {
    user(id: $id) {
      votingPower
    }

    delegations(where: { from: $id, votingPower_gt: 0 }) {
      pool
      votingPower
      to {
        id
      }
      from {
        id
      }
    }

    received: delegations(where: { to: $id, from_not: $id }) {
      pool
      votingPower
      from {
        id
      }
      to {
        id
      }
    }
  }
`
