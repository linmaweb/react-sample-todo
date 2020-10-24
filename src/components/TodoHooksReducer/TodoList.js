import React from "react";
import { useTodo } from "./TodoHooksReducer";

const TodoList = () => {
  const { todos, dispatch } = useTodo();
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
              onClick={() => {
                dispatch({
                  type: "REMOVE_TODO",
                  payload: todo.id,
                });
              }}
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
