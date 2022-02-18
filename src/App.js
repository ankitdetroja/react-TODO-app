import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

let globalID = 0;

function App() {
  const [task, setTask] = useState(" ");
  const [todos, setTodos] = useState([]);

  const createTodo = () => {
    setTodos((oldTodos) => {
      setTask("");
      return [...oldTodos, { todo: task, id: globalID++ }];
    });
  };
  const checkForEnterKey = (e) => {
    if (e.keyCode === 13) {
      createTodo();
    }
  };
  const deleteItem = (itemID) => {
    setTodos((oldTodos) => oldTodos.filter((item) => item.id !== itemID));
  };
  return (
    <div>
      <h2>Best TODO App Ever</h2>
      <input
        onKeyDown={checkForEnterKey}
        type="text"
        value={task}
        onChange={(event) => setTask(event.target.value)}
        placeholder="Task"
      ></input>
      <button onClick={createTodo}>Create Todo</button>
      <ul>
        {todos.map((item, index) => {
          return (
            <div key={item.id}>
              <li>{item.todo}</li>
              <button
                onClick={() => {
                  deleteItem(item.id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
