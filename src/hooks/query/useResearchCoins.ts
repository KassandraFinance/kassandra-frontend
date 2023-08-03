import { useAppDispatch } from '@/store/hooks'
import { setCoins } from '@/store/reducers/postsSlice'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

type UseResearchCoinsProps = {
  query?: string
}

const fetchResearchCoins = async ({
  query,
  baseURL = ''
}: {
  query?: string
  baseURL?: string
}) => {
  const urlSearchParams = new URLSearchParams(``)
  urlSearchParams.set('query', query ?? '')

  const response = await fetch(
    `${baseURL}/api/get-coins?${urlSearchParams.toString()}`
  )

  const data = await response.json()
  console.log(data)
  if (!response.ok) {
    throw new Error(data.message)
  }

  return data as {
    coins: {
      name: string
      symbol: string
      coinGeckoID: string
      image: { url: string; alternativeText: string }
    }[]
  }
}

export const useResearchCoins = ({ query }: UseResearchCoinsProps) => {
  const dispatch = useAppDispatch()
  const coinsQuery = useQuery(
    ['researchCoins', { query }],
    async () => {
      return await fetchResearchCoins({ query })
    },
    {
      staleTime: 1000 * 60 * 60 * 24 * 7 // 1 week
    }
  )

  React.useEffect(() => {
    if (coinsQuery.data) dispatch(setCoins(coinsQuery.data.coins))
  }, [dispatch, coinsQuery.data])

  return coinsQuery
}
