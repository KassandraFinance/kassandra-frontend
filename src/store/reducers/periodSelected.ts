import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

export const periodSelectedSlice = createSlice({
  name: 'periodSelected',
  initialState,

  reducers: {
    setPeriodSelected: (state: any, action: any) => {
      return action.payload
    }
  }
})

export const { setPeriodSelected } = periodSelectedSlice.actions

export default periodSelectedSlice.reducer
