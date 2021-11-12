import Products from '../../templates/Products'

import { HeimCRPPOOL, HeimCorePool } from '../../constants/tokenAddresses'

export default function Index() {
  return (
    <Products
      productName="Heimdall Social Index"
      productCategories={['Ropsten', 'Pool']}
      crpPool={HeimCRPPOOL}
      corePool={HeimCorePool}
    />
  )
}
