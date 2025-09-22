import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { TodoInitialState, TodoType } from '../types/Types'


const initialState : TodoInitialState = {
    todos: [] as TodoType[],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    createTodo: (state: TodoInitialState, action: PayloadAction<TodoType>) => {
      state.todos.push(action.payload)
    },
    deleteTodo: (state: TodoInitialState, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },
    toggleTodo: (state: TodoInitialState, action: PayloadAction<number>) => {
      const todo = state.todos.find(todo => todo.id === action.payload)
      if (todo) {
        todo.isCompleted = !todo.isCompleted
      }
    },
    updateTodo: (state: TodoInitialState, action: PayloadAction<{ id: number; text: string }>) => {
      const todo = state.todos.find(todo => todo.id === action.payload.id)
      if (todo) {
        todo.text = action.payload.text
      }
    }
  },
})

export const { createTodo, deleteTodo, toggleTodo, updateTodo } = todoSlice.actions
export default todoSlice.reducer