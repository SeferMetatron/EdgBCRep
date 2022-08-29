import "./App.css";
import { useState } from "react";
import ToDoList from "./TodoList/TodoList";

function App() {
  const [list, setList] = useState([]);
  return (
    <div>
      <h1>To Do</h1>
      <ToDoList list={list} setList={setList} />
    </div>
  );
}

export default App;
