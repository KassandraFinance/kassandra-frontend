import { useQuery } from '@tanstack/react-query'

import { MEDIUM_FEED_URL } from '@/constants/tokenAddresses'

export const fetchMedium = async () => {
  const res = await fetch(MEDIUM_FEED_URL).then(res => res.json())

  return res
}

export const useMedium = () => {
  return useQuery({
    queryKey: ['medium'],
    queryFn: async () => {
      return fetchMedium()
    }
  })
}
