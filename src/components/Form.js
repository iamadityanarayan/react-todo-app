import React from "react";

// Simplified Props ({ setInputTextProps })
const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
  // Here I can write javascript code and function

  const inputTextHandler = (event) => {
    console.log(event.target.value);
    setInputText(event.target.value);
  };

  const submitTodoHandler = (event) => {
    event.preventDefault(); //stop refresh page
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 100 },
    ]);
    setInputText(""); // set State back to 0 || Updating the State to initial
  };

  const statusHandler = (event) => {
    console.log("Status Handler");
    // console.log(event.target.value);
    setStatus(event.target.value);
    // todos.filter((items) => event.target.value === items.completed);
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        className="todo-input"
        type="text"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">UnCompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
