import React from 'react'
import useSWR from 'swr'
import { request } from 'graphql-request'
import Big from 'big.js'

import { SUBGRAPH_URL, products } from '../../../../constants/tokenAddresses'
import { GET_DAO_DATA } from './graphql'

import { useAppSelector } from '../../../../store/hooks'

import DaoCard from '../DaoCard'

import * as S from './styles'

const DaoData = () => {
  const daoData = useAppSelector(state => state.daoInfo.daoInfo)
  // const [daoData, setDaoData] = React.useState([
  //   {
  //     value: Big(0),
  //     title: 'TVL'
  //   },
  //   {
  //     value: Big(0),
  //     title: 'volume'
  //   },
  //   {
  //     value: Big(0),
  //     title: 'Swap fees'
  //   },
  //   {
  //     value: Big(0),
  //     title: 'withdraw fees'
  //   }
  // ])

  // const sipAddresses = products.map(product => product.sipAddress)

  // const { data } = useSWR([GET_DAO_DATA, sipAddresses], (query, sipAddresses) =>
  //   request(SUBGRAPH_URL, query, {
  //     ids: sipAddresses
  //   })
  // )

  // React.useEffect(() => {
  //   if (data) {
  //     const arrData = data.factory

  //     let swapFees = Big(0)
  //     let withdrawFees = Big(0)
  //     let volume = Big(0)

  //     swapFees = swapFees.add(
  //       arrData.swap.reduce((acc: Big, current: { volume_usd: string }) => {
  //         return Big(current.volume_usd).add(acc)
  //       }, 0)
  //     )

  //     withdrawFees = withdrawFees.add(
  //       arrData.withdraw.reduce((acc: Big, current: { volume_usd: string }) => {
  //         return Big(current.volume_usd).add(acc)
  //       }, 0)
  //     )

  //     volume = volume.add(
  //       arrData.volumes.reduce((acc: Big, current: { volume_usd: string }) => {
  //         return Big(current.volume_usd).add(acc)
  //       }, 0)
  //     )

  //     setDaoData([
  //       {
  //         value: Big(arrData.total_value_locked_usd),
  //         title: 'TVL'
  //       },
  //       {
  //         value: volume,
  //         title: 'volume'
  //       },
  //       {
  //         value: swapFees,
  //         title: 'Swap fees'
  //       },
  //       {
  //         value: withdrawFees,
  //         title: 'withdraw fees'
  //       }
  //     ])
  //   }
  // }, [data])

  return (
    <S.DaoData>
      {daoData.map(item => (
        <DaoCard key={item.title} value={item.value} title={item.title} />
      ))}
    </S.DaoData>
  )
}

export default DaoData
