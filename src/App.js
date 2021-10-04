import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Dentista',
      day: '24 de Agosto 17:00',
      reminder: true,
    },
    {
      id: 2,
      text: 'Reunião',
      day: '30 de Agosto 18:30',
      reminder: true,
    },
    {
      id: 3,
      text: 'Fazer Compras',
      day: '24 de Agosto 21:00',
      reminder: false,
    }
  ])

  // Add Task
  const addTask = (task) => {
    console.log('Create Task')
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    console.log('Delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    console.log('Toggle Reminder', id)
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('Nenhuma tarefa')}
    </div>
  );
}

export default App;
