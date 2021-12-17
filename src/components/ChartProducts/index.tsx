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

const arrPeriod: string[] = ['1W', '1M', '3M', '1Y']

const ChartProducts = () => {
  const [inputChecked, setInputChecked] = React.useState<string>('Price')
  const [price, setPrice] = React.useState([])
  const [tvl, setTvl] = React.useState([])
  const [allocation, setAllocation] = React.useState([])

  const [periodSelected, setPeriodSelected] = React.useState<string>('1W')
  const dateNow = new Date()

  const [params, setParams] = React.useState({
    id: '0x03c0c7b6b55a0e5c1f2fad2c45b453c56a8f866a',
    price_period: 3600,
    period_selected: Math.trunc(dateNow.getTime() / 1000 - 60 * 60 * 24 * 7)
  })
  const { trackEvent } = useMatomo()

  const { data } = useSWR([GET_CHART, params], (query, params) =>
    request(SUBGRAPH_URL, query, params)
  )

  function returnDate(period: string) {
    switch (period) {
      case '1D':
        setParams(prevState => ({
          ...prevState,
          period_selected: Math.trunc(dateNow.getTime() / 1000 - 60 * 60 * 24)
        }))
        break
      case '1W':
        setParams(prevState => ({
          ...prevState,
          period_selected: Math.trunc(
            dateNow.getTime() / 1000 - 60 * 60 * 24 * 7
          )
        }))
        break
      case '1M':
        setParams(prevState => ({
          ...prevState,
          period_selected: Math.trunc(
            dateNow.getTime() / 1000 - 60 * 60 * 24 * 30
          )
        }))
        break
      case '3M':
        setParams(prevState => ({
          ...prevState,
          period_selected: Math.trunc(
            dateNow.getTime() / 1000 - 60 * 60 * 24 * 90
          )
        }))
        break
      case '1Y':
        setParams(prevState => ({
          ...prevState,
          period_selected: Math.trunc(
            dateNow.getTime() / 1000 - 60 * 60 * 24 * 365
          )
        }))
        break
      default:
        break
    }
  }

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
          {inputChecked === 'Price' && (
            <li key="day1D">
              <S.Input
                id="day1D"
                type="radio"
                checked={periodSelected === '1D'}
                onChange={() => {
                  returnDate('1D')
                  setPeriodSelected('1D')
                }}
              />
              <S.LabelPeriod
                selectPeriod={periodSelected === '1D'}
                isPrice={inputChecked === 'Price'}
                htmlFor="day1D"
                title="period"
              >
                1D
              </S.LabelPeriod>
            </li>
          )}
          {arrPeriod.map(period => (
            <li key={`day${period}`}>
              <S.Input
                id={`day${period}`}
                type="radio"
                checked={periodSelected === period}
                onChange={() => {
                  returnDate(period)
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
