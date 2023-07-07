import { useQuery } from '@tanstack/react-query'
import Big from 'big.js'

import { kassandraClient } from '@/graphQLClients'

export const fetchDaoInfo = async () => {
  return kassandraClient.DaoInfo().then(res => {
    const r = res.factories
    const sum = r?.reduce(
      (acc, factory) => {
        return {
          total_value_locked_usd: acc.total_value_locked_usd.add(
            factory.total_value_locked_usd
          ),
          total_volume_usd: acc.total_volume_usd.add(factory.total_volume_usd),
          total_fees_swap_usd: acc.total_fees_swap_usd.add(
            factory.total_fees_swap_usd
          ),
          total_fees_exit_usd: acc.total_fees_exit_usd.add(
            factory.total_fees_exit_usd
          )
        }
      },
      {
        total_value_locked_usd: Big(0),
        total_volume_usd: Big(0),
        total_fees_swap_usd: Big(0),
        total_fees_exit_usd: Big(0)
      }
    )

    const daoInfo = {
      daoInfo: [
        {
          value: sum.total_value_locked_usd.toString(),
          title: 'TVL'
        },
        {
          value: sum.total_volume_usd.toString(),
          title: 'volume'
        },
        {
          value: sum.total_fees_swap_usd.toString(),
          title: 'Swap fees'
        },
        {
          value: sum.total_fees_exit_usd.toString(),
          title: 'PROTOCOL FEES'
        }
      ]
    }

    return daoInfo
  })
}

export const useDaoInfo = () => {
  return useQuery({
    queryKey: ['dao-info'],
    queryFn: async () => fetchDaoInfo(),
    staleTime: 1000 * 60,
    refetchInterval: 1000 * 60
  })
}
