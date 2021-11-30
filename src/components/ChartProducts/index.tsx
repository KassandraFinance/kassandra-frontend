import React from 'react'
import useSWR from 'swr'

import ChartPrice from './ChartPrice'
import ChartTVL from './ChartTVL'
import ChartAllocation from './ChartAllocation'

import { GET_CHART } from './graphql'

import * as S from './styles'

const ChartProducts = () => {
  const [inputChecked, setInputChecked] = React.useState<string>('Price')
  const [price, setPrice] = React.useState([])
  const [tvl, setTvl] = React.useState([])
  const [weights, setWeights] = React.useState([])

  const { data } = useSWR(GET_CHART)

  React.useEffect(() => {
    if (data) {
      setPrice(data?.pool.price_candles)
      setTvl(data?.pool.total_value_locked)
      setWeights(data?.pool.weights)
    }
  }, [data])

  return (
    <S.ChartProduct>
      <S.SelectChart>
        <S.Input
          type="radio"
          name="operator"
          id="Price"
          onChange={() => setInputChecked('Price')}
          checked={inputChecked === 'Price'}
        />
        <S.Label htmlFor="Price">Price</S.Label>
        <S.Input
          type="radio"
          name="operator"
          id="TVL"
          onChange={() => setInputChecked('TVL')}
          checked={inputChecked === 'TVL'}
        />
        <S.Label htmlFor="TVL">TVL</S.Label>
        <S.Input
          type="radio"
          name="operator"
          id="Allocation"
          onChange={() => setInputChecked('Allocation')}
          checked={inputChecked === 'Allocation'}
        />
        <S.Label htmlFor="Allocation">Allocation</S.Label>
      </S.SelectChart>
      {inputChecked === 'Price' && <ChartPrice data={price} color="#E843C4" />}
      {inputChecked === 'TVL' && <ChartTVL data={tvl} color="#26DBDB" />}
      {inputChecked === 'Allocation' && <ChartAllocation data={weights} />}
    </S.ChartProduct>
  )
}

export default ChartProducts
