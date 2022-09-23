import { configureStore } from '@reduxjs/toolkit'

import userWalletAddressReducer from './reducers/userWalletAddress'
import chainIdReducer from './reducers/chainId'
import poolImagesReducer from './reducers/poolImages'
import tokenAddress2IndexReducer from './reducers/tokenAddress2Index'
import daoInfoReducer from './reducers/daoInfoSlice'

export const store = configureStore({
  reducer: {
    userWalletAddress: userWalletAddressReducer,
    chainId: chainIdReducer,
    poolImages: poolImagesReducer,
    tokenAddress2Index: tokenAddress2IndexReducer,
    daoInfo: daoInfoReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
