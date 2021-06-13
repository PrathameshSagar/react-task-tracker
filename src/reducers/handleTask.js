import { createSlice } from '@reduxjs/toolkit'

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [
        {
          id: 1,
          text: "Doctors Appointment",
          day: "Feb 5th at 2:30pm",
          reminder: true
        },
        {
          id: 2,
          text: "Meeting at School",
          day: "Feb 6th at 1:30pm",
          reminder: true
        }
      ]
  },
  reducers: {
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
       
    addTask: (state, action) => {
        // console.log(action.payload);
        state.tasks.push(action.payload)
      },
    deleteTask: (state, action) => {
        // console.log(action.payload);
        state.tasks.filter((task) =>   task.id !== action.payload )
    },
    

  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,addTask,deleteTask } = tasksSlice.actions

export default tasksSlice.reducer