import Products from '../../templates/Products'

import { HeimCRPPOOL, HeimCorePool } from '../../constants/tokenAddresses'

export default function Index() {
  return (
    <Products
      productName="Avalanche Social Index"
      productSymbol="aHYPE"
      productCategories={['Ropsten', 'Pool']}
      crpPoolAddress={HeimCRPPOOL}
      corePoolAddress={HeimCorePool}
    />
  )
}
