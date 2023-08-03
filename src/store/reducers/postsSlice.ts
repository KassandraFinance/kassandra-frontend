import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type PostDataType = {
  id: string
  title: string
  banner: {
    url: string
    alternativeText: string
  }
  summary: string
  publishedAt: string
  highlighted: boolean
  slug: string
  readTimeInMinutes: number
  writers: {
    id: string
    name: string
    profilePicture: {
      url: string
      alternativeText?: string
    }
  }[]
  tags: {
    name: string
  }[]
}

export type TagsDataType = {
  name: string
}

type PostsStats = {
  pageCount: number
  total: number
}

type Coin = {
  name: string
  image: {
    url: string
    alternativeText: string
  }
  symbol: string
  coinGeckoID: string
}

type PostState = {
  posts: PostDataType[]
  tags: string[]
  coins: Coin[]
  postsStats: PostsStats
  highlightedPost: PostDataType
  tabs: string[]
}

const initialState: PostState = {
  posts: [],
  tags: [],
  coins: [],
  postsStats: { pageCount: 0, total: 0 },
  tabs: [],
  highlightedPost: {
    id: '',
    title: '',
    banner: {
      url: '',
      alternativeText: ''
    },
    readTimeInMinutes: 0,
    writers: [],
    tags: [],
    summary: '',
    publishedAt: '',
    highlighted: true,
    slug: ''
  }
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<PostDataType[]>) => {
      state.posts = action.payload
    },
    setTags: (state, action: PayloadAction<string[]>) => {
      state.tags = action.payload
    },
    setCoins: (state, action: PayloadAction<Coin[]>) => {
      state.coins = action.payload
    },
    setPostsStats: (state, action: PayloadAction<PostsStats>) => {
      state.postsStats = action.payload
    },
    setHighlightedPost: (state, action: PayloadAction<PostDataType>) => {
      state.highlightedPost = action.payload
    },
    setTabs: (state, action: PayloadAction<string[]>) => {
      state.tabs = action.payload
    }
  }
})

export const {
  setPosts,
  setTags,
  setCoins,
  setPostsStats,
  setHighlightedPost,
  setTabs
} = postsSlice.actions

export default postsSlice.reducer
