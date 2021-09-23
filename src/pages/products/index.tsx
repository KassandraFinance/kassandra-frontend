import React from 'react'
import styled from 'styled-components'
import { useSelector, RootStateOrAny } from 'react-redux'

import theme from '../../styles/theme'

import HeimOperations from '../../components/HeimOperations'
import IndexDetails from '../../components/IndexDetails'


const Products = () => {
  const [coinInfoList, setCoinInfoList] = React.useState<Array<any>>([])
  
  const { poolTokensArray } = useSelector((state: RootStateOrAny) => state)

  async function getCoinList() {
    const URL = 'https://api.coingecko.com/api/v3/coins/list'
    await fetch(URL, {
      method: 'get'
    })
      .then(res => res.json())
      .then(res => res.forEach((item: any) => isTokenPool(item)))
      .catch(err => err)
  }

  function isTokenPool(value: any) {
    for (let i = 0; i < poolTokensArray.length; i++) {
      let element = poolTokensArray[i];
      // let newName = element.name.replace("Kassandra Test ", "")

      if (value.symbol === element.symbol.toLowerCase()) {
        if (value.symbol === "uni" && value.name !== "Uniswap") {
          continue
        }
        if (value.symbol === "grt" && value.name !== "The Graph") {
          continue
        }
        getCoin(value.id, element.allocation)
      }
    }
  }

  async function getCoin(id: string, allocation: number) {
    const URL = `https://api.coingecko.com/api/v3/coins/${id}`
    await fetch(URL, {
      method: 'get'
    })
      .then(res => res.json())
      .then(res => setCoinInfoList(prevState => [...prevState, {...res, allocation}]))
      .catch(err => err)
  }

  React.useEffect(() => {
    if (poolTokensArray.length < 1) {
      return
    }
    getCoinList()
    setCoinInfoList([])
  }, [poolTokensArray])

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
      </section>
    </>
  )
}

const ProductsContainer = styled.section`
  max-width: 1520px;
  margin: 40px auto;
  padding: 0 ${theme.spacings.space32};
;

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
