import { configureStore } from '@reduxjs/toolkit'

import userWalletAddressReducer from './reducers/userWalletAddress'
import chainIdReducer from './reducers/chainId'
import feesReducer from './reducers/fees'
import chartSelectedReducer from './reducers/chartSelected'
import periodSelectedReducer from './reducers/periodSelected'
import poolImagesReducer from './reducers/poolImages'
import tokenAddress2IndexReducer from './reducers/tokenAddress2Index'
import performanceValuesReducer from './reducers/performanceValues'
import modalAlertTextReducer from './reducers/modalAlertText'

export const store = configureStore({
  reducer: {
    userWalletAddress: userWalletAddressReducer,
    chainId: chainIdReducer,
    fees: feesReducer,
    chartSelected: chartSelectedReducer,
    poolImages: poolImagesReducer,
    tokenAddress2Index: tokenAddress2IndexReducer,
    performanceValues: performanceValuesReducer,
    periodSelected: periodSelectedReducer,
    modalAlertText: modalAlertTextReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
