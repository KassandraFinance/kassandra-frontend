import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FeesSlice {
  Invest: string;
  Withdraw: string;
  Swap: string;
}

const initialState: FeesSlice = {
  Invest: '...',
  Withdraw: '...',
  Swap: '...'
}

export const feesSlice = createSlice({
  name: 'fees',
  initialState,
  reducers: {
    setFees: (state: any, action: PayloadAction<FeesSlice>) => {
      return action.payload
    }
  }
})

export const { setFees } = feesSlice.actions

export default feesSlice.reducer
