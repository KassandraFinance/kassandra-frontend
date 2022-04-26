import { SWRConfig } from 'swr'

import Gov from '../../templates/Gov'

export default function Index() {
  return (
    <SWRConfig
      value={{
        refreshInterval: 30000
      }}
    >
      <Gov />
    </SWRConfig>
  )
}
