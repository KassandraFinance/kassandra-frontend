import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IFilterState {
  tags: string[]
  coins: string[]
  isPRO: boolean
  readingDifficulties: string[]
}

export const initialArticlesFilter: IFilterState = {
  tags: [],
  coins: [],
  isPRO: false,
  readingDifficulties: []
}

type BooleanKeys<T> = {
  [K in keyof T]: T[K] extends boolean ? K : never
}[keyof T]

export type FilterType = 'coins' | 'tags' | 'readingDifficulties' | 'isPRO'

type RemoveFilterActionPayload = {
  type: FilterType
  value: string | boolean
}

const articlesFilterSlice = createSlice({
  name: 'articlesFilter',
  initialState: initialArticlesFilter,
  reducers: {
    changeIsPro: (state, action: PayloadAction<boolean>) => {
      state.isPRO = action.payload
    },
    updateFilters: (state, action: PayloadAction<IFilterState>) => {
      return action.payload
    },
    removeFilter: (state, action: PayloadAction<RemoveFilterActionPayload>) => {
      if (typeof action.payload.value === 'boolean') {
        state[action.payload.type as BooleanKeys<IFilterState>] = false
        return
      }

      const type = action.payload.type as Exclude<
        FilterType,
        BooleanKeys<IFilterState>
      >

      state[type] = state[type].filter(
        filter => filter !== action.payload.value
      )
    },
    resetFilters: () => {
      return initialArticlesFilter
    }
  }
})

export const { updateFilters, removeFilter, changeIsPro, resetFilters } =
  articlesFilterSlice.actions

export default articlesFilterSlice.reducer
