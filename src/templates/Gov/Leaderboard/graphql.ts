import { gql } from 'graphql-request'

export const GET_ALL_USERS = gql`
  query {
    users {
      id
    }
  }
`
