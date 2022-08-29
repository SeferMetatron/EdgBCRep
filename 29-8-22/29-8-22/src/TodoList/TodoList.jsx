import "./index.css";
import { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import Input from "../Input/Input";
import Button from "../Button/Button";

const TodoList = ({ list, setList }) => {
  const [input, setInput] = useState("");

  const onAddClick = () => {
    setList([...list, { id: list.length + 1, text: input }]);
    setInput("");
  };
  const onDeleteClick = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };

  return (
    <div className="leest">
      <Input value={input} onChange={(e) => setInput(e.target.value)} />
      <Button onClick={onAddClick} btnTextContent={"Add"} />
      {list.length ? (
        list.map((todo) => (
          <div>
            <TodoItem todo={todo} key={todo.id} />
            <Button onClick={onDeleteClick} btnTextContent={"X"} />
          </div>
        ))
      ) : (
        <p>Finding something to do...</p>
      )}
    </div>
  );
};

export default TodoList;
