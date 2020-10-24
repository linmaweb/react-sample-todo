import React from "react";
import { useTodo } from "./TodoHooksContext";

const TodoForm = () => {
  const { addTodo, inputValue, setInputValue } = useTodo();
  return (
    <form onSubmit={addTodo}>
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
