import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type AllPerformancePeriod = {
  [key: string]: string
}

export interface IPerformanceValues {
  title: string;
  allPerformancePeriod?: AllPerformancePeriod;
}

const initialState: IPerformanceValues = {
  title: ''
}

export const performanceValuesSlice = createSlice({
  name: 'performanceValues',
  initialState,
  reducers: {
    setPerformanceValues: (
      state: IPerformanceValues,
      action: PayloadAction<IPerformanceValues>
    ) => {
      return { ...state, ...action.payload }
    }
  }
})

export const { setPerformanceValues } = performanceValuesSlice.actions

export default performanceValuesSlice.reducer
