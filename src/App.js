import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  
  const [showAdd, setShowAdd] = useState(false)
  
  const [tasks, setTasks] = useState([
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
  ])


   // Add Task
   const addTask = async (task) => {
  //   const res = await fetch('http://localhost:5000/tasks', {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //     body: JSON.stringify(task),
  //   })

  //   const data = await res.json()

  //   setTasks([...tasks, data])
    // console.log(task);
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }
  
  
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => { return task.id !== id }))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => { return task.id === id ? { ...task, reminder: !task.reminder } : task }))
  }

  const addToggle = () => {
    setShowAdd(!showAdd)
  }
  
  return (
    <div className="container">
      <Header addToggle={addToggle} value={showAdd} />
      {showAdd && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'no tasks  '}
    </div>
  );
}

export default App;
