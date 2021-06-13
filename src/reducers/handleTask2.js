



const handle = (state = [
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
    },
  ],action)=>{
      switch (action.type) {
        case 'DELETE':
            // console.log(action.payload);
            return state.filter((task) =>   task.id !== action.payload ) ;

        case 'ADD':
            // console.log(action.payload);
            return state=state.concat(action.payload) ;

        default:
            return state
      }
  }

  export default handle;

// const handle = (state = initialState,action)=>{
//       switch (action.type) {
//        case 'DELETE':
//     return state.filter((task) =>   task.id !== action.payload )
//       }
//   }

//   export default handle;
