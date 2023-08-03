import { strapiClient } from '@/graphQLClients'
import { PostDataType } from '@/store/reducers/postsSlice'
import { flattenObj } from '@/utils/strapiResponseTransformer'

type GetPostsProps = {
  isPRO?: boolean
  page: number
  perPage: number
  tags: string[]
  coins: string[]
  tab?: string
}

export const getPosts = async ({
  isPRO,
  page,
  perPage,
  tags,
  coins,
  tab
}: GetPostsProps) => {
  const data = await strapiClient.ResearchPosts({
    isPRO: isPRO ?? undefined,
    tags: tags.length > 0 ? tags : undefined,
    pagination: { page, pageSize: perPage },
    tab: tab ?? undefined,
    coins: coins.length > 0 ? coins : undefined
  })

  const flatPosts = flattenObj<PostDataType[]>(data.posts)
  const flatTags = flattenObj<{ name: string }[]>(data.tags)
  const flatCoins = flattenObj<
    {
      name: string
      image: { url: string; alternativeText: string }
      coinGeckoID: string
      symbol: string
    }[]
  >(data.coins)
  const flatTabs = flattenObj<{ tabName: string; position: number }[]>(
    data.tabs
  )

  return {
    posts: flatPosts,
    tags: flatTags.map(val => val.name),
    coins: flatCoins,
    tabs: flatTabs
      .sort((a, b) => a.position - b.position)
      .map(val => val.tabName),
    postsStats: {
      total: data.posts?.meta.pagination.total,
      pageCount: data.posts?.meta.pagination.pageCount
    }
  }
}
