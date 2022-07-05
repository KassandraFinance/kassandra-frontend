import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type AllPerformancePeriod = {
  [key: string]: string
}

export interface PerformanceValues {
  title: string;
  allPerformancePeriod?: AllPerformancePeriod;
}

const initialState: PerformanceValues = {
  title: ''
}

export const performanceValuesSlice = createSlice({
  name: 'performanceValues',
  initialState,
  reducers: {
    setPerformanceValues: (
      state: any,
      action: PayloadAction<PerformanceValues>
    ) => {
      return { ...state, ...action.payload }
    }
  }
})

export const { setPerformanceValues } = performanceValuesSlice.actions

export default performanceValuesSlice.reducer
