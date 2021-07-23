import React from 'react'
import { useDispatch } from 'react-redux'
import { HeimCorePool } from '../../constants/tokenAddresses'

import { actionGetTokensPool } from '../../store/modules/corePool/actions'

import HeimOperations from '../../components/HeimOperations'
import IndexDetails from '../../components/IndexDetails'
import usePoolContract from '../../hooks/usePoolContract'

import { ProductsContainer, ComingSoon } from './styles'
import { ICorePoolProps } from '../../store/modules/corePool/types'

const Products = () => {
  const dispatch = useDispatch()
  const { 
    getPoolContract, 
    nameToken, 
    symbolToken,
    balanceToken,
    decimalsToken
  } = usePoolContract()

  React.useEffect(() => {
    (async () => {
      const poolContract = getPoolContract(HeimCorePool)
      const arrayTokensPool = await poolContract.methods.getCurrentTokens().call()

      const tokensPool: Array<ICorePoolProps> = await Promise.all(arrayTokensPool.map(async (tokenAddress: string) => {
        return {
          name: await nameToken(tokenAddress),
          symbol: await symbolToken(tokenAddress),
          balance: await balanceToken(HeimCorePool, tokenAddress),
          decimals: await decimalsToken(tokenAddress)
        }
      }))
      
      dispatch(actionGetTokensPool(tokensPool))
    })()
  }, [])

  return (
    <>
      <ProductsContainer>
        <ComingSoon src="assets/coming-soon.png" alt="coming-soon" />
        <HeimOperations />
      </ProductsContainer>
      <section>
        <IndexDetails />
      </section>
    </>
  )
}

export default Products
