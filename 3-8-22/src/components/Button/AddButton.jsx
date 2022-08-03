import "./index.css";

const AddButton = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="add-btn">
      {children}
    </button>
  );
};
export default AddButton;
