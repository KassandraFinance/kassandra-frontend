import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = 0

export const chainIdSlice = createSlice({
  name: 'chainId',
  initialState,
  reducers: {
    setChainId: (state: number, action: PayloadAction<number>) => {
      return action.payload
    }
  }
})

export const { setChainId } = chainIdSlice.actions

export default chainIdSlice.reducer
