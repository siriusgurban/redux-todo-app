// @ts-nocheck

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface LoadSlice {
  load: booleans
}

const initialState: LoadState = {
  load: false,
}

export const loadSlice = createSlice({
  name: 'load',
  initialState,
  reducers: {
    loadTodo: (state, action) => {
      state.load = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { loadTodo } = loadSlice.actions

export default loadSlice.reducer
