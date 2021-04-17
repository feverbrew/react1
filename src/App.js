import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appt',
      day: 'May 6th',
      reminder: true,
    },
    {
      id: 2,
      text: 'Hang out with friends',
      day: 'April 17th',
      reminder: false,
    },
  ])

  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
    console.log('delete', id)
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} 
      onDelete={deleteTask} /> : 'No Tasks Left'}
    </div>
  );
}

export default App;
