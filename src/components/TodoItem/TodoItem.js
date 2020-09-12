import React from "react";
import "./TodoItem.css";

const TodoItem = ({ todo, editTodo, removeTodo }) => {
  return (
    <div key={todo.id} className="todo">
      <p>
        {todo.text}
        <br />
        <small>{todo.time}</small>
      </p>
      <div>
        <i
          onClick={() => editTodo(todo.id)}
          className="fa fa-edit"
          aria-hidden="true"
        ></i>

        <i
          onClick={() => removeTodo(todo.id)}
          className="fa fa-trash"
          aria-hidden="true"
        ></i>
      </div>
    </div>
  );
};

export default TodoItem;
