import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = ''

export const userWalletAddressSlice = createSlice({
  name: 'userWalletAddress',
  initialState,
  reducers: {
    setUserWalletAddress: (state: string, action: PayloadAction<string>) => {
      return action.payload
    }
  }
})

export const { setUserWalletAddress } = userWalletAddressSlice.actions

export default userWalletAddressSlice.reducer
