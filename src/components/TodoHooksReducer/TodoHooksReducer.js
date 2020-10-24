import React, { useEffect, useReducer, createContext, useContext } from "react";
import TodoForm from "../TodoHooksReducer/TodoForm";
import TodoList from "../TodoHooksReducer/TodoList";

const TodoContext = createContext();
const useTodo = () => useContext(TodoContext);

const TodoHooksReducer = () => {
  const todoReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return [...state, action.payload];
      case "REMOVE_TODO":
        return state.filter((todo) => todo.id !== action.payload);
      case "POPULATE_TODO":
        return action.payload;
      default:
        return state;
    }
  };

  const [todos, dispatch] = useReducer(todoReducer, []);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("Todo"));
    if (todos) {
      dispatch({ type: "POPULATE_TODO", payload: todos });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Todo", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <div className="app">
        <div className="container">
          <h2 className="section-title">useReducer Hook</h2>
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </TodoContext.Provider>
  );
};

export { useTodo, TodoHooksReducer };
