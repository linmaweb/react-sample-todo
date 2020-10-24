import React from "react";

const TodoForm = ({ addTodo, inputValue, setInputValue }) => {
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
