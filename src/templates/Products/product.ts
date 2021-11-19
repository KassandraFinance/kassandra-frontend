import { HeimCRPPOOL, HeimCorePool } from '../../constants/tokenAddresses'

export function selectProduct(name: string) {
  if (name === '/products/ahype') {
    return {
      productName: 'Avalanche Social Index',
      productSymbol: 'aHYPE',
      productCategories: `${['Ropsten', 'Pool']}`,
      crpPoolAddress: `${HeimCRPPOOL}`,
      corePoolAddress: `${HeimCorePool}`
    }
  } else {
    return {
      productName: '?',
      productSymbol: '?',
      productCategories: `${['?']}`,
      crpPoolAddress: `${HeimCRPPOOL}`,
      corePoolAddress: `${HeimCorePool}`
    }
  }
}
