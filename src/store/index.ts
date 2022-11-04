import { configureStore } from '@reduxjs/toolkit'

import daoInfoReducer from './reducers/daoInfoSlice'

export const store = configureStore({
  reducer: {
    daoInfo: daoInfoReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
