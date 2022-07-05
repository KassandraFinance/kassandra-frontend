import { createSlice } from '@reduxjs/toolkit'

export interface Address2Index {
  [key: string]: number;
}

const initialState: Address2Index = {}

export const tokenAddress2IndexSlice = createSlice({
  name: 'tokenAddress2Index',
  initialState,
  reducers: {
    setTokenAddress2Index: (state: any, action: any) => {
      return action.payload
    }
  }
})

export const { setTokenAddress2Index } = tokenAddress2IndexSlice.actions

export default tokenAddress2IndexSlice.reducer
