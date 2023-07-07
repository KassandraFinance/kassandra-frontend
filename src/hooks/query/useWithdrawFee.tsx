import { useQuery } from '@tanstack/react-query'

import { kassandraClient } from '@/graphQLClients'

type UseWithdrawFeeProps = {
  ids: string[]
}

export const fetchWithdrawFee = async ({ ids }: UseWithdrawFeeProps) => {
  return kassandraClient
    .WithdrawFee({
      ids
    })
    .then(res => res.pools)
}

export const usePoolInfo = ({ ids }: UseWithdrawFeeProps) => {
  return useQuery({
    queryKey: ['fees'],
    queryFn: async () => fetchWithdrawFee({ ids })
  })
}
