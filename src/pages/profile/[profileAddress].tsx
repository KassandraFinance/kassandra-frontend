import { SWRConfig } from 'swr'

import Profile from '../../templates/Profile'

export default function Index() {
  return (
    <SWRConfig
      value={{
        refreshInterval: 30000,
        fetcher: url => fetch(url).then(res => res.json())
      }}
    >
      <Profile />
    </SWRConfig>
  )
}
