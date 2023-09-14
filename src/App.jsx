import { SiReaddotcv } from "react-icons/si";
import Form from "../src/components/Form";
import TaskList from "../src/components/TaskList";
import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Go to the gym', completed: false },
    { id: 2, text: 'Walk the dog', completed: false },
    { id: 3, text: 'Go to the beach', completed: false },
  ]);

  const createTask = (task) => {
    setTasks([...tasks, task]); 
  };

  const markAsCompleted = (id) => {
    const updatedTasks = tasks.map(task => {
      if(task.id === id){

        return {...task, completed : !task.completed }
      } else {
        return task;
      }
    });

    setTasks(updatedTasks)
      
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  
  };

  return (
    <div className="App">
      <h1 className="title">
        <SiReaddotcv /> My tasks
      </h1>
      <Form createTask={createTask} />
      <TaskList tasks={tasks} markAsCompleted={markAsCompleted} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
