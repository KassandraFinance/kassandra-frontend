import { GraphQLClient } from 'graphql-request'
import { BACKEND_KASSANDRA } from './constants/tokenAddresses'
import { getSdk as getSdkKassandra } from './gql/generated/kassandraApi'
import { getSdk as getSdkGithub } from './gql/generated/githubApi'
import { env } from './env'

export const kassandraApi = new GraphQLClient(BACKEND_KASSANDRA)
export const kassandraClient = getSdkKassandra(kassandraApi)

const GIT_HUB_TOKEN = env.NEXT_PUBLIC_GIT_HUB_TOKEN
export const githubApi = new GraphQLClient('https://api.github.com/graphql', {
  headers: {
    Authorization: `Bearer ${GIT_HUB_TOKEN}`
  }
})

export const githubClient = getSdkGithub(githubApi)
