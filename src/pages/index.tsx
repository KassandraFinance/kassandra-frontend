import { SWRConfig } from 'swr'

import Home from '../templates/Home'

export default function Index() {
  return (
    <SWRConfig
      value={{
        refreshInterval: 10000,
        fetcher: url => fetch(url).then(res => res.json())
      }}
    >
      <Home />
    </SWRConfig>
  )
}
