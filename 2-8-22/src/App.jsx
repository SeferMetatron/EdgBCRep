import "./App.css";
import { useState, useReducer } from "react";
import ToDoList from "./components/Todolist";
// import Input from "./components/Input/Input";

function App() {
  const [list, setList] = useState([
    {
      id: 1,
      text: "Mumbo",
    },
    {
      id: 2,
      text: "Jumbo",
    },
  ]);

  return (
    <div className="App">
      <h1>Todolist</h1>
      <ToDoList list={list} setList={setList} />
    </div>
  );
}

export default App;
