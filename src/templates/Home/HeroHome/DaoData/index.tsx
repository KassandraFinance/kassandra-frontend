import React from 'react'

import { useAppSelector } from '../../../../store/hooks'

import DaoCard from '../DaoCard'

import * as S from './styles'

const DaoData = () => {
  const daoData = useAppSelector(state => state.daoInfo.daoInfo)

  return (
    <S.DaoData>
      {daoData.map(item => (
        <DaoCard key={item.title} value={item.value} title={item.title} />
      ))}
    </S.DaoData>
  )
}

export default DaoData
