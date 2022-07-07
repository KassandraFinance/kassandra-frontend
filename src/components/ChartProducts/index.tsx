import React from 'react'
import useSWR from 'swr'
import request from 'graphql-request'
import { useDispatch } from 'react-redux'

import { SUBGRAPH_URL } from '../../constants/tokenAddresses'

import { actionSetPeriodSelected } from '../../store/modules/periodSelected/actions'
import { actionSetChartSelected } from '../../store/modules/chartSelected/actions'

import Loading from '../Loading'

import ChartPrice from './ChartPrice'
import ChartTVL from './ChartTVL'
import ChartAllocation from './ChartAllocation'

import { GET_CHART } from './graphql'

import * as S from './styles'
import { actionSetPerformanceValues } from '../../store/modules/performanceValues/actions'
import useMatomoEcommerce from '../../hooks/useMatomoEcommerce'

const arrPeriod: string[] = ['1W', '1M', '3M', '1Y']

interface IChartProductsProps {
  crpPoolAddress: string;
}

const ChartProducts = ({ crpPoolAddress }: IChartProductsProps) => {
  const dispatch = useDispatch()
  const [inputChecked, setInputChecked] = React.useState<string>('Price')
  const [price, setPrice] = React.useState([])
  const [tvl, setTvl] = React.useState([])
  const [allocation, setAllocation] = React.useState([])
  const [loading, setLoading] = React.useState<boolean>(true)

  const [periodSelected, setPeriodSelected] = React.useState<string>('1W')
  const dateNow = new Date()

  const [params, setParams] = React.useState({
    id: crpPoolAddress,
    price_period: 3600,
    period_selected: Math.trunc(dateNow.getTime() / 1000 - 60 * 60 * 24 * 7)
  })

  const { trackEventFunction } = useMatomoEcommerce()

  const { data } = useSWR([GET_CHART, params], (query, params) =>
    request(SUBGRAPH_URL, query, params)
  )

  function returnDate(period: string) {
    switch (period) {
      case '1D':
        setParams(prevState => ({
          ...prevState,
          price_period: 3600,
          period_selected: Math.trunc(dateNow.getTime() / 1000 - 60 * 60 * 24)
        }))
        dispatch(
          actionSetPerformanceValues({
            title: 'Daily Performance'
          })
        )
        break
      case '1W':
        setParams(prevState => ({
          ...prevState,
          price_period: 3600,
          period_selected: Math.trunc(
            dateNow.getTime() / 1000 - 60 * 60 * 24 * 7
          )
        }))
        dispatch(
          actionSetPerformanceValues({
            title: 'Weekly Performance'
          })
        )
        break
      case '1M':
        setParams(prevState => ({
          ...prevState,
          price_period: 86400,
          period_selected: Math.trunc(
            dateNow.getTime() / 1000 - 60 * 60 * 24 * 30
          )
        }))
        dispatch(
          actionSetPerformanceValues({
            title: 'Monthly Performance'
          })
        )
        break
      case '3M':
        setParams(prevState => ({
          ...prevState,
          price_period: 86400,
          period_selected: Math.trunc(
            dateNow.getTime() / 1000 - 60 * 60 * 24 * 90
          )
        }))
        dispatch(
          actionSetPerformanceValues({
            title: '3 Months Performance'
          })
        )
        break
      case '1Y':
        setParams(prevState => ({
          ...prevState,
          price_period: 86400,
          period_selected: Math.trunc(
            dateNow.getTime() / 1000 - 60 * 60 * 24 * 365
          )
        }))
        dispatch(
          actionSetPerformanceValues({
            title: 'Yearly Performance'
          })
        )
        break
      default:
        break
    }
  }

  React.useEffect(() => {
    dispatch(actionSetChartSelected('Price'))
  }, [])

  React.useEffect(() => {
    returnDate('1W')
    setPeriodSelected('1W')
    dispatch(actionSetPeriodSelected('1W'))
  }, [inputChecked])

  React.useEffect(() => {
    setLoading(true)

    if (data) {
      setLoading(false)
    }
  }, [params, data])

  React.useEffect(() => {
    if (data) {
      const newTVL = data?.pool.total_value_locked.map(
        (item: { timestamp: number, value: string }) => {
          return {
            timestamp: item.timestamp,
            value: Number(item.value)
          }
        }
      )

      const newPrice = data?.pool.price_candles.map(
        (item: { timestamp: number, close: string }) => {
          return {
            timestamp: item.timestamp,
            close: Number(item.close)
          }
        }
      )

      setTvl(newTVL)
      setPrice(newPrice)
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
            id="Price-chart"
            onChange={() => {
              setInputChecked('Price')
              dispatch(actionSetChartSelected('Price'))
              trackEventFunction('click-on-tab', 'price', 'chart-invest')
            }}
            checked={inputChecked === 'Price'}
          />
          <S.Label selected={inputChecked === 'Price'} htmlFor="Price-chart">
            Price
          </S.Label>
          <S.Input
            type="radio"
            name="operator"
            id="TVL-chart"
            onChange={() => {
              setInputChecked('TVL')
              dispatch(actionSetChartSelected('TVL'))
              trackEventFunction('click-on-tab', 'tvl', 'chart-invest')
            }}
            checked={inputChecked === 'TVL'}
          />
          <S.Label selected={inputChecked === 'TVL'} htmlFor="TVL-chart">
            TVL
          </S.Label>
          <S.Input
            type="radio"
            name="operator"
            id="Allocation-chart"
            onChange={() => {
              setInputChecked('Allocation')
              dispatch(actionSetChartSelected('Allocation'))
              trackEventFunction('click-on-tab', 'allocation', 'chart-invest')
            }}
            checked={inputChecked === 'Allocation'}
          />
          <S.Label
            selected={inputChecked === 'Allocation'}
            htmlFor="Allocation-chart"
          >
            Allocation
          </S.Label>
        </S.SelectChart>
        <S.SelectPeriod>
          {inputChecked === 'Price' && (
            <li key="day-1D">
              <S.Input
                id="day-1D"
                type="radio"
                checked={periodSelected === '1D'}
                onChange={() => {
                  returnDate('1D')
                  setPeriodSelected('1D')
                  dispatch(actionSetPeriodSelected('1D'))
                  trackEventFunction(
                    'click-on-tab',
                    'day-1D',
                    'chart-product-period'
                  )
                }}
              />
              <S.LabelPeriod
                selectPeriod={periodSelected === '1D'}
                isPrice={inputChecked === 'Price'}
                htmlFor="day-1D"
                title="period"
              >
                1D
              </S.LabelPeriod>
            </li>
          )}
          {arrPeriod.map(period => (
            <li key={`day-${period}`}>
              <S.Input
                id={`day-${period}`}
                type="radio"
                checked={periodSelected === period}
                onChange={() => {
                  returnDate(period)
                  setPeriodSelected(period)
                  dispatch(actionSetPeriodSelected(period))
                  trackEventFunction(
                    'click-on-tab',
                    `day-${period}`,
                    'chart-product-period'
                  )
                }}
              />
              <S.LabelPeriod
                selectPeriod={periodSelected === period}
                htmlFor={`day-${period}`}
                title="period"
              >
                {period}
              </S.LabelPeriod>
            </li>
          ))}
        </S.SelectPeriod>
      </S.Selects>
      {loading ? (
        <S.Wrapper>
          <Loading marginTop={14} />
        </S.Wrapper>
      ) : null}
      {inputChecked === 'Price' && !loading && (
        <ChartPrice data={price} color="#E843C4" />
      )}
      {inputChecked === 'TVL' && !loading && (
        <ChartTVL data={tvl} color="#26DBDB" />
      )}
      {inputChecked === 'Allocation' && !loading && (
        <ChartAllocation data={allocation} />
      )}
    </S.ChartProduct>
  )
}

export default ChartProducts
