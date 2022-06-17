import { SWRConfig } from 'swr'
import Profile from '../../templates/Profile'
import NotFound from '../../templates/404'

export default function Index() {
  return (
    <SWRConfig
      value={{
        refreshInterval: 30000,
        fetcher: url => fetch(url).then(res => res.json())
      }}
    >
      {process.env.NEXT_PUBLIC_VOTE === '1' ? <Profile /> : <NotFound />}
    </SWRConfig>
  )
}
