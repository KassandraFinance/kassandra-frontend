import React from 'react'
import useSWR from 'swr'
import { request } from 'graphql-request'
import Big from 'big.js'

import DaoCard from '../DaoCard'

import { SUBGRAPH_URL, products } from '../../../../constants/tokenAddresses'
import { GET_DAO_DATA } from './graphql'

import * as S from './styles'

const DaoData = () => {
  const [daoData, setDaoData] = React.useState([
    {
      value: Big(0),
      title: 'TVL'
    },
    {
      value: Big(0),
      title: 'volume'
    },
    {
      value: Big(0),
      title: 'Swap fee'
    },
    {
      value: Big(0),
      title: 'withdraw fee'
    }
  ])
  const ids = products.map(product => product.sipAddress)

  const { data } = useSWR([GET_DAO_DATA, ids], (query, ids) =>
    request(SUBGRAPH_URL, query, {
      ids: ids,
      day: Math.trunc(Date.now() / 1000 - 60 * 60 * 24)
    })
  )

  React.useEffect(() => {
    if (data) {
      const arrData = data.pools

      let swapFees = Big(0)
      let withdrawFees = Big(0)
      let volume = Big(0)
      let tvl = Big(0)
      for (const data of arrData) {
        tvl = tvl.add(Big(data.total_value_locked_usd))

        swapFees = swapFees.add(
          data.swap.reduce((acc: Big, current: { volume_usd: string }) => {
            return Big(current.volume_usd).add(acc)
          }, 0)
        )

        withdrawFees = withdrawFees.add(
          data.withdraw.reduce((acc: Big, current: { volume_usd: string }) => {
            return Big(current.volume_usd).add(acc)
          }, 0)
        )

        volume = volume.add(
          data.volumes.reduce((acc: Big, current: { volume_usd: string }) => {
            return Big(current.volume_usd).add(acc)
          }, 0)
        )
      }

      setDaoData([
        {
          value: tvl,
          title: 'TVL'
        },
        {
          value: volume,
          title: 'volume'
        },
        {
          value: swapFees,
          title: 'Swap fee'
        },
        {
          value: withdrawFees,
          title: 'withdraw fee'
        }
      ])
    }
  }, [data])

  return (
    <S.DaoData>
      {daoData.map(item => (
        <DaoCard
          key={item.title}
          value={item.value.toString()}
          title={item.title}
        />
      ))}
    </S.DaoData>
  )
}

export default DaoData
