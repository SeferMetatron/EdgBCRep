import "./index.css";

const AddButton = ({ onClick, children, disabled }) => {
  return (
    <button onClick={onClick} className="add-btn">
      {children}
    </button>
  );
};
export default AddButton;
