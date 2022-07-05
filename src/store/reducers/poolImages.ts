import { createSlice, PayloadAction } from '@reduxjs/toolkit'
export interface ITokenImages {
  [key: string]: string;
}

const initialState: ITokenImages = {}

export const poolImagesSlice = createSlice({
  name: 'poolImages',
  initialState,
  reducers: {
    setPoolImages: (
      state: ITokenImages,
      action: PayloadAction<ITokenImages>
    ) => {
      return action.payload
    }
  }
})

export const { setPoolImages } = poolImagesSlice.actions

export default poolImagesSlice.reducer
