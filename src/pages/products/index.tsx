import React from 'react'
import { useDispatch } from 'react-redux'
import { HeimCorePool } from '../../constants/tokenAddresses'

import { IPoolTokensProps } from '../../store/modules/poolTokens/types'
import { actionGetPoolTokens } from '../../store/modules/poolTokens/actions'

import usePoolContract from '../../hooks/usePoolContract'

import HeimOperations from '../../components/HeimOperations'
import IndexDetails from '../../components/IndexDetails'

import { ProductsContainer, ComingSoon } from './styles'

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

      const poolTokens: Array<IPoolTokensProps> = await Promise.all(arrayTokensPool.map(async (tokenAddress: string) => {
        return {
          name: await nameToken(tokenAddress),
          symbol: await symbolToken(tokenAddress),
          balance: await balanceToken(HeimCorePool, tokenAddress),
          decimals: await decimalsToken(tokenAddress),
          address: tokenAddress
        }
      }))
      
      dispatch(actionGetPoolTokens(poolTokens))
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
