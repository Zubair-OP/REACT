import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todoslice.js'

export const store = configureStore({
  reducer: {
    todos: todoReducer
  },
  devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
})