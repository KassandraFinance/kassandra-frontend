import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IDaoInfo {
  daoInfo: [
    {
      value: string,
      title: 'TVL'
    },
    {
      value: string,
      title: 'volume'
    },
    {
      value: string,
      title: 'Swap fees'
    },
    {
      value: string,
      title: 'withdraw fees'
    }
  ];
}

const initialState: IDaoInfo = {
  daoInfo: [
    {
      value: '0',
      title: 'TVL'
    },
    {
      value: '0',
      title: 'volume'
    },
    {
      value: '0',
      title: 'Swap fees'
    },
    {
      value: '0',
      title: 'withdraw fees'
    }
  ]
}

export const daoInfoSlice = createSlice({
  name: 'daoInfo',
  initialState,
  reducers: {
    setDaoInfo: (state, action: PayloadAction<IDaoInfo>) => {
      state.daoInfo = action.payload.daoInfo
    }
  }
})

export const { setDaoInfo } = daoInfoSlice.actions

export default daoInfoSlice.reducer
