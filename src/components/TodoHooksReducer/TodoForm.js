import React, { useState } from "react";
import { useTodo } from "./TodoHooksReducer";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

const TodoForm = () => {
  const [inputValue, setInputValue] = useState("");
  const { dispatch } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === "") {
      return alert("Please enter a todo");
    }

    const todo = {
      text: inputValue,
      time: `Created ${moment().format("MMM DD [']YY [at] HH:mm")}`,
      id: uuidv4(),
    };
    dispatch({
      type: "ADD_TODO",
      payload: todo,
    });

    setInputValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        autoFocus
        type="text"
        placeholder="Add a task here..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
