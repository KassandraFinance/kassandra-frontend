import { createSlice } from '@reduxjs/toolkit'

const initialState = 0

export const chainIdSlice = createSlice({
  name: 'chainId',
  initialState,
  reducers: {
    setChainId: (state: any, action: any) => {
      return action.payload
    }
  }
})

export const { setChainId } = chainIdSlice.actions

export default chainIdSlice.reducer
