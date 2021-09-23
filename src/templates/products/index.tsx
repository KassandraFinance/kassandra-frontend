import React from 'react'
import { useSelector, RootStateOrAny } from 'react-redux'

import * as S from './styles'

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
      .then(res => setCoinInfoList(prevState => [...prevState, { ...res, allocation }]))
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
      <S.Intro>
        <div style={{ display: 'flex' }}>
          <img src='assets/logo-heim.svg ' alt='logo-heim' />
          <div>
            <h1>Heim Social Index</h1>
            <span>Heim</span>
          </div>
        </div>
        <S.IntroValues>
          <S.IntroPrice>
            <h3>
              Price
            </h3>
            <div />
            <span>
              $1,235.124
            </span>
          </S.IntroPrice>
          <S.IntroTVL>
            <h3>
              TVL
            </h3>
            <div />
            <span>
              $785,345.67
            </span>
          </S.IntroTVL>
        </S.IntroValues>
      </S.Intro>
      <S.ProductsContainer>
        <S.ComingSoon src="assets/coming-soon.png" alt="coming-soon" />

        <HeimOperations />
      </S.ProductsContainer>
      <section>
        <IndexDetails coinInfoList={coinInfoList} />
      </section>
    </>
  )
}

export default Products
