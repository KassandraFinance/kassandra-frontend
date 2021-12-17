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

const arrPeriod = ['1D', '1W', '1M', '3M', 'MAX']

const ChartProducts = () => {
  const [inputChecked, setInputChecked] = React.useState<string>('Price')
  const [price, setPrice] = React.useState([])
  const [tvl, setTvl] = React.useState([])
  const [allocation, setAllocation] = React.useState([])

  const [periodSelected, setPeriodSelected] = React.useState<string>('1D')
  const [time, setTime] = React.useState<number>(3600)

  const { trackEvent } = useMatomo()

  const { data } = useSWR(
    [GET_CHART, '0x03c0c7b6b55a0e5c1f2fad2c45b453c56a8f866a'],
    (query, id) =>
      request(SUBGRAPH_URL, query, {
        id,
        price_period: 3600,
        period_selected: 1612152000 //timestamp 01/01/2021
      })
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
      <S.Selects>
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
          <S.Label
            selected={inputChecked === 'Allocation'}
            htmlFor="Allocation"
          >
            Allocation
          </S.Label>
        </S.SelectChart>
        <S.SelectPeriod>
          {arrPeriod.map(period => (
            <li key={`day${period}`}>
              <S.InputPerid
                id={`day${period}`}
                type="radio"
                checked={periodSelected === period}
                onChange={() => {
                  setTime(3600)
                  setPeriodSelected(period)
                }}
              />
              <S.LabelPeriod
                selectPeriod={periodSelected === period}
                htmlFor={`day${period}`}
                title="period"
              >
                {period}
              </S.LabelPeriod>
            </li>
          ))}
        </S.SelectPeriod>
      </S.Selects>
      {inputChecked === 'Price' && <ChartPrice data={price} color="#E843C4" />}
      {inputChecked === 'TVL' && <ChartTVL data={tvl} color="#26DBDB" />}
      {inputChecked === 'Allocation' && <ChartAllocation data={allocation} />}
    </S.ChartProduct>
  )
}

export default ChartProducts
