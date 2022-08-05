import "./index.css";
const Button = ({ onHandleClick }) => {
  return (
    <button onClick={onHandleClick} className="add-btn">
      Add Advice
    </button>
  );
};
export default Button;
