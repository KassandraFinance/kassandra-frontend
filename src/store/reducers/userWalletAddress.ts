import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

export const userWalletAddressSlice = createSlice({
  name: 'userWalletAddress',
  initialState,
  reducers: {
    setUserWalletAddress: (state: any, action: any) => {
      return action.payload
    }
  }
})

export const { setUserWalletAddress } = userWalletAddressSlice.actions

export default userWalletAddressSlice.reducer
