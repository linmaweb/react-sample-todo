import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { timeFormat } from "../../config";
import Title from "../Title/Title";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import Popup from "../Popup/Popup";
import "./App.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [todoEdited, setTodoEdited] = useState("");
  const [todoUpdated, setTodoUpdated] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const currentTodo = useRef("");
  const onLoading = useRef(true);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const addTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      return;
    }
    setTodos([
      {
        text: inputValue,
        time: `Created ${timeFormat}`,
        id: uuidv4(),
      },
      ...todos,
    ]);
    setInputValue("");
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodoEdited(todos.filter((todo) => todo.id === id));
    openModal();
  };

  const updateTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      return;
    }
    setTodos([
      {
        text: inputValue,
        time: `Updated ${timeFormat}`,
        id: currentTodo.current.id,
      },
      ...todos.filter((todo) => todo.id !== currentTodo.current.id),
    ]);
    setTodoUpdated(true);
    setInputValue("");
    closeModal();
    setTimeout(() => {
      setTodoUpdated(false);
    }, 2000);
  };

  useEffect(() => {
    if (onLoading.current) {
      onLoading.current = false;
    } else {
      localStorage.setItem("Todo", JSON.stringify([...todos]));
    }
  }, [todos]);

  useEffect(() => {
    const newTodos = localStorage.getItem("Todo");
    if (newTodos !== null) {
      setTodos(JSON.parse([...todos, newTodos]));
    }
  }, []);

  useEffect(() => {
    if (todoEdited !== "") {
      currentTodo.current = todoEdited[0];
    }
    return () => {
      setTodoEdited("");
    };
  }, [editTodo]);

  return (
    <>
      <Title type="Todo" />
      <div className="App">
        <div className="container">
          <TodoForm
            addTodo={addTodo}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
          <TodoList todos={todos} editTodo={editTodo} removeTodo={removeTodo} />
          <Popup
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            currentTodo={currentTodo}
            updateTodo={updateTodo}
            setInputValue={setInputValue}
          />
          {todoUpdated && <em className="success">Updated successfully!</em>}
        </div>
      </div>
    </>
  );
};

export default App;
