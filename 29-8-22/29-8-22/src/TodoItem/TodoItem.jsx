import "./index.css";

const TodoItem = ({ todo }) => {
  return (
    <div className="aitem">
      <li>{todo.text}</li>
    </div>
  );
};

export default TodoItem;
