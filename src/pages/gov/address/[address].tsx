import WalletAddress from '../../../templates/Gov/WalletAddress'
import { SWRConfig } from 'swr'

const Index = () => {
  return (
    <SWRConfig
      value={{
        refreshInterval: 30000,
        fetcher: url => fetch(url).then(res => res.json())
      }}
    >
      <WalletAddress />
    </SWRConfig>
  )
}

export default Index
