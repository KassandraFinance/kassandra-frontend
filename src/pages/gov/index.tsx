import { SWRConfig } from 'swr'

import Gov from '../../templates/Gov'

const Index = () => {
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

export default Index
