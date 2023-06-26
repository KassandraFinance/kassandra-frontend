import { useDaoInfo } from '@/hooks/query/useDaoInfo'

import DaoCard from '../DaoCard'

import * as S from './styles'

const DaoData = () => {
  const { data } = useDaoInfo()

  return (
    <S.DaoData>
      {data?.daoInfo?.map(item => (
        <DaoCard key={item.title} value={item.value} title={item.title} />
      ))}
    </S.DaoData>
  )
}

export default DaoData
