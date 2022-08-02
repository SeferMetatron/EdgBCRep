import "./index.css";
import TodoItem from "../Todoitem/Todoitem";
import { useState, useReducer } from "react";
// import Button from "../Button/Button";

const ToDoList = ({ list, setList }) => {
  const [todoInput, setTodoInput] = useState("");

  const onHandleClick = () => {
    setList([...list, { id: list.length + 1, text: todoInput }]);
    setTodoInput("");
  };

  return (
    <div className="TodoList">
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        placeholder={"Add something to do..."}
      />
      <button onClick={onHandleClick}>Aggiungi</button>
      {list.length ? (
        list.map((todo) => <TodoItem todo={todo} key={todo.id} />)
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
};
export default ToDoList;
