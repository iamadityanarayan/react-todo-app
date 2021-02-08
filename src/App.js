import React, { useState, useEffect } from "react";
import "./App.css";

// Importing Components...
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  // Here I can write react based code...

  // States Stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // USE EFFECT :- RUN ONCE when app starts
  useEffect(() => {
    getToLocalTodos();
  }, []);

  // USE EFFECT
  useEffect(() => {
    filterHandlder();
    saveToLocalTodos();
  }, [todos, status]);

  // Functions
  const filterHandlder = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  };

  // Save To Local Storage
  const saveToLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  // Get from Local Storage
  const getToLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localTodos = JSON.parse(localStorage.getItem('todos'));
      setTodos(localTodos);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Aditya's Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
}

export default App;
