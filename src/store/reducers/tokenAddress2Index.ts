import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IAddress2Index {
  [key: string]: number;
}

const initialState: IAddress2Index = {}

export const tokenAddress2IndexSlice = createSlice({
  name: 'tokenAddress2Index',
  initialState,
  reducers: {
    setTokenAddress2Index: (
      state: IAddress2Index,
      action: PayloadAction<IAddress2Index>
    ) => {
      return action.payload
    }
  }
})

export const { setTokenAddress2Index } = tokenAddress2IndexSlice.actions

export default tokenAddress2IndexSlice.reducer
