import React from 'react'
import { useDispatch } from 'react-redux'
import { HeimCorePool } from '../../constants/tokenAddresses'

import { IPoolTokensProps } from '../../store/modules/poolTokens/types'
import { actionGetPoolTokens } from '../../store/modules/poolTokens/actions'

import usePoolContract from '../../hooks/usePoolContract'

import HeimOperations from '../../components/HeimOperations'
import IndexDetails from '../../components/IndexDetails'

import styled from 'styled-components'

const Products = () => {
  const dispatch = useDispatch()
  const {
    getPoolContract,
    nameToken,
    symbolToken,
    balanceToken,
    decimalsToken,
    getNormalizedWeight
  } = usePoolContract()

  React.useEffect(() => {
    (async () => {
      const poolContract = getPoolContract(HeimCorePool)
      const arrayTokensPool = await poolContract.methods.getCurrentTokens().call()

      const poolTokens: Array<IPoolTokensProps> = await Promise.all(arrayTokensPool.map(async (tokenAddress: string) => (
        {
          name: await nameToken(tokenAddress),
          symbol: await symbolToken(tokenAddress),
          balance: await balanceToken(HeimCorePool, tokenAddress),
          decimals: await decimalsToken(tokenAddress),
          normalizedWeight: await getNormalizedWeight(HeimCorePool, tokenAddress),
          address: tokenAddress,
          isMax: false
        }
      )))

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

const ProductsContainer = styled.section`
  min-height: 100vh;
  display: grid;
  grid-template-columns: auto 440px;
  gap: 60px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const ComingSoon = styled.img`
  max-width: 100%;
  @media (max-width: 900px) {
    display: none;
  }
`

export default Products
