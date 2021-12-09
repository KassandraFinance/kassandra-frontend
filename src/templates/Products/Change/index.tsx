import React from 'react'
import Image from 'next/image'
import useSWR from 'swr'
import { request } from 'graphql-request'

import { GET_POOL_PRICE } from './graphql'
import { SUBGRAPH_URL } from '../../../constants/tokenAddresses'

import iconBar from '../../../../public/assets/iconbar.svg'

import * as S from './styles'

const Change = () => {
  const [changeWeek, setChangeWeek] = React.useState<string[]>([])
  const day = Math.trunc(Date.now() / 1000 - 60 * 60 * 24)
  const week = Math.trunc(Date.now() / 1000 - 60 * 60 * 24 * 7)
  const month = Math.trunc(Date.now() / 1000 - 60 * 60 * 24 * 30)
  const quarterly = Math.trunc(Date.now() / 1000 - 60 * 60 * 24 * 90)
  const year = Math.trunc(Date.now() / 1000 - 60 * 60 * 24 * 365)

  const { data } = useSWR([GET_POOL_PRICE], query =>
    request(SUBGRAPH_URL, query, {
      id: '0x03c0c7b6b55a0e5c1f2fad2c45b453c56a8f866a',
      day,
      week,
      month,
      quarterly,
      year
    })
  )

  function calcChange(newPrice: number, oldPrice: number) {
    const calc = ((newPrice - oldPrice) / oldPrice) * 100
    return calc ? calc.toFixed(2) : '0'
  }

  React.useEffect(() => {
    const arrChangePrice = []
    if (data?.now[0].close) {
      const changeDay = calcChange(data.now[0].close, data.day[0]?.close)
      const changeWeek = calcChange(data.now[0].close, data.week[0]?.close)
      const changeMonth = calcChange(data.now[0].close, data.month[0]?.close)
      const changeQuarterly = calcChange(
        data.now[0].close,
        data.quarterly[0]?.close
      )
      const changeYear = calcChange(data.now[0].close, data.year[0]?.close)

      arrChangePrice[0] = changeDay
      arrChangePrice[1] = changeWeek
      arrChangePrice[2] = changeMonth
      arrChangePrice[3] = changeQuarterly
      arrChangePrice[4] = changeYear

      setChangeWeek(arrChangePrice)
    }
  }, [data])

  return (
    <S.Change>
      <S.Title>
        <Image src={iconBar} alt="Icon Bar" />
        <h2>Change</h2>
      </S.Title>
      <table>
        <thead>
          <tr>
            <th>1 day</th>
            <th>1 week</th>
            <th>1 month</th>
            <th>3 months</th>
            <th>1 year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{changeWeek[0]}%</td>
            <td>{changeWeek[1]}%</td>
            <td>{changeWeek[2]}%</td>
            <td>{changeWeek[3]}%</td>
            <td>{changeWeek[4]}%</td>
          </tr>
        </tbody>
      </table>
    </S.Change>
  )
}

export default Change
