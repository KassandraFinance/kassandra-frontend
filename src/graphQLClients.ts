import { GraphQLClient } from 'graphql-request'
import { SUBGRAPH_URL } from './constants/tokenAddresses'
import { getSdk as getSdkKassandra } from './gql/generated/kassandraApi'
import { getSdk as getSdkGithub } from './gql/generated/githubApi'
import { getSdk as getSdkKassandraBlog } from './gql/generated/kassandraBlogApi'
import { env } from '@/env.mjs'

export const kassandraApi = new GraphQLClient(SUBGRAPH_URL)
export const kassandraClient = getSdkKassandra(kassandraApi)

const GIT_HUB_TOKEN = env.NEXT_PUBLIC_GIT_HUB_TOKEN
export const githubApi = new GraphQLClient('https://api.github.com/graphql', {
  headers: {
    Authorization: `Bearer ${GIT_HUB_TOKEN}`
  }
})

export const githubClient = getSdkGithub(githubApi)

export const kassandraBlogApi = new GraphQLClient(
  'https://strapi-kassandra-production.up.railway.app/graphql',
  {
    headers: {
      Authorization: `Bearer ${
        typeof window !== 'undefined'
          ? 'TRIED_TO_ACCESS_SERVER_VARIABLES'
          : env.STRAPI_API_KEY
      }`
    },
    fetch: (input: RequestInfo | URL, init?: RequestInit | undefined) => {
      if (typeof window !== 'undefined')
        throw new Error('Tried to acesss Strapi from client-side.')

      return fetch(input, init)
    }
  }
)

export const strapiClient = getSdkKassandraBlog(kassandraBlogApi)
