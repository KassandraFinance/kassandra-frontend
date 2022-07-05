import { createSlice } from '@reduxjs/toolkit'

const initialState: any = {}

export const poolImagesSlice = createSlice({
  name: 'poolImages',
  initialState,
  reducers: {
    setPoolImages: (state: any, action: any) => {
      return action.payload
    }
  }
})

export const { setPoolImages } = poolImagesSlice.actions

export default poolImagesSlice.reducer
