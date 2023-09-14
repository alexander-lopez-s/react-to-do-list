import React, { useState } from "react"; // Import React
import { IoMdAddCircleOutline } from "react-icons/io";
import uuid from 'react-uuid';

const Form = ({ createTask }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  const onChangeInputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    if (inputValue.trim() === "") {
      setError(true);
    } else {
      createTask({
        id: uuid(),
        text: inputValue,
        completed: false
      });
      setInputValue(""); 
      setError(false);
    }
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
      <div className="error">
        {error && <p>Error: Please enter a task</p>}
      </div>
    </div>
  );
};

export default Form;
