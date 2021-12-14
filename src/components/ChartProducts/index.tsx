import React from 'react'
import useSWR from 'swr'
import request from 'graphql-request'
import { useMatomo } from '@datapunt/matomo-tracker-react'

import { SUBGRAPH_URL } from '../../constants/tokenAddresses'

import ChartPrice from './ChartPrice'
import ChartTVL from './ChartTVL'
import ChartAllocation from './ChartAllocation'

import { GET_CHART } from './graphql'

import * as S from './styles'

const ChartProducts = () => {
  const [inputChecked, setInputChecked] = React.useState<string>('Price')
  const [price, setPrice] = React.useState([])
  const [tvl, setTvl] = React.useState([])
  const [allocation, setAllocation] = React.useState([])

  const { trackEvent } = useMatomo()

  const { data } = useSWR(
    [GET_CHART, '0x03c0c7b6b55a0e5c1f2fad2c45b453c56a8f866a'],
    (query, id) => request(SUBGRAPH_URL, query, { id, price_period: 3600 })
  )

  function matomoEvent(action: string, name: string) {
    trackEvent({
      category: 'chart-invest',
      action,
      name
    })
  }

  React.useEffect(() => {
    if (data) {
      setPrice(data?.pool.price_candles)
      setTvl(data?.pool.total_value_locked)
      setAllocation(data?.pool.weights)
    }
  }, [data])

  return (
    <S.ChartProduct>
      <S.SelectChart>
        <S.Input
          type="radio"
          name="operator"
          id="Price"
          onChange={() => {
            setInputChecked('Price')
            matomoEvent('click-on-tab', 'price')
          }}
          checked={inputChecked === 'Price'}
        />
        <S.Label selected={inputChecked === 'Price'} htmlFor="Price">
          Price
        </S.Label>
        <S.Input
          type="radio"
          name="operator"
          id="TVL"
          onChange={() => {
            setInputChecked('TVL')
            matomoEvent('click-on-tab', 'tvl')
          }}
          checked={inputChecked === 'TVL'}
        />
        <S.Label selected={inputChecked === 'TVL'} htmlFor="TVL">
          TVL
        </S.Label>
        <S.Input
          type="radio"
          name="operator"
          id="Allocation"
          onChange={() => {
            setInputChecked('Allocation')
            matomoEvent('click-on-tab', 'allocation')
          }}
          checked={inputChecked === 'Allocation'}
        />
        <S.Label selected={inputChecked === 'Allocation'} htmlFor="Allocation">
          Allocation
        </S.Label>
      </S.SelectChart>
      {inputChecked === 'Price' && <ChartPrice data={price} color="#E843C4" />}
      {inputChecked === 'TVL' && <ChartTVL data={tvl} color="#26DBDB" />}
      {inputChecked === 'Allocation' && <ChartAllocation data={allocation} />}
    </S.ChartProduct>
  )
}

export default ChartProducts
