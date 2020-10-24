import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import TodoForm from "../TodoHooksBasic/TodoForm";
import TodoList from "../TodoHooksBasic/TodoList";

const TodoHooksBasic = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      return;
    }
    setTodos([
      ...todos,
      {
        text: inputValue,
        time: `Created ${moment().format("MMM DD [']YY [at] HH:mm")}`,
        id: uuidv4(),
      },
    ]);
    setInputValue("");
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("Todo"));
    if (todos) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Todo", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="app">
      <div className="container">
        <h2 className="section-title">Basic Hooks</h2>
        <TodoForm
          addTodo={addTodo}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <TodoList todos={todos} removeTodo={removeTodo} />
      </div>
    </div>
  );
};

export default TodoHooksBasic;
