import "./index.css";

const TodoItem = ({ todo }) => {
  return (
    <div className="item">
      <li>{todo.text} </li>
    </div>
  );
};
export default TodoItem;
