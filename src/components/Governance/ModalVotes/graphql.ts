import { gql } from 'graphql-request'

export const GET_MODALVOTES = gql`
  query ($number: Int!, $support: Boolean!) {
    proposals(where: { number: $number }) {
      votes(where: { support: $support }) {
        support
        votingPower
        voter {
          id
        }
      }
    }
  }
`
