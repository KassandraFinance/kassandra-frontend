import NotFound from './../../templates/404'

export default function Index() {
  return <NotFound />
}

// // import { request } from 'graphql-request'
// // import { RequestDocument } from 'graphql-request/dist/types'

// import { SWRConfig } from 'swr'

// import Products from '../../templates/Products'

// // const URL = 'https://graph.kassandra.finance/subgraphs/name/Kassandra'

// export default function Index() {
//   return (
//     <>
//       <SWRConfig
//         value={{
//           refreshInterval: 5000
//           // fetcher: async (query: RequestDocument) => {
//           //   console.log(await request(URL, query))
//           //   return await request(URL, query)
//           // }
//         }}
//       >
//         <Products />
//       </SWRConfig>
//     </>
//   )
// }
