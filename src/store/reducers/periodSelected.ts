import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = ''

export const periodSelectedSlice = createSlice({
  name: 'periodSelected',
  initialState,
  reducers: {
    setPeriodSelected: (state: string, action: PayloadAction<string>) => {
      return action.payload
    }
  }
})

export const { setPeriodSelected } = periodSelectedSlice.actions

export default periodSelectedSlice.reducer
