import { useState } from 'react';
import { CgPlayListAdd } from "react-icons/cg";
import Task from './Task';
import "../App.css"

const TaskList = () => {
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState([
    'Go to the gym',
    'Take yoga lessons',
    'Walk in the nature'
  ]);

  const handleInputChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleAddTask = () => {
    setTasks([...tasks, taskText]);
    // Clear the input field
    setTaskText('');
  };
    // 
  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };


  return (
    <>    
    <div className="form">
      <input
        type='text'
        value={taskText}
        onChange={handleInputChange}
        placeholder="Enter a task"
      />
      <button onClick={handleAddTask}><CgPlayListAdd/></button>
      </div>
      {/* Display the list of tasks */}
      <div className='tasks-list'>
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            onDelete={() => handleDeleteTask(index)}
          />
        ))}
    </div>
    </>

  );
};

export default TaskList;
