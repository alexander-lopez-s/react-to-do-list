import TaskList from "./components/TaskList";
import { SiReaddotcv } from "react-icons/si";

function App() {
  return (
    <div className="App">
      <h1 className="title"><SiReaddotcv/> My tasks </h1>
      <TaskList />
    </div>
  );
}

export default App;
