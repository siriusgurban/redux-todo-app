// @ts-nocheck

import { createSlice } from '@reduxjs/toolkit'

export interface TodoState {
  todo: number
}

const initialState: TodoState = {
  todo: [],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    loadTodo: (state, action) => {
      state.todo = [action.payload]
    },
    fillTodo: (state, action) => {
      state.todo = [...action.payload]
    },
    addTodo: (state, action) => {
      state.todo = [action.payload, ...state.todo]
    },
    rmvTodo: (state, action) => {
      const newData = state.todo.filter((item) => item.id != action.payload)
      state.todo = newData
    },

    completedTodo: (state, action) => {
      const completedIndex = action.payload.index
      const completed = action.payload.completed
      const newData = [...state.todo]

      newData[completedIndex].completed = completed

      state.todo = newData
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  loadTodo,
  fillTodo,
  addTodo,
  increment,
  decrement,
  incrementByAmount,
} = todoSlice.actions

export default todoSlice.reducer
