import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Invest: '...',
  Withdraw: '...',
  Swap: '...'
}

export const feesSlice = createSlice({
  name: 'fees',
  initialState,
  reducers: {
    setFees: (state: any, action: any) => {
      return action.payload
    }
  }
})

export const { setFees } = feesSlice.actions

export default feesSlice.reducer
