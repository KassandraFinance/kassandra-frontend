import { combineReducers } from 'redux'

import feesReducer from './fees/reducer'
import chainIdReducer from './chainId/reducer'
import poolImagesReducer from './poolImages/reducer'
import poolTokensReducer from './poolTokens/reducer'
import chartSelectedReducer from './chartSelected/reducer'
import periodSelectedReducer from './periodSelected/reducer'
import userWalletAddressReducer from './userWalletAddress/reducer'
import tokenAddress2IndexReducer from './tokenAddress2Index/reducer'
import performanceValuesReducer from './performanceValues/reducer'

export default combineReducers({
  fees: feesReducer,
  chainId: chainIdReducer,
  poolImages: poolImagesReducer,
  poolTokensArray: poolTokensReducer,
  chartSelected: chartSelectedReducer,
  periodSelected: periodSelectedReducer,
  userWalletAddress: userWalletAddressReducer,
<<<<<<< HEAD
  tokenAddress2Index: tokenAddress2IndexReducer,
  performanceValues: performanceValuesReducer
=======
  tokenAddress2Index: tokenAddress2IndexReducer
>>>>>>> 1583cb5bb1e34b0d937ef1ac10c643ccd86e9687
})
