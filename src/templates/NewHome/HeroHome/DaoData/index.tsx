import React from 'react'

import DaoCard from '../DaoCard'

import * as S from './styles'

const mockData = [
  {
    value: 12.95923,
    title: 'TVL'
  },
  {
    value: 12.95923,
    title: 'volume'
  },
  {
    value: 12.95923,
    title: 'Swap fee'
  },
  {
    value: 12.95923,
    title: 'withdraw fee'
  }
]

const DaoData = () => {
  return (
    <S.Container>
      {mockData.map(item => (
        <DaoCard key={item.title} value={item.value} title={item.title} />
      ))}
    </S.Container>
  )
}

export default DaoData
