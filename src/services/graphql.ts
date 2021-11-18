import { ApolloClient, InMemoryCache } from '@apollo/client'

const APIURL = 'https://graph.kassandra.finance/subgraphs/name/Kassandra'

export const client = new ApolloClient({
  uri: APIURL,
  cache: new InMemoryCache()
})
