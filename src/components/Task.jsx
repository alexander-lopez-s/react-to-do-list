import { MdOutlineDoneOutline } from 'react-icons/md';
import { RiDeleteBin6Fill } from 'react-icons/ri';


const Task = ({ task, markAsCompleted, deleteTask }) => {
  return (
    <div className="task">
      <span className={`task-text ${task.completed ? 'completed' : 'no'}`}>
        {task.text} 
      </span>
      <div className="task-buttons">
        <button className={'complete-btn'} onClick={() => markAsCompleted(task.id)}>
          <MdOutlineDoneOutline />
        </button>
        <button className={'delete-btn'}onClick={() => deleteTask(task.id)}>
          <RiDeleteBin6Fill />
        </button>
      </div>
    </div>
  );
};

export default Task;
