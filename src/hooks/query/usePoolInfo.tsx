import { useQuery } from '@tanstack/react-query'

import { kassandraClient } from '@/graphQLClients'
import { getWeightsNormalizedV2 } from '@/utils/updateAssetsToV2'

type UsePoolInfoProps = {
  id: string
  day: number
}

export const fetchPoolInfo = async ({ id, day }: UsePoolInfoProps) => {
  return kassandraClient
    .PoolInfo({
      id: id,
      day: day
    })
    .then(res => {
      const pool = res.pool

      if (!pool) return pool

      let underlying_assets = pool?.underlying_assets

      try {
        const assetsV2 = getWeightsNormalizedV2(
          pool.weight_goals,
          underlying_assets
        )
        if (assetsV2) {
          underlying_assets = assetsV2
        }
      } catch (error) {
        console.log(error)
      }

      return { ...pool, underlying_assets }
    })
}
//
export const usePoolInfo = ({ id, day }: UsePoolInfoProps) => {
  return useQuery({
    queryKey: ['pool-info', id],
    queryFn: async () => fetchPoolInfo({ id, day })
  })
}
