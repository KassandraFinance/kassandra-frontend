import { useQuery } from '@tanstack/react-query'

export const fetchKacyData = async () => {
  const res = await fetch('/api/overview').then(res => res.json())

  return res
}

export const useKacyData = () => {
  return useQuery({
    queryKey: ['kacy-data'],
    queryFn: async () => {
      return fetchKacyData()
    }
  })
}
