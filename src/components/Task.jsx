import "../App.css";
import { useState } from 'react';
import { TbTrashXFilled } from "react-icons/tb";

const Task = ({ task, onDelete }) => {
  const [completed, setCompleted] = useState(false);

  const toggleCompleted = () => {
    setCompleted(!completed);
  };

   return (
    <div className={`task ${completed ? 'completed' : ''}`} onClick={toggleCompleted}>
      <span>{task}</span>
      <button onClick={onDelete}><TbTrashXFilled/></button>
    </div>
  );
};

export default Task;
