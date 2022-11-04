import { configureStore } from '@reduxjs/toolkit'

import userWalletAddressReducer from './reducers/userWalletAddress'
import daoInfoReducer from './reducers/daoInfoSlice'

export const store = configureStore({
  reducer: {
    userWalletAddress: userWalletAddressReducer,
    daoInfo: daoInfoReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
