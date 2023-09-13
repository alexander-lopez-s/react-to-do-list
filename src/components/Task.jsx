import "../App.css"
import { TbTrashXFilled } from "react-icons/tb";

const Task = ({ task, onDelete }) => {
  return (
    <div className="task">
      <p>{task}</p>
      <button onClick={onDelete}><TbTrashXFilled/></button>
    </div>
  );
};

export default Task;
