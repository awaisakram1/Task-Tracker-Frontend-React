import {useState} from 'react'    

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const[showAddTask,setShowAddTask]=useState(false)
  const[tasks,setTasks]=useState([
    {
        id:1,
        text:"doctors appointment",
        day:"mon",
        reminder:true,
    },
    {
        id:2,
        text:"car appointment",
        day:"tue",
        reminder:true,
    },
    {
        id:3,
        text:"idk appointment",
        day:"wed",
        reminder:false,
    }
    ])
    // delete task
    const deleteTask=(id) =>{
      setTasks(tasks.filter((task)=>task.id!==id));
    }

    // add task
    const addTask=(task)=>{
      const id=Math.floor(Math.random()*10000)+1
      const newTask={id, ... task}
      setTasks([...tasks,newTask])
        }

    // ToggleReminder
    const toggleReminder=(id)=>{
      console.log(id)
    }
  return (
    <div className='container'>
      <Header onAdd={() =>setShowAddTask
      (!showAddTask)} 
      showAdd={showAddTask}/>
      {showAddTask &&<AddTask onAdd={addTask} />}
      {tasks.length>0?(<Tasks tasks={tasks} 
      onDelete={deleteTask}
      onToggle={toggleReminder}/>) 
      :("No Tasks to show") }
    </div>
  )
}


export default App
