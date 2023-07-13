import { configureStore } from '@reduxjs/toolkit'

import articlesFilterReducer from './reducers/articlesFilterSlice'
import postsReducer from './reducers/postsSlice'

export const store = configureStore({
  reducer: {
    articlesFilter: articlesFilterReducer,
    posts: postsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
