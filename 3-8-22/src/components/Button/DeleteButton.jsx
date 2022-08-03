import "./index.css";

const DeleteButton = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="delete-btn">
      {children}
    </button>
  );
};
export default DeleteButton;
