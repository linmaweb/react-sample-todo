import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

const TodoList = ({ todos, editTodo, removeTodo }) => {
  return (
    <>
      {todos.map((todo) => (
        <TodoItem todo={todo} editTodo={editTodo} removeTodo={removeTodo} />
      ))}
    </>
  );
};

export default TodoList;
