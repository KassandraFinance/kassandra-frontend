import { SWRConfig } from 'swr'

import About from '../templates/About'

export default function Index() {
  return (
    <SWRConfig
      value={{
        refreshInterval: 10000,
        fetcher: url => fetch(url).then(res => res.json())
      }}
    >
      <About />
    </SWRConfig>
  )
}
