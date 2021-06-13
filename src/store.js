import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './reducers/handleTask'

export default configureStore({
  reducer: {
    tasksReducer
  },
})