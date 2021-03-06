import React from "react";

const TodoList = ({ todos, removeTodo }) => {
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id} className="todo">
          <p>
            {todo.text}
            <br />
            <small>{todo.time}</small>
          </p>
          <div>
            <i
              onClick={() => removeTodo(todo.id)}
              className="fa fa-trash"
              aria-hidden="true"
            ></i>
          </div>
        </div>
      ))}
    </>
  );
};

export default TodoList;
