import { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import uuid from 'react-uuid';

const Form = ({ createTask }) => {
  const [inputValue, setInputValue] = useState("");

  const onChangeInputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    createTask({
        id: uuid(),
        text: inputValue,
        completed: false
        })
  };
  

  return (
    <div className="form">
      <input
        type="text"
        placeholder="Enter a task"
        onChange={(e) => onChangeInputHandler(e)}
        value={inputValue}
      ></input>
      <button onClick={handleClick}>Add task <IoMdAddCircleOutline/></button>
    </div>
  );
};

export default Form;
