import { useAppDispatch } from '@/store/hooks'
import { PostDataType, setPosts } from '@/store/reducers/postsSlice'
import { useQuery } from '@tanstack/react-query'

type QueryReturn = {
  posts: PostDataType[]
  tags: string[]
  readingDifficulties: string[]
  postsStats: {
    pageCount: number
    total: number
  }
}

type UseResearchPostsProps = {
  page: number
  tags: string[]
  coins: string[]
  readingDifficulties: string[]
  isPRO: boolean
  posts?: PostDataType[]
  postsStats?: {
    pageCount: number
    total: number
  }
  tab?: string
}

type FetchResearchPosts = {
  page: number
  tags: string[]
  coins: string[]
  readingDifficulties: string[]
  isPRO: boolean
  baseURL?: string
  tab?: string
}

export const fetchResearchPosts = async ({
  page,
  tags,
  coins,
  readingDifficulties,
  isPRO,
  baseURL = '',
  tab
}: FetchResearchPosts) => {
  const urlSearchParams = new URLSearchParams(``)
  urlSearchParams.set('page', String(page))
  urlSearchParams.set('tags', tags.join(','))
  urlSearchParams.set('coins', coins.join(','))
  urlSearchParams.set('isPRO', String(isPRO ? true : undefined))
  urlSearchParams.set('readingDifficulties', readingDifficulties.join(','))
  urlSearchParams.set('tab', String(tab ?? undefined))

  const response = await fetch(
    `${baseURL}/api/get-posts?${urlSearchParams.toString()}`
  )

  const data = await response.json()

  if (!response.ok) {
    await Promise.reject(new Error(data.error.issues[0].message))
  }
  return data as QueryReturn
}

export const useResearchPosts = ({
  page,
  tags,
  coins,
  readingDifficulties,
  isPRO,
  posts,
  postsStats,
  tab
}: UseResearchPostsProps) => {
  const dispatch = useAppDispatch()

  return useQuery({
    queryKey: [
      'posts',
      page,
      tags,
      coins,
      readingDifficulties,
      tab,
      { isPro: isPRO ? true : undefined }
    ],
    queryFn: async () => {
      return await fetchResearchPosts({
        page,
        tags,
        coins,
        readingDifficulties,
        isPRO,
        tab
      })
    },
    onSuccess: data => {
      dispatch(setPosts(data.posts))
    },
    staleTime: 1000 * 60 * 15, // 15 minutes
    refetchInterval: 1000 * 60 * 15, // 15 minutes
    placeholderData:
      posts && postsStats
        ? {
            posts,
            postsStats,
            readingDifficulties: [],
            tags: []
          }
        : undefined
  })
}
