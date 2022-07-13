import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IFeesSlice {
  Invest: string;
  Withdraw: string;
  Swap: string;
}

const initialState: IFeesSlice = {
  Invest: '...',
  Withdraw: '...',
  Swap: '...'
}

export const feesSlice = createSlice({
  name: 'fees',
  initialState,
  reducers: {
    setFees: (state: IFeesSlice, action: PayloadAction<IFeesSlice>) => {
      return action.payload
    }
  }
})

export const { setFees } = feesSlice.actions

export default feesSlice.reducer
