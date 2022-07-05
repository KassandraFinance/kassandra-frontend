import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

export const chartSelectedSlice = createSlice({
  name: 'chartSelected',
  initialState,
  reducers: {
    setChartSelected: (state: any, action: any) => action.payload
  }
})

export const { setChartSelected } = chartSelectedSlice.actions

export default chartSelectedSlice.reducer
