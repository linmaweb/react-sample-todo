import React, { useState, useEffect, createContext, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import TodoForm from "../TodoHooksContext/TodoForm";
import TodoList from "../TodoHooksContext/TodoList";

const TodoContext = createContext();
const useTodo = () => useContext(TodoContext);

const TodoHooksContext = () => {
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
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        inputValue,
        setInputValue,
        addTodo,
        removeTodo,
      }}
    >
      <div className="app">
        <div className="container">
          <h2 className="section-title">Hooks and Contexts</h2>
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </TodoContext.Provider>
  );
};

export { useTodo, TodoHooksContext };
