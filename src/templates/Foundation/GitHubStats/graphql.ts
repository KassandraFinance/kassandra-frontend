import { gql } from 'graphql-request'
export const GET_DATA_GITHUB = gql`
  query (
    $dateInitLastYar: GitTimestamp
    $dateInitCurrentYarn: GitTimestamp
    $dateLastWeek: GitTimestamp
    $dateLastMonth: GitTimestamp
  ) {
    lastYar: organization(login: "KassandraFinance") {
      repositories(first: 10) {
        nodes {
          name
          object(expression: "master") {
            ... on Commit {
              history(since: $dateInitLastYar, until: $dateInitCurrentYarn) {
                totalCount
              }
            }
          }
        }
      }
    }

    lastWeek: organization(login: "KassandraFinance") {
      repositories(first: 10) {
        nodes {
          name
          object(expression: "master") {
            ... on Commit {
              history(since: $dateLastWeek) {
                totalCount
              }
            }
          }
        }
      }
    }

    lastMonth: organization(login: "KassandraFinance") {
      repositories(first: 10) {
        nodes {
          name
          object(expression: "master") {
            ... on Commit {
              history(since: $dateLastMonth) {
                totalCount
              }
            }
          }
        }
      }
    }

    currentYar: organization(login: "KassandraFinance") {
      repositories(first: 10) {
        nodes {
          name
          object(expression: "master") {
            ... on Commit {
              history(since: $dateInitCurrentYarn) {
                totalCount
              }
            }
          }
        }
      }
    }
  }
`
