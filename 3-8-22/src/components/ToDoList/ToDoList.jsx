import "./index.css";

const ToDoList = ({ todo, children }) => {
  const { task, id } = todo;
  console.log("todo");
  return (
    <div className="todo">
      {task}
      {children}
    </div>
  );
};
export default ToDoList;
