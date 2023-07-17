import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IFilterState {
  tags: string[]
  coins: string[]
  readingDifficulties: string[]
}

export const initialArticlesFilter: IFilterState = {
  tags: [],
  coins: [],
  readingDifficulties: []
}

export type FilterType = 'coins' | 'tags' | 'readingDifficulties'

type RemoveFilterActionPayload = {
  type: FilterType
  value: string | boolean
}

const articlesFilterSlice = createSlice({
  name: 'articlesFilter',
  initialState: initialArticlesFilter,
  reducers: {
    updateFilters: (state, action: PayloadAction<IFilterState>) => {
      return action.payload
    },
    removeFilter: (state, action: PayloadAction<RemoveFilterActionPayload>) => {
      const type = action.payload.type

      state[type] = state[type].filter(
        filter => filter !== action.payload.value
      )
    },
    resetFilters: () => {
      return initialArticlesFilter
    }
  }
})

export const { updateFilters, removeFilter, resetFilters } =
  articlesFilterSlice.actions

export default articlesFilterSlice.reducer
