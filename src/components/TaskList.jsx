import Task from './Task'; 
const TaskList = ({ tasks, markAsCompleted, deleteTask }) => {
  return (
    <div className="task-container">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          markAsCompleted={markAsCompleted}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
