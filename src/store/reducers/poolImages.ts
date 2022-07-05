import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: TokenImages = {}

export interface TokenImages {
  [key: string]: string;
}

export const poolImagesSlice = createSlice({
  name: 'poolImages',
  initialState,
  reducers: {
    setPoolImages: (state: any, action: PayloadAction<TokenImages>) => {
      return action.payload
    }
  }
})

export const { setPoolImages } = poolImagesSlice.actions

export default poolImagesSlice.reducer
